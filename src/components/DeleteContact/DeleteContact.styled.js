import styled from 'styled-components';


export const Button = styled.button`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    :hover,
    :focus {
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.black};
    }`