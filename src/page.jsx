import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import DashboardGrid from './components/DashboardGrid';

export default function Home() {
  return (
    <Layout>
      <Header />
      <DashboardGrid />
    </Layout>
  );
}

