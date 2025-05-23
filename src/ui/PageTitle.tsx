export interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="about-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
      <h2 className="page-title">{title}</h2>
      <h2 className="sr-only">{title}</h2>
    </div>
  );
}
