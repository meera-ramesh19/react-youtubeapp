import React, { Component } from 'react';
import './DarkMode.css';

class DarkMode extends React.Component {
  state = {
    darkMode:
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  };

  darkModeToggle = () => {
    this.setState((state) => ({
      darkMode: !state.darkMode,
    }));
    document.body.classList.toggle('dark');
  };

  render() {
    return (
      <button
        className='dark_mode-button material-icons'
        onClick={this.darkModeToggle}
      >
        {this.state.darkMode ? 'light' : 'dark'}
      </button>
    );
  }

  componentDidMount() {
    // Set initial theme mode
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark');
    }
  }
}

export default DarkMode;
