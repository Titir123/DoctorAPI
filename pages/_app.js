import Wrapper from "@/layout/wrapper/wrapper";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { Provider } from "react-redux";
import { store } from "@/toolkit/store";


const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <>
            
            <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Wrapper>
                    <Component {...pageProps} />
                    <ToastContainer />
                </Wrapper>
                </Provider>
            </QueryClientProvider>
            
        </>
    );
}
