
import { lazy } from "react"

import { RouteConfig } from "@/type"

const routeConfig: RouteConfig[] = [
    {
        name: "home",
        to: "/",
        component: lazy(() => import("@/pages/home"))
    },
    {
        name: "404",
        to: "/404",
        component: lazy(() => import("@/pages/404"))
    },
    {
        name: "about",
        to: "/about",
        component: lazy(() => import("@/pages/about"))
    },
    {
        name: 'portfolios',
        to: '/portfolios',
        component: lazy(() => import('@/pages/portfolios'))
    },
    {
        name: 'team',
        to: '/team',
        component: lazy(() => import('@/pages/team'))
    },
    {
        name: 'contact',
        to: "/contact",
        component: lazy(() => import('@/pages/contact'))
    }
]

export default {
    routeConfig
}