import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  try {
    const notifications =
      await Notification.find({
        recipient: req.user._id,
      })
        .sort({ createdAt: -1 })
        .limit(30);

    const unreadCount =
      await Notification.countDocuments({
        recipient: req.user._id,
        read: false,
      });

    res.status(200).json({
      notifications,
      unreadCount,
    });
  } catch (error) {
    console.error(
      "Get notifications error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch notifications",
    });
  }
};

export const markNotificationRead = async (
  req,
  res
) => {
  try {
    const notification =
      await Notification.findOneAndUpdate(
        {
          _id: req.params.id,
          recipient: req.user._id,
        },
        {
          read: true,
        },
        {
          new: true,
        }
      );

    if (!notification) {
      return res.status(404).json({
        message: "Notification not found",
      });
    }

    res.status(200).json(notification);
  } catch (error) {
    console.error(
      "Mark notification read error:",
      error
    );

    res.status(500).json({
      message: "Failed to update notification",
    });
  }
};

export const markAllNotificationsRead = async (
  req,
  res
) => {
  try {
    await Notification.updateMany(
      {
        recipient: req.user._id,
        read: false,
      },
      {
        read: true,
      }
    );

    res.status(200).json({
      message: "All notifications marked as read",
    });
  } catch (error) {
    console.error(
      "Mark all notifications read error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to update notifications",
    });
  }
};

export const deleteNotifications = async (
  req,
  res
) => {
  try {
    await Notification.deleteMany({
      recipient: req.user._id,
    });

    res.status(200).json({
      message: "Notifications cleared",
    });
  } catch (error) {
    console.error(
      "Delete notifications error:",
      error
    );

    res.status(500).json({
      message: "Failed to clear notifications",
    });
  }
};