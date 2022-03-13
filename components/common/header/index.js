import { Button, ConnectButton } from "@components/common";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSession } from "next-auth/react";

const NavLink = ({ children, ...props }) => {
  let className = children.props.className || "";
  const { pathname } = useRouter();

  if (pathname == props.href) {
    className = `${className} text-sky-500`;
  } else {
    className = `${className} text-slate-500 hover:text-slate-800`;
  }

  return <Link {...props}>{React.cloneElement(children, { className })}</Link>;
};

export default function Header() {
  const { data: session } = useSession();
  return (
    <section>
      <nav className="bg-stone-100 flex justify-between items-center shadow-md">
        <div className="py-4 pl-8 md:pl-16 space-x-16 flex">
          <NavLink href="/" passHref>
            <a className="text-xl">Home</a>
          </NavLink>
          <NavLink href="/tx" passHref>
            <a className="text-xl">My Transactions</a>
          </NavLink>
        </div>
        <div className="flex items-center">
          <div className="mr-5 text-stone-500">{session?.user.email}</div>
          <div className="pr-8">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </section>
  );
}
