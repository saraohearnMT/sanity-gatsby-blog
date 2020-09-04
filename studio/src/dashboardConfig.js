export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f527ba10612fc07068205dc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8w8ehmm5',
                  apiId: '54fa7191-cd91-4213-bde8-cb263c9b6609'
                },
                {
                  buildHookId: '5f527ba15b528d0120e869dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1uqbz5ug',
                  apiId: '5741e499-3215-419a-bd17-6dcbb6b6d4cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saraohearnMT/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1uqbz5ug.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
