import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 3,
      name: "PROJECT AMI",
      description:
        "AMI is a resting space pavilion inspired by the Ami Khumbor—a sacred pot motif symbolizing life and flowing water, found in the carvings of the Adalaj Stepwell. The design draws from the spiritual and cooling essence of water, translating it into a calming space for pause and reflection.Curved pathways represent flowing movement, guiding visitors through a soft and meditative journey. The circular seating arrangements and layered layout reflect the stepwell’s geometry. Water elements—like shallow reflecting pools—enhance the sensory and visual experience, promoting stillness and tranquility.A semi-open canopy structure allows light and air to pass through, fostering a serene environment while offering shade and comfort. Using a neutral palette of stone textures, white shades, and natural materials, the pavilion harmonizes tradition with minimal modern design. AMI is a space of quiet retreat, echoing the timeless relationship between architecture, water, and rest.",
      image: "/image/portwork/Pic23.png",
    },
    {
      id: 2,
      name: "ARDHACHAKRA",
      description:
        "The Ardhachakra Chair is a harmonious blend of traditional symbolism and contemporary design, crafted with precision in rich teak wood. Drawing inspiration from the Ardhachakra—a semi-circular motif often associated with movement and balance—the chair showcases an elegantly arched backrest that not only references cultural roots but also enhances ergonomic support. The seat is subtly contoured for comfort, appearing to float effortlessly above gracefully tapered legs that lend a sense of lightness and sophistication. Each element of the chair—from the curvature of the backrest to the smooth, polished finish—reflects meticulous craftsmanship and thoughtful proportions. The visual rhythm created by the dynamic interplay of curves and lines positions the chair as both functional seating and a sculptural centerpiece. Ideal for contemporary interiors that appreciate cultural references, the Ardhachakra Chair stands as a testament to refined craftsmanship, comfort, and aesthetic depth.",
      image: "/image/portwork/Pic22.png",
      link: "httpskjfjvndkjvndol",
    },
    {
      id: 1,
      name: "EKAM",
      description:
        "This unique stool/table embodies a contemporary reimagining of traditional Indian seating practices. Inspired by the ancient custom of dining while seated on the floor, it serves as a platform for culinary experiences and a celebration of India's rich cultural tapestry  using the age-old Dhokra metal casting technique, the stool showcases the enduring lgacy of Indian craftsmanship. The L-shaped brass legs, each adorned with intricate Dhokra patterns on one side, symbolize four cardinal directions of India. The other face of each leh proudly displays a distinct folk art form : Phulkari embroidery from Punjab (North), Sohrai art from Jharkhand (East), Warli painting from Maharashtra (South/Southwest), Miniature paintings from Rajasthan (West).",
      image: "/image/portwork/Pic21.png",
      link: "",
    },
    {
      id: 4,
      name: "SITIO",
      description:
        "Sitio is a solo seating unit designed for outdoor café settings, offering privacy, comfort, and functionality. Its curved backrest gently encloses the user, providing ergonomic support and a sense of solitude, A foldable backrest allows the chair to transform between a cocoon-like seat for longer stays and a sleek stool for open configurations, making it adaptable to various café layouts. The integrated side table is perfectly sized for a coffee cup, book, or laptop, eliminating the need for additional furniture and optimizing space. Crafted from durable materials with a modem yet approachable aesthetic, Sitio complements both minimalist and nature-inspired environments. More than just furniture, Sitio is a spatial gesture that elevates the experience of sitting alone, offering a comfortable, personal pause in shared public spaces. Whether for work or relaxation, it creates a unique moment of solitude in a communal setting.",
      image: "/image/portwork/Pic12.png",
      link: "",
    },
  ];
  return (
    <div className="">
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">
          OUR PROJECTS
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-l text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4 ">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
