const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'noibinhyen',
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
          editUrl: 'https://github.com/buiducnhat/noibinhyen-blog/tree/main',
        },
        blog: {
          path: './data/blogs',
          routeBasePath: '/blogs',
          showReadingTime: true,
          editUrl: 'https://github.com/buiducnhat/noibinhyen-blog/tree/main',
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
        title: 'noibinhyen',
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
            items: [
              { to: '/blogs/tags', label: 'All tags' },
              { to: '/blogs', label: 'All blogs' },
            ],
            position: 'left',
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
                label: 'B??i ?????c Nh???t',
                href: 'https://www.facebook.com/buiducnhat47',
              },
              {
                label: 'H???i ?????c',
                href: 'https://www.facebook.com/profile.php?id=100025366033633',
              },
              {
                label: '????o B?? Kh??nh',
                href: 'https://www.facebook.com/2imdaokhanhbk',
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
        copyright: `Copyright ?? ${new Date().getFullYear()} noibinhyen.tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'G0W46WKXP5',
        apiKey: 'ba19b06642ffdad7305b3900666071c4',
        indexName: 'noibinhyen-blog',
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
