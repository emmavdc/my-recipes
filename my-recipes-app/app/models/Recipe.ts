export interface Recipe {
    id: number;
    title: string;
    description: string;
    servings: number;
    cookingTime: number; // in minutes
    difficulty: string;
    ingredients: string[];
    instructions: string;
    image?: string; // optional image URL
}