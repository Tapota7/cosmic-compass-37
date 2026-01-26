import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import { Skeleton } from "@/components/ui/skeleton";

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
const CoursesComingSoon = lazy(() => import("./pages/CoursesComingSoon"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const BlogAdmin = lazy(() => import("./pages/admin/BlogAdmin"));
const BlogEditor = lazy(() => import("./pages/admin/BlogEditor"));
const ZodiacImagesAdmin = lazy(() => import("./pages/admin/ZodiacImagesAdmin"));
const AdminGuard = lazy(() => import("./components/admin/AdminGuard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Optimized loading fallback - faster and lighter
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="text-6xl mb-4 animate-float">🌌</div>
      <div className="h-1 w-24 mx-auto bg-primary/20 rounded overflow-hidden">
        <div 
          className="h-full bg-primary rounded animate-shimmer"
          style={{ width: '40%' }} 
        />
      </div>
    </div>
  </div>
);

// Skeleton for list pages
const ListSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <Skeleton className="h-10 w-64 mx-auto mb-4" />
    <Skeleton className="h-6 w-96 mx-auto mb-8" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="h-48 rounded-2xl" />
      ))}
    </div>
  </div>
);

// Skeleton for detail pages
const DetailSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <Skeleton className="h-8 w-24 mb-6" />
    <Skeleton className="h-12 w-48 mx-auto mb-4" />
    <Skeleton className="h-32 w-32 mx-auto rounded-full mb-6" />
    <div className="max-w-2xl mx-auto space-y-3">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-5/6" />
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
                  <Route path="/signos" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <ZodiacList />
                    </Suspense>
                  } />
                  <Route path="/signos/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <ZodiacDetail />
                    </Suspense>
                  } />
                  <Route path="/casas" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <HousesList />
                    </Suspense>
                  } />
                  <Route path="/casas/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <HouseDetail />
                    </Suspense>
                  } />
                  <Route path="/planetas" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <PlanetsList />
                    </Suspense>
                  } />
                  <Route path="/planetas/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <PlanetDetail />
                    </Suspense>
                  } />
                  <Route path="/calculadora" element={<Numerology />} />
                  <Route path="/numeros" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <NumerologyList />
                    </Suspense>
                  } />
                  <Route path="/numeros/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <NumerologyDetail />
                    </Suspense>
                  } />
                  <Route path="/ciclos-personales" element={<PersonalCycles />} />
                  <Route path="/historial" element={<CalculationHistory />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/aspectos" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <AspectsList />
                    </Suspense>
                  } />
                  <Route path="/aspectos/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <AspectDetail />
                    </Suspense>
                  } />
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
                  <Route path="/grabovoi" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <GrabovoiList />
                    </Suspense>
                  } />
                  <Route path="/grabovoi/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <GrabovoiDetail />
                    </Suspense>
                  } />
                  
                  {/* Reiki routes */}
                  <Route path="/reiki" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <ReikiList />
                    </Suspense>
                  } />
                  <Route path="/reiki/historia" element={<ReikiHistory />} />
                  <Route path="/reiki/simbolos" element={<ReikiSymbols />} />
                  <Route path="/reiki/principios" element={<ReikiPrinciples />} />
                  <Route path="/reiki/posiciones" element={<ReikiHands />} />
                  <Route path="/reiki/niveles" element={<ReikiLevels />} />
                  <Route path="/reiki/chakras" element={<ReikiChakras />} />
                  <Route path="/reiki/chakras/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <ReikiChakraDetail />
                    </Suspense>
                  } />
                  <Route path="/reiki/:id" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <ReikiDetail />
                    </Suspense>
                  } />
                  
                  {/* Courses */}
                  <Route path="/cursos" element={<CoursesComingSoon />} />
                  
                  {/* Blog routes */}
                  <Route path="/blog" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <BlogList />
                    </Suspense>
                  } />
                  <Route path="/blog/categoria/:id" element={
                    <Suspense fallback={<ListSkeleton />}>
                      <BlogCategory />
                    </Suspense>
                  } />
                  <Route path="/blog/:slug" element={
                    <Suspense fallback={<DetailSkeleton />}>
                      <BlogArticle />
                    </Suspense>
                  } />
                  
                  {/* Admin routes */}
                  <Route path="/admin/blog" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <AdminGuard><BlogAdmin /></AdminGuard>
                    </Suspense>
                  } />
                  <Route path="/admin/blog/nuevo" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <AdminGuard><BlogEditor /></AdminGuard>
                    </Suspense>
                  } />
                  <Route path="/admin/blog/editar/:id" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <AdminGuard><BlogEditor /></AdminGuard>
                    </Suspense>
                  } />
                  <Route path="/admin/zodiac-images" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <AdminGuard><ZodiacImagesAdmin /></AdminGuard>
                    </Suspense>
                  } />
                  
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
