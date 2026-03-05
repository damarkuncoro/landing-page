import React from 'react';
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest';
import { skinManager } from '../src/renderers/react/utils/SkinManager';
import { registerSkins, unregisterAllSkins } from '../src/renderers/react/utils/registerSkins';

describe('SkinManager', () => {
  beforeAll(() => {
    // Register all skins
    registerSkins();
  });

  describe('Skin Registration', () => {
    it('should register skins for all components', () => {
      const components = skinManager.listComponents();
      expect(components).toEqual(expect.arrayContaining(['Header', 'Navbar', 'MenuToggle', 'Button']));
    });

    it('should list available skins for each component', () => {
      const headerSkins = skinManager.listSkins('Header');
      expect(headerSkins).toEqual(['default', 'tailwind', 'modern']);

      const navbarSkins = skinManager.listSkins('Navbar');
      expect(navbarSkins).toEqual(['default', 'tailwind', 'modern']);
    });

    it('should check skin availability', () => {
      expect(skinManager.hasSkin('Header', 'default')).toBe(true);
      expect(skinManager.hasSkin('Header', 'tailwind')).toBe(true);
      expect(skinManager.hasSkin('Header', 'nonexistent' as any)).toBe(false);
    });
  });

  describe('Skin Resolution', () => {
    it('should return default skin when skin type not specified', () => {
      const headerSkin = skinManager.getSkin('Header');
      expect(headerSkin).toBeDefined();
    });

    it('should return specific skin when requested', () => {
      const headerSkin = skinManager.getSkin('Header', 'tailwind');
      expect(headerSkin).toBeDefined();
    });

    it('should throw error for nonexistent component', () => {
      expect(() => skinManager.getSkin('NonexistentComponent')).toThrowError(
        /Component "NonexistentComponent" not found in skin registry/
      );
    });

    it('should warn and fall back to default for nonexistent skin type', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      const headerSkin = skinManager.getSkin('Header', 'nonexistent' as 'default' | 'tailwind');
      
      expect(headerSkin).toBeDefined();
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Skin type "nonexistent" not available for component "Header"')
      );

      consoleSpy.mockRestore();
    });
  });
});