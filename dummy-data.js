import { IoCalculatorOutline } from "react-icons/io5"
import { AiOutlineSchedule } from "react-icons/ai"
import { TbShirtSport } from "react-icons/tb"
import { IoCarSportOutline } from "react-icons/io5"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandJavascript } from "react-icons/tb"
import { GrTicket } from "react-icons/gr"
import { BsWatch } from "react-icons/bs"

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
            {
                title: "Pricing Portal",
                description: "Price & Monitor",
                href: "/work/pricing-portal",
                icon: <GrTicket />
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
            },
            {
                title: "IWC Clone",
                description: "IWC Watches Clone",
                href: "/work/iwc-clone",
                icon: <BsWatch />
            }
        ]
    },
    {
        title: "Portfolio Archive",
        projects: [
            {
                title: "Portfolio v2",
                description: "Built in 2021",
                href: "http://v2.localhost:3002",
                icon: <TbBrandJavascript />,
                target: '_blank'
            },
            {
                title: "Portfolio v1",
                description: "Built in 2020",
                href: "http://v1.localhost:3001",
                icon: <AiOutlineHtml5 />,
                target: '_blank'
            }
        ]
    }
]