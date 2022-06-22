import React from 'react';
import './Pagination.css';
class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
  }
  render() {
    let maxPages = 10;
    let items = [];
    let leftSide = this.state.currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = this.state.currentPage + 2;
    if (rightSide > maxPages) rightSide = maxPages;
    for (let number = leftSide; number <= rightSide; number++) {
      items.push(
        <div
          key={number}
          className={
            number === this.state.currentPage
              ? 'round-effect active'
              : 'round-effect'
          }
          onClick={() => {
            this.setState({ currentPage: number });
          }}
        >
          {number}
        </div>
      );
    }
    const nextPage = () => {
      if (this.state.currentPage < maxPages) {
        this.setState((prevState) => {
          return { currentPage: prevState.currentPage + 1 };
        });
      }
    };

    const prevPage = () => {
      if (this.state.currentPage > 1) {
        this.setState((prevState) => {
          return { currentPage: prevState.currentPage - 1 };
        });
      }
    };

    const paginationRender = (
      <div className='flex-container'>
        <div> currentPage : {this.state.currentPage} </div>

        <div className='paginate-ctn'>
          <div className='round-effect' onClick={prevPage}>
            {' '}
            &lsaquo;{' '}
          </div>
          {items}
          <div className='round-effect' onClick={nextPage}>
            {' '}
            &rsaquo;{' '}
          </div>
        </div>
      </div>
    );

    return paginationRender;
  }
}

export default Pagination;
