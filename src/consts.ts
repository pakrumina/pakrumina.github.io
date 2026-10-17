import s from './content/site/settings.json';

export const SITE_TITLE = s.siteTitle;
export const SITE_DESCRIPTION = s.siteDescription;
export const CONTACT_EMAIL = s.contactEmail;

export const CONTACT_TITLE = s.contactTitle;
export const CONTACT_DESCRIPTION = s.contactDescription;

export const CONTACT_FORM_SUBMIT = s.contactFormSubmit;
export const CONTACT_FORM_SUCCESS = s.contactFormSuccess;
export const CONTACT_FORM_ERROR = s.contactFormError;

export const CONTACT_FIELDS = s.contactFields;

export const HERO_TITLE = s.heroTitle;
export const HERO_DESCRIPTION = s.heroDescription;

export const PROJECTS_TITLE = s.projectsTitle;
export const PROJECTS_LINK = s.projectsLink;

export const BLOG_TITLE = s.blogTitle;
export const BLOG_DESCRIPTION = s.blogDescription;
export const BLOG_LINK = s.blogLink;
export const BLOG_READ_MORE_TITLE = s.blogReadMoreTitle;
export const BLOG_ALL_POSTS = s.blogAllPosts;

export const EXPLORE_NEXT_TITLE = s.exploreNextTitle;

export const CTA_TITLE = s.ctaTitle;
export const CTA_LINK = s.ctaLink;

export const PARTNERS_LABEL = s.partnersLabel;

export const NAV_LINKS_LEFT = s.navLinksLeft;
export const NAV_LINKS_RIGHT = s.navLinksRight;

export const FOOTER_HEADLINE = s.footerHeadline;
export const FOOTER_LARGE_TEXT = s.footerLargeText;
export const FOOTER_BRAND = s.footerBrand;

export const FOOTER_BACK_TO_TOP = s.footerBackToTop;

export const SOCIAL_LINKS_LEFT = s.socialLinksLeft;
export const SOCIAL_LINKS_RIGHT = s.socialLinksRight;

// Images, hidden fields and licence info stays hardcoded
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


export const PARTNER_LOGOS = [
	{ src: '/partners/partner-01.svg', alt: 'Partner 01' },
	{ src: '/partners/partner-02.svg', alt: 'Partner 02' },
	{ src: '/partners/partner-03.svg', alt: 'Partner 03' },
	{ src: '/partners/partner-04.svg', alt: 'Partner 04' },
	{ src: '/partners/partner-05.svg', alt: 'Partner 05' },
	{ src: '/partners/partner-06.svg', alt: 'Partner 06' },
] as const;

/**

 * Form endpoint for Formspree, Getform, Web3Forms, or similar.

 * Leave empty in the demo. After purchase, paste your form URL here.

 * Example: 'https://formspree.io/f/xxxxxxxx'

 */

export const CONTACT_FORM_ACTION = '';

/** Extra hidden inputs some providers need, e.g. `{ name: 'access_key', value: 'YOUR_KEY' }`. */

export const CONTACT_FORM_HIDDEN: ReadonlyArray<{ name: string; value: string }> = [];

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