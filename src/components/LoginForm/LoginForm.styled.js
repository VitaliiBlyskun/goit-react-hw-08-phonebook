import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 7px 15px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
