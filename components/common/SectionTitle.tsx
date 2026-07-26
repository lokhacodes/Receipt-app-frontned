import Link from "next/link";

interface Props {
  title: string;
  linkText?: string;
  href?: string;
}

export default function SectionTitle({
  title,
  linkText,
  href,
}: Props) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        {title}
      </h2>

      {linkText &&
        (href ? (
          <Link
            href={href}
            className="section-link"
          >
            {linkText}
          </Link>
        ) : (
          <button className="section-link">
            {linkText}
          </button>
        ))}
    </div>
  );
}