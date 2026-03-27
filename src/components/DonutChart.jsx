export function DonutChart({ title, data }) {
  const total = data.reduce((accumulator, item) => accumulator + item.value, 0);
  let currentAngle = 0;

  const gradientStops = data
    .map((item) => {
      const start = (currentAngle / total) * 100;
      currentAngle += item.value;
      const end = (currentAngle / total) * 100;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(', ');

  return (
    <section className="panel chart-panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="donut-wrapper">
        <div className="donut" style={{ background: `conic-gradient(${gradientStops})` }}>
          <div className="donut-inner">
            <strong>{total}%</strong>
            <span>Distribución</span>
          </div>
        </div>
        <div className="legend-list">
          {data.map((item) => (
            <div className="legend-item" key={item.label}>
              <span className="legend-dot" style={{ background: item.color }} />
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
