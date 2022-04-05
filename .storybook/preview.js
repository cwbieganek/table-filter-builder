// Blueprint CSS
import '../node_modules/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/table/lib/css/table.css';

// Dark theme provider
import DarkThemeProvider from '../components/DarkThemeProvider/DarkThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
	(Story) => {
		return (
			<DarkThemeProvider>
				<div id="app-container">
					<Story />
				</div>
			</DarkThemeProvider>
		);
	}
];