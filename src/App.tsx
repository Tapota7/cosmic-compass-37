import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
const PersonalCycles = lazy(() => import("./pages/PersonalCycles"));
const CalculationHistory = lazy(() => import("./pages/CalculationHistory"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AspectsList = lazy(() => import("./pages/AspectsList"));
const AspectDetail = lazy(() => import("./pages/AspectDetail"));
const Transits2026 = lazy(() => import("./pages/Transits2026"));
const UnifiedCompatibility = lazy(() => import("./pages/UnifiedCompatibility"));
const Auth = lazy(() => import("./pages/Auth"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Profile = lazy(() => import("./pages/Profile"));
const Consultas = lazy(() => import("./pages/Consultas"));
const GrabovoiList = lazy(() => import("./pages/GrabovoiList"));
const GrabovoiDetail = lazy(() => import("./pages/GrabovoiDetail"));
const ReikiList = lazy(() => import("./pages/ReikiList"));
const ReikiDetail = lazy(() => import("./pages/ReikiDetail"));
const ReikiSymbols = lazy(() => import("./pages/ReikiSymbols"));
const ReikiPrinciples = lazy(() => import("./pages/ReikiPrinciples"));
const ReikiHands = lazy(() => import("./pages/ReikiHands"));
const ReikiLevels = lazy(() => import("./pages/ReikiLevels"));
const ReikiChakras = lazy(() => import("./pages/ReikiChakras"));
const ReikiChakraDetail = lazy(() => import("./pages/ReikiChakraDetail"));
const ReikiHistory = lazy(() => import("./pages/ReikiHistory"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
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
                  <Route path="/ciclos-personales" element={<PersonalCycles />} />
                  <Route path="/historial" element={<CalculationHistory />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/aspectos" element={<AspectsList />} />
                  <Route path="/aspectos/:id" element={<AspectDetail />} />
                  <Route path="/transitos-2026" element={<Transits2026 />} />
                  
                  {/* Unified Compatibility */}
                  <Route path="/autoconocimiento/compatibilidad" element={<UnifiedCompatibility />} />
                  {/* Redirects for backwards compatibility */}
                  <Route path="/compatibilidad" element={<Navigate to="/autoconocimiento/compatibilidad" replace />} />
                  <Route path="/compatibilidad-numerologica" element={<Navigate to="/autoconocimiento/compatibilidad" replace />} />
                  
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/favoritos" element={<Favorites />} />
                  <Route path="/perfil" element={<Profile />} />
                  <Route path="/consultas" element={<Consultas />} />
                  <Route path="/grabovoi" element={<GrabovoiList />} />
                  <Route path="/grabovoi/:id" element={<GrabovoiDetail />} />
                  
                  {/* Reiki routes */}
                  <Route path="/reiki" element={<ReikiList />} />
                  <Route path="/reiki/historia" element={<ReikiHistory />} />
                  <Route path="/reiki/simbolos" element={<ReikiSymbols />} />
                  <Route path="/reiki/principios" element={<ReikiPrinciples />} />
                  <Route path="/reiki/posiciones" element={<ReikiHands />} />
                  <Route path="/reiki/niveles" element={<ReikiLevels />} />
                  <Route path="/reiki/chakras" element={<ReikiChakras />} />
                  <Route path="/reiki/chakras/:id" element={<ReikiChakraDetail />} />
                  <Route path="/reiki/:id" element={<ReikiDetail />} />
                  
                  {/* Blog routes */}
                  <Route path="/blog" element={<BlogList />} />
                  <Route path="/blog/categoria/:id" element={<BlogCategory />} />
                  <Route path="/blog/:slug" element={<BlogArticle />} />
                  
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
