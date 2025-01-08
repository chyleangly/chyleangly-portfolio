import ProjectCard from "./ProjectCard.jsx";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Darkmode and Lightmode",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://chyleangly.github.io/darkmode-lightmode/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlight</h2>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
