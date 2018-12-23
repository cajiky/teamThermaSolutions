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
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';

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

    state = {

    }
    
      // Called when the input field changes
      handleChangeCheckbox = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
        console.log('checkbox state', this.state);
        
      }


    render() {
    const { classes } = this.props;
    const myOptions = this.props.reduxState.dropdownOptions.resections;

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Resection</Typography>
            <Typography className={classes.heading}>(click to expand)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormGroup row>
              <Grid container spacing={24} >
              {
              myOptions.map((option, index) => (
                
                <GridItem item xs={2} >
                        <FormControlLabel
                        control={
                            <Checkbox
                            key={option.index} 
                            name={option.name}
                            checked={this.state.status}
                            onChange={this.handleChangeCheckbox}
                            value={option.status}
                            />
                        }
                        label={option.name}
                        />  
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