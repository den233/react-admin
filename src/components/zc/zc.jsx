/**
 * Created by caojia 2018-9-19.
 */
import React from 'react';
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';
import {BarChart, Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
const { Meta } = Card;
const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
 
class Zc extends React.Component {
    
     
    render() { 
        return (
            <div className="container">
               
                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                data={data}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}
                            >

                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col> 
                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                       </ResponsiveContainer>
                    </div>
                </Col>    
                 

            <Col className="gutter-row" md={6}>
            <div className="gutter-box">
                <Card
                    hoverable
                    
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                    />
                </Card>
            </div>
           </Col> 
            <Col className="gutter-row" md={6}>
            <div className="gutter-box">
                <Card
                    hoverable
                     
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                    />
                </Card>
            </div>
           </Col> 
           <Col className="gutter-row" md={6}>
            <div className="gutter-box">
                <Card
                    hoverable
                     
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                    />
                </Card>
            </div>
           </Col> 
           <Col className="gutter-row" md={6}>
            <div className="gutter-box">
                <Card
                    hoverable
                     
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                    />
                </Card>
            </div>
           </Col> 
           <div class="clear"></div>
          </div>   
        )
    }
}

export default Zc;