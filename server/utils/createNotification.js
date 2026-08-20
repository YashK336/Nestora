import Notification from "../models/Notification.js";

const createNotification = async ({
  recipient,
  type,
  title,
  message,
}) => {
  try {
    return await Notification.create({
      recipient,
      type,
      title,
      message,
    });
  } catch (error) {
    console.error(
      "Create notification error:",
      error
    );

    return null;
  }
};

export default createNotification;