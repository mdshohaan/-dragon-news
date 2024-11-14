import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Category from '../pages/Category';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path:"/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
])

export default router;