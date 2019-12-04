export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5de83f4db1e74bb97d7b8e00',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jbry4fb3',
                  apiId: 'fc5b82f8-ba1a-4eeb-8d9a-94926439f681'
                },
                {
                  buildHookId: '5de83f4d640649bf2c1c129e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7ppfc4nm',
                  apiId: 'ca13ce50-64ba-4c6c-907e-43a261ae52ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elkalash/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7ppfc4nm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
