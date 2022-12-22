const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nơi bình yên',
  tagline: 'Blog website',
  url: 'https://noibinhyen.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'noibinhyen',
  projectName: 'noibinhyen-blog',

  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './data/series',
          sidebarPath: require.resolve('./series.sidebars.js'),
          routeBasePath: '/series',
          editUrl: 'https://github.com/buiducnhat/noibinhyen-blog/tree/main/data/series',
        },
        blog: {
          path: './data/blogs',
          routeBasePath: '/blogs',
          showReadingTime: true,
          editUrl: 'https://github.com/buiducnhat/noibinhyen-blog/tree/main/data/blogs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Noibinhyen',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Series',
          },
          {
            type: 'dropdown',
            label: 'Blogs',
            to: '/blogs',
            items: [{ to: '/blogs/tags', label: 'All tags' }],
            position: 'left',
          },
          {
            href: 'https://github.com/buiducnhat/noibinhyen-blog',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/buiducnhat47',
              },
              {
                label: 'Email',
                href: 'mailto:nhaths4701@gmail.com',
              },
              {
                label: 'Github',
                href: 'https://github.com/buiducnhat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blogs',
              },
              {
                label: 'Series',
                to: '/series',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} noibinhyen.tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '2EA7E19DKR',
        apiKey: '2bbad1e4ab450747b0e31a113b09f6b6',
        indexName: 'dev_buiducnhat',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
