import React, { useState, useEffect } from "react";

const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [currentSettings, setCurrentSettings] = useState({
    name: "",
    isBackend: false,
    framework: "",
    configEslint: false,
    configPrettier: false,
    useTypescript: false,
    dependencies: []
  });

  useEffect(() => {
    console.log(currentSettings);
  }, [currentSettings])

  const saveSettings = (values) => {
   setCurrentSettings(values)
  };

  return (
    <SettingsContext.Provider
      value={[ currentSettings, saveSettings ]}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;