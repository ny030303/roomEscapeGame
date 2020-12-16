import * as React from 'react';
import "./MainPage.css";

export class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="mainPage">
        <div className="main_dark"/>
        <div className="mainUserProfileWrap">
          <img src="/image/ui/mainUserProfile.png" alt="mainUserProfileBox"/>
        </div>
        <div className="mainUserPaysWrap">
          <div className="mainUserMoneyBox">
            <img src="/image/ui/moneyBox.png" alt="moneyBox"/>
          </div>
          <div className="mainUserDiamondBox">
            <img src="/image/ui/diamondBox.png" alt="diamondBox"/>
          </div>
        </div>
        <div className="mainTitle">
          <div className="mainSubTitleStyle">lorem</div>
          <div className="mainTitleStyle">Game Page</div>
          <br/><br/><br/>
          <img className="mainPlayBtn" src="/image/ui/mainPlayBtn.png" alt="mainPlayBtn" onClick={() => this.props.history.push("/stage")}/>
        </div>
        {/*<div className="mainBottomIconWrap">*/}
        {/*  <div className="mainBottomIcon">*/}
        {/*    <img src="/image/ui/item.png"/>*/}
        {/*  </div>*/}
        {/*  <div className="mainBottomIcon">*/}
        {/*    <img src="/image/ui/shop.png"/>*/}
        {/*  </div>*/}
        {/*  <div className="mainBottomIcon">*/}
        {/*    <img src="/image/ui/messages.png"/>*/}
        {/*  </div>*/}
        {/*  <div className="mainBottomIcon">*/}
        {/*    <img src="/image/ui/mission.png"/>*/}
        {/*  </div>*/}
        {/*  <div className="mainBottomIcon">*/}
        {/*    <img src="/image/ui/rank.png"/>*/}
        {/*  </div>*/}
        {/*  <div className="mainBottomIcon">*/}
        {/*    <img src="/image/ui/settings.png"/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  };
}