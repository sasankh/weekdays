// // Import Library
var React = require('react');
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry;
var Text = ReactNative.Text;
var View = ReactNative.View;

// Create a react Component
var Weekdays = React.createClass({
  render: () => {
    return <View>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => {
  return Weekdays;
});
