type IconProps = {
  name: 'search' | 'workflow' | 'plus' | 'portal';
  className?: string;
};

export function Icon({ name, className = '' }: IconProps) {
  if (name === 'search') {
    return (
      <svg
        aria-hidden="true"
        className={`icon icon--${name} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5033 9.50335H9.97665L9.78998 9.32335C10.4433 8.56335 10.8366 7.57668 10.8366 6.50335C10.8366 4.11001 8.89665 2.17001 6.50332 2.17001C4.10998 2.17001 2.16998 4.11001 2.16998 6.50335C2.16998 8.89668 4.10998 10.8367 6.50332 10.8367C7.57665 10.8367 8.56332 10.4433 9.32332 9.79001L9.50332 9.97668V10.5033L12.8366 13.83L13.83 12.8367L10.5033 9.50335ZM6.50332 9.50335C4.84332 9.50335 3.50332 8.16335 3.50332 6.50335C3.50332 4.84335 4.84332 3.50335 6.50332 3.50335C8.16332 3.50335 9.50332 4.84335 9.50332 6.50335C9.50332 8.16335 8.16332 9.50335 6.50332 9.50335Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === 'workflow') {
    return (
      <svg
        aria-hidden="true"
        className={`icon icon--${name} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === 'plus') {
    return (
      <svg
        aria-hidden="true"
        className={`icon icon--${name} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === 'portal') {
    return (
      <svg
        aria-hidden="true"
        className={`icon icon--${name} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
      >
        <path
          d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return <span aria-hidden="true" className={`icon icon--${name} ${className}`} />;
}
