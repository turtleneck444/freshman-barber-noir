import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardOverview from '@/components/admin/dashboard/DashboardOverview';
import BookingManagement from '@/components/admin/bookings/BookingManagement';
import ClientManagement from '@/components/admin/clients/ClientManagement';
import ProductManagement from '@/components/admin/products/ProductManagement';
import ServiceManagement from '@/components/admin/services/ServiceManagement';
import StaffManagement from '@/components/admin/staff/StaffManagement';
import FinancialsManagement from '@/components/admin/financials/FinancialsManagement';
import AnalyticsManagement from '@/components/admin/analytics/AnalyticsManagement';
import SettingsManagement from '@/components/admin/settings/SettingsManagement';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardOverview onNavigate={setCurrentPage} />;
      case 'bookings':
        return <BookingManagement />;
      case 'clients':
        return <ClientManagement />;
      case 'services':
        return <ServiceManagement />;
      case 'products':
        return <ProductManagement />;
      case 'staff':
        return <StaffManagement />;
      case 'analytics':
        return <AnalyticsManagement />;
      case 'financials':
        return <FinancialsManagement />;
      case 'settings':
        return <SettingsManagement />;
      default:
        return <DashboardOverview onNavigate={setCurrentPage} />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
};

export default AdminDashboard;
