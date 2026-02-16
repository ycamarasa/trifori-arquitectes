import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Projects = lazy(() => import("./pages/Projects"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

import "./App.css";

function DocumentLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <DocumentLanguage />
      <Header />

      <main>
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
