import { setupSteps } from '../data/mockData';
import { PersonPortalIcon } from './Assets';
import { HeaderBlock } from './HeaderBlock';
import { StepSection } from './StepSection';

export function ContentArea() {
  return (
    <main className="content-area">
      <HeaderBlock />
      <section className="intro-section" aria-labelledby="setup-guide-title">
        <h2 id="setup-guide-title">Event setup guide</h2>
        <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
      </section>
      <section className="module-section" aria-labelledby="attendee-heading">
        <header className="module-section__header">
          <PersonPortalIcon />
          <h2 id="attendee-heading">Attendee</h2>
        </header>
        {setupSteps.map((step) => (
          <StepSection step={step} key={step.title} />
        ))}
      </section>
    </main>
  );
}
