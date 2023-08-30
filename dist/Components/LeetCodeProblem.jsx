import React from 'react';
import { Card, Badge } from 'antd';

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

let createDescription = (problem) => {

    return <>
                <p>{`${problem.langName}`}</p>
                <p>{`Solution runtime : ${problem.runtime}`}</p>
                <p>{`Time since solving : ${problem.time}`}</p>
           </>;

};

let LeetCodeProblem = ({problem}) => {
    //https://github.com/Ileriayo/markdown-badges

    
    return (
        <Badge.Ribbon text={`${problem.difficulty}`} color={badgeColor(problem.difficulty)}>
            <Card onClick={() => window.open(`https://leetcode.com${problem.url}`, '_blank')} 
            title={`${problem.title}`}>
                <Card.Meta
                description={createDescription(problem)}
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