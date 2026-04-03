import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/recipes._index.tsx"),
    //route("recipe/:id", "routes/recipe.tsx"),
] satisfies RouteConfig;

