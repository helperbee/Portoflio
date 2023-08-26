import React from 'react';
import { Card } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Row, Col } from 'antd';
import LeetCode from './LeetCode.jsx';
import GitHub from './Github.jsx';
import '../styles.css';

export default function App() {
  const [cards, setCards] = React.useState([
    { id: 'about', content: 'About Me' },
    { id: 'leetcode', content: 'LeetCode' },
    { id: 'github', content: 'Github' }
  ]);


  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedCards = Array.from(cards);
    const [reorderedCard] = reorderedCards.splice(result.source.index, 1);
    reorderedCards.splice(result.destination.index, 0, reorderedCard);
    setCards(reorderedCards);
  };
  const openSite = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Row justify="center" align="middle" style={{ minHeight: '100%', margin: '50px' }}>
                        <Col span={16}>
                            {card.id === 'about' && (
                              <Card className="fade-in" title={card.content} actions={[<GithubOutlined key="github" onClick={() => openSite("https://github.com/helperbee")}/>, <LinkedinOutlined key="linkedin" onClick={() => openSite("https://www.linkedin.com/in/mikegamba/")}/>]}>
                                Hey there, I'm Mike! Welcome to my development sampler. With a decade-long devotion to coding, I've immersed myself in C#, Python, and JavaScript, crafting numerous personal projects that reflect my passion for elegant solutions. Adaptable and quick to embrace new languages, I thrive on challenges and collaborative teamwork. My journey is a fusion of relentless curiosity and staying current with technology trends. Feel free to explore my LinkedIn or GitHub by clicking below. The cards underneath feature my latest LeetCode solutions and GitHub repositories.
                              </Card>
                            )}
                            {card.id === 'leetcode' && <LeetCode />}
                            {card.id === 'github' && (<GitHub />)}                          
                        </Col>
                      </Row>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>

  );
}