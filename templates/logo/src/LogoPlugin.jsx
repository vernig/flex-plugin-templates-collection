import { FlexPlugin } from 'flex-plugin';
import React from 'react';

const PLUGIN_NAME = '{{pluginClassName}}';

export default class LogoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex) {
    // Add the logo url below
    // You can upload your logo to Twilio Assets 
    flex.MainHeader.defaultProps.logoUrl = 'YOUR_LOGO_URL_HERE';
  }
}
