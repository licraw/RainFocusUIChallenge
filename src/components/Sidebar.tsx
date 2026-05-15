import { eventSummary, navigationItems } from '../data/mockData';
import { NavigationList } from './NavigationList';
import { SearchField } from './SearchField';
import { SidebarRail } from './SidebarRail';

export function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRail />
      <aside className="sidebar__panel" aria-label="Event navigation">
        <header className="sidebar__header">
          <h2>{eventSummary.title}</h2>
        </header>
        <p className="sidebar__details">
          <span>{eventSummary.sidebarLocation}</span>
          <span>{eventSummary.date}</span>
        </p>
        <div className="sidebar__search">
          <SearchField />
        </div>
        <NavigationList items={navigationItems} />
      </aside>
    </div>
  );
}
