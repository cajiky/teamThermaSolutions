import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import FormGroup from '@material-ui/core/FormGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Fragment from '@material-ui/core/Fragment';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FollowUpDetailRecurrence from './FollowUpDetailRecurrence';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  expasion: {
    backgroundColor: '#cccccc',
    minHeight: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  group: {
      flexDirection: 'row',
  },
  superCool: {
      backgroundColor: '#eeeeee',
      height: 25,
  }
});

class AddFollowUpDialog extends Component {

  state = {
    open: false,
    id: 0,
    patient_id: 0,
    date: null,
  };

  componentDidMount () {
    this.setState({
        patient_id: this.props.patientReducer.patient.id
    })
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Called when the input field changes
  handleChange = (event) => {
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
    });
  };

  addFollowUpHistory = () => {
    // console.log('in add followup history', this.state, this.props.followUpHistory);
    // this will happen on button add
    this.props.dispatch({type: 'ADD_FOLLOW_UP_HISTORY', payload: this.state});
    // this.props.dispatch({type: 'FETCH_FOLLOW_UP_HISTORY', payload: this.state.patient_id});
    this.setState({ open: false });
    // add empty local state .. will need to spread first
    // this.setState({
    //     ...this.state,
    //     // follow_up_history: this.props.followUpHistory,
    //     // ...this.state.follow_up_history, emptyFollowUpHistory
    //     follow_up_history: [emptyFollowUpHistory, ...this.state.follow_up_history],
    // });
    // console.log('after add followup history', this.state, this.props.followUpHistory);
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          New Followup
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Follow Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the new follow up date to add to the list.
            </DialogContentText>
                <TextField
                    name="date"
                    label="Follow Up Date"
                    className={classes.textField}
                    value={moment(this.state.date).format('YYYY-MM-DD')}
                    // fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="date"
                    onChange={this.handleChange}
                    margin="normal"
                    // variant="outlined"
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addFollowUpHistory} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  patientReducer: reduxState.patientReducer,
});

export default connect(mapStateToProps) (withStyles(styles)(AddFollowUpDialog));