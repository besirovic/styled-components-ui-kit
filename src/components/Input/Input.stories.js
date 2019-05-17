import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('Components|Input', module)
  .add('normal input', () => (
    <React.Fragment>
      <Input size='small' placeholder='Small input' /><br /><br />
      <Input placeholder='Normal input' /><br /><br />
      <Input size='large' placeholder='Mediun input' /><br /><br />
    </React.Fragment>
  ))
  .add('other types', () => (
    <React.Fragment>
      <Input type='password' placeholder='Password input' /><br /><br />
      <Input type='email' placeholder='Email input' /><br /><br />
      <Input type='date' placeholder='Date input' /><br /><br />
    </React.Fragment>
  ));
