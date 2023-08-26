import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Card, Badge } from 'antd';

let GitHubRepo = ({repo}) => {
    //https://github.com/Ileriayo/markdown-badges

    
    let languageBadge = (language) => {
        //bandaid method.
        switch(language){
            case 'c#':
                return 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white';
            case 'javascript':
                return `https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E`;
            case 'python':
                return 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54';
            default:
                return `https://img.shields.io/badge/${language}-3670A0?style=for-the-badge&logo=${language}&logoColor=ffdd54`;

        }
    };

    return (
        <Badge.Ribbon text={`${repo.language}`}>
        <Card 
       hoverable
        >
            <Card.Meta
            title={repo.name}
            description={`repo\n${repo.description}`}
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

export default GitHubRepo;