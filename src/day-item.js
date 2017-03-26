//Import code we need
const React = require('react');
const ReactNative = require('react-native');
const Text = ReactNative.Text;
const StyleSheet = ReactNative.StyleSheet;

//Create out component
const DayItem = React.createClass({
  render: () => {
    return (
      <Text style={styles.day}>
        A day of the week
      </Text>
    );
  }
});

//Style our component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

// make this code available elsewhere
module.exports = DayItem;
