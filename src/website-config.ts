export interface WebsiteConfig {
  title: string;
  titleArtworks: string;
  titleProjects: string;
  titleBlog: string;
  description: string;
  descriptionArtworks: string;
  descriptionProjects: string;
  descriptionBlog: string;
  coverImage: string;
  coverImageArtworks: string;
  coverImageProjects: string;
  coverImageBlog: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Sam Mozaffari',
  titleArtworks: 'Sam Mozaffari | Places',
  titleProjects: 'Sam Mozaffari | Projects',
  titleBlog: 'Sam Mozaffari | Blog',
  description: '',
  descriptionArtworks: 'Sam Mozaffari Places',
  descriptionProjects: 'Sam Mozaffari Projects',
  descriptionBlog: 'Sam Mozaffari Blog',
  coverImage: 'img/home-cover.jpg',
  coverImageArtworks: 'img/places-cover.jpg',
  coverImageProjects: 'img/projects-cover.png',
  coverImageBlog: 'img/blog-cover.jpg',
  logo: 'img/smoz-logo.png',
  lang: 'en',
  siteUrl: '',
  facebook: '',
  twitter: 'https://twitter.com/smoz',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: '',
  mailchimpEmailFieldName: '',
  googleSiteVerification: '',
  footer: '',
};

export default config;
