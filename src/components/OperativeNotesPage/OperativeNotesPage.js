import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

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


class OperativeNotesPage extends Component {
    state = {
        operativeNotes: '',
        userId: '',
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    saveOperativeNotes = () => {
        console.log('Operative Notes State', this.state);
        this.props.dispatch({ type: 'UPDATE_OPERATIVE_NOTE', 
        payload: {
            operativeNotes: this.state.operativeNotes,
            userId: this.props.reduxState.patientReducer.patient.id
        }
         })
         
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <h1>Operative Notes </h1>
                <Button variant="outlined" onClick={this.saveOperativeNotes}>Save</Button>
                <Grid container spacing={24} >
                    <GridItem item xs={12}>
                            <DialogContent >
                                <TextField
                                    onChange={this.handleChange}
                                    value={this.state.operativeNotes}
                                    name="operativeNotes"
                                    margin="dense"
                                    id="operativeNotes"
                                    label="Operative Notes"
                                    type="text"
                                    fullWidth={true}
                                    multiline
                                    rows="20"
                                    variant="outlined"
                                    />
                            </DialogContent> 
                    </GridItem>
                </Grid> 
            </div>

        )
    }
  
};

OperativeNotesPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(OperativeNotesPage))
