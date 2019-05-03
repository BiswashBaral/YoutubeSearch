import React from "react";

const VideoList = (props) => {
  //props.videos
  return <div className="ui container">
    <div className="ui segment">
      {props.videos.length}
    </div>
  </div>
}

export default VideoList;
