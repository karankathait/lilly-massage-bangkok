// import { useState, useEffect } from 'react';

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Check localStorage for dark mode preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//       setDarkMode(true);
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     if (darkMode) {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     } else {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     }
//     setDarkMode(!darkMode);
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="p- bg-gray-300 dark:bg-gray-700 rounded-md"
//     >
//       {darkMode ? 'Light Mode' : 'Dark Mode'}
//     </button>
//   );
// };

// export default DarkModeToggle;

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="checkbox"
        className="flex items-center cursor-pointer w-14 h-6 bg-gray-800 dark:bg-gray-300 rounded-full p- relative"
      >
        <FaMoon className="text-pink-500 absolute left-2 top-1/2 transform -translate-y-1/2" />
        <FaSun className="text-yellow-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
        <div
          className={`w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 transition-transform ${
            darkMode ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </label>
    </div>
  );
};

export default DarkModeToggle;
