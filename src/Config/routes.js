import React from "react";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import ChessBoard from "../Pages/ChessBoard";

const routes = [
  {
    title: "Login",
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    isPrivate: true,
  },
  {
    title: "Page not found",
    path: "/*",
    component: NotFound,
    isPrivate: true,
  },
  {
    title: "Chessboard",
    path: "/game/*",
    component: ChessBoard,
    isPrivate: true,
  },
];

export default routes;
