import { Link } from "react-router-dom";
import {
  Building2,
  ArrowLeft,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar mode="search" isSticky={true} />

      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-xl text-center"
        >
          {/* Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
            <Building2 size={42} />
          </div>

          {/* 404 */}
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Error 404
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            This property doesn't exist.
          </h1>

          <p className="mx-auto mt-5 max-w-md leading-7 text-slate-500">
            The page you're looking for may have moved,
            been removed, or never existed in the first
            place.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Home size={18} />
              Go Home
            </Link>

            <Link
              to="/properties"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <ArrowLeft size={18} />
              Browse Properties
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;