import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import  TextPassage  from './TextPassage';

const stories = storiesOf('Text/TextPassage', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <TextPassage>
    <p>A text passage contains arbitrary text that might come from a CMS.</p>

    <h2>Heading 2</h2>

    <p>This is another paragraph of text. Lorem ipsum dolor sit amet.</p>

    <ul>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ul>

    <h3>Heading 3</h3>

    <ol>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ol>

    <p><a href="#">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. </p>

    <blockquote>
      <p>This is a quotation from something.</p>
      <cite>Cite source</cite>
    </blockquote>

    <p>That is all.</p>
  </TextPassage>);
