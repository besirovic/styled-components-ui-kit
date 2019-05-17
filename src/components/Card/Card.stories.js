import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Components|Card', module)
  .add('Light Card', () => (
    <Card>
      <h3>Card with light background</h3>
    </Card>
  ))
  .add('Dark Card', () => (
    <Card backgroundColor='dark'>
      <h3 style={{ color: '#eee' }}>Card with dark background</h3>
    </Card>
  ))
  .add('Primary Card', () => (
    <Card backgroundColor='primary'>
      <h3 style={{ color: '#eee' }}>Card with dark background</h3>
    </Card>
  ))
  .add('Secondary Card', () => (
    <Card backgroundColor='secondary'>
      <h3 style={{ color: '#eee' }}>Card with dark background</h3>
    </Card>
  ))
  .add('Custom Background Card', () => (
    <Card backgroundColor='red'>
      <h3 style={{ color: '#eee' }}>Card with dark background</h3>
    </Card>
  ))
  .add('Full Width and centered Card', () => (
    <Card fullWidth centered>
      <h3>Card with full width and centered content</h3>
    </Card>
  ))
  .add('Card with border', () => (
    <Card borderWidth={8} borderColor='red'>
      <h3>Card with border custom defined border</h3>
    </Card>
  ));
