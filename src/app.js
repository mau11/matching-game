import React from 'react'
import { createRoot } from "react-dom/client";
import Layout from './components/Layout.jsx'

const root = createRoot(document.getElementById('app'))
root.render(<Layout />)
