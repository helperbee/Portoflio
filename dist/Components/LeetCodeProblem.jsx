import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Card, Badge } from 'antd';

let LeetCodeProblem = ({problem}) => {
    //https://github.com/Ileriayo/markdown-badges

    let badgeColor = (difficulty) => {
        console.log("test");
        switch(difficulty){
            case 'Medium':
                return "yellow";
            case 'Hard':
                return "red";
            default:
                return "green";
        }
    };
    
    return (
        <Badge.Ribbon text={`${problem.difficulty}`} color={badgeColor(problem.difficulty)}>
            <Card 
            title={`${problem.title}`} hoverable extra={<MoreOutlined/>}>
                <Card.Meta
                description={`${problem.time}`}
                />
            </Card>
        </Badge.Ribbon>
    );
    // return (
    //     <>
    //     <h3>{problem.title}</h3>
    //     <img src={`https://img.shields.io/badge/${problem.lang}-%23007ACC.svg?style=for-the-badge&logo=${problem.lang}`}/>
    //     </>
    // );
}

export default LeetCodeProblem;