import styled from '@emotion/styled';

const CardWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: ${props => props.width || '300px'};
  margin: 10px;
`;

const CardTitle = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.5rem;
`;

const CardContent = styled.div`
  color: #666;
`;

const Card = ({ title, children, width, ...props }) => {
  return (
    <CardWrapper width={width} {...props}>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

export default Card;
