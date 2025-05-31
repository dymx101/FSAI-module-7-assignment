import React from 'react';
import styled from '@emotion/styled';
import Button from './components/Button';
import Card from './components/Card';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <AppContainer>
      <h1>Component Reusability Demo</h1>
      
      <Section>
        <h2>Button Components</h2>
        <ButtonContainer>
          <Button 
            variant="primary" 
            onClick={() => handleClick('Primary button clicked!')}
          >
            Primary Button
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleClick('Secondary button clicked!')}
          >
            Secondary Button
          </Button>
          <Button 
            variant="success" 
            onClick={() => handleClick('Success button clicked!')}
          >
            Success Button
          </Button>
        </ButtonContainer>
      </Section>

      <Section>
        <h2>Card Components</h2>
        <CardContainer>
          <Card title="Feature 1">
            <p>This is a card showcasing a feature. It demonstrates how the same component can display different content.</p>
            <Button variant="primary" onClick={() => handleClick('Feature 1 selected!')}>
              Learn More
            </Button>
          </Card>

          <Card title="Feature 2" width="400px">
            <p>This is a wider card with different content but the same styling structure.</p>
            <Button variant="secondary" onClick={() => handleClick('Feature 2 selected!')}>
              Explore
            </Button>
          </Card>

          <Card title="Feature 3">
            <p>Another example of the card component being reused with unique content.</p>
            <Button variant="success" onClick={() => handleClick('Feature 3 selected!')}>
              Get Started
            </Button>
          </Card>
        </CardContainer>
      </Section>
    </AppContainer>
  );
}

export default App;
