import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const myOptions = [
  {id: 1, status: 'Yes'},
  {id: 2, status: 'No'},
  {id: 3, status: 'Unknown'}
]

class ReoperationSelector extends Component {

  state= { 
      ReopState: '',
  };

  renderTagOptions() {
    // 
    return myOptions.map((option, i) => {
      return (
        <MenuItem
          key={i}
          value={option.id}>
          {option.status}
        </MenuItem>
      ); // end return
    }); // end map
  } // end renderTagOptions

  render(){
    return (
      <Select autowidth="false"
        // value={this.props.tag_id}
        name="tag_id"
        // onChange={this.props.handleChange}
      >
        {this.renderTagOptions()}
      </Select>
    )
  } // end return
} // end class TagSelector

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ReoperationSelector);