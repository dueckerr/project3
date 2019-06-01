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

  findLastMaint = () => {

  }


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
  // //discharge Seal
  // DH1_Seal: '',
  // DH2_Seal: '',
  // DH3_Seal: '',
  // DH4_Seal: '',
  // DH5_Seal: '',
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
  // //suction Seal
  // SH1_Seal: '',
  // SH2_Seal: '',
  // SH3_Seal: '',
  // SH4_Seal: '',
  // SH5_Seal: '',
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
      this.setState({pumps:res.data, unit_id: ''})
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
  //           //discharge Seal
  //           let DH1_Seal = 0;
  //           let DH2_Seal = 0;
  //           let DH3_Seal = 0;
  //           let DH4_Seal = 0;
  //           let DH5_Seal = 0;
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
  //           //suction Seal
  //           let SH1_Seal = 0;
  //           let SH2_Seal = 0;
  //           let SH3_Seal = 0;
  //           let SH4_Seal = 0;
  //           let SH5_Seal = 0;
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
  //  //discharge Seal
  //  if (DH1_Seal === true) this.setState.DH1_Seal = logs.data.stroke_range;
  //  if (DH2_Seal === true) this.setState.DH2_Seal = logs.data.stroke_range;
  //  if (DH3_Seal === true) this.setState.DH3_Seal = logs.data.stroke_range;
  //  if (DH4_Seal === true) this.setState.DH4_Seal = logs.data.stroke_range;
  //  if (DH5_Seal === true) this.setState.DH5_Seal = logs.data.stroke_range;
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
  //  //suction Seal
  //  if (SH1_Seal === true) this.setState.SH1_Seal = logs.data.stroke_range;
  //  if (SH2_Seal === true) this.setState.SH2_Seal = logs.data.stroke_range;
  //  if (SH3_Seal === true) this.setState.SH3_Seal = logs.data.stroke_range;
  //  if (SH4_Seal === true) this.setState.SH4_Seal = logs.data.stroke_range;
  //  if (SH5_Seal === true) this.setState.SH5_Seal = logs.data.stroke_range;
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
              <TableCell> Unit Number</TableCell>
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
                <TableCell></TableCell>
                <TableCell align='right'>Discharge Valves</TableCell>
                <TableCell align="right">9000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell></TableCell>
                <TableCell align='right'>Discharge Seats</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell></TableCell>
                <TableCell align='right'>Discharge Seal</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell></TableCell>
                <TableCell align='right'>Suction Valves</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow >
                <TableRow >
                <TableCell></TableCell>
                <TableCell align='right'>Suction Seats</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell></TableCell>
                <TableCell align='right'>Suction Seal</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow >
                <TableRow >
                <TableCell></TableCell>
                <TableCell align='right'>Plunger</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="right">1000</TableCell>
                </TableRow>
                <TableRow >
                <TableCell></TableCell>
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