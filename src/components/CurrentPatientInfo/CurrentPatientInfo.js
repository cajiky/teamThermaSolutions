import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';


const styles = theme => ({
    root: {
      width: '100%',
      flexGrow: 1,
      marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      
    },
    table: {
        minWidth: 700,
      },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    redBold: {
        color: red[500],
        textTransform: 'uppercase',
        fontWeight: '900',
        // useNextVariants: true,
    },
  });

class CurrentPatientInfo extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
            <Grid container spacing={24}>
                <Grid item xs={2.5}>
                <span className={classes.redBold}>Patient ID: </span>{this.props.patient.patient_no}
                </Grid>
                <Grid item xs={2.5}>
                <span className={classes.redBold}>Date of Birth: </span>{this.props.patient.dob}
                </Grid>
                <Grid item xs={2.5}>
                <span className={classes.redBold}>Age: </span>{Math.floor((new Date() - new Date(this.props.patient.dob).getTime()) / 3.15576e+10)}
                </Grid>
                {/* {age = Math.floor((new Date() - new Date(this.props.patient.dob).getTime()) / 3.15576e+10)} */}
                <Grid item xs={2.5}>
                <span className={classes.redBold}>Gender: </span>{this.props.patient.gender}
                </Grid>
                {this.props.patient.hipec_date ? (<Grid item xs={2.5}><span className={classes.redBold}>HIPEC: </span>YES</Grid>) : (<></>)}
                {this.props.patient.hipec_date ? (<Grid item xs={2.5}><span className={classes.redBold}>Date of HIPEC: </span>{this.props.patient.hipec_date}</Grid>) : (<></>)}
            </Grid>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Building this out tomorrow
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
            </div>
        );
    }
}

CurrentPatientInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    patient: reduxState.patientReducer.patient,
});


export default withStyles(styles)(connect(mapStateToProps)(CurrentPatientInfo));