import ExpenseCard from "./ExpenseCard";

const expenses = [
  {
    id: 1,
    title: "Lunch",
    merchant: "Annanovas",
    date: "June 29, 2026",
    amount: 520,
    category: "Foods",
    report: true,
  },
];

export default function ExpenseList() {
  return (
    <section className="expense-list">

      {expenses.map((expense) => (

        <ExpenseCard
          key={expense.id}
          {...expense}
        />

      ))}

    </section>
  );
}