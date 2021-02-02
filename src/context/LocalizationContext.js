import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
// import enLocale from '../locales/en';
// import arLocale from '../locales/ar';

const LocalizationContext = React.createContext([() => {}]);

const LocalizationProvider = ({ children }) => {

	const switchLocale = (key) => {
		if (key === 'en') {
			document.body.style.direction = 'ltr';
		} else {
			document.body.style.direction = 'rtl';
		}
	};

	return (
		<LocalizationContext.Provider value={[switchLocale]}>
			<IntlProvider >
				{children}
			</IntlProvider>
		</LocalizationContext.Provider>
	);
};

export { LocalizationProvider, LocalizationContext };
