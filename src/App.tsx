import { Routes, Route } from 'react-router-dom'
import React, { useMemo, useEffect } from 'react'
import config from '@/config'
import Layout from '@/layout'
import { themeChange } from 'theme-change';
import { RouteConfig } from "@/type"

const buildRoute = ({ route, parentKey }: { route: RouteConfig, parentKey?: string }) => {
  const routeKey = parentKey ? `${parentKey}/${route.name}` : route.name

  if (route.component) {
    return <Route key={routeKey} path={route.to} element={
      <React.Suspense >
        <route.component />
      </React.Suspense>
    }
      index={route.to === "/"}
    />
  }

  if (route.children) {
    return (
      <Route key={routeKey}>
        {...route.children.map((child) => buildRoute({ route: child, parentKey: route.name }))}
      </Route>
    )
  }
}

function App() {
  const { routeConfig } = config
  const memoizedRouteConfigs = useMemo(
    () =>
      routeConfig.map((route) => {
        return buildRoute({ route })
      }),
    [routeConfig]
  )
  // 初始化主题修改
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout routeConfigs={routeConfig} />}>
          {...memoizedRouteConfigs}
        </Route>
      </Routes>
    </>
  )
}

export default App
