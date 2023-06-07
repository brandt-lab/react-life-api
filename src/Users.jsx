import React, { Component } from 'react';
import "./style.css"
import { Container , Row , Col } from 'react-bootstrap';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
      };
    }

   componentDidMount () {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=all&api-key=adcJkDLGetSLrV4eFDh1Z8727kmwNz1O")
    .then(res => res.json())
    .then(movies => this.setState({ Users:movies.results }))
    .catch(err => console.log(err))

}

render() {
  return (
      <div>
        <Container>
          <Row>
            <Col><h1 className='header'>Users</h1>
         {this.state.Users.map((user) => { console.log(user)
          return (
           
          <div key={user.index} className='gamer'>

            <p>{user.display_title}</p>
            <p>date_updated{user.date_updated}</p>
            <p>display_title{user.display_title}</p>
            <p>multimedia{user.multimedia.height}</p>
            <img src={user.multimedia?.src}></img>
            <hr/>
          </div>
    )
})}
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}