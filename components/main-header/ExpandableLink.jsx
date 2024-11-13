"use client"

import { useState } from "react"
import Link from "next/link"
import { IoChevronDownOutline } from "react-icons/io5"

import classes from "./main-header.module.css"

export default function ExpandableLink() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                className={`${classes['nav-link']} ${isHovered ? classes.show : ""}`} href="/work"
            >
                <div className={classes["link-content"]}>
                    Work <span className={classes["link-span"]}><IoChevronDownOutline /></span>
                </div>
            </Link>
            <div className={`${classes["dropdown-module"]} ${isHovered ? classes.show : ""}`}>
                <div className={classes["dropdown-module-content"]}>
                    {/* Content for the module goes here */}
                    <p>This is the dropdown module content.</p>
                </div>
            </div>
        </li>
    )
};
