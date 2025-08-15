// Style
import "/src/index.css";

// React
import { useEffect, useState } from "react";

function TranslateButton() {
  const [showWidget, setShowWidget] = useState(false);
  useEffect(() => {
    if (!showWidget) return;

    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,ar",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
    addScript();

    return () => {
      // Cleanup function
      const widget = document.getElementById("google_translate_element");
      if (widget) widget.innerHTML = "";
    };
  }, [showWidget]);

  const handleToggle = () => {
    setShowWidget(!showWidget);
  };

  return (
    <>
      <div className="translate-container">
        <button
          onClick={handleToggle}
          className="button"
          aria-label={showWidget ? "Hide translation" : "Show translation"}
        >
          <span>{showWidget ? "Close" : "Translate"}</span>
        </button>
        <div
          id="google_translate_element"
          style={{
            display: showWidget ? "block" : "none",
            minHeight: showWidget ? "40px" : "0",
            marginTop: "10px",
          }}
        />
      </div>
    </>
  );
}

export default TranslateButton;
