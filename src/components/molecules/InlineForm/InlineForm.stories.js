import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import  InlineForm  from './InlineForm';

const stories = storiesOf('Forms/InlineForm', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <InlineForm
    method="post"
    action="https://google.com"
    id="demo-form-id"
    placeholder="Placeholder"
    cta="Action"
    label={'Label'}/>);
