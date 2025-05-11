import Headline from "@/custom-components/Headline";
import ProductCard from "@/custom-components/ProductCard";

const ProjectLibrary = () => {
  const projects = [
    {
      imgsrc: "/project.png",
      title: "Campusx: Assignments, Trades, and Rentals — All in One Place!",
      price: "1500",
    },
    {
      imgsrc: "/expert.jpg",
      title: "AI-Powered Chatbot for Customer Support",
      price: "2000",
    },
    {
      imgsrc: "/developer.jpg",
      title: "E-commerce Platform with Advanced Analytics",
      price: "2500",
    },
    {
      imgsrc: "/developer.jpg",
      title: "E-commerce Platform with Advanced Analytics",
      price: "2500",
    },
  ];

  return (
    <section className="bg-black text-white h-full pt-4 lg:pt-10 px-4 pb-10 lg:px-10 min-h-screen">
      <Headline
        text="Enhance your resume with top-notch projects"
        heading="PROJECT LIBRARY"
      />
      <div className="mt-8 lg:mt-6 p-4 lg:p-8 w-full flex flex-row justify-center gap-4">
        {projects.map((project, index) => (
          <ProductCard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            price={project.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectLibrary;
