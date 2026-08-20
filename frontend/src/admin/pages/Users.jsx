import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../components/ConfirmModal";

import { getUsers, updateUserRole, deleteUser, createUser } from "../services/userService";
import CreateUserModal from "../components/CreateUserModal";

import UserToolbar from "../components/UserToolbar";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const [role, setRole] =
    useState("");

  const [pagination, setPagination] =
    useState({});
  
  const [selectedUser, setSelectedUser] =
    useState(null);
  
  const [deleteModalOpen, setDeleteModalOpen] =
    useState(false);
  
  const [deleting, setDeleting] =
    useState(false);  

    const [roleModalOpen, setRoleModalOpen] =
    useState(false);
  
  const [changingRole, setChangingRole] =
    useState(false); 

    const [createModalOpen, setCreateModalOpen] =
  useState(false);

  const [creating, setCreating] =
  useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const data = await getUsers({
          page,
          search,
          role,
        });

        setUsers(data.users || []);

        setPagination(
          data.pagination || {}
        );
      } catch (error) {
        console.error(
          "Fetch users error:",
          error
        );

        toast.error(
          "Failed to load users."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [
    page,
    search,
    role,
  ]);
  const handleChangeRole = (user) => {
    setSelectedUser(user);
    setRoleModalOpen(true);
  };

  const handleCreateUser = async (userData) => {
    try {
      setCreating(true);
  
      const newUser = await createUser(userData);
  
      toast.success(
        `${newUser.name} was created successfully.`
      );
  
      // Add the new user to the top of the list
      setUsers((prevUsers) => [
        newUser,
        ...prevUsers,
      ]);
  
      // Update total count
      setPagination((prev) => ({
        ...prev,
        totalUsers: (prev.totalUsers || 0) + 1,
      }));
  
      setCreateModalOpen(false);
  
      return true;
    } catch (error) {
      console.error(
        "Create user error:",
        error
      );
  
      toast.error(
        error.response?.data?.message ||
          "Failed to create user."
      );
  
      return false;
    } finally {
      setCreating(false);
    }
  };

  const confirmChangeRole = async () => {
    if (!selectedUser) return;
  
    const newRole =
      selectedUser.role === "admin"
        ? "user"
        : "admin";
  
    try {
      setChangingRole(true);
  
      await updateUserRole(
        selectedUser._id,
        newRole
      );
  
      toast.success(
        `${selectedUser.name} is now a ${newRole}.`
      );
  
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === selectedUser._id
            ? {
                ...user,
                role: newRole,
              }
            : user
        )
      );
  
      setRoleModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(
        "Update user role error:",
        error
      );
  
      toast.error(
        error.response?.data?.message ||
          "Failed to update user role."
      );
    } finally {
      setChangingRole(false);
    }
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedUser) return;
  
    try {
      setDeleting(true);
  
      await deleteUser(selectedUser._id);
  
      toast.success(
        `${selectedUser.name} was deleted successfully.`
      );
  
      setUsers((prevUsers) =>
        prevUsers.filter(
          (item) =>
            item._id !== selectedUser._id
        )
      );
  
      setPagination((prev) => ({
        ...prev,
        totalUsers: Math.max(
          (prev.totalUsers || 1) - 1,
          0
        ),
      }));
  
      setDeleteModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(
        "Delete user error:",
        error
      );
  
      toast.error(
        error.response?.data?.message ||
          "Failed to delete user."
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div
        className="
          mb-8
          flex
          flex-col
          justify-between
          gap-6
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          p-8
          text-white

          lg:flex-row
          lg:items-center
        "
      >
        <div>
          <h1 className="text-4xl font-bold">
            User Management
          </h1>

          <p className="mt-2 text-blue-100">
            Manage users and their access
            to the Nestora platform.
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            px-6
            py-4
            backdrop-blur-sm
          "
        >
          <p className="text-sm text-blue-100">
            Total Users
          </p>

          <p className="text-3xl font-bold">
            {pagination.totalUsers ?? 0}
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <UserToolbar
  search={search}
  setSearch={(value) => {
    setSearch(value);
    setPage(1);
  }}
  role={role}
  setRole={(value) => {
    setRole(value);
    setPage(1);
  }}
  onAddUser={() => setCreateModalOpen(true)}
/>

      {/* Table */}
      <UserTable
        users={users}
        loading={loading}
        onChangeRole={handleChangeRole}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      <Pagination
        currentPage={
          pagination.currentPage || 1
        }
        totalPages={
          pagination.totalPages || 1
        }
        onPageChange={setPage}
      />
      <ConfirmModal
  isOpen={deleteModalOpen}
  title="Delete User"
  message={
    selectedUser
      ? `Are you sure you want to delete ${selectedUser.name}? This action cannot be undone.`
      : ""
  }
  confirmText="Delete User"
  cancelText="Cancel"
  danger={true}
  loading={deleting}
  onConfirm={confirmDelete}
  onCancel={() => {
    if (!deleting) {
      setDeleteModalOpen(false);
      setSelectedUser(null);
    }
  }}
/>
<ConfirmModal
  isOpen={roleModalOpen}
  title="Change User Role"
  message={
    selectedUser
      ? `Are you sure you want to change ${selectedUser.name}'s role from ${selectedUser.role} to ${
          selectedUser.role === "admin"
            ? "user"
            : "admin"
        }?`
      : ""
  }
  confirmText={
    selectedUser?.role === "admin"
      ? "Make User"
      : "Make Admin"
  }
  cancelText="Cancel"
  loading={changingRole}
  onConfirm={confirmChangeRole}
  onCancel={() => {
    if (!changingRole) {
      setRoleModalOpen(false);
      setSelectedUser(null);
    }
  }}
/>
<CreateUserModal
  isOpen={createModalOpen}
  onClose={() =>
    setCreateModalOpen(false)
  }
  onCreate={handleCreateUser}
  loading={creating}
/>
    </div>
  );
};

export default Users;