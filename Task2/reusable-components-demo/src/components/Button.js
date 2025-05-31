import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  /* Variant styles */
  background-color: ${props => {
    switch(props.variant) {
      case 'primary':
        return '#007bff';
      case 'secondary':
        return '#6c757d';
      case 'success':
        return '#28a745';
      default:
        return '#007bff';
    }
  }};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
