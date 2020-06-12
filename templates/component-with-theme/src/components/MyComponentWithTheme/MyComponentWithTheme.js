import * as React from 'react';
import { Button, withTheme } from '@twilio/flex-ui';

class MyComponentWithTheme extends React.Component {
  
  handleClick = () => {
    // Code to hanlde click
    console.log('You clicked the button!')
  };

  render() {
    return (
      // The theme will be accessible through `this.props.theme`
      <React.Fragment>
        <Button
          onClick={this.handleClick}
          style={{
            backgroundColor: this.props.theme.colors.defaultButtonColor,
            color: this.props.theme.colors.lightTextColor,
          }}
        >
          {this.props.caption}
        </Button>
      </React.Fragment>
    );
  }
}

export default withTheme(MyComponentWithTheme);
