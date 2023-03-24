import { useRouter } from "next/router";
import Link from "next/link";
import { NavLinkProps } from "../types"

export const NavLink = ({
    children,
    activeClassName = "active",
    ...props
}: NavLinkProps) => {
    const { asPath } = useRouter();
    const { className } = props;
    const isActive = asPath === props.href || asPath === props.as;
    const classes = `${className} ${isActive ? activeClassName : ""}`
    return (
        <Link {...props} className={classes}>{children}</Link>
    );
};