import classes from "./dropdown-module.module.css"

export default function DropdownModule({ children, isHovered }) {
    return (
        <div className={`${classes["dropdown-module"]} ${isHovered ? classes.show : ""}`}>
            <div className={classes["dropdown-module-content"]}>
                { children }
            </div>
        </div>
    )
};
