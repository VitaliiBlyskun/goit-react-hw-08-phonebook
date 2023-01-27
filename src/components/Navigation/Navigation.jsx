import { useAuth } from 'hooks';
import { NavigateLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigateLink to="/">Home</NavigateLink>
      {isLoggedIn && <NavigateLink to="/contacts">Contacts</NavigateLink>}
    </nav>
  );
};
