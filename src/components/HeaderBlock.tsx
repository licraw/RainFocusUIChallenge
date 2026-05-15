import { eventSummary } from '../data/mockData';
import { EventLogo } from './Assets';
import { Button } from './Button';

export function HeaderBlock() {
  return (
    <header className="header-block">
      <div className="header-block__media">
        <EventLogo />
      </div>
      <div className="header-block__copy">
        <h1>{eventSummary.title}</h1>
        <p>{eventSummary.date}</p>
        <p>{eventSummary.location}</p>
      </div>
      <Button className="header-block__action">Edit event</Button>
    </header>
  );
}
