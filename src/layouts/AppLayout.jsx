const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'appointments', label: 'Citas médicas' },
  { id: 'clinical-history', label: 'Historia clínica' },
  { id: 'prescriptions', label: 'Recetas médicas' },
  { id: 'billing', label: 'Facturación' },
  { id: 'reports', label: 'Reportes' },
  { id: 'settings', label: 'Configuración' }
];

export function AppLayout({ children, activeModule, currentUser, theme, onNavigate, onToggleTheme, onLogout }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-card">
          <img src="/assets/aserfintec-logo.png" alt="ASERFINTEC" className="brand-logo" />
          <div>
            <h2>ASERFINTEC</h2>
            <p>Constructor tecnológico</p>
          </div>
        </div>

        <nav className="menu-list">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeModule === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="profile-card">
            <strong>{currentUser?.name}</strong>
            <span>{currentUser?.specialty}</span>
          </div>
          <button className="secondary-button full-width" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          </button>
          <button className="ghost-button full-width" onClick={onLogout}>Cerrar sesión</button>
        </div>
      </aside>

      <main className="content-area">
        <div className="topbar">
          <div>
            <strong>Centro Médico Demo</strong>
            <span>Operación sin base de datos | Arquitectura modular</span>
          </div>
          <div className="status-chip">Rol activo: {currentUser?.role}</div>
        </div>
        {children}
      </main>
    </div>
  );
}
