import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Papa from 'papaparse';

var data;
Papa.parse('DateDamage.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function(results){
    console.log(results);
    data = results.data;
  }
});

// Generate Sales Data
function createData(Date, Damage) {
  return { Date, Damage };
}

//Broken parse code for csv file DateDamage.csv
//File = fetch('DateDamage.csv')
/*const data = [
 forEach(i => {
    const col=i.split(',');
    const Date=col[0];
    const Damage=col[1];
    createData(Date, Damage)
  }];
/*  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),*/
//];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Total Damage Over Time</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="Date" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Damage ($MIL)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="Damage" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
