import React, { Component } from "react";

import BASE_URL from "../API_URL";
import StoryBox from "./Components/StoryBox";

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
      </div>
    );
  }
}
