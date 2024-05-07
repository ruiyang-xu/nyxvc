import React, { LazyExoticComponent } from "react"
export type RouteConfig = {
    /**
     * 懒加载组件或者外链地址
     */
    component?: LazyExoticComponent<React.ComponentType<unknown>>
    /**
     * 显示名称
     */
    name: string
    /**
     * 路由地址
     */
    to?: string
    /**
     * 外链地址
     */
    href?: string
    /**
     * 规定用户等级，如果是数组，表示只有在数组中的用户等级的时候才能访问。
     * 如果是数字，表示只要用户等级大于等于这个数字就可以访问
     */
    userLevel?: number | number[]
    /**
     * 图标url或者图标组件
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: React.ReactNode
    /**
     * 子集路由
     */
    children?: RouteConfig[]
};