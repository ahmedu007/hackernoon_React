import React, { Component } from "react";
import BounceLoader from "react-spinners/BounceLoader";

import BASE_URL from "../API_URL";
import Comments from "./Components/Comments";

export default class Story extends Component {
  state = {
    comments: [],
    loading: true,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    fetch(`${BASE_URL}/item/${this.props.match.params.articleId}.json`)
      .then(res => res.json())
      .then(article =>
        article.kids.map(commentID => {
          return fetch(`${BASE_URL}/item/${commentID}.json`)
            .then(res => res.json())
            .then(comment => {
              let comments = this.state.comments.concat(comment);
              this.setState({ comments, loading: false });
            })
            .catch(err => console.warn(err));
        })
      )
      .catch(err => console.warn(err));
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BounceLoader
              sizeUnit={"px"}
              size={150}
              color={"#123abc"}
              loading={this.state.loading}
            />
          </div>
        ) : (
          <div style={{ paddingLeft: 100, paddingRight: 100 }}>
            {this.state.comments.map(comment => (
              <Comments
                key={comment.id}
                comment={comment.text}
                time={comment.time}
                author={comment.by}
                deleted={comment.deleted}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
