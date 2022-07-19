// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grigora Docs',
  tagline: 'A perfect solution to build your websites fast and awesome.',
  url: 'https://wpgrigora.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Grigora Docs',
        logo: {
          alt: 'Grigora',
          src: 'img/icon.svg',
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/grigoracommunity',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/showcase/80243560/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Grigora Kit GitHub',
                href: 'https://github.com/latracal/grigora-kit',
              },
              {
                label: 'Grigora Blocks GitHub',
                href: 'https://github.com/latracal/grigora-blocks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grigora`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
