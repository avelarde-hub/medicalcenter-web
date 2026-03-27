export function StatCard({ title, value, description, accent }) {
  return (
    <article className={`stat-card accent-${accent || 'primary'}`}>
      <div>
        <p className="eyebrow">{title}</p>
        <h3>{value}</h3>
      </div>
      <p className="muted-text">{description}</p>
    </article>
  );
}
