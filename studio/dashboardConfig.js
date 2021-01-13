export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fff4184cff9cc25f060437a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hza2y6ot',
                  apiId: 'bb809ad9-d78f-43d6-9f75-1d7f352afb4f'
                },
                {
                  buildHookId: '5fff4184754ac0243b30a9c0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kr5nsvr3',
                  apiId: '6526e856-7141-4247-b3a0-d13dc2588588'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bbaconsulting/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kr5nsvr3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
