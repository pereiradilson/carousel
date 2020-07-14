import React from 'react';

import { Container, Items, Item } from './styles'

const Carousel: React.FC = () => {

  function handleWheel(event: React.WheelEvent): void {
    if (event.deltaY > 0) {
      event.currentTarget.scrollBy(300, 0);
    } else {
      event.currentTarget.scrollBy(-300, 0);
    }
  }

  return (
    <Container>
      <Items id="items" onWheel={event => handleWheel(event)}>
        <Item><img src="https://picsum.photos/1920/600?random=1" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=2" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=3" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=4" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=5" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=6" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=7" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=8" /></Item>
        <Item><img src="https://picsum.photos/1920/600?random=9" /></Item>
      </Items>
    </Container>
  );
}

export default Carousel;
