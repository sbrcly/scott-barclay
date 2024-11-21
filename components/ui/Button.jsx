import Link from "next/link"

import classes from "./button.module.css"

export default function Button({ children }) {
    return (
        <button className={classes.prominent}>
            <Link className={classes.link} href="/work">{children}</Link>
        </button>
    )
};
