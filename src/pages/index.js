import React from "react"
import MailChimpForm from "../components/form"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import sailboat from '../images/sailboat4.jpg'; // Import using relative path
import boatPng from '../images/boat.png';
import lemonadePng from '../images/lemonade.png';
import musicPng from '../images/music-player.png';
import restaurantPng from '../images/restaurant.png';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  sailboat: {
    padding: theme.spacing(6, 0, 6),
    backgroundImage: `url(${sailboat})`,
    backgroundSize:     'cover',
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
    height: '400px',
  },
  benefitContent: {
    backgroundColor: '#ff5f57',
    paddingTop: '1rem',
    paddingBottom: '2rem',
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardMedia: {
    paddingTop: '26.25%', // 16:9
    marginBottom: '1rem',
    marginTop: '1rem',
    backgroundSize:     'contain',
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
  },
  cardGrid: {
    marginTop: '1rem',
  },
  card: {
    background: '#eeeeee',
    display: 'flex',
  },
  cardContent: {
    background: 'white'
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  pricing: {
    backgroundColor: 'white',
    paddingTop: '1rem',
    paddingBottom: '2rem',
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  logo: {
    maxWidth: '400px',
    margin: 'auto',
    paddingTop: '6rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const tiers = [
  {
    title: 'Basic',
    price: '100',
    description: ['Lunch', 'Drinks', 'Styx music', 'Sailing'],
    buttonText: 'Let me sail',
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium',
    subheader: 'Most popular',
    price: '500',
    description: [
      'Basic items',
      'Top Shelf drinks',
      'Steer the boat for 30min',
      'Enjoy priority seating',
    ],
    buttonText: 'Sail away',
    buttonVariant: 'contained',
  },
  {
    title: 'Luxury',
    price: '1000',
    description: [
      'Private boat',
      'Top shelf drinks',
      'More rock music',
      'Upgraded food',
    ],
    buttonText: 'Living my best life',
    buttonVariant: 'outlined',
  },
];

const cards = [{
  icon: restaurantPng,
  iconTitle: 'Food',
  heading: 'Lunch',
  description: 'Enjoy lunch on the water listening.'
}, {
  icon: musicPng,
  iconTitle: 'Music',
  heading: 'Music',
  description: 'Listen to Styx music the entire trip'
},
{
  icon: boatPng,
  iconTitle: 'Sailing',
  heading: 'Sailing',
  description: 'Come sail away with me.'
},
{
  icon: lemonadePng,
  iconTitle: 'Drinks',
  heading: 'Drinks',
  description: 'Enjoy a selection of tropical drinks.'
}];

function IndexPage () {
  const classes = useStyles();

  return (
    <React.Fragment>
        <SEO title="Sail Tours" keywords={[`Sailing`, `Eating`, `Drinking`]} />
        {/* Hero unit */}
        <div className={classes.sailboat}>
        <Container maxWidth="md">
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Come sail away!
          </Typography>
        </Container>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="md" >
          <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
            Come sail away, come sail away with me!
          </Typography>
            <Typography variant="h5" align="center" paragraph>
              I'm sailing away set an open course for the virgin sea.
              I've got to be free free to face the life that's ahead of me.
              On board I'm the captain so climb aboard.
              We'll search for tomorrow on every shore.
              And I'll try oh Lord I'll try to carry on.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <MailChimpForm/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.benefitContent}>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h2" variant="h3" align="center" color="default" gutterBottom>
              What's included
            </Typography>
          <Grid container spacing={3}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <div className={classes.details}>
                                    <CardMedia
                    className={classes.cardMedia}
                    image={card.icon}
                    title={card.iconTitle}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {card.heading}
                    </Typography>
                    <Typography align="center">
                      {card.description}
                    </Typography>
                  </CardContent>
                  </div>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
          </div>
          <div className={classes.pricing}>
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Premium' ? <StarIcon /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                      </div>
                      <ul>
                        {tier.description.map(line => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
      </React.Fragment>
  )
};

export default IndexPage;
