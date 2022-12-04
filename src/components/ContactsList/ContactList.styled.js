import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
`;
export const List = styled.ul`
    // display: flex;
    padding-left: 20px:
    padding-right: 20px:
    width: 100%;
`;

export const Initial = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    :hover,
    :focus {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.muted};
`
