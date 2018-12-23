import React, { Component } from 'react'
import { connect } from 'react-redux';
import ResectionDropdown from '../InterventionPage/ResectionDropdown';
import AdditionalPageInfo from '../InterventionPage/AdditionalPageInfo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

  const lesionSizeScore = [
    { option: 'LS 0 No Tumor Seen', score: 0 },
    { option: 'LS 1 Tumor up to 0.5cm', score: 1 },
    { option: 'LS 2 Tumor up to 5.0cm', score: 2 },
    { option: 'LS 3 Tumor > 5.0cm or confluence', score: 3 },
  ];


  class InterventionPage extends Component {
    state = {
        central: '',
        rightUpper:'',
        Epigastrium:'',
        leftUpper:'',
        leftFlank:'',
        leftLower:'',
        pelvis:'',
        rightLower:'',
        rightFlank:'',
        upperJejunum:'',
        lowerJejunum:'',
        upperIlium:'',
        lowerIlium:'',
        surgeonOne: '',
        surgeonTwo:'',
        surgeonThree: '',
        nrHipec: '',
        hipecType:'',
        reasonOC:'',
        expanded: true,
    }

    componendDidMount(){
        this.setState({
            expanded: true
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
        console.log('intervention state', this.state);
        
      }

    expansionPanel = () => {
        this.setState({
            expanded: !true
        })
    }

    render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel onclick={this.expansionPanel} >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Peritoneal Cancer Index (PCI)</Typography>
            <Typography className={classes.heading}>PCI: 36</Typography>
            <Typography className={classes.heading}>(click to expand)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Region Number</TableCell>
                                <TableCell>Region Name</TableCell>
                                <TableCell>Lesion Size/Score</TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                    <TableRow >
                                        <TableCell>
                                            0
                                        </TableCell>
                                        <TableCell>
                                            Central
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.central}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.central}
                                                    name="central"
                                                    id="central"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            1
                                        </TableCell>
                                        <TableCell>
                                        Right Upper
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.rightUpper}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.rightUpper}
                                                    name="rightUpper"
                                                    id="rightUpper"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            2
                                        </TableCell>
                                        <TableCell>
                                        Epigastrium
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.Epigastrium}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.Epigastrium}
                                                    name="Epigastrium"
                                                    id="Epigastrium"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            3
                                        </TableCell>
                                        <TableCell>
                                        Left Upper
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.leftUpper}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.leftUpper}
                                                    name="leftUpper"
                                                    id="leftUpper"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            4
                                        </TableCell>
                                        <TableCell>
                                        Left Flank
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.leftFlank}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.leftFlank}
                                                    name="leftFlank"
                                                    id="leftFlank"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            5
                                        </TableCell>
                                        <TableCell>
                                        Left Lower
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.leftLower}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.leftLower}
                                                    name="leftLower"
                                                    id="leftLower"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            6
                                        </TableCell>
                                        <TableCell>
                                        Pelvis
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.pelvis}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.pelvis}
                                                    name="pelvis"
                                                    id="pelvis"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            7
                                        </TableCell>
                                        <TableCell>
                                        Right Lower
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.rightLower}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.rightLower}
                                                    name="rightLower"
                                                    id="rightLower"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            8
                                        </TableCell>
                                        <TableCell>
                                        Right Flank
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.rightFlank}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.rightFlank}
                                                    name="rightFlank"
                                                    id="rightFlank"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            9
                                        </TableCell>
                                        <TableCell>
                                        Upper Jejunum
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.upperJejunum}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.upperJejunum}
                                                    name="upperJejunum"
                                                    id="upperJejunum"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            10
                                        </TableCell>
                                        <TableCell>
                                        Lower Jejunum
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.lowerJejunum}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.lowerJejunum}
                                                    name="lowerJejunum"
                                                    id="lowerJejunum"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            11
                                        </TableCell>
                                        <TableCell>
                                        Upper Ilium
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.upperIlium}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.upperIlium}
                                                    name="upperIlium"
                                                    id="upperIlium"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>
                                            12
                                        </TableCell>
                                        <TableCell>
                                        Lower Ilium
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth={true}
                                                value={this.state.lowerIlium}
                                                onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    value={this.state.lowerIlium}
                                                    name="lowerIlium"
                                                    id="lowerIlium"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem key={score.index} value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
            </Grid>
            <Grid  container spacing={24}>
                    <img height="650" width="750" src="images/bodyImage.png"/>
                    <GridItem item xs={4} sm={4}>
                            <DialogContent >
                                <TextField
                                onChange={this.handleChange}
                                value={this.state.surgeonOne}
                                name="surgeonOne"
                                margin="dense"
                                id="surgeonOne"
                                label="Surgeon 1"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                            <DialogContent >
                                <TextField
                                onChange={this.handleChange}
                                value={this.state.surgeonTwo}
                                name="surgeonTwo"
                                margin="dense"
                                id="surgeonTwo"
                                label="Surgeon 2"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                            <DialogContent >
                                <TextField
                                onChange={this.handleChange}
                                value={this.state.surgeonThree}
                                name="surgeonThree"
                                margin="dense"
                                id="surgeonThree"
                                label="Surgeon 3"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                            <DialogContent >
                                <TextField
                                onChange={this.handleChange}
                                value={this.state.nrHipec}
                                name="nrHipec"
                                margin="dense"
                                id="nrHipec"
                                label="Nr HIPEC"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                        <DialogContent >
                            <FormControl fullWidth={true} variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        HIPEC Type
                                    </InputLabel>
                                <Select
                                        value={this.state.hipecType}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            value={this.state.hipecType}
                                            name="hipecType"
                                            id="hipecType"
                                        />
                                        }
                                    >
                                        {this.props.reduxState.dropdownOptions.hipecTypeOptions.map( option => {
                                            return(
                                                <MenuItem key={option.index} value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                        
                                    </Select>
                                </FormControl>
                            </DialogContent>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                            <DialogContent >
                                <FormControl fullWidth={true} variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        Reason O/C
                                    </InputLabel>
                                    <Select
                                        value={this.state.reasonOC}
                                        onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="reasonOC"
                                            fullWidth
                                            id="reasonOC"
                                        />
                                        }
                                    >
                                    {this.props.reduxState.dropdownOptions.reasonOpenCloseOption.map( option => {
                                            return(
                                                <MenuItem key={option.index} value={option.id}>{option.status}</MenuItem>
                                            )
                                            
                                        })}
                                    </Select>
                                </FormControl>
                            </DialogContent>
                    </GridItem>
                </Grid>                    
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ResectionDropdown/>
        <AdditionalPageInfo/>
      </div>
    )};
  }
  


  InterventionPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(InterventionPage))