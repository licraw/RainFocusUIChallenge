import orgIconUrl from '../assets/org-logo.png';
import brandMarkUrl from '../assets/brand-mark.svg';
import personA from '../assets/person-portal-a.svg';
import personB from '../assets/person-portal-b.svg';
import personC from '../assets/person-portal-c.svg';

export function BrandMark() {
  return (
    <div className="brand-mark" aria-label="RainFocus">
      <img src={brandMarkUrl} alt="" />
    </div>
  );
}

export function EventLogo() {
  return <img className="event-logo" src={orgIconUrl} alt="" />;
}

export function OrgLogo() {
  return <img className="org-logo" src={orgIconUrl} alt="" />;
}

export function PersonPortalIcon() {
  return (
    <span className="person-portal" aria-hidden="true">
      <img src={personA} alt="" />
      <img src={personB} alt="" />
      <img src={personC} alt="" />
    </span>
  );
}
