"use client"

import { useEffect } from "react"
import { renderThreeContent } from "@/utils/three"

import classes from "./canvas.module.css"

export default function Canvas(params) {
    useEffect(() => {
        const three = renderThreeContent()
    }, [])

    return (
        <canvas className={classes.webgl} id="webgl"></canvas>
    )
};
