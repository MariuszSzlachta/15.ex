Button = React.createClass({
  getInitialState() {
    return {
      searching: false
    }
  },

  handleClick(){
    this.setState({
      searching: true
    });
    //coś tu muszę zwrócić bo nie działa w sensie skomunikować się z App
    this.props.onClick(true);
  },

  render(){
    return <button type='submit' onClick={this.props.handleSearch} onClick={this.handleClick} >Get Joke</button>
  }
  
})