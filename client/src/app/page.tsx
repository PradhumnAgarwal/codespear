import { LandingNavbar } from "@/components/LandingNav";
import { LandingHero } from "@/components/landingHero";

export default function Home() {
  return (
    <div className=" h-full max-w-screen-xl mx-auto" style={{minHeight: '100vh'}}>
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
