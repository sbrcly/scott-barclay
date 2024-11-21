"use client"

import { useState } from "react"
import Link from "next/link"
import { IoChevronDownOutline } from "react-icons/io5"

import classes from "./main-header.module.css"
import DropdownModule from "../dropdown/DropdownModule.jsx"
import { CATEGORIES } from "@/dummy-data"
import Category from "../dropdown/Category"
import { usePathname } from "next/navigation"

export default function ExpandableLink({ href, title }) {
    const [isHovered, setIsHovered] = useState(false)

    const path = usePathname()

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                className={`${classes['nav-link']} ${isHovered ? classes.show : ""} ${path.includes(href) ? classes.active : ''}`} href={href}
            >
                <div className={classes["link-content"]}>
                    {title} <span className={classes["link-span"]}><IoChevronDownOutline /></span>
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
