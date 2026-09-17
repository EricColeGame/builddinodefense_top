import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering base building, dinosaur defenses, turrets, weapon crates, and essential game knowledge for new and veteran players alike.</p>
      <p>The layout, navigation, article cards, and detail format are designed to help players protect their dinosaur egg and survive dinosaur waves in Build a Dino Defense on Roblox.</p>
    </LegalPage>
  );
}
