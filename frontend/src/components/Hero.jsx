import heroBg from "../assets/images/hero-bg.jpg";
import Container from "./Common/Container";

const Hero = () => {
  return (
    <section
className="relative h-[430px] sm:h-[500px] lg:h-[560px] overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0 animate-heroZoom bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}

      <Container
className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">

<h1
  className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl xl:text-6xl">
          Find Your Dream Home
        </h1>

        <p
        className=" mt-5 max-w-xl text-lg sm:text-xl lg:text-2xl text-gray-200">
          Buy • Rent • Commercial Properties
        </p>

      </Container>

    </section>
  );
};

export default Hero;