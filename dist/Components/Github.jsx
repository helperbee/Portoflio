import React from 'react';
import axios from 'axios';
import GitHubRepo from './GitHubRepo.jsx';
import { Row, Col } from 'antd';
import { Card } from 'antd';

const GitHub = () => {
    const [problems, setProblems] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/github').then((response) => {
            setProblems(response.data);
        }).catch((error) => {
            console.error('Could not get repo list from server.');
        });
    }, []);

    return (
            <Card title="Recent GitHub">
                <Row gutter={[16, 16]}>
                    {problems.map((p, index) => (
                        <Col key={p.id} xs={24} sm={12} md={8} lg={8}>
                            <GitHubRepo repo={p} />
                        </Col>
                    ))}
                </Row>
            </Card>
    );
}

export default GitHub;