import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import loginBg from "../../assets/login-bg.jpg";
import { getPublicStats } from "../services/dashboardService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({});

  const { user, login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getPublicStats();
        setStats(data || {});
      } catch (error) {
        console.error("Login stats error:", error);
      }
    };
  
    fetchStats();
  }, []);

  if (user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err.response?.data);
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 transition-colors duration-300 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT PANEL ================= */}

        <div className="relative hidden overflow-hidden lg:flex">

          <motion.img
            src={loginBg}
            alt="Luxury Property"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-800/70 to-black/75" />

          <div className="relative z-5 flex flex-col justify-end p-14 text-white">
            <div className="max-w-xl">

              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-blue-100 backdrop-blur-xl">
                Premium Real Estate Platform
              </span>

              <h1 className="mt-6 text-6xl font-extrabold leading-tight tracking-tight">
                Nestora
              </h1>

              <p className="mt-4 text-2xl font-light text-blue-100">
                Manage Properties with Confidence
              </p>

              <p className="mt-8 max-w-lg text-lg leading-8 text-blue-100/90">
                Create listings, monitor inventory, and
                manage your real estate business from one
                secure dashboard designed for modern
                professionals.
              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl">
                    <CheckCircle2
                      size={20}
                      className="text-emerald-300"
                    />
                  </div>

                  <span className="text-lg text-white">
                    Smart Property Listings
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl">
                    <BarChart3
                      size={20}
                      className="text-sky-300"
                    />
                  </div>

                  <span className="text-lg text-white">
                    Powerful Admin Dashboard
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl">
                    <ShieldCheck
                      size={20}
                      className="text-violet-300"
                    />
                  </div>

                  <span className="text-lg text-white">
                    Fast & Secure Management
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-14 flex gap-14">

              <div>
                <h3 className="text-4xl font-bold">
                  {stats.totalProperties ?? "0"}
                </h3>
                <p className="mt-1 text-blue-100">
                  Properties
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                {stats.featuredProperties ?? "0"}
                </h3>
                <p className="mt-1 text-blue-100">
                  Featured
                </p>
              </div>
            </div>
          </div>

          {/* Floating cards */}

          <div className="absolute left-10 top-10">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white backdrop-blur-xl"
            >
              <p className="text-sm text-blue-100">
                Properties
              </p>

              <h3 className="text-3xl font-bold">
                {stats.totalProperties ?? "0"}
              </h3>
            </motion.div>
          </div>

          <div className="absolute right-10 top-32">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white backdrop-blur-xl"
            >
              <p className="text-sm text-blue-100">
                Featured
              </p>

              <h3 className="text-3xl font-bold">
                {stats.featuredProperties ?? "0"}
              </h3>
            </motion.div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="flex items-center justify-center bg-slate-100 p-6 transition-colors duration-300 dark:bg-slate-950 sm:p-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              w-full
              max-w-md
              rounded-3xl
              border
              border-white/40
              bg-white/80
              p-10
              shadow-[0_25px_60px_rgba(37,99,235,.18)]
              backdrop-blur-xl
              transition-colors
              duration-300

              dark:border-slate-700
              dark:bg-slate-900/90
              dark:shadow-[0_25px_60px_rgba(0,0,0,.35)]
            "
          >

            {/* Logo / Heading */}

            <div className="mb-8 flex flex-col items-center">

              <motion.div
                initial={{
                  rotate: -10,
                  scale: 0.8,
                }}
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
              >
                <Building2 size={38} />
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="text-3xl font-bold text-slate-900 dark:text-white"
              >
                Welcome Back
              </motion.h2>

              <p className="mt-2 text-center text-slate-500 dark:text-slate-400">
                Sign in to continue to your dashboard.
              </p>

            </div>

            {/* Error */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              {error && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-400">
                  {error}
                </div>
              )}
            </motion.div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      py-3
                      pl-12
                      pr-4
                      text-slate-900
                      transition
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:outline-none
                      focus:ring-4
                      focus:ring-blue-100

                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-blue-500
                      dark:focus:ring-blue-900/40
                    "
                  />

                </div>
              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      py-3
                      pl-12
                      pr-12
                      text-slate-900
                      transition
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:outline-none
                      focus:ring-4
                      focus:ring-blue-100

                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-blue-500
                      dark:focus:ring-blue-900/40
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="mr-2 animate-spin"
                    />

                    Signing In...
                  </>
                ) : (
                  <span className="relative z-10">
                    Sign In →
                  </span>
                )}

              </button>

            </form>

            {/* Footer */}

            <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              Secure Admin Portal • Nestora © 2026
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}