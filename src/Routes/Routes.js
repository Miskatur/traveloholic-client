import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/Home/MyReviews/MyReviews";
import Login from "../Pages/Login/Login";
import PlaylistDetails from "../Pages/PlaylistDetails/PlaylistDetails";
import Playlists from "../Pages/Playlists/Playlists";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/playlists',
                element: <Playlists></Playlists>,
                loader: () => fetch(`http://localhost:5000/playlists`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/playlist-details/:id',
                element: <PlaylistDetails></PlaylistDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/playlists/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
])