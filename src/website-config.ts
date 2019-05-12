export interface WebsiteConfig {
  title: string;
  titleArtworks: string;
  titleProjects: string;
  titleBooks: string;
  description: string;
  descriptionArtworks: string;
  descriptionProjects: string;
  descriptionBooks: string;
  coverImage: string;
  coverImageArtworks: string;
  coverImageProjects: string;
  coverImageBooks: string;
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
  title: 'Mehran Mozaffari',
  titleArtworks: 'Mehran Mozaffari | Artworks',
  titleProjects: 'Mehran Mozaffari | Projects',
  titleBooks: 'Mehran Mozaffari | Books',
  description: 'Mehran Mozaffari ...',
  descriptionArtworks: 'Mehran Mozaffari Artworks',
  descriptionProjects: 'Mehran Mozaffari Projects',
  descriptionBooks: 'Mehran Mozaffari Books',
  coverImage: 'img/blog-cover.jpg',
  coverImageArtworks: 'img/artworks-cover.png',
  coverImageProjects: 'img/projects-cover.png',
  coverImageProjects: 'img/books-cover.png',
  logo: 'img/mehran-logo.png',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
  facebook: 'https://www.facebook.com/ghost',
  twitter: 'https://twitter.com/tryghost',
  showSubscribe: true,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: '',
};

export default config;
