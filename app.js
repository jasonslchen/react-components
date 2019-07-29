var Chips = () => (<li>Chips</li>);

var Bacon = () => (<li>Pig fat</li>);
// var GroceryListItem = (prop) => (
//     <li>{prop.item}</li>
// );



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemOver() {
    this.setState ({
      done: !this.state.done
    });
  }
  
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemOver.bind(this)}>{this.props.item}</li>
      );
    }
  }
  
  var GroceryList = () => (
      <ul>
          <GroceryListItem item={'Chocolate Covered Bacon'} />
          <GroceryListItem item={'Chips'} />
      </ul>
    );
    
    
    ReactDOM.render(<GroceryList/>, document.getElementById("app"));