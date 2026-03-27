import { ExportService } from '../../services/ExportService';
import { appointments, invoices, reportDefinitions } from '../../mocks/demoData';
import { PageHeader } from '../../components/PageHeader';

export function ReportsView() {
  const exportAppointments = () => ExportService.downloadCsv('reporte-citas.csv', appointments);
  const exportBilling = () => ExportService.downloadCsv('reporte-facturacion.csv', invoices);

  return (
    <section>
      <PageHeader
        title="Reportes y analítica"
        description="Generación rápida de reportes demo en CSV y salida a impresión para revisión administrativa o médica."
        actions={
          <>
            <button className="primary-button" onClick={exportAppointments}>Exportar citas</button>
            <button className="secondary-button" onClick={exportBilling}>Exportar facturación</button>
            <button className="ghost-button" onClick={ExportService.printPage}>Imprimir vista</button>
          </>
        }
      />

      <div className="report-grid">
        {reportDefinitions.map((report) => (
          <article className="panel report-card" key={report.id}>
            <span className="eyebrow">{report.id}</span>
            <h3>{report.name}</h3>
            <p><strong>Responsable:</strong> {report.owner}</p>
            <p><strong>Salida:</strong> {report.format}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
