import React, { Component } from "react";

import BASE_URL from "../API_URL";
import Comments from "./Components/Comments";

export default class Story extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    fetch(`${BASE_URL}/item/${this.props.match.params.articleId}.json`)
      .then(res => res.json())
      .then(article =>
        article.kids.map(commentID => {
          fetch(`${BASE_URL}/item/${commentID}.json`)
            .then(res => res.json())
            .then(comment => {
              let comments = this.state.comments.concat(comment);
              this.setState({ comments });
            })
            .catch(err => console.warn(err));
        })
      )
      .catch(err => console.warn(err));
  };

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comments
            key={comment.id}
            comment={comment.text}
            time={comment.time}
            author={comment.by}
          />
        ))}
      </div>
    );
  }
}
