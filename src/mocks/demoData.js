export const users = [
  {
    id: 'USR-001',
    name: 'Alberto Velarde',
    role: 'admin',
    specialty: 'Gestión Administrativa',
    email: 'admin@centromedico.demo'
  },
  {
    id: 'MED-011',
    name: 'Dra. Andrea Suárez',
    role: 'doctor',
    specialty: 'Psiquiatría',
    email: 'asuarez@centromedico.demo'
  },
  {
    id: 'PAC-221',
    name: 'María Pérez',
    role: 'patient',
    specialty: 'Paciente',
    email: 'mperez@centromedico.demo'
  }
];

export const specialties = [
  'Medicina General',
  'Pediatría',
  'Cardiología',
  'Dermatología',
  'Psiquiatría',
  'Ginecología',
  'Traumatología'
];

export const doctors = [
  { id: 'DOC-01', name: 'Dr. Ricardo León', specialty: 'Medicina General', availability: 'Lun - Vie / 08:00 - 13:00' },
  { id: 'DOC-02', name: 'Dra. Andrea Suárez', specialty: 'Psiquiatría', availability: 'Lun - Vie / 10:00 - 18:00' },
  { id: 'DOC-03', name: 'Dr. Carlos Medina', specialty: 'Cardiología', availability: 'Mar - Sáb / 09:00 - 15:00' },
  { id: 'DOC-04', name: 'Dra. Paula Jara', specialty: 'Pediatría', availability: 'Lun - Vie / 07:30 - 14:30' }
];

export const appointments = [
  { id: 'APT-1001', patient: 'María Pérez', doctor: 'Dra. Andrea Suárez', specialty: 'Psiquiatría', date: '2026-03-30', time: '10:30', status: 'Confirmada', channel: 'En línea' },
  { id: 'APT-1002', patient: 'Luis Andrade', doctor: 'Dr. Ricardo León', specialty: 'Medicina General', date: '2026-03-30', time: '09:00', status: 'Pendiente', channel: 'Presencial' },
  { id: 'APT-1003', patient: 'Ana Torres', doctor: 'Dr. Carlos Medina', specialty: 'Cardiología', date: '2026-03-31', time: '11:45', status: 'Atendida', channel: 'Presencial' }
];

export const clinicalRecords = [
  {
    id: 'HCL-001',
    patient: 'María Pérez',
    age: 34,
    diagnosis: 'Trastorno de ansiedad generalizada',
    specialty: 'Psiquiatría',
    doctor: 'Dra. Andrea Suárez',
    lastVisit: '2026-03-20',
    notes: 'Paciente estable. Se recomienda mantener seguimiento mensual y reforzar higiene del sueño.'
  },
  {
    id: 'HCL-002',
    patient: 'Ana Torres',
    age: 28,
    diagnosis: 'Control preventivo',
    specialty: 'Medicina General',
    doctor: 'Dr. Ricardo León',
    lastVisit: '2026-03-22',
    notes: 'Sin novedades clínicas relevantes. Continuar monitoreo semestral.'
  }
];

export const prescriptions = [
  {
    id: 'REC-010',
    patient: 'María Pérez',
    doctor: 'Dra. Andrea Suárez',
    date: '2026-03-20',
    medications: ['Sertralina 50 mg / 1 tableta diaria', 'Melatonina 3 mg / 1 tableta nocturna'],
    indications: 'Control en 30 días. Evaluar adherencia al tratamiento.'
  },
  {
    id: 'REC-011',
    patient: 'Luis Andrade',
    doctor: 'Dr. Ricardo León',
    date: '2026-03-18',
    medications: ['Ibuprofeno 400 mg / cada 8 horas por 3 días'],
    indications: 'Tomar con alimentos. Regresar si el dolor persiste.'
  }
];

export const invoices = [
  {
    id: 'FAC-2026-001',
    patient: 'María Pérez',
    concept: 'Consulta Psiquiatría',
    amount: 45,
    status: 'Pagada',
    issueDate: '2026-03-20',
    paymentMethod: 'Tarjeta'
  },
  {
    id: 'FAC-2026-002',
    patient: 'Luis Andrade',
    concept: 'Consulta Medicina General',
    amount: 25,
    status: 'Pendiente',
    issueDate: '2026-03-28',
    paymentMethod: 'Por definir'
  }
];

export const reportDefinitions = [
  { id: 'RPT-01', name: 'Citas por especialidad', owner: 'Administración', format: 'CSV / Impresión' },
  { id: 'RPT-02', name: 'Pacientes atendidos por médico', owner: 'Coordinación Médica', format: 'CSV / Impresión' },
  { id: 'RPT-03', name: 'Facturación diaria', owner: 'Caja y Finanzas', format: 'CSV / Impresión' }
];

export const stats = {
  appointmentsToday: 38,
  totalPatients: 1240,
  activeDoctors: 18,
  monthlyRevenue: 18450,
  satisfaction: 96,
  psychiatryAppointments: 42
};

export const weeklyCare = [
  { label: 'Lun', value: 24 },
  { label: 'Mar', value: 31 },
  { label: 'Mié', value: 28 },
  { label: 'Jue', value: 36 },
  { label: 'Vie', value: 41 },
  { label: 'Sáb', value: 16 }
];

export const specialtyDistribution = [
  { label: 'General', value: 30 },
  { label: 'Psiquiatría', value: 22 },
  { label: 'Pediatría', value: 18 },
  { label: 'Cardiología', value: 15 },
  { label: 'Otras', value: 15 }
];
