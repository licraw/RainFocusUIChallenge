import { Icon } from './Icon';

type SearchFieldProps = {
  placeholder?: string;
};

export function SearchField({ placeholder = 'Search' }: SearchFieldProps) {
  return (
    <label className="search-field">
      <Icon name="search" />
      <span className="search-field__text">{placeholder}</span>
    </label>
  );
}
