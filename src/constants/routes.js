import React from 'react'
import AuthCase from '../components/AuthCase'
import DataCase from '../components/DataCase'
import EcommCase from '../components/EcommCase'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <AuthCase />
  },
  {
    path: "/auth",
    exact: true,
    main: () => <AuthCase />
  },
  {
    path: "/data",
    main: () => <DataCase />
  },
  {
    path: "/ecomm",
    main: () => <EcommCase />
  }
];

export default routes
