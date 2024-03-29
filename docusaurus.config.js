const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "OsmiCSX",
  tagline: "An utility style framework for React Native",
  url: "https://osmicsx.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "osmicsx", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "OsmiCSX",
      logo: {
        alt: "OsmiCSX",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/OsmiCSX/osmicsx",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} OsmiCSX. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: "93e4892f05bb45f45fe60af0a02c950c",
      appId: "6SLKHSIPOA",
      indexName: "dev_osmicsx",
      contextualSearch: true,
    },
    metadata: [
      {
        property: "og:image",
        content: "https://osmicsx.dev/img/logo.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://osmicsx.dev/img/logo.png",
      },
      { name: "twitter:site", content: "@osmicsx" },
    ],
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/OsmiCSX/docs-v2",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
