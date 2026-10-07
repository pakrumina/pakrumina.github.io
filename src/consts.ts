/** Generic site config for the Craift theme demo. Use example.com only. */
export const SITE_TITLE = 'Noname';
export const SITE_DESCRIPTION = 'Patrīcijas Krūmiņas portfolio un blogs';
export const CONTACT_EMAIL = 'patricija@noname.lv';

export const CONTACT_TITLE = {
	lead: 'Uzraksti',
	main: 'Man',
} as const;
export const CONTACT_DESCRIPTION =
	'Sazinies ar mani par idejām un projektiem, kas Tev ir padomā';

export const CONTACT_FORM_SUBMIT = 'Nosūtīt ziņu';
export const CONTACT_FORM_SUCCESS = 'Paldies, ziņa nosūtīta veiksmīgi.';
export const CONTACT_FORM_ERROR = 'Lūdzu, pārbaudi laukus un mēģini vēlreiz';
export const CONTACT_FORM_DEMO_NOTE =
	'This demo validates in the browser only. Set CONTACT_FORM_ACTION to deliver mail.';

/**
 * Form endpoint for Formspree, Getform, Web3Forms, or similar.
 * Leave empty in the demo. After purchase, paste your form URL here.
 * Example: 'https://formspree.io/f/xxxxxxxx'
 */
export const CONTACT_FORM_ACTION = '';

/** Extra hidden inputs some providers need, e.g. `{ name: 'access_key', value: 'YOUR_KEY' }`. */
export const CONTACT_FORM_HIDDEN: ReadonlyArray<{ name: string; value: string }> = [];

export const CONTACT_FIELDS = [
	{ id: 'name', name: 'name', label: 'Vārds', type: 'text', autocomplete: 'name', required: true },
	{
		id: 'email',
		name: 'email',
		label: 'E-pasta adrese',
		type: 'email',
		autocomplete: 'email',
		required: true,
	},
	{
		id: 'subject',
		name: 'subject',
		label: 'Tēma',
		type: 'text',
		autocomplete: 'off',
		required: true,
	},
] as const;

export const HERO_KICKER = 'Patrīcja Krūmiņa';
export const HERO_TITLE = {
	lead: 'PATRĪCIJA',
	main: 'KRŪMIŅA',
} as const;
export const HERO_DESCRIPTION = 'NONAME';

export const HERO_TRAIL_IMAGES = [
	'/hero-trail/ķēms_iet_800x800px-01.png',
	'/hero-trail/ķēms_iet_800x800px-02.png',
	'/hero-trail/ķēms_iet_800x800px-03.png',
	'/hero-trail/ķēms_iet_800x800px-04.png',
	'/hero-trail/ķēms_iet_800x800px-05.png',
	'/hero-trail/ķēms_iet_800x800px-06.png',
	'/hero-trail/ķēms_iet_800x800px-07.png',
	'/hero-trail/ķēms_iet_800x800px-08.png',
	'/hero-trail/ķēms_iet_800x800px-09.png',
	'/hero-trail/ķēms_iet_800x800px-10.png',
	'/hero-trail/ķēms_iet_800x800px-11.png',
	'/hero-trail/ķēms_iet_800x800px-12.png',
] as const;


export const CONTACT_RING_IMAGES = [
	'/contact-ring/ķēmi_tēli_800x800px-01.png',
	'/contact-ring/ķēmi_tēli_800x800px-02.png',
	'/contact-ring/ķēmi_tēli_800x800px-03.png',
	'/contact-ring/ķēmi_tēli_800x800px-04.png',
	'/contact-ring/ķēmi_tēli_800x800px-05.png',
	'/contact-ring/ķēmi_tēli_800x800px-06.png',
	'/contact-ring/ķēmi_tēli_800x800px-07.png',
	'/contact-ring/ķēmi_tēli_800x800px-08.png',
	'/contact-ring/ķēmi_tēli_800x800px-09.png',
	'/contact-ring/ķēmi_tēli_800x800px-10.png',
] as const;

export const PROJECTS_TITLE = {
	lead: 'Mani',
	main: 'Darbi',
} as const;

export const PROJECTS_LINK = { href: '/contact', label: "Sazināsimies" } as const;

export const BLOG_TITLE = {
	lead: 'Manas',
	main: 'Domas',
} as const;

export const BLOG_DESCRIPTION =
	'Izdomā, ko šeit rakstīt';

export const BLOG_LINK = { href: '/contact', label: "Sazināsimies" } as const;

export const BLOG_READ_MORE_TITLE = {
	lead: 'Lasīt',
	main: 'Vairāk',
} as const;

export const BLOG_ALL_POSTS = { href: '/blog', label: 'Visi raksti' } as const;

export const EXPLORE_NEXT_KICKER = 'Nākamais darbs';

export const EXPLORE_NEXT_TITLE = {
	lead: 'Nākamais',
	main: 'Darbs',
} as const;

export const CTA_TITLE = {
	lead: "Strādāsim",
	main: 'Kopā',
} as const;

export const CTA_LINK = { href: '/contact', label: 'Sazināsimies' } as const;

export const PARTNERS_LABEL = 'Mani ķēmi';

export const PARTNER_LOGOS = [
	{ src: '/partners/partner-01.svg', alt: 'Partner 01' },
	{ src: '/partners/partner-02.svg', alt: 'Partner 02' },
	{ src: '/partners/partner-03.svg', alt: 'Partner 03' },
	{ src: '/partners/partner-04.svg', alt: 'Partner 04' },
	{ src: '/partners/partner-05.svg', alt: 'Partner 05' },
	{ src: '/partners/partner-06.svg', alt: 'Partner 06' },
] as const;

export const NAV_LINKS_LEFT = [
	{ href: '/', label: 'Sākums' },
	{ href: '/projects', label: 'Darbi' },
] as const;

export const NAV_LINKS_RIGHT = [
	{ href: '/blog', label: 'Blogs' },
	{ href: '/contact', label: 'Sazināties' },
] as const;

export const FOOTER_HEADLINE = {
	lead: "Sazināsimies un kopā",
	main: 'izveidosim',
	muted: 'kaut ko lielisku.',
} as const;

export const FOOTER_LARGE_TEXT = "Varbūt kurmja uzdevums ir mūžīgi rakt!"
export const FOOTER_BRAND = 'Patrīcija Krūmiņa, SIA Noname';

export const FOOTER_CREDIT = 'Visas tiesības aizsargātas';

export const FOOTER_META_LINKS = [{ href: '/licenses', label: 'Licences' }] as const;

export const LICENSES_KICKER = 'Legal information';
export const LICENSES_TITLE = 'Licences';
export const LICENSES_DESCRIPTION =
	'Credits and licenses for the images, typeface, and icons used in the Craift template.';
export const LICENSES_INTRO =
	'All visual assets, typefaces, and icons used in this template are credited below. Please review each provider’s license before using the materials in your own projects.';

export const LICENSES_SECTIONS = [
	{
		title: 'Icons',
		copy: 'The interface icons featured in this template come from Remix Icon. Refer to its license for usage and attribution details.',
		links: [{ href: 'https://remixicon.com/license', label: 'Remix Icon' }],
	},
] as const;

export const FOOTER_BACK_TO_TOP = 'Atpakaļ uz augšu';

export const SOCIAL_LINKS_LEFT = [
	{ href: 'https://instagram.com/pakrumina', label: 'Instagram Patrīcija Krūmiņa', id: 'instagram', class: 'social-black' },
	{ href: 'https://instagram.com/bedrebedrebedrebedre', label: 'Instagram Bedre', id: 'instagram', class: 'social-blue' },
] as const;

export const SOCIAL_LINKS_RIGHT = [
	{ href: 'https://www.youtube.com/@pakrumina', label: 'Youtube Patrīcija Krūmiņa', id: 'youtube', class: 'social-black' },
	{ href: 'https://www.youtube.com/@bedrebedrebedrebedre', label: 'Youtube Bedre', id: 'youtube', class: 'social-blue' },
] as const;
