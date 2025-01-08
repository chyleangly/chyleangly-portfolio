import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "images/Bootstrap.svg",
    label: "Bootstrap",
    desc: "Framework",
  },
  {
    imgSrc: "images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-softSky-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;