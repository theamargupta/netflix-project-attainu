import React, { Suspense } from 'react';
import AppRoute from '../Router';
import Loader from '../Components/Loader';
import './index.css';

export default () => (
  <Suspense fallback={<Loader />}>
    <AppRoute />
  </Suspense>
);
