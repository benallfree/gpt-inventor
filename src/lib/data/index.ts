import features from './features';
import faq from './faq';
import benefits from './benefits';
import chat from './chat';
import meta from './meta';

export default {
	meta,
	sections: {
		features,
		benefits,
		testimonials: {
			// Replace these with your own X.com post IDs
			enabled: true,
			ids: [
				'1729214803179434026',
				'1729214803179434027',
				'1729214803179434028',
				'1729214803179434029'
			]
		},
		faq,
		chat
	}
};
