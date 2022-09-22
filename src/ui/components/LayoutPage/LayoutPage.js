export default function LayoutPage({ children, title }) {
  return (
    <div className="layout-page">
      <p className="text-5xl">{title} page</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}
