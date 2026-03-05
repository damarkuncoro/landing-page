import React from "react";

/**
 * Search Form component for navbar search functionality.
 * Provides a text input with submit button.
 */
export interface SearchFormProps {
  /** Placeholder text */
  placeholder: string;
  /** Current input value */
  value: string;
  /** Input change handler */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Form submit handler */
  onSubmit: (e: React.FormEvent) => void;
  /** Full width mode */
  fullWidth?: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  fullWidth = false,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", width: "100%", maxWidth: fullWidth ? "100%" : "300px" }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
          padding: "0.5rem 1rem",
          border: "1px solid #e5e7eb",
          borderRadius: "0.25rem 0 0 0.25rem",
          fontSize: "0.875rem",
        }}
        aria-label="Search"
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "0 0.25rem 0.25rem 0",
          cursor: "pointer",
        }}
        aria-label="Search"
      >
        🔍
      </button>
    </form>
  );
};

SearchForm.displayName = "SearchForm";

export default SearchForm;