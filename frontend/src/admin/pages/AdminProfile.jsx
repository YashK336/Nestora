import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as authService from "../services/authService";
import {
  UserCircle,
  Mail,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import toast from "react-hot-toast";

const AdminProfile = () => {
  const { user } = useAuth();
  const [showPassword, setShowPassword] =
    useState(false);

    const [formData, setFormData] = useState({
        name: user?.name || "Admin",
        email: user?.email || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all password fields.");
      return;
    }
  
    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      toast.error("Passwords do not match.");
      return;
    }
  
    try {
      await authService.changePassword(
        formData.currentPassword,
        formData.newPassword
      );
  
      toast.success(
        "Password changed successfully!"
      );
  
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (error) {
      console.error(
        "Change password error:",
        error
      );
  
      toast.error(
        error.response?.data?.message ||
          "Failed to change password."
      );
    }
  };
  return (
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Profile Card */}
        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <div className="flex flex-col items-center text-center">
            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                shadow-lg
              "
            >
              <UserCircle size={58} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
              {formData.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
              Administrator
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                rounded-full
                bg-emerald-100
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-700

                dark:bg-emerald-900/30
                dark:text-emerald-400
              "
            >
              <ShieldCheck size={16} />
              Admin Account
            </div>
          </div>
        </div>

        {/* Settings */}
        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
            xl:col-span-2

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <form onSubmit={handleSubmit}>
            {/* Profile */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Profile Information
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Update your administrator information.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Name
                  </label>

                  <div className="relative">
                    <UserCircle
                      size={18}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        py-3
                        pl-10
                        pr-4
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-white
                      "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@example.com"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        py-3
                        pl-10
                        pr-4
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-white
                        dark:placeholder:text-slate-500
                      "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mt-10 border-t border-gray-200 pt-8 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Change Password
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Keep your administrator account secure.
              </p>

              <div className="mt-6 space-y-5">
                {/* Current */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Current Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="currentPassword"
                      value={
                        formData.currentPassword
                      }
                      onChange={handleChange}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        py-3
                        pl-10
                        pr-12
                        outline-none
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-500/20

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-white
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        hover:text-gray-600
                        dark:hover:text-slate-200
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* New */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
                    New Password
                  </label>

                  <input
                    type="password"
                    name="newPassword"
                    value={
                      formData.newPassword
                    }
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-4
                      py-3
                      outline-none
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-500/20

                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                    "
                  />
                </div>

                {/* Confirm */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
                    Confirm New Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-4
                      py-3
                      outline-none
                      focus:border-blue-500
                      focus:ring-2
 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"/>
                </div>
              </div>
            </div>

            {/* Save */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AdminProfile;