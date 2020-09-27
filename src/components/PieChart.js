import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import styled from 'styled-components';

const array = JSON.parse(localStorage.getItem('array'));

let great = 0;
let good = 0;
let okay = 0;
let bad = 0;
let terrible = 0;

var i;
for (i = 0; i < array.length; i++) {
    const a = array[i];
    const mood = a[1];
    if (mood === 'success') {
        great++;
    } else if (mood === 'primary') {
        good++;
    } else if (mood === 'info') {
        okay++;
    } else if (mood === 'warning') {
        bad++;
    } else if (mood === 'danger') {
        terrible++;
    }
}

const data = [
    { name: 'Great', value: great },
    { name: 'Good', value: good },
    { name: 'Okay', value: okay },
    { name: 'Bad', value: bad },
    { name: 'Terrible', value: terrible },
];

const StyledText = styled.text`
    font-weight: bold;
    font-size: 2rem;
`;

const COLORS = ["#28a745", "#007bff", "#17a2b8", "#ffc107", "#dc3545"]

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <StyledText x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</StyledText>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <StyledText x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</StyledText>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        </g>
    );
};


export default class Chart extends PureComponent {
    state = {
        activeIndex: 0,
    };

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <PieChart width={800} height={800}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={250}
                    cy={200}
                    innerRadius={100}
                    outerRadius={140}
                    fill="8884d8"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}
