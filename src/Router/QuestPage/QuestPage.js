import * as React from 'react';
import "./QuestPage.css";
export class QuestPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nowArrowNum: 100,
    };
  }



  render() {
    console.log(this.state.nowArrowNum);
    return (
      <div className="questPage">
        <div className="questBack" style={{backgroundPosition: `${this.state.nowArrowNum}% 50%`}}/>
        <div className="bgmWrap" />
        <div className="questBoxWrap">
          <div className="questHelpBox">
            <span className="questBoxFont">HELP</span>
          </div>
          <div className="questExitBox">
            <span className="questBoxFont" style={{color:"#fff"}}>EXIT</span>
          </div>
        </div>
        <div className="chapterWrap">
          <div className="questChapterTitle">Chapter 1</div>
          <div className="questMissionTitle">Mission Mission</div>
          <div className="questLevel">Level </div>
        </div>
      </div>
    );
  };
};