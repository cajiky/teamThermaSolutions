import React, { Component } from 'react'
import { connect } from 'react-redux';
import ResectionDropdown from '../InterventionPage/ResectionDropdown';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridItem from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
    return (
      <div className={classes.root}>
           <FormGroup row>
            <Grid container spacing={24} >
                <GridItem item xs={4} >
                    <Paper>
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
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="AnastomosisNumber"
                                autoFocus
                                margin="dense"
                                id="Anastomosis"
                                label="Anastomosis Number"
                                type="text"
                                
                                variant="outlined"
                                />
                            </DialogContent>
                    </Paper>    
                </GridItem>
                <GridItem item xs={4} >
                    <Paper>
                        <FormControlLabel
                        control={
                            <Checkbox
                            name="Revision stoma"
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
                            name="Stoma Post-HIPEC"
                            checked={this.state.status}
                            onChange={this.handleChangeCheckbox}
                            value={this.state.status}
                            />
                        }
                        label="Stoma Post-HIPEC"
                        />
                        <DialogContent >
                            <FormControl fullWidth variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        Stoma Type
                                    </InputLabel>
                                <Select
                                        // value={this.state.title}
                                        // onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="title"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.stomaTypeOptions.map( option => {
                                            return(
                                                <MenuItem value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                    </Paper>    
                </GridItem>
                <GridItem item xs={4} >
                    <Paper>
                        <DialogContent >
                            <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="bloodLoss"
                                autoFocus
                                margin="dense"
                                id="bloodLoss"
                                label="Bloodloss (ml)"
                                type="text"
                                
                                variant="outlined"
                                />
                        </DialogContent>
                        <DialogContent >
                            <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="bloodLossTime"
                                autoFocus
                                margin="dense"
                                id="bloodLossTime"
                                label="Bloodloss Time (min)"
                                type="text"
                                
                                variant="outlined"
                                />
                        </DialogContent>
                    </Paper>    
                </GridItem>
               

            </Grid>
            </FormGroup>
            <hr/>
            <FormGroup row>
            <Grid container spacing={24} >
                <GridItem item xs={4}>
                    <Paper>
                        <DialogContent >
                            <FormControl fullWidth variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        HIPEC Regiment
                                    </InputLabel>
                                <Select
                                        // value={this.state.title}
                                        // onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="title"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.hipecRegimentOptions.map( option => {
                                            return(
                                                <MenuItem value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                            <DialogContent >
                            <FormControl fullWidth variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        Duration
                                    </InputLabel>
                                <Select
                                        // value={this.state.title}
                                        // onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="title"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.hipecRegimentOptions.map( option => {
                                            return(
                                                <MenuItem value={option.id}>need info</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                            </Paper>
                            </GridItem>
                            <GridItem item xs={4}>
                            <Paper>
                            <DialogContent >
                            <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="volume"
                                autoFocus
                                margin="dense"
                                id="volume"
                                label="Volume"
                                type="text"
                                variant="outlined"
                                />
                        </DialogContent>
                        <DialogContent >
                            <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="concentration"
                                autoFocus
                                margin="dense"
                                id="concentration"
                                label="Concentration"
                                type="text"
                                variant="outlined"
                                />
                        </DialogContent>
                        </Paper>
                        </GridItem>
                        <GridItem item xs={4}>
                        <Paper>
                        <DialogContent >
                            <FormControl fullWidth variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        R-Score
                                    </InputLabel>
                                <Select
                                        // value={this.state.title}
                                        // onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="title"
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >

                                        {this.props.reduxState.dropdownOptions.rScoreOptions.map( option => {
                                            return(
                                                <MenuItem value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                    </Paper>    
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