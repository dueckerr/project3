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

class MaintLogs extends Component {
  state = {
    logs: []
  };

  componentDidMount() {
    this.loadLogs();
  }


  loadLogs = () => {
    API.getMaintLogs()
    .then(res =>
      this.setState({logs:res.data})
      )
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Fleet</TableCell>
            <TableCell align="right">Unit #</TableCell>
            <TableCell align="right">Pump Strokes</TableCell>
            <TableCell align="right">Parts</TableCell>
            <TableCell align="right">Used</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.logs && this.state.logs.map(maintenance_logs =>
            <TableRow key={maintenance_logs.logs_id}>
              <TableCell component="th" scope="row">
              {maintenance_logs.logs_id}>
              </TableCell>
              <TableCell align="right">{maintenance_logs.logs_id}</TableCell>
              <TableCell align="right">{maintenance_logs.strokes_range}</TableCell>
              <TableCell align="right">{maintenance_logs.unit_id}</TableCell>
              <TableCell align="right">{maintenance_logs.part}</TableCell>
              <TableCell align="right">{maintenance_logs.consumed}</TableCell>
              <TableCell align="right">{maintenance_logs.logs_id}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}



};

export default withStyles(styles)(MaintLogs);