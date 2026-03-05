import React from "react";

/**
 * Social Links component for footer.
 * Displays social media links with icons.
 */
export interface SocialLink {
  /** Platform name */
  platform: string;
  /** Link URL */
  url: string;
  /** Icon (emoji or SVG) */
  icon?: string;
}

export interface SocialLinksProps {
  /** Array of social links */
  links: SocialLink[];
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Gap between links */
  gap?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className,
  style,
  gap = "1rem",
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap,
        ...style,
      }}
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "inherit",
            textDecoration: "none",
            transition: "background-color 0.2s",
            fontSize: "1.25rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
        >
          {link.icon || getDefaultIcon(link.platform)}
        </a>
      ))}
    </div>
  );
};

// Helper function to get default icon based on platform
function getDefaultIcon(platform: string): string {
  const icons: Record<string, string> = {
    twitter: "𝕏",
    x: "𝕏",
    facebook: "f",
    instagram: "📷",
    linkedin: "in",
    youtube: "▶",
    github: "⬡",
    discord: "💬",
  };
  
  const key = platform.toLowerCase();
  return icons[key] || "🔗";
}

SocialLinks.displayName = "SocialLinks";

export default SocialLinks;