import AdminCarCard from "@/components/admin/admincarcard";
import Sidebar from "@/components/admin/sidebar"; // Ensure this path is correct

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />
      <AdminCarCard />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p>Welcome to the admin panel.</p>
      </div>
    </div>
  );
}
