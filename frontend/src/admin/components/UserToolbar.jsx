import { Search , UserPlus } from "lucide-react";

const UserToolbar = ({
  search,
  setSearch,
  role,
  setRole,
  onAddUser,
}) => {
  return (
    <div
      className="
        mb-6
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Search */}
        <div className="relative">
          <Search
            size={20}
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
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              py-3
              pl-11
              pr-4
              text-gray-900
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

        {/* Role Filter */}
        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="
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
          <option value="">
            All Roles
          </option>

          <option value="admin">
            Admins
          </option>

          <option value="user">
            Users
          </option>
        </select>
        <button
  type="button"
  onClick={onAddUser}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-blue-600
    px-5
    py-3
    font-semibold
    text-white
    transition
    hover:bg-blue-700
    active:scale-[0.98]
  "
>
  <UserPlus size={20} />

  Add User
</button>
      </div>
    </div>
  );
};

export default UserToolbar;