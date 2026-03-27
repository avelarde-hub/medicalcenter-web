import { useMemo, useState } from 'react';
import { AppLayout } from './layouts/AppLayout';
import { LoginView } from './features/auth/LoginView';
import { DashboardView } from './features/dashboard/DashboardView';
import { AppointmentsView } from './features/appointments/AppointmentsView';
import { ClinicalHistoryView } from './features/clinical/ClinicalHistoryView';
import { PrescriptionsView } from './features/recipes/PrescriptionsView';
import { BillingView } from './features/billing/BillingView';
import { ReportsView } from './features/reports/ReportsView';
import { SettingsView } from './features/settings/SettingsView';
import { users } from './mocks/demoData';
import { ThemeService } from './services/ThemeService';

const initialRole = 'admin';

export default function App() {
  const [theme, setTheme] = useState(ThemeService.getInitialTheme());
  const [session, setSession] = useState(null);
  const [activeModule, setActiveModule] = useState('dashboard');

  const currentUser = useMemo(() => {
    if (!session) return null;
    return users.find((user) => user.role === session.role) ?? users[0];
  }, [session]);

  const handleLogin = (role) => {
    const normalizedRole = role || initialRole;
    setSession({ role: normalizedRole, loginAt: new Date().toISOString() });
  };

  const handleLogout = () => {
    setSession(null);
    setActiveModule('dashboard');
  };

  const handleToggleTheme = () => {
    const nextTheme = ThemeService.toggle(theme);
    setTheme(nextTheme);
  };

  if (!session) {
    return (
      <LoginView
        defaultRole={initialRole}
        theme={theme}
        onLogin={handleLogin}
        onToggleTheme={handleToggleTheme}
      />
    );
  }

  const moduleProps = { currentUser, theme };

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardView {...moduleProps} />;
      case 'appointments':
        return <AppointmentsView {...moduleProps} />;
      case 'clinical-history':
        return <ClinicalHistoryView {...moduleProps} />;
      case 'prescriptions':
        return <PrescriptionsView {...moduleProps} />;
      case 'billing':
        return <BillingView {...moduleProps} />;
      case 'reports':
        return <ReportsView {...moduleProps} />;
      case 'settings':
        return <SettingsView {...moduleProps} onToggleTheme={handleToggleTheme} />;
      default:
        return <DashboardView {...moduleProps} />;
    }
  };

  return (
    <AppLayout
      activeModule={activeModule}
      currentUser={currentUser}
      theme={theme}
      onLogout={handleLogout}
      onNavigate={setActiveModule}
      onToggleTheme={handleToggleTheme}
    >
      {renderModule()}
    </AppLayout>
  );
}
