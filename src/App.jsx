import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootNavigation from './components/homeComponent/RootNavigation';
import Restaurants from './pages/Restaurants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootNavigation />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Restaurants /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
