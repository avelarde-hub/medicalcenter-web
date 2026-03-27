import { PageHeader } from '../../components/PageHeader';
import { formatRole } from '../../utils/formatters';

export function SettingsView({ currentUser, theme, onToggleTheme }) {
  return (
    <section>
      <PageHeader
        title="Configuración"
        description="Preferencias visuales y datos del rol activo dentro de la demostración."
      />

      <div className="grid-2">
        <section className="panel">
          <div className="panel-header">
            <h3>Perfil activo</h3>
          </div>
          <p><strong>Nombre:</strong> {currentUser?.name}</p>
          <p><strong>Rol:</strong> {formatRole(currentUser?.role)}</p>
          <p><strong>Especialidad:</strong> {currentUser?.specialty}</p>
          <p><strong>Correo:</strong> {currentUser?.email}</p>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Apariencia</h3>
          </div>
          <p>Tema actual: <strong>{theme === 'dark' ? 'Oscuro profesional' : 'Claro corporativo'}</strong></p>
          <button className="primary-button" onClick={onToggleTheme}>
            {theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          </button>
        </section>
      </div>
    </section>
  );
}
