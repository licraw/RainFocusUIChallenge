import type { NavItem } from '../data/mockData';

type NavigationListProps = {
  items: NavItem[];
};

export function NavigationList({ items }: NavigationListProps) {
  return (
    <nav className="navigation-list" aria-label="Event sections">
      {items.map((item) => (
        <div className="navigation-list__group" key={item.label}>
          <button
            className={`navigation-list__item${item.active ? ' is-active' : ''}`}
            type="button"
            aria-current={item.active ? 'page' : undefined}
          >
            <span className="navigation-list__dot" aria-hidden="true" />
            <span>{item.label}</span>
          </button>
          {item.children ? (
            <ul className="navigation-list__children" aria-label={`${item.label} subsections`}>
              {item.children.map((child) => (
                <li key={child}>
                  <button type="button">{child}</button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
