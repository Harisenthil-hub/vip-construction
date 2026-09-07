const ProjectStats = () => {
  const stats = [
    {
      number: "100+",
      title: "Projects Completed",
    },
    {
      number: "7+",
      title: "Years of Experience",
    },
    {
      number: "100%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <div className="mt-5 sm:mt-12 flex justify-between items-center gap-2 sm:gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="group flex-1 text-center transition-transform duration-300 hover:-translate-y-1"
        >
          <h2
            className="
              text-xl
              sm:text-3xl
              md:text-5xl
              font-extrabold
              text-secondary
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            {item.number}
          </h2>

          <p
            className="
              mt-1.5
              sm:mt-3
              text-[9px]
              sm:text-xs
              md:text-base
              font-medium
              uppercase
              tracking-wider
              text-white/75
            "
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;