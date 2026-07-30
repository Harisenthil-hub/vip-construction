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
    <div className="mt-12 flex justify-between items-center gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="group flex-1 text-center transition-transform duration-300 hover:-translate-y-1"
        >
          <h2
            className="
              text-2xl
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
              mt-3
              text-[10px]
              sm:text-xs
              md:text-base
              font-medium
              uppercase
              tracking-widest
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