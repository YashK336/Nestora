const StatCard = ({
  title,
  value,
  icon,
  color = "blue",
}) => {
  const Icon = icon;

  const colors = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/40",
      text: "text-blue-600 dark:text-blue-400",
      ring: "ring-blue-200 dark:ring-blue-800",
    },
    green: {
      bg: "bg-emerald-100 dark:bg-emerald-900/40",
      text: "text-emerald-600 dark:text-emerald-400",
      ring: "ring-emerald-200 dark:ring-emerald-800",
    },
    yellow: {
      bg: "bg-amber-100 dark:bg-amber-900/40",
      text: "text-amber-600 dark:text-amber-400",
      ring: "ring-amber-200 dark:ring-amber-800",
    },
    red: {
      bg: "bg-rose-100 dark:bg-rose-900/40",
      text: "text-rose-600 dark:text-rose-400",
      ring: "ring-rose-200 dark:ring-rose-800",
    },
  };

  const theme = colors[color];

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/20
        dark:hover:shadow-black/30
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {value}
          </h2>

          <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">
            Live Statistics
          </p>
        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${theme.bg}
            ring-4
            ${theme.ring}
            transition-transform
            duration-300
            group-hover:rotate-6
          `}
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