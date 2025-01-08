const aboutItems = [
  {
    label: "School Project",
    number: 5,
  },
  {
    label: "Years of Experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-softSky-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-softSky-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Chyleang, an undergraduate Computer Science
            student at Royal University of Phnom Penh, Cambodia. I transform
            your vision into digital masterpiece that excels in both apperance
            and performance.
          </p>

          <div className="flex flex-wrap gap-3">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-zinc-400 font-semibold md:text3x">
                    +
                  </span>
                </div>
                <p className="text-sm text-softSky-400">{label}</p>
              </div>
            ))}

            <img
              src="images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
