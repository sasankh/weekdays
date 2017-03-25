// // Import Library
var React = require('react');
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry;
var Text = ReactNative.Text;
var View = ReactNative.View;
var StyleSheet = ReactNative.StyleSheet;

// Create a react Component
var Weekdays = React.createClass({
  render: () => {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
      </View>
    );
  }
});

//Style the React Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => {
  return Weekdays;
});
