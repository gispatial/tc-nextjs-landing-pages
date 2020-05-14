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
                  buildHookId: '5ebcb295504c404d9889718a',
                  title: 'Sanity Studio',
                  name: 'tc-nextjs-landing-pages-studio',
                  apiId: '94afdf56-214f-4f37-af04-9f0fc9cf6f43'
                },
                {
                  buildHookId: '5ebcb295ed34be7af1e2fef5',
                  title: 'Landing pages Website',
                  name: 'tc-nextjs-landing-pages',
                  apiId: '013ecac1-acf3-49d0-bbdb-1aa4d3bc2bfb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gispatial/tc-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tc-nextjs-landing-pages.netlify.app', category: 'apps'}
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
