import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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


    render() {
        const { classes } = this.props;
        return(
            <div>
                <h1>Pathology Notes </h1>
                <Grid container spacing={24} >
                <GridItem item xs={12}>
                    <Paper>
                        <DialogContent >
                            <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="pathologyNotes"
                                autoFocus
                                margin="dense"
                                id="pathologyNotes"
                                label="Pathology Notes"
                                type="text"
                                fullWidth
                                multiline
                                rows="20"
                                variant="outlined"
                                />
                        </DialogContent>
                        </Paper>    
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
