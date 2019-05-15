<p align="center">
    <h1 align="center">gatsby-landing-page-starter</h1>
    <p align="center">Gatsby landing page starter for creating fast loading, customizable, scalable and SEO-friendly landing pages.</p>
<img  align="center" width="906" alt="Screen Shot 2019-05-14 at 11 28 36 PM" src="https://user-images.githubusercontent.com/7145340/57746631-0909e880-76a0-11e9-8cb9-be7a5de079a5.png">
</p>



## Features:
 - Material UI framework
 - Mailchimp integration
 - Landing page to use for idea validation. It has a pricing section, benefits section and call to action through out the page.


## Getting started
Install gatsby CLI (if you don't already have it)
```
npm install -g gatsby-cli
```
Clone the repo:
```
git clone https://github.com/tonydiaz/gatsby-landing-page-starter.git
```
Install packages

```
npm install
```

## Cnfigure Mailchimp integration
Get your mailchimp endpoint by following these [instructions](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/?=mailchimp#mailchimp-endpoint)

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
Built using [GatsbyJS](https://gatsbyjs.org)

## Author
[Tony Diaz](https://github.com/tonydiaz)

## License
[MIT](LICENSE)
