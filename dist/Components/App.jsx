import React from 'react';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import LeetCode from './LeetCode.jsx';
//import LeetCode from './LeetCode.jsx';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default function App() {
  const el = React.useRef(null);
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["I'm Mike, welcome to my development sampler."],
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <LeetCode />
      <Row justify="center" align="middle" style={{ minHeight: '100%', margin:'50px' }}>
        <Col span={12}>
          <Card title="Github">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              Content
            </Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
        </Col>
        
      </Row>
    </div>

  );
}