import React, { Component } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Button from "@material-ui/core/Button";

import BASE_URL from "../API_URL";
import StoryBox from "./Components/StoryBox";

export default class Home extends Component {
  state = {
    stories: [],
    loading: true,
    storiesCount: 0,
  };

  componentDidMount = () => {
    this.fetchStories();
  };

  fetchStories = () => {
    this.setState({
      loading: true,
      storiesCount: this.state.storiesCount + 10,
    });

    fetch(`${BASE_URL}/topstories.json`)
      .then(res => res.json())
      .then(stories => {
        // Could check the legnth of the array instead of a new var, since it triggers re-render
        const sliceStories =
          this.state.storiesCount === 10 ? 0 : this.state.storiesCount;
        const top10 = stories.slice(sliceStories, sliceStories + 10);
        top10.map(eachID =>
          fetch(`${BASE_URL}/item/${eachID}.json`)
            .then(res => res.json())
            .then(story => {
              let topStories = this.state.stories.concat(story);
              this.setState({
                stories: topStories,
                loading: false,
              });
            })
            .catch(err => console.warn(err))
        );
      })
      .catch(err => console.warn(err));
  };

  render() {
    return (
      <div
        style={{
          paddingBottom: "10%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <div>
          {this.state.stories.map((story, index) => (
            <StoryBox
              key={story.id}
              id={story.id}
              title={story.title}
              url={story.url}
              comments={story.descendants}
              score={story.score}
              index={index}
              time={story.time}
              author={story.by}
            />
          ))}

          {this.state.loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => this.fetchStories()}
              >
                More Stories ...
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
