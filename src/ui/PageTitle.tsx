export interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="page-title-container">
      <h2 className="page-title">{title}</h2>
      <h2 className="sr-only">{title}</h2>
    </div>
  );
}
