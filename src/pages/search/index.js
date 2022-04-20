import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '', //search
      searchResult: '' //data
    };
  }
  handleSubmit = () => {
    //untuk mengambil api
    const urlEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=cO8WZmR1Foblr4RVFeKx4LQSwZokj02R&q=${this.state.searchQuery}&limit=12`;
    fetch(urlEndpoint)
      .then((res) => res.json())
      .then((response) => this.setState({ searchResult: response }));
  }

  handleInput = (e) => {
    //untuk mengambil data input
    this.setState({
        searchQuery: e.target.value
    })
  }

  render() {
    const { searchResult } = this.state;
    return (
      <>
        {/* Cara 1 pakai form */}
        {/* <form onSubmit={this.handleSubmit}>
          <input class="input" type="text" onchange={this.handleInput} />
          <input type="submit" value="Search" class="search-bar" />
        </form> */}
        {/* Cara 2 pakai buttom */}
        <input name="search" type="text" placeholder="Search" onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>Search</button>

        <div className="gifs">
          {
              searchResult.data && searchResult.data.map((item,index) => {
                  return (
                      <img key={index} src={item.images.original.url} alt="gif" />
                  )
              })
          }
        </div>
      </>
    );
  }
}

export default Search;
