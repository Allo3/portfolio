import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Accueil from "./pages/home/accueil";
import NotFound from "./pages/Error/error";
import Project from "./pages/project/project";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/project/:slug" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
