import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('primary button', () => (
    <React.Fragment>
      <Button color='primary' size='small'>Primary button</Button><br /><br />
      <Button color='primary'>Primary button</Button><br /><br />
      <Button color='primary' size='large'>Primary button</Button><br /><br />
      <Button color='primary' size='large' disabled>Primary button</Button><br /><br />
    </React.Fragment>
  ))
  .add('secondary button', () => (
    <React.Fragment>
      <Button color='secondary' size='small'>Secondary button</Button><br /><br />
      <Button color='secondary'>Secondary button</Button><br /><br />
      <Button color='secondary' size='large'>Secondary button</Button><br /><br />
    </React.Fragment>
  ))
  .add('dark button', () => (
    <React.Fragment>
      <Button color='dark' size='small'>Secondary button</Button><br /><br />
      <Button color='dark'>Secondary button</Button><br /><br />
      <Button color='dark' size='large'>Secondary button</Button><br /><br />
    </React.Fragment>
  ))
  .add('light button', () => (
    <React.Fragment>
      <Button color='light' size='small'>Secondary button</Button><br /><br />
      <Button color='light'>Secondary button</Button><br /><br />
      <Button color='light' size='large'>Secondary button</Button><br /><br />
    </React.Fragment>
  ))
  .add('default button', () => (
    <React.Fragment>
      <Button size='small'>Default button</Button><br /><br />
      <Button>Default button</Button><br /><br />
      <Button size='large'>Default button</Button><br /><br />
    </React.Fragment>
  ));
