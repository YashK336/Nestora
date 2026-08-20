import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Building2,
  Star,
  Clock3,
  CheckCheck,
} from "lucide-react";

const NotificationDropdown = ({
  properties = [],
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const notifications = properties
    .slice(0, 5)
    .map((property) => ({
      id: property._id,
      title: property.featured
        ? "Featured property added"
        : "New property added",
      description: property.title,
      city: property.city,
      featured: property.featured,
      createdAt: property.createdAt,
    }));

  const unreadCount = notifications.length;

  const formatTime = (date) => {
    if (!date) return "Recently";

    const created = new Date(date);
    const now = new Date();

    const diff = Math.floor(
      (now - created) / 1000
    );

    if (diff < 60) {
      return "Just now";
    }

    if (diff < 3600) {
      return `${Math.floor(diff / 60)}m ago`;
    }

    if (diff < 86400) {
      return `${Math.floor(diff / 3600)}h ago`;
    }

    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* Bell */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Notifications"
        className="
          relative
          rounded-xl
          p-2
          text-gray-600
          transition
          hover:bg-gray-100
          dark:text-slate-300
          dark:hover:bg-slate-800
        "
      >
        <Bell size={22} />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -right-0.5
              -top-0.5
              flex
              h-5
              min-w-5
              items-center
              justify-center
              rounded-full
              bg-red-500
              px-1
              text-[10px]
              font-bold
              text-white
              ring-2
              ring-white
              dark:ring-slate-900
            "
          >
            {unreadCount > 9
              ? "9+"
              : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-12
            z-50
            w-[360px]
            max-w-[calc(100vw-2rem)]
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-2xl

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          {/* Header */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-gray-200
              px-5
              py-4

              dark:border-slate-700
            "
          >
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Notifications
              </h3>

              <p className="text-xs text-gray-500 dark:text-slate-400">
                Recent property activity
              </p>
            </div>

            {notifications.length > 0 && (
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  text-xs
                  font-medium
                  text-blue-600
                  hover:text-blue-700
                  dark:text-blue-400
                "
              >
                <CheckCheck size={15} />
                Mark all read
              </button>
            )}
          </div>

          {/* Notifications */}
          <div className="max-h-[420px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-12
                  text-center
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    text-gray-400

                    dark:bg-slate-800
                    dark:text-slate-500
                  "
                >
                  <Bell size={25} />
                </div>

                <p className="font-medium text-gray-700 dark:text-slate-200">
                  No notifications
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                  You're all caught up.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="
                    flex
                    gap-3
                    border-b
                    border-gray-100
                    px-5
                    py-4
                    transition
                    hover:bg-gray-50

                    dark:border-slate-800
                    dark:hover:bg-slate-800
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl

                      ${
                        notification.featured
                          ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      }
                    `}
                  >
                    {notification.featured ? (
                      <Star size={19} />
                    ) : (
                      <Building2 size={19} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {notification.title}
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-600 dark:text-slate-300">
                      {notification.description}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-400 dark:text-slate-500">
                      <span>
                        {notification.city}
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <Clock3 size={12} />
                        {formatTime(
                          notification.createdAt
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Unread dot */}
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;