import React from 'react'

import Directory from './../../components/directory/directory.component'

import {HomePageContainer} from './homepage.styles'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const HomePage = () => (
    <HomePageContainer >
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />

      <Directory />
      
    </HomePageContainer>
)


export default HomePage