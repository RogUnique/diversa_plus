import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SingUpUserPage from '../pages/SingUpUserPage/SingUpUserPage';
import JobsPage from '../pages/JobsPage/JobsPage';
import CompanyProfilePage from '../pages/CompanyProfilePage/CompanyProfilePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SingUpUserPage />} />
        <Route path="/vagas" element={<JobsPage />} />
        <Route path="/empresas" element={<CompanyProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
