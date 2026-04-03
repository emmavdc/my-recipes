export interface Recipe {
    id: string;
    title: string;
    description: string;
    servings: number;
    cookingTime: number; // in minutes
    difficulty: string;
    ingredients: string[];
    instructions: string;
}