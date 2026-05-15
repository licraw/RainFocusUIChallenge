export type NavItem = {
  label: string;
  active?: boolean;
  children?: string[];
};

export type SummaryItem = {
  title: string;
  description: string;
};

export type ActionItem = {
  title: string;
  description: string;
  icon: 'workflow' | 'portal';
};

export type Step = {
  titlePrefix: string;
  title: string;
  summaries?: SummaryItem[];
  actions?: ActionItem[];
  addLabel?: string;
};

export const eventSummary = {
  title: 'RainFocus Summit',
  date: 'December 15th',
  location: 'Lehi, Utah',
  sidebarLocation: 'Lehi, UT',
};

export const navigationItems: NavItem[] = [
  { label: 'Guide' },
  {
    label: 'Attendees',
    active: true,
    children: ['Attendees', 'Attendee types', 'Packages', 'Reg codes', 'Discounts'],
  },
  { label: 'Content' },
  { label: 'Exhibitors' },
];

export const setupSteps: Step[] = [
  {
    titlePrefix: 'Step 1:',
    title: 'Base settings.',
    summaries: [
      { title: 'General', description: 'Define Attendee types & attributes' },
      {
        title: 'Title',
        description:
          'Description that explains the value goes here. Description that explains the value goes here.',
      },
      {
        title: 'Title',
        description:
          'Description that explains the value goes here. Description that explains the value goes here.',
      },
    ],
  },
  {
    titlePrefix: 'Step 2:',
    title: 'Build registration workflows.',
    actions: [
      {
        title: 'Attendee Registration',
        description: 'Start by creating a general registration workflow',
        icon: 'workflow',
      },
      {
        title: 'Attendee Registration',
        description: 'Start by creating a general registration workflow',
        icon: 'workflow',
      },
      {
        title: 'Attendee Registration',
        description: 'Start by creating a general registration workflow',
        icon: 'workflow',
      },
    ],
    addLabel: 'Add Registration Workflow',
  },
  {
    titlePrefix: 'Step 3:',
    title: 'Design post-registration experiences.',
    actions: [
      {
        title: 'Attendee Portal',
        description:
          "Manage the portal that attendees will see after they've register for your event.",
        icon: 'portal',
      },
    ],
  },
];
