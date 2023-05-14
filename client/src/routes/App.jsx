import './App.css';
import {BrowserRouter} from "react-router-dom";
import Layout from '../subcomponents/Layout';
import AppRouter from './AppRouter';
import { AppContextProvider } from './AppContext.js';
//import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// const theme = extendTheme({
//   styles: {
//     global: () => ({
//       body: {
//         bg: "",
//         color: ""
//       }
//     })
//   }
// });


function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        {/* <ChakraProvider theme={theme}> */}
          <Layout>
              <AppRouter/>
          </Layout>
        {/* </ChakraProvider> */}
      </AppContextProvider>
      
    </BrowserRouter>
          
  );
}




export default App;
