import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
users:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.getAllUsers()
  }

getAllUsers(){
  this.userService.getAllUsers().subscribe(
    (response) => {
      this.users=response["data"];
      console.log(this.users);
    }, (error) => {
      console.log(error);
    }
  )
}

}
