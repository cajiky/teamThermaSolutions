import React, { Component } from 'react'
import { connect } from 'react-redux';
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

  const regions = [
      { regionNumber: 0, regionName: 'Central', },
      { regionNumber: 1, regionName: 'Right Upper', },
      { regionNumber: 2, regionName: 'Epigastrium', },
      { regionNumber: 3, regionName: 'Left Upper', },
      { regionNumber: 4, regionName: 'Left Flank', },
      { regionNumber: 5, regionName: 'Left Lower', },
      { regionNumber: 6, regionName: 'Pelvis', },
      { regionNumber: 7, regionName: 'Right Lower', },
      { regionNumber: 8, regionName: 'Right Flank', },
      { regionNumber: 9, regionName: 'Upper Jejunum', },
      { regionNumber: 10, regionName: 'Lower Jejunum', },
      { regionNumber: 11, regionName: 'Upper Ilium', },
      { regionNumber: 12, regionName: 'Lower Ilium', },
  ]

  function InterventionPage(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Peritoneal Cancer Index (PCI)</Typography>
            <Typography className={classes.heading}>PCI: 36</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24} >
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Region Number</TableCell>
                                <TableCell>Region Name</TableCell>
                                <TableCell>Lesion Size/Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                {regions.map(region => {
                                    return(
                                    <TableRow>
                                        <TableCell>
                                            {region.regionNumber}
                                        </TableCell>
                                        <TableCell>
                                            {region.regionName}
                                        </TableCell>
                                        <TableCell>
                                            <Select fullWidth
                                                // value={this.state.title}
                                                // onChange={this.handleChange}
                                                input={
                                                <OutlinedInput
                                                    name="title"
                                                    // labelWidth={this.state.labelWidth}
                                                    id="outlined-age-native-simple"
                                                />
                                                }
                                            >
                                                {lesionSizeScore.map( score => {
                                                    return(
                                                        <MenuItem value={score.score} >{score.option}</MenuItem>
                                                    )
                                                })}
                                                
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                    )
                                })}

                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <Grid  container spacing={24}>
                <Paper className={classes.paper}>
                    <img height="650" width="750" src="images/bodyImage.png"/>
                </Paper>
                    <GridItem item xs={4} sm={4}>
                        <Paper>
                            <DialogContent >
                                <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="firstName"
                                autoFocus
                                margin="dense"
                                id="surgeonOne"
                                label="Surgeon 1"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                        </Paper>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                        <Paper>
                            <DialogContent >
                                <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="firstName"
                                autoFocus
                                margin="dense"
                                id="surgeonTwo"
                                label="Surgeon 2"
                                type="text"
                                
                                variant="outlined"
                                />
                            </DialogContent>
                        </Paper>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                        <Paper>
                            <DialogContent >
                                <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="firstName"
                                autoFocus
                                margin="dense"
                                id="surgeonThree"
                                label="Surgeon 3"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                        </Paper>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                        <Paper>
                            <DialogContent >
                                <TextField
                                // onChange={this.handleChange}
                                // value={this.state.firstName}
                                name="nrHipec"
                                autoFocus
                                margin="dense"
                                id="nrHipec"
                                label="Nr HIPEC"
                                type="text"
                                variant="outlined"
                                />
                            </DialogContent>
                        </Paper>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                        <Paper>
                            <DialogContent >
                            <FormControl fullWidth variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        HIPEC Type
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
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Dr.">Dr.</MenuItem>
                                        <MenuItem value="Mr.">Mr.</MenuItem>
                                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                                        <MenuItem value="Miss">Miss</MenuItem>
                                    </Select>
                                </FormControl>
                            </DialogContent>
                        </Paper>
                    </GridItem>
                    <GridItem item xs={4} sm={4}>
                        <Paper>
                            <DialogContent >
                                <FormControl fullWidth variant="outlined" margin="dense" className={classes.formControl}>
                                    <InputLabel
                                        // ref={ref => {
                                        // this.InputLabelRef = ref;
                                        // }}
                                        htmlFor="outlined-age-native-simple"
                                    >
                                        Reason O/C
                                    </InputLabel>
                                    <Select
                                        
                                        // value={this.state.title}
                                        // onChange={this.handleChange}
                                        input={
                                        <OutlinedInput
                                            name="title"
                                            fullWidth
                                            id="outlined-age-native-simple"
                                        />
                                        }
                                    >
                                        <MenuItem value="None">None</MenuItem>
                                        <MenuItem value="Dr.">Dr.</MenuItem>
                                        <MenuItem value="Mr.">Mr.</MenuItem>
                                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                                        <MenuItem value="Miss">Miss</MenuItem>
                                    </Select>
                                </FormControl>
                            </DialogContent>
                        </Paper>
                    </GridItem>
            </Grid>

            
                                
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Resection</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Building this out tomorrow!
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>
    );
  }
  


  InterventionPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (withStyles(styles)(InterventionPage))
