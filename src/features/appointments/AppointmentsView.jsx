import { useMemo, useState } from 'react';
import { DataTable } from '../../components/DataTable';
import { PageHeader } from '../../components/PageHeader';
import { appointments, doctors, specialties } from '../../mocks/demoData';

export function AppointmentsView({ currentUser }) {
  const [form, setForm] = useState({
    patient: currentUser?.role === 'patient' ? currentUser.name : '',
    specialty: 'Psiquiatría',
    doctor: 'Dra. Andrea Suárez',
    date: '2026-04-02',
    time: '10:00',
    channel: 'Presencial'
  });
  const [message, setMessage] = useState('');

  const availableDoctors = useMemo(
    () => doctors.filter((doctor) => doctor.specialty === form.specialty),
    [form.specialty]
  );

  const rows = appointments.map((item) => ({
    id: item.id,
    paciente: item.patient,
    medico: item.doctor,
    especialidad: item.specialty,
    fecha: `${item.date} ${item.time}`,
    modalidad: item.channel,
    estado: item.status
  }));

  const handleChange = (field, value) => {
    const nextForm = { ...form, [field]: value };
    if (field === 'specialty') {
      nextForm.doctor = doctors.find((doctor) => doctor.specialty === value)?.name || '';
    }
    setForm(nextForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Cita demo registrada para ${form.patient || 'Paciente'} con ${form.doctor} el ${form.date} a las ${form.time}.`);
  };

  return (
    <section>
      <PageHeader
        title="Agenda y citas médicas"
        description="Administración de citas para usuarios y personal médico, con priorización de especialidades críticas como psiquiatría."
      />

      <div className="grid-2">
        <form className="panel form-panel" onSubmit={handleSubmit}>
          <div className="panel-header">
            <h3>Agendar nueva cita</h3>
          </div>
          <label>
            Paciente
            <input value={form.patient} onChange={(event) => handleChange('patient', event.target.value)} placeholder="Nombre del paciente" />
          </label>
          <label>
            Especialidad
            <select value={form.specialty} onChange={(event) => handleChange('specialty', event.target.value)}>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </label>
          <label>
            Médico
            <select value={form.doctor} onChange={(event) => handleChange('doctor', event.target.value)}>
              {availableDoctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
              ))}
            </select>
          </label>
          <div className="form-row">
            <label>
              Fecha
              <input type="date" value={form.date} onChange={(event) => handleChange('date', event.target.value)} />
            </label>
            <label>
              Hora
              <input type="time" value={form.time} onChange={(event) => handleChange('time', event.target.value)} />
            </label>
          </div>
          <label>
            Modalidad
            <select value={form.channel} onChange={(event) => handleChange('channel', event.target.value)}>
              <option>Presencial</option>
              <option>En línea</option>
            </select>
          </label>
          <button className="primary-button" type="submit">Guardar cita demo</button>
          {message ? <div className="notification success">{message}</div> : null}
        </form>

        <section className="panel quick-panel">
          <div className="panel-header">
            <h3>Accesos por rol</h3>
          </div>
          <div className="role-cards">
            <article>
              <strong>Administrador</strong>
              <p>Supervisa agenda, productividad, cartera y reportes.</p>
            </article>
            <article>
              <strong>Médico</strong>
              <p>Consulta su agenda, historia clínica y emite recetas.</p>
            </article>
            <article>
              <strong>Usuario</strong>
              <p>Agenda citas, consulta historial básico y comprobantes.</p>
            </article>
          </div>
        </section>
      </div>

      <DataTable
        columns={[
          { key: 'paciente', label: 'Paciente' },
          { key: 'medico', label: 'Médico' },
          { key: 'especialidad', label: 'Especialidad' },
          { key: 'fecha', label: 'Fecha / Hora' },
          { key: 'modalidad', label: 'Modalidad' },
          { key: 'estado', label: 'Estado' }
        ]}
        rows={rows}
      />
    </section>
  );
}
