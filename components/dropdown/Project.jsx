import Link from "next/link"

import classes from "./project.module.css"

export default function Project({ project }) {
    const { title, description, href, icon, target } = project

    return (
        <li className={classes.project} >
            <Link href={href} target={target ? target : '_self'}>
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
