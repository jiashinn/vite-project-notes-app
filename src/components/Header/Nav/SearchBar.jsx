const SearchBar = ({ onSearch, web }) => {
  return (
    <div className="relative cursor-pointer">
      <input
        className={
          web
            ? "w-12 h-12 absolute -top-6 -right-4 bg-transparent  focus:w-40 px-4 z-40 rounded-xl  focus:outline-bg-slate-400 transition-all cursor-pointer dark:focus:outline-none dark:caret-white dark:focus:border-white dark:focus:border dark:text-white"
            : "bg-transparent border border-slate-400 rounded-xl p-2 indent-8 w-full dark:caret-white  dark:focus:outline-gray-300 dark:focus:text-slate-400 dark:border dark:border-white"
        }
        aria-label="search"
        onChange={(event) => {
          onSearch && onSearch(event.target.value);
        }}
        onBlur={(event) => {
          event.target.value = "";
          onSearch && onSearch(event.target.value);
        }}
      />
      <span
        className={web ? "absolute -top-2 -left-4" : "absolute top-3 left-3"}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-slate-500 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
