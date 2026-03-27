export function BarChart({ title, data }) {
  const maxValue = Math.max(...data.map((item) => item.value), 1);

  return (
    <section className="panel chart-panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="bar-chart">
        {data.map((item) => (
          <div className="bar-item" key={item.label}>
            <div className="bar-track">
              <div className="bar-fill" style={{ height: `${(item.value / maxValue) * 100}%` }} />
            </div>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
