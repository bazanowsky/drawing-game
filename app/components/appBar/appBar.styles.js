import styled from 'styled-components';
import KitButton from '@atlaskit/button';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex: 0 0 auto;
  background: #323146;
  color: #fff;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

export const Title = styled.h3`
  color: #fff;
  margin: 0 40px 0 0;
`;

export const Nav = styled.nav`
  display: inline-flex;
`;

export const NavButton = styled(Link)`
  margin-left: 15px;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  padding:  3px 10px;
  border-radius: 4px;
  background-color: rgba(255,255,255, 0);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover, 
  &:focus {
    color: #fff;
    background-color: rgba(255,255,255,.2);
    text-decoration: none;
    outline: none;
  }
  
  &:first-child {
    margin-left: 0;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid rgba(0,0,0,.2);
  margin: 0 10px;
`;

export const UserName = styled.span`
  
`;

export const LogoutButton = styled(KitButton)`
  margin-left: 15px;
`;
