import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Check,
  CheckCheck,
  Home,
  UserPlus,
  Star,
  Trash2,
} from "lucide-react";
import {
  getNotifications,
  markNotificationRead,
  markAllNotificationsRead,
  clearNotifications as clearNotificationsApi,
} from "../services/notificationService.js";

const NotificationMenu = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] =
  useState([]);
 
const [loading, setLoading] =
  useState(true);

  const notificationRef = useRef(null);
    useEffect(() => {
      const fetchNotifications = async () => {
        try {
          const data = await getNotifications();
    
          setNotifications(
            data.notifications || []
          );
        } catch (error) {
          console.error(
            "Failed to fetch notifications:",
            error
          );
        }
      };
    
      fetchNotifications();
    
      const interval = setInterval(
        fetchNotifications,
        30000
      );
    
      return () => {
        clearInterval(interval);
      };
    }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
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

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = async (id) => {
    try {
      await markNotificationRead(id);
  
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id
            ? {
                ...notification,
                read: true,
              }
            : notification
        )
      );
    } catch (error) {
      console.error(
        "Failed to mark notification as read:",
        error
      );
    }
  };

  const markAllAsRead = async () => {
    try {
      await markAllNotificationsRead();
  
      setNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          read: true,
        }))
      );
    } catch (error) {
      console.error(
        "Failed to mark notifications as read:",
        error
      );
    }
  };

  const clearNotifications = async () => {
    try {
      await clearNotificationsApi();
  
      setNotifications([]);
    } catch (error) {
      console.error(
        "Failed to clear notifications:",
        error
      );
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "property":
        return <Home size={18} />;

      case "user":
        return <UserPlus size={18} />;

      case "featured":
        return <Star size={18} />;

      default:
        return <Bell size={18} />;
    }
  };

  return (
    <div
      ref={notificationRef}
      className="relative"
    >
      {/* Notification Button */}
      <button
        type="button"
        onClick={() =>
          setOpen((prev) => !prev)
        }
        title="Notifications"
        className="
          relative
          rounded-xl
          p-2.5
          text-gray-600
          transition
          hover:bg-gray-100
          hover:text-blue-600

          dark:text-slate-300
          dark:hover:bg-slate-800
          dark:hover:text-blue-400
        "
      >
        <Bell size={21} />

        {unreadCount > 0 && (
          <>
            <span
              className="
                absolute
                right-1.5
                top-1.5
                flex
                h-4
                min-w-4
                items-center
                justify-center
                rounded-full
                bg-red-500
                px-1
                text-[9px]
                font-bold
                text-white
              "
            >
              {unreadCount}
            </span>
          </>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            mt-3
            w-[360px]
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
              border-gray-100
              px-5
              py-4

              dark:border-slate-700
            "
          >
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Notifications
              </h3>

              <p className="mt-0.5 text-xs text-gray-500 dark:text-slate-400">
                {unreadCount > 0
                  ? `${unreadCount} unread notification${
                      unreadCount > 1 ? "s" : ""
                    }`
                  : "You're all caught up"}
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                title="Mark all as read"
                className="
                  rounded-lg
                  p-2
                  text-gray-500
                  transition
                  hover:bg-gray-100
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:bg-slate-800
                  dark:hover:text-blue-400
                "
              >
                <CheckCheck size={18} />
              </button>
            )}
          </div>

          {/* Notification List */}
          <div className="max-h-[380px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
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
                  <Bell size={24} />
                </div>

                <h4 className="font-semibold text-gray-900 dark:text-white">
                  No notifications
                </h4>

                <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                  Nothing new to show right now.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification._id}
                  className={`
                    group
                    relative
                    flex
                    gap-3
                    border-b
                    border-gray-100
                    px-5
                    py-4
                    transition
                    hover:bg-gray-50

                    dark:border-slate-800
                    dark:hover:bg-slate-800/60

                    ${
                      !notification.read
                        ? "bg-blue-50/50 dark:bg-blue-900/10"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-100
                      text-blue-600

                      dark:bg-blue-900/40
                      dark:text-blue-400
                    "
                  >
                    {getIcon(notification.type)}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={`
                          text-sm
                          ${
                            !notification.read
                              ? "font-bold"
                              : "font-semibold"
                          }
                          text-gray-900
                          dark:text-white
                        `}
                      >
                        {notification.title}
                      </p>

                      {!notification.read && (
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      )}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">
                      {notification.message}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 dark:text-slate-500">
                        {notification.createdAt}
                      </span>

                      {!notification.read && (
                        <button
                          type="button"
                          onClick={() =>
                            markAsRead(
                              notification._id
                            )
                          }
                          className="
                            flex
                            items-center
                            gap-1
                            text-[11px]
                            font-medium
                            text-blue-600
                            opacity-0
                            transition
                            group-hover:opacity-100

                            dark:text-blue-400
                          "
                        >
                          <Check size={13} />
                          Mark read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-gray-100
                px-5
                py-3

                dark:border-slate-700
              "
            >
              <button
                type="button"
                onClick={clearNotifications}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-xs
                  font-medium
                  text-gray-500
                  transition
                  hover:text-red-600

                  dark:text-slate-400
                  dark:hover:text-red-400
                "
              >
                <Trash2 size={14} />
                Clear all
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  text-xs
                  font-semibold
                  text-blue-600
                  hover:text-blue-700

                  dark:text-blue-400
                  dark:hover:text-blue-300
                "
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;