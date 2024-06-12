import { LandingHero } from "../components/LandingHero";
import { LandingNavbar } from "../components/LandingNav";

export default function Home() {
  return (
    <div className=" h-full max-w-screen-xl mx-auto" style={{minHeight: '100vh'}}>
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
