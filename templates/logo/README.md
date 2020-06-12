# Logo Plugin

This plugin simply allow configuring the url for your logo in Flex. More information can be found [here](https://www.twilio.com/docs/flex/ui/configuration#mainheader)



The logo is replaced changing the `YOUR_LOGO_URL_HERE` with the actual URL of your logo in `src/LogoPlugin.jsx`: 
```
flex.MainHeader.defaultProps.logoUrl = 'YOUR_LOGO_URL_HERE';
```
As repository for your logo you can for example use Twilio Assets. 