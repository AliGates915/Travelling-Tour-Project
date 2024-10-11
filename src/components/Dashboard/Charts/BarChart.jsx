import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JUN', "This year": 1500, "Last year": 2300 },
  { name: 'JUL', "This year": 2000, "Last year": 2800 },
  { name: 'AUG', "This year": 3000, "Last year": 2500 },
  { name: 'SEP', "This year": 2600, "Last year": 1800 },
  { name: 'OCT', "This year": 1400, "Last year": 1500 },
  { name: 'NOV', "This year": 2500, "Last year": 1600 },
  { name: 'DEC', "This year": 1100, "Last year": 500 },
];

// Function to format numbers with "$" and "k"
const formatCurrency = (value) => `$${(value / 1000).toFixed(1)}k`;

export default class Example extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className='w-full h-screen text-sm'>
        {/* Container for Chart and Labels */}
        <ResponsiveContainer width="100%" height="35%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatCurrency} /> {/* Y-Axis Formatter */}
            <Tooltip formatter={formatCurrency} /> {/* Tooltip Formatter */}
            <Legend wrapperStyle={{ justifyContent: 'flex-end' }} /> {/* Align legend to the end */}
            <Bar dataKey="This year" fill="#007aff" />
            <Bar dataKey="Last year" fill="#cdd5d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
