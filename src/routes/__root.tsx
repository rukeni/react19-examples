import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Root } from '../components/Root'

export const Route = createRootRouteWithContext<{}>()({
  component: Root,
}) 