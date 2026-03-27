import { useState } from 'react';

const roles = [
  { value: 'admin', label: 'Administrador' },
  { value: 'doctor', label: 'Médico' },
  { value: 'patient', label: 'Usuario' }
];

export function LoginView({ defaultRole, onLogin, onToggleTheme, theme }) {
  const [role, setRole] = useState(defaultRole);

  return (
    <div className="login-screen">
      <section className="login-hero">
        <div className="hero-glow" />
        <img src="/assets/aserfintec-logo.png" alt="ASERFINTEC" className="login-logo" />
        <p className="eyebrow">Demo de alto nivel</p>
        <h1>Plataforma Integral para Centro Médico</h1>
        <p>
          Solución demostrativa para gestión clínica, agendamiento, recetas, historia clínica,
          facturación y reportes ejecutivos.
        </p>
        <div className="hero-badges">
          <span>React + Vite</span>
          <span>Arquitectura modular</span>
          <span>Principios SOLID</span>
        </div>
      </section>

      <section className="login-card panel">
        <p className="eyebrow">Acceso demo</p>
        <h2>Iniciar sesión</h2>
        <label>
          Correo institucional
          <input type="email" value="demo@centromedico.ec" readOnly />
        </label>
        <label>
          Contraseña
          <input type="password" value="123456" readOnly />
        </label>
        <label>
          Rol de ingreso
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            {roles.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <button className="primary-button full-width" onClick={() => onLogin(role)}>
          Ingresar al sistema
        </button>
        <button className="secondary-button full-width" onClick={onToggleTheme}>
          {theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        </button>
      </section>
    </div>
  );
}
