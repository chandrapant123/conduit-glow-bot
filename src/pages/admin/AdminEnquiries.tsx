import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  use_case: string | null;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  new: "bg-primary/20 text-primary",
  contacted: "bg-accent/20 text-accent",
  closed: "bg-muted text-muted-foreground",
};

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const { toast } = useToast();

  const fetchEnquiries = async () => {
    const { data } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false });
    setEnquiries((data as Enquiry[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchEnquiries(); }, []);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("enquiries").update({ status }).eq("id", id);
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status } : e));
    if (selected?.id === id) setSelected({ ...selected, status });
    toast({ title: `Status updated to ${status}` });
  };

  const deleteEnquiry = async (id: string) => {
    await supabase.from("enquiries").delete().eq("id", id);
    setEnquiries(enquiries.filter(e => e.id !== id));
    setSelected(null);
    toast({ title: "Enquiry deleted" });
  };

  if (loading) return <AdminLayout><p className="text-muted-foreground">Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-glass-border">
          <h3 className="font-display font-bold text-foreground">Enquiries ({enquiries.length})</h3>
        </div>
        {enquiries.length === 0 ? (
          <p className="p-8 text-center text-muted-foreground">No enquiries yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-glass-border text-muted-foreground text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Company</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e) => (
                  <tr key={e.id} className="border-b border-glass-border hover:bg-muted/20 transition-colors">
                    <td className="p-3 text-foreground font-medium">{e.name}</td>
                    <td className="p-3 text-muted-foreground">{e.email}</td>
                    <td className="p-3 text-muted-foreground">{e.phone || "—"}</td>
                    <td className="p-3 text-muted-foreground">{e.company || "—"}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[e.status] || statusColors.new}`}>{e.status}</span>
                    </td>
                    <td className="p-3 text-muted-foreground">{format(new Date(e.created_at), "MMM d, yyyy")}</td>
                    <td className="p-3 flex gap-1">
                      <Button size="sm" variant="ghost" onClick={() => setSelected(e)}><Eye className="h-4 w-4" /></Button>
                      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => deleteEnquiry(e.id)}><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-glass-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">Enquiry from {selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Email:</span><p className="text-foreground">{selected.email}</p></div>
                <div><span className="text-muted-foreground">Phone:</span><p className="text-foreground">{selected.phone || "—"}</p></div>
                <div><span className="text-muted-foreground">Company:</span><p className="text-foreground">{selected.company || "—"}</p></div>
                <div><span className="text-muted-foreground">Date:</span><p className="text-foreground">{format(new Date(selected.created_at), "MMM d, yyyy HH:mm")}</p></div>
              </div>
              {selected.use_case && (
                <div className="text-sm"><span className="text-muted-foreground">Use Case:</span><p className="text-foreground mt-1">{selected.use_case}</p></div>
              )}
              <div className="flex gap-2">
                <Button size="sm" onClick={() => updateStatus(selected.id, "new")} variant={selected.status === "new" ? "default" : "outline"}>New</Button>
                <Button size="sm" onClick={() => updateStatus(selected.id, "contacted")} variant={selected.status === "contacted" ? "default" : "outline"}>Contacted</Button>
                <Button size="sm" onClick={() => updateStatus(selected.id, "closed")} variant={selected.status === "closed" ? "default" : "outline"}>Closed</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminEnquiries;
