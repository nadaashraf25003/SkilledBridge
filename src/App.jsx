// Style
import "./index.css";

// React
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useContext } from "react";

// Components
import { ThemeContext } from "./Contexts/ThemeContext";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // localStorage.clear();

  return (
    <>
      <Outlet />
      <ScrollToTop />
      {/* Back to Top Button  */}
      <a href="#" className="back-to-top active">
        <i className="fas fa-arrow-up" />
      </a>
      <div className="theme-switcher">
        <input
          type="checkbox"
          id="theme-toggle"
          className="theme-toggle"
          onClick={toggleTheme}
        />
        <label htmlFor="theme-toggle" className="theme-toggle-label">
          <span className="theme-icon light-icon">
            <i className="fas fa-sun" />
          </span>
          <span className="theme-icon dark-icon">
            <i className="fas fa-moon" />
          </span>
          {/* <span className="theme-toggle-ball" /> */}
        </label>
      </div>
    </>
  );
}

export default App;


