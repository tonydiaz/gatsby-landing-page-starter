import React from "react";
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  mailForm: {
    textAlign: 'center',
  },
  emailInput :{
    backgroundColor: 'white',
    width: '300px',
  }
});

class MailChimpForm extends React.Component {
  constructor() {
    super();
    this.state = {email: null};
  }


  handleChange = (event) => {
      this.setState({email: event.target.value});
  }
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  render () {
    const { classes } = this.props;

    return (
      <form className={classes.mailForm} onSubmit={this._handleSubmit}>

        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br/>
        <Button variant="contained" color="primary" label="Submit" type="submit">
          I want to sail away
        </Button>
      </form>
    )
  }
}

MailChimpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailChimpForm);