# Centro Médico Demo Pro v2

Aplicación demo desarrollada en React + Vite, editable en Visual Studio Code y diseñada sin base de datos.

## Módulos incluidos

- Login visual por rol
- Dashboard ejecutivo con gráficos
- Agenda y citas médicas
- Historia clínica demo
- Recetas médicas
- Facturación demo
- Reportes CSV e impresión
- Modo oscuro profesional
- Integración del logo real de ASERFINTEC

## Principios de diseño aplicados

- Separación de responsabilidades por módulos
- Servicios desacoplados para tema y exportación
- Datos demo centralizados en `src/mocks/demoData.js`
- Componentes reutilizables para tarjetas, tablas y encabezados
- Base preparada para migrar posteriormente a API o base de datos

## Ejecución

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
```

## Estructura principal

- `src/components`: componentes reutilizables
- `src/features`: módulos funcionales
- `src/layouts`: diseño principal
- `src/services`: servicios auxiliares
- `src/mocks`: datos demo
- `public/assets`: recursos estáticos
# medicalcenter-web
