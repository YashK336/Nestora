import {
  TrendingUp,
  TrendingDown,
  Star,
  Landmark,
} from "lucide-react";

const formatPrice = (price) =>
  `₹${Number(price || 0).toLocaleString("en-IN")}`;

const MarketOverview = ({ stats = {} }) => {
  const cards = [
    {
      title: "Highest Price",
      value: formatPrice(stats.highestProperty?.price),
      subtitle: stats.highestProperty?.title || "No data",
      icon: TrendingUp,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/40",
    },
    {
      title: "Lowest Price",
      value: formatPrice(stats.lowestProperty?.price),
      subtitle: stats.lowestProperty?.title || "No data",
      icon: TrendingDown,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/40",
    },
    {
      title: "Featured",
      value: stats.featuredProperties ?? 0,
      subtitle: "Featured Listings",
      icon: Star,
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-100 dark:bg-yellow-900/40",
    },
    {
      title: "Portfolio Value",
      value: formatPrice(stats.portfolioValue),
      subtitle: "Total Property Value",
      icon: Landmark,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/40",
    },
  ];

  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-colors
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Market Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                rounded-2xl
                border
                border-gray-200
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-md

                dark:border-slate-700
                dark:bg-slate-800
                dark:hover:border-slate-600
              "
            >
              <div
                className={`
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  ${card.bg}
                `}
              >
                <Icon
                  className={card.color}
                  size={28}
                />
              </div>

              <p className="text-sm text-gray-500 dark:text-slate-400">
                {card.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </h3>

              <p className="mt-2 truncate text-sm text-gray-500 dark:text-slate-400">
                {card.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketOverview;