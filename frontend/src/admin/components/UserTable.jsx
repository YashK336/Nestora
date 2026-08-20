import UserTableRow from "./UserTableRow";
import UserRowSkeleton from "./skeletons/UserRowSkeleton";

const UserTable = ({
    users,
    loading,
    onChangeRole,
    onDelete,
  }) => {
  return (
    <div
      className="
        overflow-x-auto
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <table className="min-w-full">
        <thead className="bg-gray-100 dark:bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left text-gray-700 dark:text-slate-200">
              User
            </th>

            <th className="px-6 py-4 text-left text-gray-700 dark:text-slate-200">
              Role
            </th>

            <th className="px-6 py-4 text-left text-gray-700 dark:text-slate-200">
              Joined
            </th>

            <th className="px-6 py-4 text-center text-gray-700 dark:text-slate-200">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <UserRowSkeleton key={index} />
            ))
          ) : !users?.length ? (
            <tr>
              <td
                colSpan={4}
                className="
                  py-12
                  text-center
                  text-gray-500
                  dark:text-slate-400
                "
              >
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                onChangeRole={onChangeRole}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;