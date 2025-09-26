import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardOverview from '@/components/admin/DashboardOverview';
import BookingManagement from '@/components/admin/BookingManagement';
import ClientManagement from '@/components/admin/ClientManagement';
import ServiceManagement from '@/components/admin/ServiceManagement';
import ProductManagement from '@/components/admin/ProductManagement';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'bookings':
        return <BookingManagement />;
      case 'clients':
        return <ClientManagement />;
      case 'services':
        return <ServiceManagement />;
      case 'products':
        return <ProductManagement />;
      case 'staff':
        return <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-white mb-4">Staff Management</h2>
          <p className="text-slate-400">Staff management page coming soon...</p>
        </div>;
      case 'analytics':
        return <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-white mb-4">Analytics</h2>
          <p className="text-slate-400">Analytics page coming soon...</p>
        </div>;
      case 'financials':
        return <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-white mb-4">Financials</h2>
          <p className="text-slate-400">Financial management page coming soon...</p>
        </div>;
      case 'settings':
        return <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
          <p className="text-slate-400">Settings page coming soon...</p>
        </div>;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
};

export default AdminDashboard;
