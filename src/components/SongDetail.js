import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {mySelectedSong.title}
        <br />
        Duration: {mySelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(SongDetail);
