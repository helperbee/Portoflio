import React from 'react';
import axios from 'axios';
import LeetCodeProblem from './LeetCodeProblem.jsx';
import { Row, Col } from 'antd';
import { Card } from 'antd';




let LeetCode = () => {
    const [problems, setProblems] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api').then((response) => {
            setProblems(response.data);
        }).catch((error) => {
            console.error('Could not get problem list from server.');
        });
    }, []);

    return (
        <Row justify="center" style={{ margin: "50px" }}>
            <Col xs={24} sm={18} md={20} lg={16} xl={20}>
                <Card title="LeetCode">
                    <Row gutter={[16, 16]}>
                        {problems.map((p, index) => (
                            <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
                                <LeetCodeProblem problem={p} />
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}

export default LeetCode;