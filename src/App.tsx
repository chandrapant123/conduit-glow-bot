import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
import WhatsAppBusinessAPI from "./pages/WhatsAppBusinessAPI";
import BulkWhatsApp from "./pages/BulkWhatsApp";
import AIWhatsAppChatbot from "./pages/AIWhatsAppChatbot";
import RCSMessaging from "./pages/RCSMessaging";
import BulkSMS from "./pages/BulkSMS";
import CustomerSupport from "./pages/solutions/CustomerSupport";
import SalesAutomation from "./pages/solutions/SalesAutomation";
import MarketingAutomation from "./pages/solutions/MarketingAutomation";
import EcommerceAutomation from "./pages/solutions/EcommerceAutomation";
import AIAgents from "./pages/solutions/AIAgents";
import EnterpriseAI from "./pages/solutions/EnterpriseAI";
import EcommerceIndustry from "./pages/industries/EcommerceIndustry";
import RealEstateIndustry from "./pages/industries/RealEstateIndustry";
import HealthcareIndustry from "./pages/industries/HealthcareIndustry";
import EdtechIndustry from "./pages/industries/EdtechIndustry";
import FintechIndustry from "./pages/industries/FintechIndustry";
import RestaurantIndustry from "./pages/industries/RestaurantIndustry";
import TravelIndustry from "./pages/industries/TravelIndustry";
import B2BIndustry from "./pages/industries/B2BIndustry";
import D2CIndustry from "./pages/industries/D2CIndustry";
import InsuranceIndustry from "./pages/industries/InsuranceIndustry";
import WhatsAppAPIProviderIndia from "./pages/seo/WhatsAppAPIProviderIndia";
import WhatsAppMarketingSoftware from "./pages/seo/WhatsAppMarketingSoftware";
import BestWhatsAppCRMAlternative from "./pages/seo/BestWhatsAppCRMAlternative";
import RCSvsSMS from "./pages/seo/RCSvsSMS";
import WhatsAppChatbotFintech from "./pages/seo/WhatsAppChatbotFintech";
import WhatsAppChatbotEcommerce from "./pages/seo/WhatsAppChatbotEcommerce";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPages from "./pages/admin/AdminPages";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminEnquiries from "./pages/admin/AdminEnquiries";
import AdminSeoPages from "./pages/admin/AdminSeoPages";
import SeoPage from "./pages/SeoPage";
import SitemapRedirect from "./pages/SitemapRedirect";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/whatsapp-business-api" element={<WhatsAppBusinessAPI />} />
          <Route path="/bulk-whatsapp" element={<BulkWhatsApp />} />
          <Route path="/ai-whatsapp-chatbot" element={<AIWhatsAppChatbot />} />
          <Route path="/rcs-messaging" element={<RCSMessaging />} />
          <Route path="/bulk-sms" element={<BulkSMS />} />
          <Route path="/solutions/customer-support-automation" element={<CustomerSupport />} />
          <Route path="/solutions/sales-automation" element={<SalesAutomation />} />
          <Route path="/solutions/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/solutions/ecommerce-automation" element={<EcommerceAutomation />} />
          <Route path="/solutions/ai-agents" element={<AIAgents />} />
          <Route path="/enterprise-ai-agents" element={<EnterpriseAI />} />
          <Route path="/whatsapp-automation-for-ecommerce" element={<EcommerceIndustry />} />
          <Route path="/whatsapp-ai-automation-for-real-estate" element={<RealEstateIndustry />} />
          <Route path="/whatsapp-automation-for-healthcare" element={<HealthcareIndustry />} />
          <Route path="/whatsapp-ai-for-edtech" element={<EdtechIndustry />} />
          <Route path="/whatsapp-automation-for-fintech" element={<FintechIndustry />} />
          <Route path="/whatsapp-automation-for-restaurants" element={<RestaurantIndustry />} />
          <Route path="/whatsapp-ai-for-travel-agencies" element={<TravelIndustry />} />
          <Route path="/whatsapp-automation-for-b2b" element={<B2BIndustry />} />
          <Route path="/whatsapp-automation-for-d2c" element={<D2CIndustry />} />
          <Route path="/whatsapp-automation-for-insurance" element={<InsuranceIndustry />} />
          <Route path="/whatsapp-api-provider-india" element={<WhatsAppAPIProviderIndia />} />
          <Route path="/whatsapp-marketing-software" element={<WhatsAppMarketingSoftware />} />
          <Route path="/best-whatsapp-crm-alternative" element={<BestWhatsAppCRMAlternative />} />
          <Route path="/rcs-vs-sms" element={<RCSvsSMS />} />
          <Route path="/whatsapp-chatbot-for-fintech" element={<WhatsAppChatbotFintech />} />
          <Route path="/whatsapp-chatbot-for-ecommerce" element={<WhatsAppChatbotEcommerce />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/pages" element={<AdminPages />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/enquiries" element={<AdminEnquiries />} />
          <Route path="/admin/seo" element={<AdminSeoPages />} />
          <Route path="/:slug" element={<SeoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
