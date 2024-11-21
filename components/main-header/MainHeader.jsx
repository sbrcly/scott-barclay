import Link from "next/link"
import { IoLibrary } from "react-icons/io5"

import classes from "./main-header.module.css"
import ExpandableLink from "./ExpandableLink"
import StandardNavLink from "./StandardNavLink"

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
                    <StandardNavLink
                        href="/about"
                        title="About"
                    />
                    <ExpandableLink
                        href="/work"
                        title="Work"
                    />
                    <StandardNavLink
                        href="/connect"
                        title="Connect"
                    />
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
