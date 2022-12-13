import React from 'react';
import {useRoutes} from "react-router-dom"
import HomeScreen from '../HomeScreen';
import SingleBook from '../Books/SingleBook';
import UploadPage from '../UploadPage/UploadPage';

const AllRoutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path:"/books/:id/details",
            element:<SingleBook/>,
        },
        {
            path:"upload",
            element:<UploadPage/>
        }
    ])



  return element
}

export default AllRoutes