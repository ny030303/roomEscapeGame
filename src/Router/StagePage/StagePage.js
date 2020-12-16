import * as React from 'react';
import "./StagePage.css";
import alertDialog from "../../services/AlertDialog";
import stageAlert from "../../Component/StageAlert/StageAlert";

export default class StagePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.stageSetArr = [
      {num: 1, type: "Clear"},
      {num: 2, type: "Clear"},
      {num: 3, type: "Clear"},
      {num: 4, type: "Clear"},
      {num: 5, type: "NotClear"},
      {num: 6, type: "NotClear"},
      {num: 7, type: "NotClear"},
      {num: 8, type: "Lock"},
      {num: 9, type: "Lock"},
      {num: 10, type: "Lock"},
      {num: 11, type: "Lock"},
      {num: 12, type: "Lock"},
    ]
  }

  stageItemEvent = (e) => {
    stageAlert.show(e.target.dataset.snum, "sdfsfdsfdfsd");
    // .show("sdf", "sdfsfdsfdfsd");
  };

  render() {
    return (
      <div className="stagePage">
        <div className="stagePageHeader">
          <div className="goHomeIcon"></div>
          <img src="/image/ui/moneyBox.png" alt="moneyBox"/>
          <img src="/image/ui/diamondBox.png" alt="diamondBox"/>
        </div>
        <div className="stagePageContents">
          {
            this.stageSetArr.map((v,i) =>
              (
                <div key={i} className="stageItem" data-snum={v.num} onClick={this.stageItemEvent}>
                  {(v.type !== "Lock") ? (<p className="stageItemNum" data-snum={v.num}>{v.num}</p>) : null}
                  <img src={`/image/ui/stage${v.type}Item.png`} data-snum={v.num} className="stageItemImg"/>
                </div>
              )
            )
          }

        </div>

      </div>
    );
  };
}