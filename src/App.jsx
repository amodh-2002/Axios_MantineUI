import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card1 from "./components/Card";
import { MantineProvider } from "@mantine/core";
import Grid from "./components/Grid";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/axios",
          element: <Grid />,
        },
        {
          path: "/card",
          element: <Card1 />,
        },
      ],
    },
  ]);

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
