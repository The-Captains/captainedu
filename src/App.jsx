import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import QuestionPapers from "./pages/QuestionPapers";
import Bursaries from "./pages/Bursaries";
import Prospectus from "./pages/Prospectus";
import Apply from "./pages/Apply";
import ApsCalculator from "./pages/ApsCalculator";
import { HelmetProvider } from "react-helmet-async";
import Analytics, {initGA} from "./components/Analytics.jsx";

initGA();

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Analytics /> {/* This tracks all page views automatically */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="question-papers" element={<QuestionPapers />} />
          <Route path="bursaries" element={<Bursaries />} />
          <Route path="prospectus" element={<Prospectus />} />
          <Route path="apply" element={<Apply />} />
          <Route path="aps-calculator" element={<ApsCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
