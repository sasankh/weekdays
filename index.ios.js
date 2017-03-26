// Import Library
const React = require('react');
const ReactNative = require('react-native');
const Moment = require('moment');

const AppRegistry = ReactNative.AppRegistry;
const Text = ReactNative.Text;
const View = ReactNative.View;
const StyleSheet = ReactNative.StyleSheet;

const DayItem = require('./src/day-item');

// Create a react Component
const Weekdays = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  },
  days: () => {
    const daysItems = [];

    for(let i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');

      daysItems.push(
        <DayItem day={day} daysUntil={i} key={day} />
      );
    }

    return daysItems;
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
