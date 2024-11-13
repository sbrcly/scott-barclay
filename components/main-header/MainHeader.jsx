import Link from "next/link"
import { IoLibrary } from "react-icons/io5"

import classes from "./main-header.module.css"
import ExpandableLink from "./ExpandableLink"

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <div>
                <Link className={classes.logo} href="/">
                    SB
                </Link>
            </div>

            <nav className={classes.nav}>
                <ul>
                    <li className={classes.basic}>
                        <Link className={`${classes['nav-link']} ${classes.basic}`} href="/about">About</Link>
                    </li>
                    <ExpandableLink />
                    <li className={classes.basic}>
                        <Link className={`${classes['nav-link']} ${classes.basic}`} href="/connect">Connect</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <Link className={classes["books-link"]} href="/books">
                    <IoLibrary />
                </Link>
            </div>
        </header>
    )
};
