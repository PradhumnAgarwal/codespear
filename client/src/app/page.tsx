// <UserButton />

import { LandingNavbar } from "@/components/LandingNav";
import { LandingHero } from "../components/landingHero";

export default function Home() {
  return (
    <div className=" h-full" style={{minHeight: '100vh'}}>
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
