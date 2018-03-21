import styled from 'styled-components';
import KitButton from '@atlaskit/button';

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

export const RemoveButton = styled(KitButton)`
  margin-left: auto;
`;
