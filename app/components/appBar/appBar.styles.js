import styled from 'styled-components';
import KitButton from '@atlaskit/button';

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
  margin: 0 20px 0 0;
`;

export const PullRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
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
