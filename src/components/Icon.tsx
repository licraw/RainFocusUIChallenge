type IconProps = {
  name: 'search' | 'workflow' | 'plus' | 'portal';
  className?: string;
};

export function Icon({ name, className = '' }: IconProps) {
  return <span aria-hidden="true" className={`icon icon--${name} ${className}`} />;
}
