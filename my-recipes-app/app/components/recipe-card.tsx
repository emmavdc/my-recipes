import { Clock } from 'lucide-react';
import type { Recipe } from '~/models/recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
      {/* Image */}
      <div className="w-full h-48 bg-gradient-to-br from-orange-300 to-amber-300 flex items-center justify-center">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-5xl">🍳</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{recipe.title}</h3>

        {/* Footer info */}
        <div className="flex justify-between items-center pt-3 border-t">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime}m</span>
          </div>
          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-800">
            {recipe.difficulty}
          </div>
        </div>
      </div>
    </div>
  );
}