import { useAuth } from "../context/AuthContext";
import {
  UserCircle,
  Mail,
  ShieldCheck,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";
import * as authService from "../services/authService";

const Settings = () => {
  const { user } = useAuth();
  const [passwordData, setPasswordData] =
  useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

const [showPasswords, setShowPasswords] =
  useState({
    current: false,
    new: false,
    confirm: false,
  });

const [savingPassword, setSavingPassword] =
  useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
  
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
  
    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = passwordData;
  
    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      toast.error(
        "Please fill in all password fields."
      );
      return;
    }
  
    if (newPassword.length < 6) {
      toast.error(
        "New password must be at least 6 characters."
      );
      return;
    }
  
    if (newPassword !== confirmPassword) {
      toast.error(
        "New passwords do not match."
      );
      return;
    }
  
    try {
      setSavingPassword(true);
  
      await authService.changePassword(
        currentPassword,
        newPassword
      );
  
      toast.success(
        "Password changed successfully!"
      );
  
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to change password."
      );
    } finally {
      setSavingPassword(false);
    }
  };  

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Account Settings
        </h1>

        <p className="mt-2 text-gray-500 dark:text-slate-400">
          Manage your account information and preferences.
        </p>
      </div>

      {/* Account Information */}
      <section
        className="
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-7
          shadow-sm

          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Account Information
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Your administrator account details.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {/* Name */}
          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-gray-50
              p-5

              dark:bg-slate-800
            "
          >
            <div
              className="
                flex
                h-11
                w-11
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
              <UserCircle size={22} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-slate-400">
                Name
              </p>

              <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                {user?.name || "Admin"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-gray-50
              p-5

              dark:bg-slate-800
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-violet-100
                text-violet-600

                dark:bg-violet-900/40
                dark:text-violet-400
              "
            >
              <Mail size={22} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-slate-400">
                Email
              </p>

              <p className="mt-1 truncate font-semibold text-gray-900 dark:text-white">
                {user?.email || "Not available"}
              </p>
            </div>
          </div>

          {/* Role */}
          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-gray-50
              p-5

              dark:bg-slate-800
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-100
                text-emerald-600

                dark:bg-emerald-900/40
                dark:text-emerald-400
              "
            >
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-slate-400">
                Role
              </p>

              <p className="mt-1 font-semibold capitalize text-gray-900 dark:text-white">
                {user?.role || "Administrator"}
              </p>
            </div>
          </div>

        </div>
      </section>
      <section
  className="
    rounded-3xl
    border
    border-gray-200
    bg-white
    p-7
    shadow-sm

    dark:border-slate-700
    dark:bg-slate-900
  "
>
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
      Change Password
    </h2>

    <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
      Update your administrator account password.
    </p>
  </div>

  <form
    onSubmit={handleChangePassword}
    className="space-y-5"
  >
    {/* Current Password */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
        Current Password
      </label>

      <div className="relative">
        <LockKeyhole
          size={19}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            dark:text-slate-500
          "
        />

        <input
          type={
            showPasswords.current
              ? "text"
              : "password"
          }
          name="currentPassword"
          value={
            passwordData.currentPassword
          }
          onChange={handlePasswordChange}
          placeholder="Enter current password"
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            py-3
            pl-11
            pr-12
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

        <button
          type="button"
          onClick={() =>
            setShowPasswords((prev) => ({
              ...prev,
              current: !prev.current,
            }))
          }
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-gray-600

            dark:text-slate-500
            dark:hover:text-slate-300
          "
        >
          {showPasswords.current ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>
      </div>
    </div>

    {/* New Password */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
        New Password
      </label>

      <div className="relative">
        <LockKeyhole
          size={19}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            dark:text-slate-500
          "
        />

        <input
          type={
            showPasswords.new
              ? "text"
              : "password"
          }
          name="newPassword"
          value={
            passwordData.newPassword
          }
          onChange={handlePasswordChange}
          placeholder="Enter new password"
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            py-3
            pl-11
            pr-12
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

        <button
          type="button"
          onClick={() =>
            setShowPasswords((prev) => ({
              ...prev,
              new: !prev.new,
            }))
          }
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-gray-600

            dark:text-slate-500
            dark:hover:text-slate-300
          "
        >
          {showPasswords.new ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>
      </div>
    </div>

    {/* Confirm Password */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300">
        Confirm New Password
      </label>

      <div className="relative">
        <LockKeyhole
          size={19}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            dark:text-slate-500
          "
        />

        <input
          type={
            showPasswords.confirm
              ? "text"
              : "password"
          }
          name="confirmPassword"
          value={
            passwordData.confirmPassword
          }
          onChange={handlePasswordChange}
          placeholder="Confirm new password"
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            py-3
            pl-11
            pr-12
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

        <button
          type="button"
          onClick={() =>
            setShowPasswords((prev) => ({
              ...prev,
              confirm:
                !prev.confirm,
            }))
          }
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-gray-600

            dark:text-slate-500
            dark:hover:text-slate-300
          "
        >
          {showPasswords.confirm ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>
      </div>
    </div>

    {/* Submit */}
    <div className="flex justify-end pt-2">
      <button
        type="submit"
        disabled={savingPassword}
        className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {savingPassword
          ? "Updating..."
          : "Change Password"}
      </button>
    </div>
  </form>
</section>

    </div>
  );
};

export default Settings;