export type Recipe = {
    id: number;
    title: string;
    description: string;
    servings: number;
    cookingTime: string;
    difficulty: string;
    ingredients: string[];
    instructions: string;
    image: string;
};