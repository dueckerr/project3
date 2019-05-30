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
    // this.loadlogsPerUnit();
  }

  // loadlogsPerUnit() {
  //   API.getMaintLogsPerUnit()
  //   .then(res =>
  //     this.setState({logs:res.data})
  //     )
  //     .catch(err => console.log(err));
  // };

  loadLogs = () => {
    API.getMaintLogs()
    .then(res =>
      this.setState({logs:res.data})
      )
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Unit Number </TableCell>
            <TableCell align="right">Pump Strokes</TableCell>
            <TableCell align="right">Valves</TableCell>
            <TableCell align="right">Seats</TableCell>
            <TableCell align="right">D-Rings</TableCell>
            <TableCell align="right">Packing</TableCell>
            <TableCell align="right">Plungers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.logs && this.state.logs.map(maintenance_logs =>
            <TableRow key={maintenance_logs.logs_id}>
              <TableCell component="th"> {maintenance_logs.logs_id}</TableCell>
              <TableCell align="right">{maintenance_logs.unit_id}</TableCell>
              <TableCell align="right">{maintenance_logs.stroke_range}</TableCell>
              <TableCell align="right">{maintenance_logs.valve_used}</TableCell>
              <TableCell align="right">{maintenance_logs.seat_used}</TableCell>
              <TableCell align="right">{maintenance_logs.DRing_used}</TableCell>
              <TableCell align="right">{maintenance_logs.packing_used}</TableCell>
              <TableCell align="right">{maintenance_logs.plunger_used}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
  );
}



};

export default withStyles(styles)(MaintLogs);