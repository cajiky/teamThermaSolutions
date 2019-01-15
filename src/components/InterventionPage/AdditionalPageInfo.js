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
                            name="anastomosis"
                            checked={this.props.state.anastomosis}
                            onChange={this.props.handleChangeCheckbox}
                            value={this.props.state.anastomosis}
                            />
                        }
                        label="Anastomosis"
                        />
                        <DialogContent >
                                <TextField
                                onChange={this.props.handleChange}
                                value={this.props.state.AnastomosisNumber}
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
                            name="revisionStoma"
                            checked={this.props.state.revisionStoma}
                            onChange={this.props.handleChangeCheckbox}
                            value={this.props.state.status}
                            />
                        }
                        label="Revision Stoma"
                        />
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="stomaPostHIPEC"
                            checked={this.props.state.stomaPostHIPEC}
                            onChange={this.props.handleChangeCheckbox}
                            value={this.props.state.status}
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
                                        value={this.props.state.stomaType}
                                        onChange={this.props.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="stomaType"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >
                                        {this.props.stomaTypeOptions.map( option => {
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
                                onChange={this.props.handleChange}
                                value={this.props.state.bloodLoss}
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
                                onChange={this.props.handleChange}
                                value={this.props.state.bloodLossTime}
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
                                        value={this.props.state.hipecRegiment}
                                        onChange={this.props.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="hipecRegiment"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >

                                        {this.props.hipecRegimentOptions.map( option => {
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
                                        value={this.props.state.duration}
                                        onChange={this.props.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="duration"
                                            id="duration"
                                        />
                                        }
                                    >

                                        {this.props.duration.map( option => {
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
                                    onChange={this.props.handleChange}
                                    value={this.props.state.volume}
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
                                onChange={this.props.handleChange}
                                value={this.props.state.concentration}
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
                                        value={this.props.state.rScore}
                                        onChange={this.props.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="rScore"
                                            id="rScore"
                                        />
                                        }
                                    >

                                        {this.props.rScoreOptions.map( option => {
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
    stomaTypeOptions: reduxState.dropdownOptions.stomaTypeOptions,
    hipecRegimentOptions: reduxState.dropdownOptions.hipecRegimentOptions,
    rScoreOptions: reduxState.dropdownOptions.rScoreOptions,
    duration: reduxState.dropdownOptions.duration,
});


export default connect(mapStateToProps) (withStyles(styles)(AdditionalPageInfo))