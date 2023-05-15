import { useContext } from "react";
import SettingsContext from "../context";

export default () => {
    const context = useContext(SettingsContext);
  
    return context;
};