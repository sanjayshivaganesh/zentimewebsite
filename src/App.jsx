import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Download from "@/pages/Download";
import FAQ from "@/pages/FAQ";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/download" element={<Download />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
