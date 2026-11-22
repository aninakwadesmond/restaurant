import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootNavigation from './components/homeComponent/RootNavigation';
import Restaurants from './pages/Restaurants';
import { Provider } from 'react-redux';
import store from './stores/store';

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
