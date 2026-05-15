import { BrandMark, OrgLogo } from './Assets';

export function SidebarRail() {
  return (
    <aside className="sidebar-rail" aria-label="Application">
      <div className="sidebar-rail__top">
        <div className="sidebar-rail__logo">
          <BrandMark />
        </div>
        <div className="sidebar-rail__org">
          <OrgLogo />
        </div>
      </div>
      <div className="sidebar-rail__user" aria-label="Current user">
        FL
      </div>
    </aside>
  );
}
