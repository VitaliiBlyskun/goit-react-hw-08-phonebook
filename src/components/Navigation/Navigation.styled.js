import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: ${props => props.theme.colors.black};

    :hover,
    :focus {
      color: ${props => props.theme.colors.primary};
  }
`
