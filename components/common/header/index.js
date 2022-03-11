import { Button } from "@components/common";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
  console.log();
  return (
    <section>
      <nav className="flex justify-between items-center shadow-md">
        <div className="py-4 pl-8 md:pl-16 space-x-16 flex">
          <NavLink href="/" passHref>
            <a className="text-xl">Home</a>
          </NavLink>
          <NavLink href="/tx" passHref>
            <a className="text-xl">My Transactions</a>
          </NavLink>
        </div>
        <div className="pr-8">
          <Button>
            <img className="w-6 h-6 mr-4" src="/images/metamask.svg" />
            Connect
          </Button>
        </div>
      </nav>
    </section>
  );
}
