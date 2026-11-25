import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootNavigation from './components/homeComponent/RootNavigation';
import Restaurants from './pages/Restaurants';
import { Provider } from 'react-redux';
import store from './stores/store';
import Details from './pages/Details';
import Reservation from './pages/Reservation';
import Bookings from './pages/Bookings';
import Booked from './pages/Booked';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { action as LoginAction } from './components/logins/Signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootNavigation />,
    action: LoginAction,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Restaurants /> },
      { path: 'details/:id', element: <Details /> },
      { path: 'dashboard', element: <Reservation /> },
      { path: 'booking/:id', element: <Bookings /> },
      { path: 'booked/:id', element: <Booked /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
