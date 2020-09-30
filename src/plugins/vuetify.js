import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: '#198186',//'#198186',//'#bd5555',//'#9e9e9e',//'#403e3e',//'#191818',//'#004471',//'#ee44aa',
				secondary: '#ffffff',
				tertiary: '#191818',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			},
		},
	},
});
