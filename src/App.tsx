import { useState } from "react";
import { ReactLocation, Router } from '@tanstack/react-location';
import { Outlet } from "react-location";

import { routes } from 'routes'
import { Layout } from "components/Layout";
const location = new ReactLocation();

function App() {
  return (
    <>
      <Router location={location} routes={routes}>
        <Layout />
      </Router>
    </>
  )
}

export default App
