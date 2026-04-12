import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/recipes._index.tsx"),
    route("recipes/:id", "routes/recipe.tsx"),
    //route("recipes/", "routes/recipes._index.tsx"),
] satisfies RouteConfig;

