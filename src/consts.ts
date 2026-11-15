import blog from './content/site/blog.json';
import contacts from './content/site/contacts.json';
import cta from './content/site/cta.json';
import footer from './content/site/footer.json';
import hero from './content/site/hero.json';
import metadata from './content/site/metadata.json';
import navigation from './content/site/navigation.json';
import projects from './content/site/projects.json';
import socialMedia from './content/site/socialMedia.json';
import heroTrail from './content/images/heroTrail.json';
import contactRing from './content/images/contactRing.json';
import scrollRow from './content/images/scrollRow.json';

export const SITE_TITLE = metadata.siteTitle;
export const SITE_DESCRIPTION = metadata.siteDescription;

export const CONTACT_EMAIL = contacts.contactEmail;
export const CONTACT_TITLE = contacts.contactTitle;
export const CONTACT_DESCRIPTION = contacts.contactDescription;
export const CONTACT_FORM_SUBMIT = contacts.contactFormSubmit;
export const CONTACT_FORM_SUCCESS = contacts.contactFormSuccess;
export const CONTACT_FORM_ERROR = contacts.contactFormError;
export const CONTACT_FIELDS = contacts.contactFields;

export const HERO_TITLE = hero.heroTitle;
export const HERO_DESCRIPTION = hero.heroDescription;
export const PARTNERS_LABEL = hero.partnersLabel;

export const PROJECTS_TITLE = projects.projectsTitle;
export const PROJECTS_LINK = projects.projectsLink;
export const EXPLORE_NEXT_TITLE = projects.exploreNextTitle;

export const BLOG_TITLE = blog.blogTitle;
export const BLOG_DESCRIPTION = blog.blogDescription;
export const BLOG_LINK = blog.blogLink;
export const BLOG_READ_MORE_TITLE = blog.blogReadMoreTitle;
export const BLOG_ALL_POSTS = blog.blogAllPosts;

export const CTA_TITLE = cta.ctaTitle;
export const CTA_LINK = cta.ctaLink;

export const NAV_LINKS_LEFT = navigation.navLinksLeft;
export const NAV_LINKS_RIGHT = navigation.navLinksRight;

export const FOOTER_HEADLINE = footer.footerHeadline;
export const FOOTER_LARGE_TEXT = footer.footerLargeText;
export const FOOTER_BRAND = footer.footerBrand;
export const FOOTER_BACK_TO_TOP = footer.footerBackToTop;

export const SOCIAL_LINKS_LEFT = socialMedia.socialLinksLeft;
export const SOCIAL_LINKS_RIGHT = socialMedia.socialLinksRight;

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