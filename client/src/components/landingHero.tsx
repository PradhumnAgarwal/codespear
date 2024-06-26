"use client";

import Typewriter from "typewriter-effect";
import Link from "next/link";

export const LandingHero = () => {
  return (
    <>
      <div className="absolute w-[50%] inset-0 gradient-01 opacity-15" />
      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>The Battle Arena</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <Typewriter
              options={{
                strings: [
                  "Real-time Matches.",
                  "Immersive Experience.",
                  "Multi-language.",
                  "Low-latency Comm.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Challenge friends to head-to-head coding duels.
        </div>
        <div>
          <Link href="/battle">
            <button
              type="button"
              className="text-sm md:text-lg px-6 py-3 rounded-full font-semibold text-center me-2 mb-2  text-white bg-gradient-to-r from-purple-500 to-pink-500 transition-all ease-in-out duration-100 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              Start Competiting Now
            </button>
          </Link>
        </div>

        <div className="gradient-02 z-0" />

        {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required.
        </div> */}
      </div>
    </>
  );
};
