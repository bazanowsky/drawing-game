import styled from 'styled-components';
import KitButton from '@atlaskit/button';
import * as Theme from '../../theme';

export const Logo = Theme.SpriteImage.extend`
  margin-top: 20px; 
`;

export const Wrapper = Theme.Wrapper.extend`
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Hint = styled.h4`
  margin: 30px 0;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(KitButton)`
  margin: 0 5px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, .22);
  margin: 20px auto;
`;
