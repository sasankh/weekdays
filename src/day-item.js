//Import code we need
const React = require('react');
const ReactNative = require('react-native');
const Text = ReactNative.Text;

//Create out component
const DayItem = React.createClass({
  render: function() {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    );
  },

  style: function() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },

  color: function() {
    let opacity = 1 / (this.props.daysUntil + 1);

    return 'rgba(0, 0, 0, ' + opacity + ')';
  },

  fontWeight: function() {
    let weight = (7 - this.props.daysUntil);

    return String(weight * 100);
  },

  fontSize: function() {
    return 60 - 6 * this.props.daysUntil;
  },

  lineHeight: function() {
    return 70 - 4 * this.props.daysUntil;
  }
});

// make this code available elsewhere
module.exports = DayItem;
