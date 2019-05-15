<p align="center">
    <h1 align="center">gatsby-landing-page-starter</h1>
    <p align="center">Gatsby landing page starter for creating fast loading, customizable, scalable and SEO-friendly landing pages.</p>
</p>

## Features:
 - Material UI framework
 - Mailchimp integration
 - Pricing layout


## Getting started
Install gatsby CLI (if you don't already have it)
```
npm install -g gatsby-cli
```
Clone the repo:
```
git clone

```
Install packages

```
npm install
```

## COnfigure mailchimp integration
Get your mailchimp endpoint by following these [instructions](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/?=mailchimp#mailchimp-endpoint):
Open `gatsby-config.js` add the URL to the `endpoint`:
```js
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: '', // add your MC list endpoint here; see instructions below
      },
    },
```

## Credits
- Built using [GatsbyJS](https://gatsbyjs.org)

## Author
[Tony Diaz](https://github.com/tonydiaz)

## License
[MIT](LICENSE)
