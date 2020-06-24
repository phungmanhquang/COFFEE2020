import { Component, OnInit } from '@angular/core';
import { UserManagerService } from 'src/app/service/admin/userManager.service';
import { UserPost } from 'src/app/share/Model/userPost.model';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  listUser: UserPost[];
  ToalUser: number = 0 ;
  constructor(
    private userManagerService : UserManagerService
  ) { }

  ngOnInit() {
    this.userManagerService.getUser().subscribe(
      result => {
          let _listUser = result.map(
                  prod => {
                    return {
                      id: prod.payload.doc.id,
                      ...prod.payload.doc.data() as {}
                    } as UserPost
                  }
                )
          this.listUser = _listUser;
          this.ToalUser = this.listUser.length;
      }
    )
  }

}
