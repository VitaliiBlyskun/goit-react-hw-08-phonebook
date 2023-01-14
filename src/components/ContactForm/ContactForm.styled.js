import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  border: 3px solid ${props => props.theme.colors.primary};
  padding: 25px 10px;
`;

export const Label = styled.label`
  justify-content: space-between;
`;

export const Input = styled.input`
  margin-left: 3px;
`;
