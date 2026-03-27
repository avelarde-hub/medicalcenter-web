import { PageHeader } from '../../components/PageHeader';
import { clinicalRecords } from '../../mocks/demoData';

export function ClinicalHistoryView() {
  return (
    <section>
      <PageHeader
        title="Historia clínica demo"
        description="Consulta estructurada de antecedentes clínicos, diagnósticos y notas de seguimiento sin persistencia en base de datos."
      />

      <div className="stack-grid">
        {clinicalRecords.map((record) => (
          <article className="panel clinical-card" key={record.id}>
            <div className="panel-header">
              <h3>{record.patient}</h3>
              <span className="status-chip">{record.id}</span>
            </div>
            <div className="clinical-grid">
              <p><strong>Edad:</strong> {record.age} años</p>
              <p><strong>Especialidad:</strong> {record.specialty}</p>
              <p><strong>Médico tratante:</strong> {record.doctor}</p>
              <p><strong>Última visita:</strong> {record.lastVisit}</p>
              <p><strong>Diagnóstico:</strong> {record.diagnosis}</p>
            </div>
            <div className="clinical-notes">
              <strong>Notas médicas</strong>
              <p>{record.notes}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
