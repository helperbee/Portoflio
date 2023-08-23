import React from 'react';
import axios from 'axios';
import LeetCodeProblem from './LeetCodeProblem.jsx';




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
        <>
        <h1>LeetCode Problems</h1>
        <hr/>
        {
            problems.length > 0 && problems.map((p) => {
                return <LeetCodeProblem problem={p}/>; 
            })
        }
        </>
    );
}

export default LeetCode;