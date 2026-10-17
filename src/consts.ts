import s from './content/site/settings.json';
import heroTrail from './content/images/heroTrail.json';
import contactRing from './content/images/contactRing.json';
import scrollRow from './content/images/scrollRow.json';

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

export const HERO_TRAIL_IMAGES = heroTrail.images as const;


export const CONTACT_RING_IMAGES = contactRing.images as const;


export const SCROLL_ROW_IMAGES = scrollRow.images as const;

// Hidden fields and licence info stays hardcoded
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