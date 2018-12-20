import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import DialogContent from '@material-ui/core/DialogContent';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';

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

  

  class ResectionDropdown extends Component {

    state = [
        {id: '',
        name: '',
        status: false,     
        }
      ];
    
      // Called when the input field changes
      handleChangeCheckbox = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
      }


    render() {
    const { classes } = this.props;
    const myOptions = this.props.reduxState.dropdownOptions.resections;

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Resection</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormGroup row>
            <Grid container spacing={24} >
            {
            myOptions.map((option, index) => (
                
                <GridItem item xs={2} >
                    <Paper>
                        <FormControlLabel
                        control={
                            <Checkbox
                            name={option.name}
                            checked={this.state.status}
                            onChange={this.handleChangeCheckbox}
                            value={option.status}
                            />
                        }
                        label={option.name}
                        />
                    </Paper>    
                </GridItem>
                
            ))
            }
            </Grid>
            </FormGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>
    )};
  }
  


  ResectionDropdown.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(ResectionDropdown))