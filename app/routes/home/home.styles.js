import styled from 'styled-components';
import KitButton from '@atlaskit/button';
import * as Theme from '../../theme';

export const Wrapper = Theme.Wrapper.extend`
  max-width: 1000px;
  padding:0;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  background: transparent;
  box-shadow: none;
  height: 76vh;
`;

export const RoomsListContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  overflow: auto;
  background-color: #fff;
  ${Theme.shadowDefault}
`;

export const Sidebar = styled.div`
  display: flex;
  flex: 0 0 250px;
  overflow: auto;
  background-color: #fafafa;
  margin-left: 20px;
  ${Theme.shadowDefault}
`;
