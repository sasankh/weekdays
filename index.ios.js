// Import Library
const React = require('react');
const ReactNative = require('react-native');
const AppRegistry = ReactNative.AppRegistry;
const Text = ReactNative.Text;
const View = ReactNative.View;
const StyleSheet = ReactNative.StyleSheet;

const DayItem = require('./src/day-item');

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurday',
  'Friday',
  'Saturday'
];

// Create a react Component
const Weekdays = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        <DayItem day={DAYS[0]}/>
      </View>
    );
  }
});

//Style the React Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', //Moves height wise
    alignItems: 'center' //Moves width wise
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => {
  return Weekdays;
});
