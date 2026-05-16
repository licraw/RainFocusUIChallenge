import { Icon } from './Icon';

type SearchFieldProps = {
  placeholder?: string;
};

export function SearchField({ placeholder = 'Search' }: SearchFieldProps) {
  return (
    <div className="search-field">
      <Icon name="search" />
      <input aria-label="Search event navigation" placeholder={placeholder} type="search" />
    </div>
  );
}
