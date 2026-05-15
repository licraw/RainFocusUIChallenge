declare namespace React {
  type ReactNode = unknown;

  interface ButtonHTMLAttributes<T> {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: unknown) => void;
    disabled?: boolean;
    [key: string]: unknown;
  }

  interface StrictModeProps {
    children?: ReactNode;
  }

  const StrictMode: (props: StrictModeProps) => unknown;

  function useState<T>(initialValue: T): [T, (value: T | ((currentValue: T) => T)) => void];
}

declare module 'react' {
  export = React;
}

declare module 'react-dom/client' {
  type Root = {
    render(children: unknown): void;
  };

  export function createRoot(container: HTMLElement): Root;
}

declare module 'react/jsx-runtime' {
  export const jsx: unknown;
  export const jsxs: unknown;
  export const Fragment: unknown;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: unknown;
  }

  interface IntrinsicElements {
    [elementName: string]: unknown;
  }
}
