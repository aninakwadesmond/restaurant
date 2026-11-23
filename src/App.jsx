import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootNavigation from './components/homeComponent/RootNavigation';
import Restaurants from './pages/Restaurants';
import { Provider } from 'react-redux';
import store from './stores/store';
import Details from './pages/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootNavigation />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Restaurants /> },
      { path: 'details/:id', element: <Details /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
