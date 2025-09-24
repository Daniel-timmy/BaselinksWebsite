import React from "react";
import {
  PROJECT1,
  PROJECT2,
  PROJECT3,
  PROJECT4,
  PROJECT5,
  PROJECT6,
} from "../../constants";

const Projects = () => {
  const projects = [
    {
      image: PROJECT1,
      title: "Psaltry International",
      description: "Revolutionalizing Nigeria's Agro Sector",
      tags: ["Brand Identity", "Website Design", "Printing"],
    },
    {
      image: PROJECT2,
      title: "DipoDayo Foundation",
      description: "Revolutionalizing Nigeria's Agro Sector",

      tags: ["Brand Identity", "Printing"],
    },
    {
      image: PROJECT3,
      title: " Jolly Security",
      description: "Revolutionalizing Nigeria’s Agro Sector",
      tags: ["Brand Identity", "Printing"],
    },
    {
      image: PROJECT4,
      title: "Emmanuel Bakery",
      description: "Revolutionalizing Nigeria’s Agro Sector",
      tags: ["Brand Identity"],
    },
    {
      image: PROJECT5,
      title: "Purifoy",
      description: "Revolutionalizing Nigeria’s Agro Sector",
      tags: ["Brand Identity", "Printing"],
    },
    {
      image: PROJECT6,
      title: "W. Y. E. I",
      description: "Revolutionalizing Nigeria’s Agro Sector",
      tags: ["Brand Identity", "Printing"],
    },
  ];
  return (
    <div className="my-20 min-w-screen space-y-14 flex flex-col items-centers justify-center">
      <h1 className="font-trajan text-5xl/15 sm:text-6xl/20 text-black text-center font-bold">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
            className="bg-no-repeat bg-cover bg-center w-full h-86 lg:h-111 space-x-2 lg:w-full rounded-[20px] lg:overflow-hidden p-3 flex flex-col justify-between space-y-10 group"
          >
            <div className="flex space-x-2 lg:opacity-0 lg:group-hover:opacity-100 lg:-translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              {project.tags.map((tag, idx) => (
                <button className="w-fit bg-pill text-xs text-pill-text px-3 py-1 h-6.5 rounded-4xl">
                  {tag}{" "}
                </button>
              ))}
            </div>
            <div className="space-y-3 p-3 w-full bg-project-banner text-left rounded-xl h-21 text-hero-text lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 transition duration-300 ease-in lg:pointer-events-none lg:group-hover:pointer-events-auto">
              <h6 className="font-trajan font-bold text-2xl/7.5">
                {project.title}{" "}
              </h6>
              <p className="text-lg/5">{project.description} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className=" bg-baselinks-teal w-fit px-8 space-x-3 rounded-3xl font-bold text-md py-2.5">
          View All
        </button>
      </div>
    </div>
  );
};

export default Projects;
