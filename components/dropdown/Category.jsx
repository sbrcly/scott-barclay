import classes from "./category.module.css"
import Project from "./Project"

export default function Category({ category }) {
    const { title, projects } = category

    return (
        <li className={classes.category}>
            <h3 className={classes.title}>{title}</h3>
            <ul className={classes.projects}>
                {projects.map(project => {
                    return (
                        <Project project={project} key={project.title} />
                    )
                })}
            </ul>
        </li>
    )
};
