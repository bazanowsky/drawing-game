import styled from 'styled-components';
import { IconButton } from '../../../theme/index';

export const Room = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 60px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  box-shadow: 
    0 2px 5px 0 rgba(0,0,0,.07), 
    inset 0 2px 5px 0 rgba(0,0,0,0.07);
  padding: 6px;
`;

export const RemoveButton = styled(IconButton)`
  margin-left: auto;
`;

export const Meta = styled.div`
  font-size: 12px;
`;

export const Owner = styled.span`
  font-weight: 600;
`;

export const RoomId = styled.span`
  color: #666;
  margin-right: 20px;
`;
