import React, { Component } from 'react';
  // Comment out to prevent warnings when needed they are here for easy access 
import { Row } from 'reactstrap';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
// import API from '../../../utils/API';
// import SweetAlert from 'react-bootstrap-sweetalert';

const questions = ["Use fetch to make a call to json placeholder"]

/* What I am building today: 
  -
*/

class WorkBench extends Component {

  constructor(props) {
    super(props);

    this.state={

    }
  }

  // When the component loads log the state
  componentDidMount(){
    console.log("Mount state:", this.state);
  }

  // When component updates log its state
  componentDidUpdate(){
    console.log("Update state:", this.state);
  }

  // General handler for inputs thats value is to change the state
  // If state does not exsist it makes a state field with its name
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Row style={styles.box} className="pt-5 m-1">

        <Row className="m-1">
          <h5>Question:</h5>
          <p>{questions[0]}</p>
        </Row>

        <iframe style={styles.code} title="codepen" src="https://codepen.io/pen/"  width="100%" height="450px" />

        <br ></br>

        <h3 className="mx-auto bg-info p-1 m-1 rounded">Search below if you have any questions</h3>

        <iframe title="yourBuddy" src="https://bing.com/" width="100%" height="450px" />
      </Row>
    );
  }

}

const styles = {
  box: {
    backgroundColor: "#efee"
  },
  code: {
    overflow: "auto"
  }
}

export default WorkBench;