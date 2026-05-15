const eventLogoUrl = 'https://www.figma.com/api/mcp/asset/a6536056-607f-4267-b5c3-ef4291ededc5';
const orgIconUrl = 'https://www.figma.com/api/mcp/asset/8fac0a53-dc43-40ae-b4c5-f9d734a991c7';
const personA = 'https://www.figma.com/api/mcp/asset/ead3c872-dfe7-4716-bb16-0e52f8892210';
const personB = 'https://www.figma.com/api/mcp/asset/057aa8a2-b3fa-473d-9db9-66d53f7661af';
const personC = 'https://www.figma.com/api/mcp/asset/0a9c983b-153d-4bfc-9d33-55c19ef9fb2c';

export function BrandMark() {
  return (
    <div className="brand-mark" aria-label="RainFocus">
      <span>r</span>
      <span>f</span>
      <span>.</span>
    </div>
  );
}

export function EventLogo() {
  return <img className="event-logo" src={eventLogoUrl} alt="" />;
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
