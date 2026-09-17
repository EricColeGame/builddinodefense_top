import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>{siteConfig.shortName}, Roblox, dinosaur defense concepts, logos, and related media belong to their respective owners (Big Chomp Games and Roblox Corporation).</p>
      <p>This site is a non-official fan wiki implementation for educational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, please contact the site operator at {siteConfig.supportEmail} for review.</p>
    </LegalPage>
  );
}
