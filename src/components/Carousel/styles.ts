import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

export const Items = styled.div`
  display: flex;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scroll-behavior: smooth;
`;

export const Item = styled.div`
  flex: none;

  width: 100%;
  height: 600px;

  scroll-snap-align: start;
  pointer-events: none;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
