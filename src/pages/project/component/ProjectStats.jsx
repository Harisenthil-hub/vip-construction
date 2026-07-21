const ProjectStats = () => {
  const stats = [
    {
      number: "250+",
      title: "Projects Completed",
    },
    {
      number: "15+",
      title: "Years of Experience",
    },
    {
      number: "100%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <div className="mt-12 flex justify-between items-center">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex-1 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">
            {item.number}
          </h2>

          <p className="mt-2 text-[10px] sm:text-xs md:text-base font-medium uppercase tracking-wide text-gray-300">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;