const Input = ({
  placeholder,
  className,
  name,
  value,
  ariaLabel,
  handleChange,
  handleOnBlur,
  autoFocus,
  onHandleChange,
}) => {
  return (
    <input
      type="text"
      className={`w-full bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 ${className}`}
      placeholder={placeholder}
      aria-label={ariaLabel}
      name={name}
      value={value}
      onChange={(event) => {
        handleChange && handleChange(event);
        onHandleChange && onHandleChange(event);
      }}
      onBlur={handleOnBlur}
      autoFocus={autoFocus}
    />
  );
};

export default Input;
