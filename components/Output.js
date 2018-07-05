Output = React.createClass({
  setJoke(){
    return this.props.children || 'Nothing funny'
  },

  render(){
    return <p className='output'> {this.setJoke() }</p>
  }
})