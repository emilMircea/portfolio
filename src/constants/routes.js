import React from 'react'
import AuthCase from '../components/AuthCase'
import DataCase from '../components/DataCase'
import EcommCase from '../components/EcommCase'

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
    path: "/auth",
    exact: true,
    main: () => <AuthCase />
  },
  {
    path: "/data",
    main: () => <DataCase />
  }
];

export default routes
