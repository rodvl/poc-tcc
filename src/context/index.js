import React, { useState, useEffect } from "react";

const SettingsContext = React.createContext();

export const initialState = {
  name: "projeto222",
  path: "/Users/rodrigo.lapertosa/Documents/testetcc",
  isBackend: true,
  framework: "",
  configEslint: false,
  configPrettier: false,
  useTypescript: false,
  configRedux: false,
  styleLib: null,
  componentLib: null,
  httpLib: null,
  pattern: null,
  iconLib: null,
  database: null,
  dbPLugin: null,
  configJest: false,
  dependencies: [],
}

export const SettingsProvider = ({ children }) => {
  const [currentSettings, setCurrentSettings] = useState(initialState);

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