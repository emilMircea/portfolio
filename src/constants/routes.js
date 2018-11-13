import React from 'react'
// import AuthCase from '../components/AuthCase'
import DataCase from '../components/DataCase'
import EcommCase from '../components/EcommCase'
// import NotFound from '../components/NotFound'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <EcommCase />
  },
  {
    path: "/ecomm",
    main: () => <EcommCase />
  },
  {
    path: "/data",
    main: () => <DataCase />
  },
  // {
    //   path: "/auth",
    //   exact: true,
    //   main: () => <AuthCase />
    // },
  // {
  //   path: "",
  //   main: () => <NotFound />
  // }
];

export default routes
