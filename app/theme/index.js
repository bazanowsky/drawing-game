import styled, { css } from 'styled-components';
export { default as SpriteImage } from './spriteImage.component';

export * as sprites from './sprites';

export const shadowDefault = css`
  box-shadow: 0 4px 11px 0 rgba(0,0,0,.12);  
`;

export const shadowSmall = css`
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.32);  
`;

export const Screen = styled.div`
  display: flex;
  background: #f2f2f2;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 10%;
  overflow:  auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%; 
  min-height: 400px;
  background: #ffffff;
  padding: 20px;
  ${shadowDefault}
`;

export const SmallText = styled.span`
  font-size: 14px;
`;

export const SmallTextBlock = styled(SmallText.withComponent('div'))``;

export const PullRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
