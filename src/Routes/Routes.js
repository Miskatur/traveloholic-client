import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AddContent from "../Pages/AddContent/AddContent";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import UpdateReview from "../Pages/Home/MyReviews/MyReview/UpdateReview/UpdateReview";
import MyReviews from "../Pages/Home/MyReviews/MyReviews";
import Login from "../Pages/Login/Login";
import PlaylistDetails from "../Pages/PlaylistDetails/PlaylistDetails";
import Playlists from "../Pages/Playlists/Playlists";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoute";

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
                loader: () => fetch(`https://traveloholic-server.vercel.app/playlists`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                loader: ({ params }) => fetch(`https://traveloholic-server.vercel.app/playlists/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addcontent',
                element: <PrivateRoutes><AddContent></AddContent></PrivateRoutes>
            },
            {
                path: `/edit-review/:id`,
                loader: ({ params }) => fetch(`https://traveloholic-server.vercel.app/comments/${params.id}`),
                element: <UpdateReview></UpdateReview>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])