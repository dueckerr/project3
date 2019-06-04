import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import LineChart from "../components/LineChart";
import { Container } from '../components/Grid';
const data = [
  {
    name: 'Fleet A', Seat: 4000, Valve: 2400, Packing: 2400, Plunger: 2900,
  },
  {
    name: 'Fleet B', Seat: 3000, Valve: 1398, Packing: 2210, Plunger: 2000,
  },
  {
    name: 'Fleet C', Seat: 2000, Valve: 3800, Packing: 2290, Plunger: 2400,
  },
  {
    name: 'Fleet D', Seat: 2780, Valve: 3908, Packing: 2000, Plunger: 2100,
  },
  {
    name: 'Fleet E', Seat: 1890, Valve: 4800, Packing: 2181, Plunger: 2500,
  },
  {
    name: 'Fleet F', Seat: 2390, Valve: 3800, Packing: 2500, Plunger: 2400,
  },
  {
    name: 'Fleet G', Seat: 3490, Valve: 4300, Packing: 2100, Plunger: 2800,
  },
];

export default class chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
    <div>
<Container>
    <h3> Average Stroke Life</h3>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
            top: 20, right: 30, left: 20, bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="Valve" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="Seat" fill="blue" />
        <Bar yAxisId="right" dataKey="Packing" fill="#82ca9d" />
        <Bar yAxisId="right" dataKey="Plunger" fill="#green" />

      </BarChart>
      <br></br>
      <h3> Monthly Consumption by Fleet</h3>
      <LineChart/>
</Container>
    </div>

    );
  }
}

