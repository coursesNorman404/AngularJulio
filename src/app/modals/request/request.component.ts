import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal'
import { RequestsService } from 'src/app/services/requests.service';
import { UserService } from 'src/app/services/user.service';

export interface PromptModel {
  scope: any;
  currentRequest: any;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent extends DialogComponent<PromptModel, any> implements PromptModel {
  scope: any;
  currentRequest: any;
  shoulAdd: string = 'yes'
  constructor(
    public dialogoService: DialogService,
    private requestService: RequestsService,
    private userService: UserService
  ) {
    super(dialogoService)
  }
  accept() {
    if (this.shoulAdd == 'yes') {
      this.requestService.setRequestStatus(this.currentRequest, 'accepted').then(data=> {
        this.userService.addFriend(this.scope.user.uid, this.currentRequest.sender).then(s => {
          alert('Amigo agregado')
        })
      }).catch(err=> {
        console.log(err)
      })
    } else if (this.shoulAdd == 'no') {
      this.requestService.setRequestStatus(this.currentRequest, 'rejected').then(data=> {
        console.log(data)
      }).catch(err=> {
        console.log(err)
      })
    } else if (this.shoulAdd == 'later') {
      console.log('Si entro')
      this.requestService.setRequestStatus(this.currentRequest, 'decide_later').then(data=> {
        console.log(data)
      }).catch(err=> {
        console.log(err)
      })
    }
  }

}
