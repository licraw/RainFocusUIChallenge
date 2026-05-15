import type { SummaryItem } from '../data/mockData';

type SummaryCardProps = {
  item: SummaryItem;
};

export function SummaryCard({ item }: SummaryCardProps) {
  return (
    <article className="summary-card">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </article>
  );
}
