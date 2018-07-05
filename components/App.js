App = React.createClass({
  getInitialState(){
    return {
      loading: false,
      joke: '',
    }
  },

  handleSearch(){

    this.setState({
      loading: true,
    })
    //obsługa promisa
    this.getJoke()
      .then(data => {
        this.setState({
          loading: false,
          joke: data
        })
      })
      .catch(error => console.log(`Error ${error}`))
  },

  getJoke(){
    return new Promise((resolve, reject) => {
      const url = 'http://api.icndb.com/jokes/random';

      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.response).value.joke;
          resolve(data);
        } else {
          reject (new Error(this.statusText))
        }
      }
      xhr.onerror = () => {
        reject (new Error(`Joke's not found ${this.statusText}`))
      };
      xhr.send();
    })
  },

  render(){
    return (
      <div>
        <h1>Jokes</h1>
        <Button onClick={this.handleSearch}/>
        <Output>{this.state.joke}</Output>
      </div>
    )
  }

})