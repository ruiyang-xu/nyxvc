import { Outlet } from 'react-router-dom'
import { RouteConfig } from '@/type'
import Header from '@/layout/header'
import Footer from '@/layout/footer'

export default function Layout({ routeConfigs }: { routeConfigs: RouteConfig[] }) {
    console.log(routeConfigs)
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}