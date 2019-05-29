import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../utils/API";

// import MaintAPI from './utils';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class GetParts extends Component {
  state = {
    parts: []
  };

  componentDidMount() {
    this.loadparts();
  }


  loadparts = () => {
    API.GetParts()
    .then(res =>
      this.setState({parts:res.data})
      )
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Part</TableCell>
            <TableCell align="right">Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.parts && this.state.parts.map(parts =>
            <TableRow key={parts.parts_id}>
              <TableCell component="th" scope="row">{parts.part_name}</TableCell>
              <TableCell align="right">{parts.stock}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}



};

export default withStyles(styles)(GetParts);