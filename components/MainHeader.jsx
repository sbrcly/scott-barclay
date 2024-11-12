import Link from "next/link"

import classes from "./main-header.module.css"

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <div>
                <Link href="/">
                    SB
                </Link>
            </div>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/work">Work</Link>
                    </li>
                    <li>
                        <Link href="/connect">Connect</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
