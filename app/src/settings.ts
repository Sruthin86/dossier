export const profile = {
	fullName: 'Sruthin Gaddam',
	title: 'User Experience and Accessibility Librarian',
	institute: 'Michigan State University Libraries',
	author_name: 'Sruthin Gaddam', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'gaddamsr@msu.edu',
	linkedin: '',
	x: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Sruthin Gaddam Dossier',
	default_description: 'Sruthin Gaddam Dossier.',
	default_image: '/images/astro-academia.png',
}
