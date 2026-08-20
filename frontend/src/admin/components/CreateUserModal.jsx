import { useState } from "react";
import { X, UserPlus } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "user",
};

const CreateUserModal = ({
  isOpen,
  onClose,
  onCreate,
  loading,
}) => {
  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] =
    useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password =
        "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const success = await onCreate(formData);

    if (success) {
      setFormData(initialFormData);
      setErrors({});
    }
  };

  const handleClose = () => {
    if (loading) return;

    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/50
        px-4
        backdrop-blur-sm
      "
    >
      <div
        className="
          relative
          w-full
          max-w-lg
          rounded-2xl
          bg-white
          p-6
          shadow-2xl

          dark:bg-slate-900
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          className="
            absolute
            right-5
            top-5
            rounded-lg
            p-2
            text-gray-400
            transition
            hover:bg-gray-100
            hover:text-gray-700

            dark:hover:bg-slate-800
            dark:hover:text-white
          "
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-100
              text-blue-600

              dark:bg-blue-900/30
              dark:text-blue-400
            "
          >
            <UserPlus size={24} />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Create New User
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Add a new user and assign their access role.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className={`
                w-full
                rounded-xl
                border
                bg-gray-50
                px-4
                py-3
                text-gray-900
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-500/20

                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-500

                ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-200 focus:border-blue-500 dark:border-slate-700"
                }
              `}
            />

            {errors.name && (
              <p className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={`
                w-full
                rounded-xl
                border
                bg-gray-50
                px-4
                py-3
                text-gray-900
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-500/20

                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-500

                ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-200 focus:border-blue-500 dark:border-slate-700"
                }
              `}
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password + Role */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                className={`
                  w-full
                  rounded-xl
                  border
                  bg-gray-50
                  px-4
                  py-3
                  text-gray-900
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-blue-500/20

                  dark:bg-slate-800
                  dark:text-white
                  dark:placeholder:text-slate-500

                  ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-200 focus:border-blue-500 dark:border-slate-700"
                  }
                `}
              />

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-200">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  py-3
                  text-gray-900
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                "
              >
                <option value="user">
                  User
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>
            </div>

          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="
                rounded-xl
                border
                border-gray-200
                px-5
                py-3
                text-sm
                font-medium
                text-gray-700
                transition
                hover:bg-gray-100
                disabled:opacity-50

                dark:border-slate-700
                dark:text-slate-200
                dark:hover:bg-slate-800
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <UserPlus size={18} />

              {loading
                ? "Creating..."
                : "Create User"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;