import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import Investors from "./pages/Investors";
import InvestorOpportunity from "./pages/InvestorOpportunity";
import MarketResearch from "./pages/MarketResearch";
import AluminumOpportunity from "./pages/AluminumOpportunity";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import IndustryMonitor from "./pages/IndustryMonitor";
import MonitorAdmin from "./pages/MonitorAdmin";

const queryClient = new QueryClient();

const NoIndex = () => (
  <Helmet>
    <meta name="robots" content="noindex, nofollow" />
  </Helmet>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/investor-opportunity" element={<InvestorOpportunity />} />
        <Route path="/market-research" element={<MarketResearch />} />
        <Route path="/aluminum-opportunity" element={<AluminumOpportunity />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/industry-monitor" element={<IndustryMonitor />} />
        <Route path="/industry-monitor/admin" element={<><NoIndex /><MonitorAdmin /></>} />
        <Route path="/auth" element={<><NoIndex /><Auth /></>} />
        <Route path="/reset-password" element={<><NoIndex /><ResetPassword /></>} />
        <Route path="*" element={<><NoIndex /><NotFound /></>} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
