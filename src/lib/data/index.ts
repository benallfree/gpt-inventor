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
			ids: ['1729558569496858781']
		},
		faq,
		chat
	}
};
