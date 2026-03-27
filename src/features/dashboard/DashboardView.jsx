import { StatCard } from '../../components/StatCard';
import { PageHeader } from '../../components/PageHeader';
import { BarChart } from '../../components/BarChart';
import { DonutChart } from '../../components/DonutChart';
import { doctors, specialtyDistribution, stats, weeklyCare } from '../../mocks/demoData';
import { formatCurrency } from '../../utils/formatters';

const donutData = specialtyDistribution.map((item, index) => ({
  ...item,
  color: ['#11c5bf', '#2f7cf6', '#9b6df2', '#25c06d', '#f2ad4b'][index]
}));

export function DashboardView() {
  return (
    <section>
      <PageHeader
        title="Tablero ejecutivo"
        description="Seguimiento integral de la operación médica, agenda, productividad clínica y facturación diaria."
      />

      <div className="stats-grid">
        <StatCard title="Citas del día" value={stats.appointmentsToday} description="Agenda activa en tiempo real" accent="primary" />
        <StatCard title="Pacientes registrados" value={stats.totalPatients} description="Base demo consolidada" accent="secondary" />
        <StatCard title="Médicos activos" value={stats.activeDoctors} description="Profesionales disponibles" accent="success" />
        <StatCard title="Facturación mensual" value={formatCurrency(stats.monthlyRevenue)} description="Ingresos proyectados" accent="warning" />
        <StatCard title="Satisfacción" value={`${stats.satisfaction}%`} description="Encuestas de atención" accent="success" />
        <StatCard title="Psiquiatría" value={stats.psychiatryAppointments} description="Citas del mes" accent="secondary" />
      </div>

      <div className="grid-2">
        <BarChart title="Atenciones por día" data={weeklyCare} />
        <DonutChart title="Distribución por especialidad" data={donutData} />
      </div>

      <section className="panel">
        <div className="panel-header">
          <h3>Equipo médico destacado</h3>
        </div>
        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.id}>
              <strong>{doctor.name}</strong>
              <span>{doctor.specialty}</span>
              <p>{doctor.availability}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
