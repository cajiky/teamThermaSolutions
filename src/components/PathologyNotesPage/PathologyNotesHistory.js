import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 1020,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });

class PathologyNotesHistory extends React.Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_PATHOLOGY_HISTORY', payload: this.props.patientReducer.patient.id })
        this.setState ({ pathologyNotes: '',})
      }


  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Created By</TableCell>
                    <TableCell>Pathology Notes</TableCell>
                    <TableCell>Note Completion Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.pathologyHistoryReducer.map( note => {
                    return(
                    <TableRow>
                        <TableCell>{note.title} {note.last_name}, {note.first_name}</TableCell>
                        <TableCell>{note.pathology_report}</TableCell>
                        <TableCell>{moment(note.date_completed).format('LLLL')}</TableCell>
                    </TableRow>
                    )}
                )} 
            </TableBody>
        </Table> 
    </div> 
        )      
    }
}

const mapStateToProps = reduxState => ({
    pathologyHistoryReducer: reduxState.pathologyHistoryReducer,
    patientReducer: reduxState.patientReducer,
});

export default connect(mapStateToProps) (withStyles(styles)(PathologyNotesHistory))
