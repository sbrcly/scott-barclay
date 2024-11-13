// import { useState } from "react"
import Link from "next/link"

import classes from "./project.module.css"

export default function Project({ project }) {
    // const [isHovered, setIsHovered] = useState(false)

    const { title, description, href, icon } = project

    return (
        <li
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            className={classes.project}
        >
            <Link href={href}>
                    <div className={classes["project-content"]}>
                        <section className={classes["project-icon"]}>
                            {icon}
                        </section>
                        <section>
                            <h4 className={classes["project-title"]}>{title}</h4>
                            <p className={classes["project-description"]}>{description}</p>
                        </section>
                    </div>
            </Link>
        </li>
    )
}
