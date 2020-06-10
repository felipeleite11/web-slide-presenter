import React from 'react'
import { ToastContainer } from 'react-toastify'

import Routes from './routes'

import './styles/app.css'
import './styles/toast.css'

export default function App() {
    return (
        <>
            <Routes />

            <ToastContainer 
                position="top-center" 
                autoClose={3000}
                pauseOnHover={false}
            />
        </>
    )
}
