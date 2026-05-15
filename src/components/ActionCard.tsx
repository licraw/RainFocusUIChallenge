import type { ActionItem } from '../data/mockData';
import { Icon } from './Icon';

type ActionCardProps = {
  item: ActionItem;
};

export function ActionCard({ item }: ActionCardProps) {
  return (
    <article className="action-card">
      <div className="action-card__header">
        <Icon name={item.icon} />
        <h4>{item.title}</h4>
      </div>
      <p>{item.description}</p>
    </article>
  );
}
