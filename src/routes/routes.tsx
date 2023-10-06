import RootLayout from "../components/RootLayout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Porfolio";
import Contact from "../pages/Contact";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];
