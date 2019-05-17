import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Components|Button', module)
  .add('primary button', () => (
    <React.Fragment>
      <Button color='primary' size='small'>Small Primary button</Button><br /><br />
      <Button color='primary'>Primary button</Button><br /><br />
      <Button color='primary' size='large'>Large Primary button</Button><br /><br />
      <Button color='primary' size='large' disabled>Disabled Primary button</Button><br /><br />
    </React.Fragment>
  ))
  .add('secondary button', () => (
    <React.Fragment>
      <Button color='secondary' size='small'>Small Secondary button</Button><br /><br />
      <Button color='secondary'>Secondary button</Button><br /><br />
      <Button color='secondary' size='large'>Large Secondary button</Button><br /><br />
      <Button color='secondary' size='large' disabled>Disabled Secondary button</Button><br /><br />
    </React.Fragment>
  ))
  .add('dark button', () => (
    <React.Fragment>
      <Button color='dark' size='small'>Small Dark button</Button><br /><br />
      <Button color='dark'>Dark button</Button><br /><br />
      <Button color='dark' size='large'>Large Dark button</Button><br /><br />
      <Button color='dark' size='large' disabled>Disabled Dark button</Button><br /><br />
    </React.Fragment>
  ))
  .add('light button', () => (
    <React.Fragment>
      <Button color='light' size='small'>Small Light button</Button><br /><br />
      <Button color='light'>light button</Button><br /><br />
      <Button color='light' size='large'>Large Light button</Button><br /><br />
      <Button color='light' size='large' disabled>Large Light button</Button><br /><br />
    </React.Fragment>
  ))
  .add('default button', () => (
    <React.Fragment>
      <Button size='small'>Small Default button</Button><br /><br />
      <Button>Default button</Button><br /><br />
      <Button size='large'>Large Default button</Button><br /><br />
      <Button size='large' disabled>Disabled Default button</Button><br /><br />
    </React.Fragment>
  ));
