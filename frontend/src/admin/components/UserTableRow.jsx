import Button from "../../components/ui/Button";

const UserTableRow = ({
  user,
  onChangeRole,
  onDelete,
}) => {
  const initials = user.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      )
    : "—";

  return (
    <tr
      className="
        border-t
        border-gray-200
        transition
        hover:bg-gray-50

        dark:border-slate-700
        dark:hover:bg-slate-800/60
      "
    >
      {/* User */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-blue-100
              text-sm
              font-bold
              text-blue-600

              dark:bg-blue-900/40
              dark:text-blue-400
            "
          >
            {initials || "U"}
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {user.name}
            </p>

            <p className="mt-0.5 text-sm text-gray-500 dark:text-slate-400">
              {user.email}
            </p>
          </div>
        </div>
      </td>

      {/* Role */}
      <td className="px-6 py-4">
        {user.role === "admin" ? (
          <span
            className="
              inline-flex
              rounded-full
              bg-purple-100
              px-3
              py-1
              text-xs
              font-semibold
              text-purple-700

              dark:bg-purple-900/30
              dark:text-purple-400
            "
          >
            Admin
          </span>
        ) : (
          <span
            className="
              inline-flex
              rounded-full
              bg-green-100
              px-3
              py-1
              text-xs
              font-semibold
              text-green-700

              dark:bg-green-900/30
              dark:text-green-400
            "
          >
            User
          </span>
        )}
      </td>

      {/* Joined */}
      <td className="px-6 py-4 text-sm text-gray-600 dark:text-slate-300">
        {joinedDate}
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onChangeRole(user)}
          >
            Role
          </Button>

          <Button
            size="sm"
            variant="danger"
            onClick={() => onDelete(user)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UserTableRow;