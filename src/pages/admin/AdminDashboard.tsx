import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardOverview from '@/components/admin/dashboard/DashboardOverview';
import BookingManagement from '@/components/admin/bookings/BookingManagement';
import ClientManagement from '@/components/admin/clients/ClientManagement';
import ProductManagement from '@/components/admin/products/ProductManagement';

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
      case 'products':
        return <ProductManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage}>
      {renderPage()}
    </AdminLayout>
  );
};

export default AdminDashboard;
