import $ from "jquery"
import "./StageAlert.css";

class StageAlert {
  show(title, message) {
    // console.log($('body'));
    $('body').append(`
      <div class="modal fade" id="stageModal">
        <div class="modal-dialog" style="width: 478px">
          <div class="stageModalContents modal-content">
            <div class="stageModalName">Stage ${title}</div>
            <div class="stageModalCloseBtn" data-dismiss="modal"></div>
            <div class="stageModalMission">${message}</div>
            <div class="stageModalStartBtn"></div>
          </div>
        </div>
      </div>`
    );
    $('#stageModal').modal();
    $('#stageModal').on('hidden.bs.modal', function (e) {
      setTimeout(() => $('#stageModal').remove(), 100);
    });
  }
}

const stageAlert = new StageAlert;

export default stageAlert;