import React, { Component } from 'react'
import { connect } from 'react-redux';
import ResectionDropdown from '../InterventionPage/ResectionDropdown';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

  class AdditionalPageInfo extends Component {
    state = {  
        AnastomosisNumber:'', 
        stomaType:'',
        bloodLoss:'',
        volume: '',
        hipecRegiment: '',
        bloodLossTime: '',
        concentration: '',
        rScore: '',
        duration: '',
        }

    // Called when the input field changes
    handleChangeCheckbox = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked,
        });
        console.log('additional page state', this.state);
        
      }

      handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })
        console.log(this.state);
    }

    render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
           <FormGroup row>
                <Grid container spacing={24} >
                    <GridItem item xs={4} >
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="Anastomosis"
                            checked={this.state.status}
                            onChange={this.handleChangeCheckbox}
                            value={this.state.status}
                            />
                        }
                        label="Anastomosis"
                        />
                        <DialogContent >
                                <TextField
                                onChange={this.handleChange}
                                value={this.state.AnastomosisNumber}
                                name="AnastomosisNumber"
                                margin="dense"
                                id="AnastomosisNumber"
                                label="Anastomosis Number"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                </GridItem>
                <GridItem item xs={4} >
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="RevisionStoma"
                            checked={this.state.status}
                            onChange={this.handleChangeCheckbox}
                            value={this.state.status}
                            />
                        }
                        label="Revision Stoma"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="StomaPost-HIPEC"
                            checked={this.state.status}
                            onChange={this.handleChangeCheckbox}
                            value={this.state.status}
                            />
                        }
                        label="Stoma Post-HIPEC"
                        />
                        <DialogContent >
                            <FormControl fullWidth={true} variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        Stoma Type
                                    </InputLabel>
                                <Select
                                        value={this.state.stomaType}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="stomaType"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >
                                        {this.props.reduxState.dropdownOptions.stomaTypeOptions.map( option => {
                                            return(
                                                <MenuItem key={option.index} value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                    </Select>
                                </FormControl>
                            </DialogContent>   
                </GridItem>
                <GridItem item xs={4} >
                        <DialogContent >
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.bloodLoss}
                                name="bloodLoss"
                                margin="dense"
                                id="bloodLoss"
                                label="Bloodloss (ml)"
                                type="text"
                                variant="outlined"
                                />
                        </DialogContent>
                        <DialogContent >
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.bloodLossTime}
                                name="bloodLossTime"
                                margin="dense"
                                id="bloodLossTime"
                                label="Bloodloss Time (min)"
                                type="text"
                                variant="outlined"
                                />
                        </DialogContent>  
                </GridItem>
            </Grid>
            </FormGroup>
            <hr/>
            <FormGroup row>
                <Grid container spacing={24} >
                    <GridItem item xs={4}>
                        <DialogContent >
                            <FormControl fullWidth={true} variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        HIPEC Regiment
                                    </InputLabel>
                                <Select
                                        value={this.state.hipecRegiment}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="hipecRegiment"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.hipecRegimentOptions.map( option => {
                                            return(
                                                <MenuItem key={option.index} value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                            <DialogContent >
                            <FormControl fullWidth={true} variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        Duration
                                    </InputLabel>
                                <Select
                                        value={this.state.duration}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="duration"
                                            id="duration"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.duration.map( option => {
                                            return(
                                                <MenuItem key={option.index} value={option.value}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                        </GridItem>
                        <GridItem item xs={4}>
                            <DialogContent >
                                <TextField
                                    onChange={this.handleChange}
                                    value={this.state.volume}
                                    name="volume"
                                    margin="dense"
                                    id="volume"
                                    label="Volume"
                                    type="text"
                                    variant="outlined"
                                    />
                        </DialogContent>
                        <DialogContent >
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.concentration}
                                name="concentration"
                                margin="dense"
                                id="concentration"
                                label="Concentration"
                                type="text"
                                variant="outlined"
                                />
                        </DialogContent>
                    </GridItem>
                    <GridItem item xs={4}>
                        <DialogContent >
                            <FormControl fullWidth={true} variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        R-Score
                                    </InputLabel>
                                <Select
                                        value={this.state.rScore}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="rScore"
                                            id="rScore"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.rScoreOptions.map( option => {
                                            return(
                                                <MenuItem key={option.index} value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                    </Select>
                                </FormControl>
                        </DialogContent>   
                    </GridItem>
                </Grid>
            </FormGroup>
      </div>
    )};
  }
  


  AdditionalPageInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(AdditionalPageInfo))