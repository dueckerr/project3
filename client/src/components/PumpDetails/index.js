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

class PumpDetails extends Component {
  state = {
    logs: [],
    pumps: [],
  };
  // //discharge valve
  // DH1_valve: '',
  // DH2_valve: '',
  // DH3_valve: '',
  // DH4_valve: '',
  // DH5_valve: '',
  // //discharge seat
  // DH1_seat: '',
  // DH2_seat: '',
  // DH3_seat: '',
  // DH4_seat: '',
  // DH5_seat: '',
  // //discharge DRing
  // DH1_DRing: '',
  // DH2_DRing: '',
  // DH3_DRing: '',
  // DH4_DRing: '',
  // DH5_DRing: '',
  // //suciton valve
  // SH1_valve: '',
  // SH2_valve: '',
  // SH3_valve: '',
  // SH4_valve: '',
  // SH5_valve: '',
  // //suction seat
  // SH1_seat: '',
  // SH2_seat: '',
  // SH3_seat: '',
  // SH4_seat: '',
  // SH5_seat: '',
  // //suction DRing
  // SH1_DRing: '',
  // SH2_DRing: '',
  // SH3_DRing: '',
  // SH4_DRing: '',
  // SH5_DRing: '',
  // //packing
  // SH1_packing: '',
  // SH2_packing: '',
  // SH3_packing: '',
  // SH4_packing: '',
  // SH5_packing: '',
  // // plungers
  // SH1_plunger: '',
  // SH2_plunger: '',
  // SH3_plunger: '',
  // SH4_plunger: '',
  // SH5_plunger: ''

  componentDidMount() {
    this.loadLogs();
    this.loadSavedPumps();
  }

  loadSavedPumps = () => {
    API.GetPumps()
    .then(res =>
      this.setState({pumps:res.data})
      )
      .catch(err => console.log(err));
  };

  loadLogs = () => {
    API.getMaintLogs()
    .then(res =>
      this.setState({logs:res.data})
      )
      .catch(err => console.log(err));
  };
  
  // findLastChanged = () => {
  //           //discharge valve
  //           let DH1_valve = 0;
  //           let DH2_valve = 0;
  //           let DH3_valve = 0;
  //           let DH4_valve = 0;
  //           let DH5_valve = 0;
  //           //discharge seat
  //           let DH1_seat = 0;
  //           let DH2_seat = 0;
  //           let DH3_seat = 0;
  //           let DH4_seat = 0;
  //           let DH5_seat = 0;
  //           //discharge DRing
  //           let DH1_DRing = 0;
  //           let DH2_DRing = 0;
  //           let DH3_DRing = 0;
  //           let DH4_DRing = 0;
  //           let DH5_DRing = 0;
  //           //suciton valve
  //           let SH1_valve = 0;
  //           let SH2_valve = 0;
  //           let SH3_valve = 0;
  //           let SH4_valve = 0;
  //           let SH5_valve = 0;
  //           //suction seat
  //           let SH1_seat = 0;
  //           let SH2_seat = 0;
  //           let SH3_seat = 0;
  //           let SH4_seat = 0;
  //           let SH5_seat = 0;
  //           //suction DRing
  //           let SH1_DRing = 0;
  //           let SH2_DRing = 0;
  //           let SH3_DRing = 0;
  //           let SH4_DRing = 0;
  //           let SH5_DRing = 0;
  //           //packing
  //           let SH1_packing = 0;
  //           let SH2_packing = 0;
  //           let SH3_packing = 0;
  //           let SH4_packing = 0;
  //           let SH5_packing = 0;
  //           // plungers
  //           let SH1_plunger = 0;
  //           let SH2_plunger = 0;
  //           let SH3_plunger = 0;
  //           let SH4_plunger = 0;
  //           let SH5_plunger = 0;
  //  if (DH1_valve === true) this.setState.DH1_valve = logs.data.stroke_range;
  //  if (DH2_valve === true) this.setState.DH2_valve = logs.data.stroke_range;
  //  if (DH3_valve === true) this.setState.DH3_valve = logs.data.stroke_range;
  //  if (DH4_valve === true) this.setState.DH4_valve = logs.data.stroke_range;
  //  if (DH5_valve === true) this.setState.DH5_valve = logs.data.stroke_range;
  //  //discharge seat
  //  if (DH1_seat === true) this.setState.DH1_seat = logs.data.stroke_range;
  //  if (DH2_seat === true) this.setState.DH2_seat = logs.data.stroke_range;
  //  if (DH3_seat === true) this.setState.DH3_seat = logs.data.stroke_range;
  //  if (DH4_seat === true) this.setState.DH4_seat = logs.data.stroke_range;
  //  if (DH5_seat === true) this.setState.DH5_seat = logs.data.stroke_range;
  //  //discharge DRing
  //  if (DH1_DRing === true) this.setState.DH1_DRing = logs.data.stroke_range;
  //  if (DH2_DRing === true) this.setState.DH2_DRing = logs.data.stroke_range;
  //  if (DH3_DRing === true) this.setState.DH3_DRing = logs.data.stroke_range;
  //  if (DH4_DRing === true) this.setState.DH4_DRing = logs.data.stroke_range;
  //  if (DH5_DRing === true) this.setState.DH5_DRing = logs.data.stroke_range;
  //  //suciton valve
  //  if (SH1_valve === true) this.setState.SH1_valve = logs.data.stroke_range;
  //  if (SH2_valve === true) this.setState.SH2_valve = logs.data.stroke_range;
  //  if (SH3_valve === true) this.setState.SH3_valve = logs.data.stroke_range;
  //  if (SH4_valve === true) this.setState.SH4_valve = logs.data.stroke_range;
  //  if (SH5_valve === true) this.setState.SH5_valve = logs.data.stroke_range;
  //  //suction seat
  //  if (SH1_seat === true) this.setState.SH1_seat = logs.data.stroke_range;
  //  if (SH2_seat === true) this.setState.SH2_seat = logs.data.stroke_range;
  //  if (SH3_seat === true) this.setState.SH3_seat = logs.data.stroke_range;
  //  if (SH4_seat === true) this.setState.SH4_seat = logs.data.stroke_range;
  //  if (SH5_seat === true) this.setState.SH5_seat = logs.data.stroke_range;
  //  //suction DRing
  //  if (SH1_DRing === true) this.setState.SH1_DRing = logs.data.stroke_range;
  //  if (SH2_DRing === true) this.setState.SH2_DRing = logs.data.stroke_range;
  //  if (SH3_DRing === true) this.setState.SH3_DRing = logs.data.stroke_range;
  //  if (SH4_DRing === true) this.setState.SH4_DRing = logs.data.stroke_range;
  //  if (SH5_DRing === true) this.setState.SH5_DRing = logs.data.stroke_range;
  //  //packing
  //  if (SH1_packing === true) this.setState.SH1_packing = logs.data.stroke_range;
  //  if (SH2_packing === true) this.setState.SH2_packing = logs.data.stroke_range;
  //  if (SH3_packing === true) this.setState.SH3_packing = logs.data.stroke_range;
  //  if (SH4_packing === true) this.setState.SH4_packing = logs.data.stroke_range;
  //  if (SH5_packing === true) this.setState.SH5_packing = logs.data.stroke_range;
  //  // plungers
  //  if (SH1_plunger === true) this.setState.SH1_plunger = logs.data.stroke_range;
  //  if (SH2_plunger === true) this.setState.SH2_plunger = logs.data.stroke_range;
  //  if (SH3_plunger === true) this.setState.SH3_plunger = logs.data.stroke_range;
  //  if (SH4_plunger === true) this.setState.SH4_plunger = logs.data.stroke_range;
  //  if (SH5_plunger === true) this.setState.SH5_plunger = logs.data.stroke_range;
    
  // }

  render() {
    return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>ID</TableCell>
                <TableCell align="right">Parts</TableCell>
                <TableCell align="right">Hole 1</TableCell>
                <TableCell align="right">Hole 2</TableCell>
                <TableCell align="right">Hole 3</TableCell>
                <TableCell align="right">Hole 4</TableCell>
                <TableCell align="right">Hole 5</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell align='right'>Discharge Valves</TableCell>
                <TableCell align="right">9000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align='right'>Discharge Seats</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell align='right'>Discharge D-Ring</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell align='right'>Suction Valves</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow >
                <TableRow >
                <TableCell align='right'>Suction Seats</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell align='right'>Suction D-Ring</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow >
                <TableRow >
                <TableCell align='right'>Plunger</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell align='right'>Packing</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Paper>
      );
}



};

export default withStyles(styles)(PumpDetails);