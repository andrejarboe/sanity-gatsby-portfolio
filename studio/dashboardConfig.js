export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61ca8fa0add95ecce446c186',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j1242jd2',
                  apiId: 'b578ae17-96c3-40f8-8670-ebe6dc7440a3'
                },
                {
                  buildHookId: '61ca8fa05ab84b9bf41b3dfd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h64m4ubo',
                  apiId: '024d2707-e86c-47e0-94f1-b128d55c40b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrejarboe/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h64m4ubo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
