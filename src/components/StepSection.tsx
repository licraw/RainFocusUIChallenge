import type { Step } from '../data/mockData';
import { ActionCard } from './ActionCard';
import { EmptyActionCard } from './EmptyActionCard';
import { SummaryCard } from './SummaryCard';

type StepSectionProps = {
  step: Step;
};

export function StepSection({ step }: StepSectionProps) {
  return (
    <section className="step-section">
      <h3 className="step-section__title">
        <strong>{step.titlePrefix}</strong> {step.title}
      </h3>
      {step.summaries ? (
        <div className="step-section__summary-row">
          {step.summaries.map((item) => (
            <SummaryCard item={item} key={`${step.title}-${item.title}-${item.description}`} />
          ))}
        </div>
      ) : null}
      {step.actions ? (
        <div className="step-section__card-grid">
          {step.actions.map((item, index) => (
            <ActionCard item={item} key={`${item.title}-${index}`} />
          ))}
          {step.addLabel ? <EmptyActionCard label={step.addLabel} /> : null}
        </div>
      ) : null}
    </section>
  );
}
