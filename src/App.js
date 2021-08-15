import Home from './Home'
import { ChakraProvider } from "@chakra-ui/react"

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
    <div className="App">
      < Home  {...pageProps} />
    </div>
    </ChakraProvider>
  );
}

export default App;
