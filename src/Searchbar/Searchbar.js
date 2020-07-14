import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const INITAL_STATE = {
  searchQuery: '',
};

class Searchbar extends Component {
  static defaultProps = {
    setSearchQuery: () => {},
  };

  state = {
    ...INITAL_STATE,
  };

  handelChange = ({ target }) => {
    const { value } = target;
    this.setState({ searchQuery: value });
  };

  formSubmit = e => {
    const { searchQuery } = this.state;
    const { setSearchQuery } = this.props;
    e.preventDefault();
    setSearchQuery(searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITAL_STATE });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.formSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            // autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handelChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  setSearchQuery: PropTypes.func,
};
export default Searchbar;
