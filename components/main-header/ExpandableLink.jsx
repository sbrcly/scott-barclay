"use client"

import { useState } from "react"
import Link from "next/link"
import { IoChevronDownOutline } from "react-icons/io5"

import classes from "./main-header.module.css"
import DropdownModule from "../dropdown/DropdownModule.jsx"
import { CATEGORIES } from "@/dummy-data"
import Category from "../dropdown/Category"

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
            <DropdownModule
                isHovered={isHovered}
            >
                <ul className={classes["module-content"]}>
                    {CATEGORIES.map(category => {
                        return (
                            <Category key={category.title} category={category} />
                        )
                    })}
                </ul>
            </DropdownModule>
        </li>
    )
};
