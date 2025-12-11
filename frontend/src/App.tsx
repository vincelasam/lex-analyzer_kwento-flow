import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./components/layout/MainLayout";

// Pages
import AnalyzerPage from "./pages/AnalyzerPage";
// import SyntaxPage from './pages/SyntaxPage'; // Ready for when you need it!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout acts as a wrapper. 
          Everything inside this Route tag will render *inside* the layout's <Outlet /> 
        */}
        <Route element={<MainLayout />}>
          {/* Default Path: The Lexical Analyzer */}
          <Route path="/" element={<AnalyzerPage />} />

          {/* Future Pages example: */}
          {/* <Route path="/syntax" element={<SyntaxPage />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
