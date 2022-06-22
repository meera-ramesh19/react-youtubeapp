import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import './Page404NotFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class Page404NotFound extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleShow = () => this.setState({ show: true });

  handleClose = (fromModal) => {
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    this.setState({
      show: true,
    });
  }
  render() {
    return (
      <>
        {/* {/* <div
          style={{
            height: '80vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <>
            <style type='text/css'>
              {`
          .btn-xxl {
            padding: 2rem;
            font-size: 1.5rem;
            }
          `}
            </style>
            <Button
              variant='danger'
              size='xxl'
              onClick={() => this.handleShow()}
            >
              Page404Button
            </Button>
          </>
        </div> *} */}
        {this.state.show ? (
          <div>
            <Modal
              show={this.state.show}
              onHide={() => this.handleClose({ msg: 'Cross Icon Clicked!' })}
            >
              <Modal.Header closeButton></Modal.Header>

              <Modal.Body>
                <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
                <h3>Sorry ,We could not find the Page</h3>
                <p className='home' style={{ fontSize: 40 }}>
                  <Link style={{ color: 'black' }} to='/'>
                    Go Home
                  </Link>
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant='danger'
                  onClick={() => this.handleClose({ msg: 'Modal Closed!' })}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : null}
      </>
    );
  }
}
export default Page404NotFound;
