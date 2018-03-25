import styled from 'styled-components';
import * as Theme from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const ControlBar = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  background-color: #666;
  align-items: center;
  padding: 4px 15px;
  color: #fff;
  ${Theme.shadowSmall}
`;

export const Status = styled(Theme.SmallText)`
  
  
`;

export const RoomsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;
  flex: 1 1 auto;
`;
