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
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Lowest Price",
      value: formatPrice(stats.lowestProperty?.price),
      subtitle: stats.lowestProperty?.title || "No data",
      icon: TrendingDown,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Featured",
      value: stats.featuredProperties ?? 0,
      subtitle: "Featured Listings",
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      title: "Portfolio Value",
      value: formatPrice(stats.portfolioValue),
      subtitle: "Total Property Value",
      icon: Landmark,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
  ];

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">Market Overview</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg}`}
              >
                <Icon className={card.color} size={28} />
              </div>

              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className="mt-2 text-2xl font-bold">{card.value}</h3>
              <p className="mt-2 truncate text-sm text-gray-500">
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
