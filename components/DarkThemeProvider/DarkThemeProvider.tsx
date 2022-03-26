// React
import React from "react"

// Blueprint CSS
import { Classes } from "@blueprintjs/core";

// ThemeProvider CSS
// import styles from './ThemeProvider.module.css';

const ThemeProvider: React.FC<{}> = ({ children }) => {
	return <div className={Classes.DARK}>{children}</div>;
};

export default ThemeProvider;