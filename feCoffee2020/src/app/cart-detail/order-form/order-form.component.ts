import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleDataService } from 'src/app/service/handle-data.service';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  success = false;
  constructor(
    private router: Router,
    private handleDataService : HandleDataService
  ) { }

  ngOnInit() {
  }
  order(){
    this.success = true;
    setTimeout(()=>{
      this.success = false;
      this.handleDataService.removeDataLocal()
      this.router.navigate(['./menu'])
    }, 2000)
  }
}
