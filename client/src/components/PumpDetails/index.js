import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../utils/API";

// This file exports the Input, TextArea, and FormBtn components

class GetsavedPumps extends Component {
    state = {
      savedPumps: []
    };
  
    componentDidMount() {
      this.savedPumplist();
    }
    savedPumplist = () => {
    API.GetPumps()
    .then(res =>
        this.setState({savedPumps:res.data})
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

    render() {
        return (
          <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Unit Number</TableCell>
                <TableCell align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.savedPumps && this.state.savedPumps.map(savedPumps =>
                <TableRow key={savedPumps.savedPumps_id}>
                  <TableCell component="th" scope="row">{savedPumps.part_name}</TableCell>
                  <TableCell align="right">{savedPumps.unit}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      );
    }
    
    
    
    };
    
    export default (GetsavedPumps);