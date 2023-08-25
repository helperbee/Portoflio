import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Card } from 'antd';

let LeetCodeProblem = ({problem}) => {
    //https://github.com/Ileriayo/markdown-badges

    
    
    return (
        <Card hoverable>
            <Card.Meta
            title={`${problem.title}`}
            description="relevant problem info"
            />
        </Card>
    );
    // return (
    //     <>
    //     <h3>{problem.title}</h3>
    //     <img src={`https://img.shields.io/badge/${problem.lang}-%23007ACC.svg?style=for-the-badge&logo=${problem.lang}`}/>
    //     </>
    // );
}

export default LeetCodeProblem;