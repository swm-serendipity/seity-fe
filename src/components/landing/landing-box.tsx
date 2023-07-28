import Hero from "./hero";
import LandingHeader from "./landing-header";

export default function LandingBox() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <LandingHeader />
      <Hero />
    </div>
  );
}
