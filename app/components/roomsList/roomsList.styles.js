import styled from 'styled-components';
import * as Theme from '../../theme';

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

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
