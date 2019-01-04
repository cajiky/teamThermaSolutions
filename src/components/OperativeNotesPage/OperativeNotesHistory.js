import React from 'react'
import { connect } from 'react-redux';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import TextField from '@material-ui/core/TextField';
// import swal from 'sweetalert';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FormControl from '@material-ui/core/FormControl';
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

  

class OperativeNotesHistory extends React.Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_OPERATIVE_HISTORY', payload: this.props.reduxState.patientReducer.patient.id })
      }


  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Created By</TableCell>
                    <TableCell>Operative Notes</TableCell>
                    <TableCell>Note Completion Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.reduxState.operativeHistoryReducer.map( note => {
                    return(
                    <TableRow>
                        <TableCell>{note.title} {note.last_name}, {note.first_name}</TableCell>
                        <TableCell>{note.operative_notes}</TableCell>
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
    reduxState,
});

export default connect(mapStateToProps) (withStyles(styles)(OperativeNotesHistory))
