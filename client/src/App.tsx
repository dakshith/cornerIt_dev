import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services/index";
import Contact from "@/pages/contact";
import ITInfrastructure from "@/pages/services/it-infrastructure";
import CloudServices from "@/pages/services/cloud-services";
import Consulting from "@/pages/services/consulting";
import Cybersecurity from "@/pages/services/cybersecurity";
import { useEffect } from "react";

// ScrollToTop component to handle scrolling to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/it-infrastructure" component={ITInfrastructure} />
        <Route path="/services/cloud-services" component={CloudServices} />
        <Route path="/services/consulting" component={Consulting} />
        <Route path="/services/cybersecurity" component={Cybersecurity} />
        <Route path="/contact" component={Contact} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
