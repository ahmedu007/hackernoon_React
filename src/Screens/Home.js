import React, { Component, Fragment } from "react";

import StoryBox from "./Components/StoryBox";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export default class Home extends Component {
  state = {
    stories: [],
  };

  componentDidMount = () => {
    this.fetchStories();
  };

  fetchStories = () => {
    fetch(`${BASE_URL}/topstories.json`)
      .then(res => res.json())
      .then(stories => {
        const top10 = stories.slice(0, 10);
        top10.map(eachID =>
          fetch(`${BASE_URL}/item/${eachID}.json`)
            .then(res => res.json())
            .then(story => {
              console.log(story);
              let topStories = this.state.stories.concat(story);
              this.setState({ stories: topStories });
            })
            .catch(err => console.warn(err))
        );
      })
      .catch(err => console.warn(err));
  };

  render() {
    return (
      <div>
        {this.state.stories.map((story, index) => (
          <StoryBox
            key={story.id}
            title={story.title}
            url={story.url}
            comments={story.descendants}
            score={story.score}
            index={index}
          />
        ))}
      </div>
    );
  }
}
