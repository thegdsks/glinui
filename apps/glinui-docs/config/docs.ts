import { MainNavItem, SidebarNavItem } from '@/types';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Components',
      href: '/components',
    }, 
    {
      title: 'GLINCKER',
      href: 'https://glincker.com',
      external: true,
      event: 'header_cta_clicked',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        }, 
      ],
    }, 
    {
      title: 'Components',
      items: [ 
        {
          title: 'Alert',
          href: `/docs/components/alert`,
          items: [],
          label: 'Beta',
        }, 
        {
          title: 'Button',
          href: `/docs/components/button`,
          items: [],
        },  
         
      ],
    }, 
  ],
};
