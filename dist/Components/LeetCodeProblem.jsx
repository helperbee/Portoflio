import React from 'react';





let LeetCodeProblem = ({problem}) => {
    return (
        <>
        <h3>{problem.title}</h3>
        <img src={`https://img.shields.io/badge/${problem.lang}-%23007ACC.svg?style=for-the-badge&logo=${problem.lang}`}/>
        </>
    );
}

export default LeetCodeProblem;