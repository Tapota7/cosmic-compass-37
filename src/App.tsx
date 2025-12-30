import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
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
const NumerologyList = lazy(() => import("./pages/NumerologyList"));
const NumerologyDetail = lazy(() => import("./pages/NumerologyDetail"));
const NumerologyCompatibility = lazy(() => import("./pages/NumerologyCompatibility"));
const PersonalCycles = lazy(() => import("./pages/PersonalCycles"));
const CalculationHistory = lazy(() => import("./pages/CalculationHistory"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AspectsList = lazy(() => import("./pages/AspectsList"));
const AspectDetail = lazy(() => import("./pages/AspectDetail"));
const Transits2026 = lazy(() => import("./pages/Transits2026"));
const Compatibility = lazy(() => import("./pages/Compatibility"));
const Auth = lazy(() => import("./pages/Auth"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Profile = lazy(() => import("./pages/Profile"));
const Consultas = lazy(() => import("./pages/Consultas"));
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
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
                  <Route path="/calculadora" element={<Numerology />} />
                  <Route path="/numeros" element={<NumerologyList />} />
                  <Route path="/numeros/:id" element={<NumerologyDetail />} />
                  <Route path="/compatibilidad-numerologica" element={<NumerologyCompatibility />} />
                  <Route path="/ciclos-personales" element={<PersonalCycles />} />
                  <Route path="/historial" element={<CalculationHistory />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/aspectos" element={<AspectsList />} />
                  <Route path="/aspectos/:id" element={<AspectDetail />} />
                  <Route path="/transitos-2026" element={<Transits2026 />} />
                  <Route path="/compatibilidad" element={<Compatibility />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/favoritos" element={<Favorites />} />
                  <Route path="/perfil" element={<Profile />} />
                  <Route path="/consultas" element={<Consultas />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
