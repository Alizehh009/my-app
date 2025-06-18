import React from 'react';
import Layout from './app/components/Layout';
import Header from './components/Header';
import DashboardGrid from './components/DashboardGrid';
// import * from '@/t'

export default function Home() {
  return (
    <Layout>
      <Header />
      <DashboardGrid />
    </Layout>
  );
}

