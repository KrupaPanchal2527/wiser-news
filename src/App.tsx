import { chakra, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import WiserHeader from "./components/wiserHeader";
import MainPage from "./pages/main.page";
import NewsArticlePage from "./pages/newsArticle.page";
import theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <chakra.main>
        <BrowserRouter>
          <WiserHeader />
          <ScrollToTop />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path=":id" element={<NewsArticlePage />} />
          </Routes>
        </BrowserRouter>
      </chakra.main>
    </ChakraProvider>
  );
};

export default App;
