import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { Head } from '@inertiajs/react';
import ErrorBoundary from '../Component/ErrorBoundary';
export default function Layout({ children }) {
  return (
    <main>
      {/* <ErrorBoundary> */}
      <BrowserRouter>
        <Head title={`${children.props.pageTitle} | Corporate Thalam`} />
          <Header/>
            <div className="dashboardContainer bg-[#F2F2F2]  pb-[100px]">
              {children}
            </div>
          <Footer/>
      </BrowserRouter>
      {/* </ErrorBoundary> */}
    </main>
  )
}
