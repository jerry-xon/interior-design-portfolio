import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
export default function About() {
  return (
    <div>
      <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">
          WHO AM I ?
        </h1>
      </div>
      <div className="container ">
        <div className="py-4 lg:py-14">
          <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">
            CHITRIKA PURI
          </h2>
          <p className="text-2xl font-medium lg:w-1/3">
            I’m a 3rd year Interior and Furniture design student with creative
            mindset. I have a keen eye for aesthetics and functionality, and I
            enjoy experimenting with innovative design concepts. Eager to
            contribute fresh ideas and learn through hands-on industry exposure.
          </p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          <div className="w-full">
         <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/Profile.png"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">
                  CHITRIKA PURI
                </h2>
                <p className="text-sm text-gray-400">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="pb-8 tracking-wide">
              Throughout my academic journey, I have developed a strong
              foundation in spatial planning, material exploration, and
              user-centric design. My approach blends conceptual thinking with
              practical problem-solving, allowing me to create environments and
              objects that are not only visually compelling but also deeply
              functional. I am particularly drawn to exploring the relationship
              between form, texture, and human interaction, and I enjoy pushing
              boundaries through experimental prototypes and detailed
              model-making.
              <br />
              <br />
              In addition to my technical skills, I value collaboration and
              believe that great design emerges from a balance of research,
              intuition, and iterative development. Working on diverse academic
              projects has strengthened my ability to adapt to different design
              languages, communicate ideas effectively, and manage projects from
              initial concept sketches to final presentations.
              <br />
              <br />
              {/* <span className="text-xl font-extrabold tracking-tight">
                The backpiperARCH, we share a belief in the transformational
                power of people united in a common purpose.
              </span> */}
            </p>
            <a
              className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
              href=""
            >
              Read More <TbArrowUpRight className="text-xl" />{" "}
            </a>
          </div>
        </div>
        {/* <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-wider text-center">
              TEAM
            </h1>
          </div>
          <div className="grid gap-20 py-8 lg:grid-cols-3">
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/profile2.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">
                  BUILDING SURVEYS
                </h2>
                <p className="text-sm text-gray-400">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/profile1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">
                  BUILDING SURVEYS
                </h2>
                <p className="text-sm text-gray-400">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/profile3.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold ">
                  BUILDING SURVEYS
                </h2>
                <p className="text-sm text-gray-400">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
