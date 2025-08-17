import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
               <button onClick={generateRecommendations} style={{ margin: '10px 0', padding: '5px 10px' }}></button>
               Generate Recommendations
              </button>
              <FavoritesList />
              <RecommendationsList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
}

export default App;
