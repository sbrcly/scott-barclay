import { IoCalculatorOutline } from "react-icons/io5"
import { AiOutlineSchedule } from "react-icons/ai"
import { TbShirtSport } from "react-icons/tb"
import { IoCarSportOutline } from "react-icons/io5"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandJavascript } from "react-icons/tb"

export const CATEGORIES = [
    {
        title: "Business Tools",
        projects: [
            {
                title: "Arb Calculator",
                description: "Calculate & Compile",
                href: "/work/arb-calculator",
                icon: <IoCalculatorOutline />
            },
            {
                title: "Trader Schedule",
                description: "Assign & View",
                href: "/work/trader-schedule",
                icon: <AiOutlineSchedule />
            },
            {
                title: "Betting Odds",
                description: "Odds Table",
                href: "/work/betting-odds",
                icon: <TbShirtSport />
            },
        ]
    },
    {
        title: "Websites",
        projects: [
            {
                title: "Incognito Wraps",
                description: "Las Vegas Wraps",
                href: "/work/incognito-wraps",
                icon: <IoCarSportOutline />
            }
        ]
    },
    {
        title: "Portfolios",
        projects: [
            {
                title: "Portfolio V2",
                description: "Built in 2021",
                href: "/work/portfolio-v2",
                icon: <TbBrandJavascript />
            },
            {
                title: "Portfolio V1",
                description: "Built in 2020",
                href: "/work/portfolio-v1",
                icon: <AiOutlineHtml5 />
            },
        ]
    }
]