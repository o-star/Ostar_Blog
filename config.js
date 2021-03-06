module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Ostar Blog',
  keywords:
    'account surfer, trello bookmark, trello, productivity, javascript, Marat Dospolov, choosy windows, browser selector',
  subtitle: 'Developer. Optimizer. Learner.',
  copyright: `© ${new Date().getFullYear()} | Ostar`,
  disqusShortname: 'dospolov',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-6589522-7',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'Profile',
      path: '/cv'
    }
  ],
  author: {
    name: 'Ostar',
    photo: '/profile_image.jpg',
    bio: 'Jeong Seok Oh',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'o-star',
      instagram: 'o_star.1',
      facebook: 'oh.jeongseok.56'
    }
  }
}
