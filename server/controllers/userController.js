import User from "../models/User.js";
import bcrypt from "bcryptjs";
import createNotification from "../utils/createNotification.js";

// GET /api/users
export const getUsers = async (req, res) => {
  try {
    const {
      search = "",
      role = "",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    if (role) {
      query.role = role;
    }

    if (search) {
      query.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const pageNumber = Math.max(
      Number(page) || 1,
      1
    );

    const limitNumber = Math.min(
      Math.max(Number(limit) || 10, 1),
      50
    );

    const skip =
      (pageNumber - 1) * limitNumber;

    const totalUsers =
      await User.countDocuments(query);

    const users = await User.find(query)
      .select("-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber);

    res.status(200).json({
      users,

      pagination: {
        currentPage: pageNumber,
        totalPages: Math.ceil(
          totalUsers / limitNumber
        ),
        totalUsers,
        limit: limitNumber,
        hasNextPage:
          pageNumber <
          Math.ceil(
            totalUsers / limitNumber
          ),
        hasPrevPage: pageNumber > 1,
      },
    });
  } catch (error) {
    console.error(
      "Get users error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch users.",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role = "user",
    } = req.body;
    

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message:
          "Name, email and password are required.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({
        message:
          "A user with this email already exists.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    
    await createNotification({
      recipient: req.user._id,
      type: "user",
      title: "New user created",
      message: `${user.name} was added as a ${user.role}.`,
    });
    
    // Never send password back
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error(
      "Create user error:",
      error
    );

    res.status(500).json({
      message: "Server error.",
    });
  }
};

// GET /api/users/:id
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(
      req.params.id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    console.error(
      "Get user error:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch user.",
    });
  }
};

// PATCH /api/users/:id/role
export const updateUserRole = async (
  req,
  res
) => {
  try {
    const { role } = req.body;

    if (!["admin", "user"].includes(role)) {
      return res.status(400).json({
        message: "Invalid role.",
      });
    }

    // Prevent changing your own role
    if (
      req.params.id.toString() ===
      req.user._id.toString()
    ) {
      return res.status(400).json({
        message:
          "You cannot change your own role.",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.status(200).json({
      message: "User role updated successfully.",
      user,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    console.error(
      "Update user role error:",
      error
    );

    res.status(500).json({
      message: "Failed to update user role.",
    });
  }
};

// DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    // Prevent an admin from deleting themselves
    if (req.params.id === req.user._id.toString()) {
      return res.status(400).json({
        message: "You cannot delete your own account.",
      });
    }

    const user = await User.findById(req.params.id);

if (!user) {
  return res.status(404).json({
    message: "User not found.",
  });
}

await User.findByIdAndDelete(req.params.id);

await createNotification({
  recipient: req.user._id,
  type: "user",
  title: "User deleted",
  message: `${user.name} was deleted from the platform.`,
});

res.status(200).json({
  message: "User deleted successfully.",
});
  } catch (error) {
    console.error("Delete user error:", error);

    res.status(500).json({
      message: "Server error.",
    });
  }
};