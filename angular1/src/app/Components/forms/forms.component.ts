import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Model/employee';

import {UserProviderService} from '../../Services/user-provider.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  jobs:Array<string>;
  employee: Employee;
  
  constructor(private userProvider: UserProviderService) { 
    this.jobs=['Project Manager', 'Programmer','Designer'];
    this.employee= this.userProvider.sessionUser();
  }

  ngOnInit() {
  }
  
  onSubmit(employeeForm){
    console.log(this.employee);
    this.userProvider.updateUser(this.employee);
  }

}
