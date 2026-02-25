import AdminLayout from "@/components/admin/AdminLayout";
import { FileText, BookOpen, Settings, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  { title: "Pages & SEO", desc: "Manage page content, meta titles, descriptions, and keywords", icon: FileText, href: "/admin/pages" },
  { title: "Blog Posts", desc: "Create, edit, and publish blog articles", icon: BookOpen, href: "/admin/blog" },
  { title: "Site Settings", desc: "Update header, footer, menu, and global settings", icon: Settings, href: "/admin/settings" },
  { title: "View Site", desc: "Open the live website in a new tab", icon: Globe, href: "/", external: true },
];

const AdminDashboard = () => (
  <AdminLayout>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <Link
          key={c.title}
          to={c.href}
          {...(c.external ? { target: "_blank" } : {})}
          className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group"
        >
          <c.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-display font-bold text-foreground mb-1">{c.title}</h3>
          <p className="text-sm text-muted-foreground">{c.desc}</p>
        </Link>
      ))}
    </div>
  </AdminLayout>
);

export default AdminDashboard;
