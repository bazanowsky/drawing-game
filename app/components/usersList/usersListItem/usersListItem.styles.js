import styled from 'styled-components';
import { IconButton } from '../../../theme/index';

export const User = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 40px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  box-shadow: 
    0 2px 5px 0 rgba(0,0,0,.07), 
    inset 0 2px 5px 0 rgba(0,0,0,0.07);
  padding: 6px;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 40px;
  height: 24px;
  width: 24px;
  margin-right: 10px; 
`;

export const Name = styled.span`
  font-size: 14px;
`;
