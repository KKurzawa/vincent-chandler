import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Music from './Pages/Music/Music.jsx'
import Videos from './Pages/Videos/Videos.jsx'
import Bio from './Pages/Bio/Bio.jsx'
import Shows from './Pages/Shows/Shows.jsx'
import Photos from './Pages/PhotosGallery/PhotosGallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Music',
        element: <Music />
      },
      {
        path: '/Videos',
        element: <Videos />
      },
      {
        path: '/About',
        element: <Bio />
      },
      {
        path: '/Shows',
        element: <Shows />
      },

      {
        path: '/PhotosGallery',
        element: <Photos />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


