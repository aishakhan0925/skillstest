import bgImage from "../assets/images/hero.png";

export default function HeroSection() {
  return (
    <div
      className="w-full h-[200px] md:h-[390px] lg:h-[100vh] bg-no-repeat bg-cover bg-center mt-20 md:mt-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
}
