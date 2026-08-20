const AnalyticsStatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
  }) => {
    return (
      <div
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
  
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
              {title}
            </p>
  
            <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {value}
            </h3>
  
            {subtitle && (
              <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
  
          {Icon && (
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
  
                dark:bg-blue-900/30
                dark:text-blue-400
              "
            >
              <Icon size={24} />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default AnalyticsStatCard;