const StatCard = ({
  title,
  value,
  icon,
  color = "blue",
}) => {
  const Icon = icon;

  const colors = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      ring: "ring-blue-200",
    },
    green: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      ring: "ring-emerald-200",
    },
    yellow: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      ring: "ring-amber-200",
    },
    red: {
      bg: "bg-rose-100",
      text: "text-rose-600",
      ring: "ring-rose-200",
    },
  };

  const theme = colors[color];

  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-emerald-600">
            Live Statistics
          </p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.bg} ring-4 ${theme.ring}
          transition-transform duration-300 group-hover:rotate-6`}
        >
          <Icon
            size={28}
            className={theme.text}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;