import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // 根路径渲染 home.tsx
] satisfies RouteConfig;