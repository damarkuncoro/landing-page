#!/usr/bin/env node

import { readFileSync } from "fs";
import { resolve, extname } from "path";
import { validateConfig, isValidConfig } from "./core/validators";

/**
 * CLI tool for validating landing page configuration files.
 * Usage: npx landing-page validate <config-file>
 */

interface CLIOptions {
  file: string;
  verbose: boolean;
}

function parseArgs(args: string[]): CLIOptions {
  const options: CLIOptions = {
    file: "",
    verbose: false,
  };

  for (let i = 2; i < args.length; i++) {
    const arg = args[i];
    if (arg === "validate" && i + 1 < args.length) {
      options.file = args[i + 1];
      i++;
    } else if (arg === "--verbose" || arg === "-v") {
      options.verbose = true;
    } else if (!options.file) {
      options.file = arg;
    }
  }

  return options;
}

function loadConfigFile(filePath: string): any {
  const ext = extname(filePath).toLowerCase();
  
  try {
    const content = readFileSync(filePath, "utf-8");
    
    switch (ext) {
      case ".js":
      case ".ts":
        // For JS/TS files, we need to evaluate them
        // This is a simplified approach - in production you'd use a proper loader
        console.warn("Warning: JS/TS config files require manual evaluation");
        return null;
      case ".json":
        return JSON.parse(content);
      default:
        // Try to parse as JSON anyway
        return JSON.parse(content);
    }
  } catch (error) {
    throw new Error(`Failed to load config file: ${(error as Error).message}`);
  }
}

function validateConfigFile(filePath: string, verbose: boolean): boolean {
  console.log(`\n🔍 Validating: ${filePath}\n`);
  
  const config = loadConfigFile(filePath);
  
  if (!config) {
    console.error("❌ Failed to load configuration file");
    return false;
  }

  const errors = validateConfig(config);

  if (errors.length === 0) {
    console.log("✅ Configuration is valid!");
    
    if (verbose) {
      console.log("\n📋 Configuration Summary:");
      console.log(`  - Title: ${config.title || "(not set)"}`);
      console.log(`  - Description: ${config.description || "(not set)"}`);
      console.log(`  - Sections: ${config.sections?.length || 0}`);
      
      if (config.sections) {
        const sectionTypes = config.sections.reduce((acc: Record<string, number>, section: any) => {
          acc[section.type] = (acc[section.type] || 0) + 1;
          return acc;
        }, {});
        
        console.log("  - Section types:");
        Object.entries(sectionTypes).forEach(([type, count]) => {
          console.log(`      ${type}: ${count}`);
        });
      }
    }
    
    return true;
  }

  console.error("❌ Configuration has errors:\n");
  errors.forEach((error, index) => {
    console.error(`  ${index + 1}. ${error}`);
  });
  
  console.error("\n💡 Tip: Run with --verbose for more details");
  
  return false;
}

function printHelp(): void {
  console.log(`
Landing Page Config Validator
===============================

Usage:
  landing-page validate <config-file> [options]
  landing-page --help

Options:
  -v, --verbose    Show detailed validation output
  -h, --help       Show this help message

Examples:
  landing-page validate config.json
  landing-page validate config.json --verbose
  npx landing-page validate ./src/config/landingPage.ts
  `);
}

// Main execution
function main(): void {
  const args = process.argv;
  
  if (args.includes("--help") || args.includes("-h")) {
    printHelp();
    process.exit(0);
  }

  const options = parseArgs(args);
  
  if (!options.file) {
    console.error("Error: Please provide a config file to validate");
    console.log("Usage: landing-page validate <config-file>");
    process.exit(1);
  }

  const filePath = resolve(process.cwd(), options.file);
  const isValid = validateConfigFile(filePath, options.verbose);
  
  process.exit(isValid ? 0 : 1);
}

main();