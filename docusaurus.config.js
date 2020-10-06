module.exports = {
  title: 'ERP Brasil',
  tagline: 'Simplificando o desenvolvimento de software empresarial, ERP, no Brasil',
  url: 'https://erpbrasil.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'erpbrasil', // Usually your GitHub org/user name.
  projectName: 'erpbrasil', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ERP Brasil',
      logo: {
        alt: 'ERP Brasil Home',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/erpbrasil/erpbrasil',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/erpbrasil',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/erpbrasil',
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} ERP BRASIL</p><p>Icons made by Pixel perfect from www.flaticon.com</p>`
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/erpbrasil/erpbrasil/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/erpbrasil/erpbrasil/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
