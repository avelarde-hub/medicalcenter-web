import { PageHeader } from '../../components/PageHeader';
import { invoices } from '../../mocks/demoData';
import { formatCurrency } from '../../utils/formatters';

export function BillingView() {
  const totalBilled = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidInvoices = invoices.filter((invoice) => invoice.status === 'Pagada').length;

  return (
    <section>
      <PageHeader
        title="Facturación demo"
        description="Control básico de comprobantes emitidos, estado de cobro y resumen de ingresos para la administración médica."
      />

      <div className="stats-grid compact-grid">
        <article className="stat-card accent-warning">
          <p className="eyebrow">Total facturado</p>
          <h3>{formatCurrency(totalBilled)}</h3>
          <p className="muted-text">Periodo actual demo</p>
        </article>
        <article className="stat-card accent-success">
          <p className="eyebrow">Facturas pagadas</p>
          <h3>{paidInvoices}</h3>
          <p className="muted-text">Comprobantes conciliados</p>
        </article>
      </div>

      <div className="invoice-grid">
        {invoices.map((invoice) => (
          <article className="panel invoice-card" key={invoice.id}>
            <div className="panel-header">
              <h3>{invoice.id}</h3>
              <span className={`status-chip ${invoice.status === 'Pagada' ? 'success' : 'warning'}`}>{invoice.status}</span>
            </div>
            <p><strong>Paciente:</strong> {invoice.patient}</p>
            <p><strong>Concepto:</strong> {invoice.concept}</p>
            <p><strong>Fecha de emisión:</strong> {invoice.issueDate}</p>
            <p><strong>Método de pago:</strong> {invoice.paymentMethod}</p>
            <p className="invoice-amount">{formatCurrency(invoice.amount)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
