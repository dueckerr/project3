import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Jan', Seat: 40, Valve: 24, Packing: 24, Plunger: 29,
  },
  {
    name: 'Febuary', Seat: 30, Valve: 18, Packing: 10, Plunger: 20,
  },
  {
    name: 'March', Seat: 20, Valve: 48, Packing: 20, Plunger: 24,
  },
  {
    name: 'April', Seat: 20, Valve: 39, Packing: 20, Plunger: 21,
  },
  {
    name: 'May', Seat: 10, Valve: 48, Packing: 21, Plunger: 25,
  },
  {
    name: 'June', Seat: 20, Valve: 38, Packing: 25, Plunger: 24,
  },
  {
    name: 'July', Seat: 30, Valve: 43, Packing: 21, Plunger: 28,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    const { opacity } = this.state;

    return (
      <div>
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          <Line type="monotone" dataKey="Valve" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Seat" strokeOpacity={opacity.uv} stroke="#82ca9d" />
          <Line type="monotone" dataKey="Packing" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Plunger" strokeOpacity={opacity.uv} stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
