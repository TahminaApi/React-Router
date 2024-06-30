import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/Sign-up',
        element: <SignUp></SignUp>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },

    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  }
]);

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
