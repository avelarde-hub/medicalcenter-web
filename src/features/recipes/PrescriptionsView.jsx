import { useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { prescriptions } from '../../mocks/demoData';

export function PrescriptionsView() {
  const [selectedPrescription, setSelectedPrescription] = useState(prescriptions[0]);

  return (
    <section>
      <PageHeader
        title="Recetas médicas"
        description="Emisión y visualización de recetas demo con estructura profesional y espacio para firma médica."
      />

      <div className="grid-2">
        <section className="panel">
          <div className="panel-header">
            <h3>Recetas registradas</h3>
          </div>
          <div className="prescription-list">
            {prescriptions.map((prescription) => (
              <button
                key={prescription.id}
                className={`prescription-item ${selectedPrescription.id === prescription.id ? 'active' : ''}`}
                onClick={() => setSelectedPrescription(prescription)}
              >
                <strong>{prescription.patient}</strong>
                <span>{prescription.date}</span>
                <p>{prescription.doctor}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="panel prescription-preview">
          <div className="panel-header">
            <h3>Vista previa</h3>
            <span className="status-chip">{selectedPrescription.id}</span>
          </div>
          <div className="rx-sheet">
            <img src="/assets/aserfintec-logo.png" alt="ASERFINTEC" className="rx-logo" />
            <h4>Centro Médico Demo</h4>
            <p><strong>Paciente:</strong> {selectedPrescription.patient}</p>
            <p><strong>Médico:</strong> {selectedPrescription.doctor}</p>
            <p><strong>Fecha:</strong> {selectedPrescription.date}</p>
            <div>
              <strong>Medicamentos</strong>
              <ul>
                {selectedPrescription.medications.map((medication) => (
                  <li key={medication}>{medication}</li>
                ))}
              </ul>
            </div>
            <p><strong>Indicaciones:</strong> {selectedPrescription.indications}</p>
            <div className="signature-zone">Firma y sello médico</div>
          </div>
        </section>
      </div>
    </section>
  );
}
