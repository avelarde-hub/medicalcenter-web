export function PageHeader({ title, description, actions }) {
  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">Centro Médico Inteligente</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {actions ? <div className="page-actions">{actions}</div> : null}
    </header>
  );
}
