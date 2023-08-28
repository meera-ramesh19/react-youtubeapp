import { React, Component } from 'react';
import './SearchBar.css';
import { Form, Button, InputGroup } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    const {
      searchInput,
      handleChange,
      handleSubmit,
      // orderSelect,
      // selectedVideos,
      videoNumber,
      handleVideoNumber,
      // safesearchSelect,
      // handleSafeSearch,
    } = this.props;

    // const options = [
    //   { value: '', text: '--Choose an option--' },
    //   { value: 'relevance', text: 'Relevance' },
    //   { value: 'date', text: 'Date' },
    //   { value: 'rating', text: 'Rating' },
    //   { value: 'title', text: 'Title' },
    // ];

    // const searches = [
    //   { value: '', text: '--Choose an option--' },
    //   { value: 'moderate', text: 'Moderate' },
    //   { value: 'strict', text: 'Strict' },
    //   { value: 'none', text: 'None' },
    // ];

    return (
      <div className='container'>
        <div className='wrapper'>
          <Form
            onSubmit={(event) => handleSubmit(event)}
            // id='searchbox'
          >
            <Form.Group className='mb-3'>
              <InputGroup>
                <Form.Label></Form.Label>
                <Form.Control
                  type='text'
                  // id='searchbar'
                  placeholder='Search here....'
                  name='searchbar'
                  value={searchInput}
                  onChange={handleChange}
                />
                <Form.Control
                  type='number'
                  id='searchNum'
                  placeholder='Search here....'
                  name='searchNum'
                  min='5'
                  max='30'
                  value={videoNumber}
                  onChange={handleVideoNumber}
                />
                {/* <Form.Select
                  aria-label='Default select example'
                  value={orderSelect}
                  // defaultValue={'default'}
                  onChange={selectedVideos}
                  // onChange={(e) =>
                  //   this.setState({ orderSelect: e.target.value })
                  // }
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </Form.Select>
                <Form.Select
                  aria-label='Default select example'
                  value={safesearchSelect}
                  // defaultValue={'default'}
                  onChange={handleSafeSearch}
                  // onChange={(e) =>
                  //   this.setState({ orderSelect: e.target.value })
                  // }
                >
                  {searches.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </Form.Select> */}

                <Button
                  variant='danger'
                  className='btn btn-outline-danger my-2 my-sm-0'
                  type='submit'
                  style={{ color: 'white' }}
                >
                  Search
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>

          {/* <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            <div className='wrapper'>
              <input
                type='text'
                id='searchbar'
                placeholder='Search here'
                style={{
                  maxWidth: '150rem',
                  width: '100%',
                }}
                size='50'
                name='searchbar'
                value={searchInput}
                onChange={handleChange}
              />
              <button className='button'>Search</button>
            </div>
          </label>
        </form> */}
        </div>
      </div>
    );
  }
}

export default SearchBar;

// // editing todolist
// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
// // drag and drop
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/

// import { React, Component } from 'react';
// import './SearchBar.css';
// import { Form, Button, InputGroup } from 'react-bootstrap';
// class SearchBar extends Component {
//   render() {
//     const { searchInput, handleChange, handleSubmit } = this.props;

//     return (
//       <div className='container'>
//         <div className='wrapper'>
//           <Form
//             onSubmit={(event) => handleSubmit(event)}
//             // id='searchbox'
//           >
//             <Form.Group className='mb-3'>
//               <InputGroup>
//                 <Form.Label></Form.Label>
//                 <Form.Control
//                   type='text'
//                   // id='searchbar'
//                   placeholder='Search here....'
//                   name='searchbar'
//                   value={searchInput}
//                   onChange={handleChange}
//                 />

//                 <Button
//                   variant='danger'
//                   className='btn btn-outline-danger my-2 my-sm-0'
//                   type='submit'
//                   style={{color:'white'}}
//                 >
//                   Search
//                 </Button>
//               </InputGroup>
//             </Form.Group>
//           </Form>
//           {/* <form onSubmit={(event) => handleSubmit(event)}>
//           <label>
//             <div className='wrapper'>
//               <input
//                 type='text'
//                 id='searchbar'
//                 placeholder='Search here'
//                 style={{
//                   maxWidth: '150rem',
//                   width: '100%',
//                 }}
//                 size='50'
//                 name='searchbar'
//                 value={searchInput}
//                 onChange={handleChange}
//               />
//               <button className='button'>Search</button>
//             </div>
//           </label>
//         </form> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default SearchBar;
