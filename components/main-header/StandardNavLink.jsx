"use client"

import Link from "next/link"

import classes from "./main-header.module.css"
import { usePathname } from "next/navigation"

export default function StandardNavLink({ href, title }) {
    const path = usePathname()

    return (
        <li className={classes.basic}>
            <Link className={`${classes['nav-link']} ${classes.basic} ${path.includes(href) ? classes.active : ''}`} href={href}>{title}</Link>
        </li>
    )
};
