import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Review extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWVlMTRjNTllYzAwMTk5MGQ3MDIiLCJpYXQiOjE3MTA0MjYzMjQsImV4cCI6MTcxMTYzNTkyNH0.yZC1WWdo3I5G3NgekKUnE5KZ0_MrVjqayl_SvbQg15Q",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((comments) => {
        this.setState({ comments });
        console.log("Comments:", comments);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <ListGroup>
          <h1>Comments</h1>
          {this.state.comments.map((comment, index) => (
            <ListGroup.Item key={index}>
              <p>{comment.comment}</p>
              <p>By: {comment.author}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Review;
