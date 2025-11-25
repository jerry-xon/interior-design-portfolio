import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="bg-zinc-50">
      <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <p className="tracking-widest">CREATING THOUGHTFUL & INSPIRED INTERIOR DESIGN</p>
          <h1 className="py-4 text-xl font-extrabold leading-tight text-gray-800 xl:text-5xl lg:text-4xl">
            Crafting Thoughtful <br />
            Interiors
          </h1>
          <p className="pb-6 text-gray-500 xl:pb-10 mb-6">
            Design has the power to shift how we see and interact with our
            surroundings. Through mindful spatial planning, material
            exploration, and a strong understanding of user needs, I aim to
            reimagine interiors in ways that enhance daily life and spark a
            renewed sense of appreciation for the spaces we inhabit.
          </p>
          {/* <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
            Get Started <TbArrowUpRight className="w-5 h-5 ml-2" />
          </button> */}
        </div>

        <div className="w-1/2">
          <Image
            src="/image/portwork/Pic14.png"
            width={800}
            height={500}
            alt=""
            className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
