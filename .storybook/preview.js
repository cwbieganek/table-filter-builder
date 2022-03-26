// Blueprint CSS
import '../node_modules/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/table/lib/css/table.css';

// Dark theme provider
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';

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
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		);
	}
];