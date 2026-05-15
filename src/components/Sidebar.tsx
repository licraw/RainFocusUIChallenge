import React from 'react';
import { eventSummary, navigationItems } from '../data/mockData';
import { NavigationList } from './NavigationList';
import { SearchField } from './SearchField';
import { SidebarRail } from './SidebarRail';

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="sidebar">
      <SidebarRail />
      <button
        className="sidebar__toggle"
        type="button"
        aria-controls="event-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>
          <strong>{eventSummary.title}</strong>
          <small>
            {eventSummary.sidebarLocation} - {eventSummary.date}
          </small>
        </span>
        <span className="sidebar__toggle-icon" aria-hidden="true" />
      </button>
      <aside
        className={`sidebar__panel${isOpen ? ' is-open' : ''}`}
        id="event-navigation"
        aria-label="Event navigation"
      >
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
