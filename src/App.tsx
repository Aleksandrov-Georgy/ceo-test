import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Cup from './pages/Components/Cup';
import Favorites from './pages/Favorites';
import { useGetAllProductsQuery } from './Redux/RTKQuery/getAllProducts.api';
import { useEffect } from 'react';
import { useActions } from './Redux/hooks/actions';
import ProductPage from './pages/ProductPage';

function App() {
  const { isSuccess, data, isLoading, isError } = useGetAllProductsQuery();
  const { addItemsAll } = useActions();

  useEffect(() => {
    isSuccess && addItemsAll(data);
  }, [addItemsAll, data, isSuccess]);

  return (
    <>
      <Cup />
      <Routes>
        <Route
          path={'/'}
          element={
            <Home
              isSuccess={isSuccess}
              isLoading={isLoading}
              isError={isError}
            />
          }
        />
        <Route
          path={'/favorites'}
          element={<Favorites />}
        />
        <Route
          path={'/product/:id'}
          element={<ProductPage />}
        />
      </Routes>
    </>
  );
}

export default App;
