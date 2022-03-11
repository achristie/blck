import { CursorClickIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Card({ title, body }) {
  return (
    <Link href={`/commodity/${title}`}>
      <a>
        <div className="relative bg-slate-900 p-6 rounded-md border-2 group hover:-translate-y-1 transition ease-in-out delay-150 duration-300 hover:border-fuchsia-500 ">
          <div className="flex justify-between">
            <motion.div className="text-red-400 text-lg" layoutId={title}>
              {title}
            </motion.div>
            <CursorClickIcon className="w-5 h-5 text-zinc-100 opacity-0 group-hover:opacity-100" />
          </div>
          <div className="text-zinc-100 pt-4">{body}</div>
        </div>
      </a>
    </Link>
  );
}
