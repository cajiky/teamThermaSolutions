import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PathologyNotesHistory from './PathologyNotesHistory';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

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
  });


class PathologyNotesPage extends Component {

    state = {
        pathologyNotes: '',
        userId: '',
        title: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    savePathologyNotes = () => {
        console.log('Pathology Notes State', this.state);
        this.props.dispatch({ type: 'UPDATE_PATHOLOGY_NOTE', 
        payload: {
            pathologyNotes: this.state.pathologyNotes,
            userId: this.props.reduxState.patientReducer.patient.id,
            title: this.props.reduxState.user.title,
            firstName: this.props.reduxState.user.first_name,
            lastName: this.props.reduxState.user.last_name,
        }
         })
         this.setState ({
            pathologyNotes: '',
        })
    }

    

    render() {
        const { classes } = this.props;
        return(
            <div>
                <h1>Pathology Notes </h1>
                <Grid container spacing={24} >
                    <GridItem item xs={12}>
                            <DialogContent >
                                <TextField
                                    onChange={this.handleChange}
                                    value={this.state.pathologyNotes}
                                    name="pathologyNotes"
                                    margin="dense"
                                    id="pathologyNotes"
                                    label="Pathology Notes"
                                    type="text"
                                    fullWidth={true}
                                    multiline
                                    rows="10"
                                    variant="outlined"
                                    />
                            </DialogContent>    
                    </GridItem>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.savePathologyNotes}>Save</Button>
                <br/>
                <PathologyNotesHistory pathState={this.state}/>

            </div>

        )
    }
  
};

PathologyNotesPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(PathologyNotesPage))
