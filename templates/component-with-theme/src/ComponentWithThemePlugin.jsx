import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import MyComponentWithTheme from './components/MyComponentWithTheme'

const PLUGIN_NAME = '{{pluginClassName}}';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    // Add a styled button to the NoTask component
    flex.NoTasksCanvas.Content.add(<MyComponentWithTheme caption="Click Me!" key="change-crmn"/>)    
  }
}
