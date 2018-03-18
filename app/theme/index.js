import styled from 'styled-components';
export { default as SpriteImage } from './spriteImage.component';

export * as sprites from './sprites';

export const Screen = styled.div`
  display: flex;
  background: #f2f2f2;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  box-shadow: 0 4px 11px 0 rgba(0,0,0,.12);
`;
