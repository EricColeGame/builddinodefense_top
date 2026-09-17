export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build a Dino Defense Wiki",
  shortName: "Build a Dino Defense",
  logoText: "BDD",
  tagline: "Complete Guides, Codes, Turrets & Defense Strategies",
  description: "Your ultimate guide to Build a Dino Defense on Roblox! Explore active codes, base building, traps, turrets, dinosaur waves, and egg defense strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://builddinodefense.top",
  supportEmail: "support@builddinodefense.top",
  gameUrl: "https://www.roblox.com/games/138949299666923/Build-a-Dino-Defense",
  heroVideoId: "Iosr4aVui5E", // Roblox Build a Dino Defense gameplay showcase video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
