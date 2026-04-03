import { Link } from 'react-router';
import RecipeCard from '~/components/recipe-card';
import mockRecipes from '~/data/mock-recipes';

export default function RecipeListIndex() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">All My Recipes</h2>
        <p className="text-gray-600">Discover my delicious collection</p>
      </div>

      {mockRecipes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No recipes yet... Add one! 👀</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="block hover:no-underline"
            >
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}