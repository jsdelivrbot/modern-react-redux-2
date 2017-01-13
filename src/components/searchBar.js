import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={this.__onInputChange} />;
  }

  __onInputChange(event) {
    console.log(`EVENT -> ${event.target.value}`);
  }
}

export default SearchBar;
