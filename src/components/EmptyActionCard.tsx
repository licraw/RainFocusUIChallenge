import { Icon } from './Icon';

type EmptyActionCardProps = {
  label: string;
};

export function EmptyActionCard({ label }: EmptyActionCardProps) {
  return (
    <button className="empty-action-card" type="button">
      <Icon name="plus" />
      <span>{label}</span>
    </button>
  );
}
