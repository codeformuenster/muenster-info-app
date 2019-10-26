import React from "react";

const localStorageKey = "muenster-info-app-welcome-card-hidden";

const useWelcomeHidden = () => {
  const [isHiddenLocalStorage, setHiddenLocalStorage] = React.useState(() => {
    if (window.localStorage) {
      const item = window.localStorage.getItem(localStorageKey);

      return item ? JSON.parse(item) : false;
    }
  });

  const setHidden = hidden => {
    if (window.localStorage) {
      setHiddenLocalStorage(hidden);
      window.localStorage.setItem(localStorageKey, JSON.stringify(hidden));
    }
  };

  return [isHiddenLocalStorage, setHidden];
};

export default useWelcomeHidden;
