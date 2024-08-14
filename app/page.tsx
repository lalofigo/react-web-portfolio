import Image from "next/image";
import CoverParticles from "../components/cover-particles";
import TransitionPage from "../components/transition-page";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
   <main>
    <TransitionPage />
    <div className="flex h-full bg-no-repeat bg-gradient-cover min-h-[100vh]">
      <CoverParticles />
      <Introduction />
    </div>
   </main>
  );
}
