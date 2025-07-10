import React from "react";
import Header from "../header";
import Footer from "../footer";
import dynamic from 'next/dynamic';

// Dynamically load the chat component with SSR disabled
const N8nChat = dynamic(() => import('@/pages/api/n8nChat'), {
  ssr: false, // Disable SSR to avoid window/document errors
});

const Wrapper = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
             <Header /> 
            <main className="flex-grow">{children}</main>
            <N8nChat/>
            <Footer />
        </div>
    );
};

export default Wrapper;
