import { React, Component } from 'react';
import './SearchBar.css';
import { Form, Button, InputGroup } from 'react-bootstrap';
class SearchBar extends Component {
  render() {
    const { searchInput, handleChange, handleSubmit } = this.props;

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
