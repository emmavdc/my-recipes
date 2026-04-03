import { useParams, Link } from 'react-router';
import mockRecipes from '~/data/mock-recipes';
import { Clock, Users, AlertCircle } from 'lucide-react';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recipe not found</h2>
        <Link
          to="/recipes"
          className="mt-4 inline-block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/recipes"
        className="mb-6 inline-block px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
      >
        ← Back
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        {recipe.image && (
          <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover" />
        )}

        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-gray-600 text-lg mb-4">{recipe.description}</p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-blue-900 font-medium">{recipe.cookingTime} min</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900 font-medium">{recipe.servings} servings</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                recipe.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                recipe.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                <span className="font-medium">{recipe.difficulty}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}