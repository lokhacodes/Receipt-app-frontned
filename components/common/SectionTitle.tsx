interface Props {
  title: string;
  linkText?: string;
}

export default function SectionTitle({
  title,
  linkText,
}: Props) {
  return (
    <div className="section-header">

      <h2 className="section-title">
        {title}
      </h2>

      {linkText && (
        <button className="section-link">
          {linkText}
        </button>
      )}

    </div>
  );
}