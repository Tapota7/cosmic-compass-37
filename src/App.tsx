import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const ZodiacList = lazy(() => import("./pages/ZodiacList"));
const ZodiacDetail = lazy(() => import("./pages/ZodiacDetail"));
const HousesList = lazy(() => import("./pages/HousesList"));
const HouseDetail = lazy(() => import("./pages/HouseDetail"));
const PlanetsList = lazy(() => import("./pages/PlanetsList"));
const PlanetDetail = lazy(() => import("./pages/PlanetDetail"));
const Numerology = lazy(() => import("./pages/Numerology"));
const AspectsList = lazy(() => import("./pages/AspectsList"));
const AspectDetail = lazy(() => import("./pages/AspectDetail"));
const Transits2026 = lazy(() => import("./pages/Transits2026"));
const Compatibility = lazy(() => import("./pages/Compatibility"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl float-animation mb-4">🌌</div>
      <p className="text-muted-foreground">Cargando...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signos" element={<ZodiacList />} />
              <Route path="/signos/:id" element={<ZodiacDetail />} />
              <Route path="/casas" element={<HousesList />} />
              <Route path="/casas/:id" element={<HouseDetail />} />
              <Route path="/planetas" element={<PlanetsList />} />
              <Route path="/planetas/:id" element={<PlanetDetail />} />
              <Route path="/numerologia" element={<Numerology />} />
              <Route path="/aspectos" element={<AspectsList />} />
              <Route path="/aspectos/:id" element={<AspectDetail />} />
              <Route path="/transitos-2026" element={<Transits2026 />} />
              <Route path="/compatibilidad" element={<Compatibility />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
