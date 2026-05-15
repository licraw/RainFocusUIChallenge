import { ContentArea } from './ContentArea';
import { Sidebar } from './Sidebar';

export function AppFrame() {
  return (
    <div className="app-frame">
      <Sidebar />
      <ContentArea />
    </div>
  );
}
