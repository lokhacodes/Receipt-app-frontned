interface ReceiptCompanyProps {
  company: string;
  address: string;
  phone: string;
}

export default function ReceiptCompany({
  company,
  address,
  phone,
}: ReceiptCompanyProps) {
  return (
    <section className="receipt-company">

      <h2 className="receipt-company-name">
        {company}
      </h2>

      <p className="receipt-company-address">
        Address: {address}
      </p>

      <p className="receipt-company-phone">
        Phone: {phone}
      </p>

    </section>
  );
}