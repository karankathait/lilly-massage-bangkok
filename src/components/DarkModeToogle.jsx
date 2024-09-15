// import { useState, useEffect } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.body.classList.add("dark");
//       setDarkMode(true);
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     if (darkMode) {
//       document.body.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.body.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <input
//         type="checkbox"
//         id="checkbox"
//         className="hidden"
//         checked={darkMode}
//         onChange={toggleDarkMode}
//       />
//       <label
//         htmlFor="checkbox"
//         className="flex items-center justify-between cursor-pointer w-14 h-6 bg-gray-800 dark:bg-gray-300 rounded-full p- relative"
//       >
//         <FaMoon className="text-pink-500 absolute left-2 top-1/2 transform -translate-y-1/2" />
//         <FaSun className="text-yellow-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
//         <div
//           className={`w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 transition-transform ${
//             darkMode ? "translate-x-8" : "translate-x-0"
//           }`}
//         />
//       </label>
//     </div>
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
        id="theme-toggle"
        className="sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="theme-toggle"
        className="flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full"
      >
        {darkMode ? (
          <FaSun className="w-4 h-4 text-yellow-500" />
        ) : (
          <FaMoon className="w-4 h-4 text-pink-500" />
        )}
        <span className="sr-only">Toggle Dark Mode</span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
