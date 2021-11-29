import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPageUser from '../pages/LoginPage/LoginPageUser';
import LoginPageCompany from '../pages/LoginPage/LoginPageCompany';
import SingUpUserPage from '../pages/SingUpUserPage/SingUpUserPage';
import JobsPage from '../pages/JobsPage/JobsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ProfilesList from '../pages/ProfilesList/ProfilesList';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginDeUsuario" element={<LoginPageUser />} />
        <Route path="/loginDeEmpresa" element={<LoginPageCompany />} />
        <Route path="/cadastro" element={<SingUpUserPage />} />
        <Route path="/vagas" element={<JobsPage />} />
        <Route path="/candidatos" element={<ProfilesList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
