import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

import {Employee} from '../../Model/employee';
import {UserProviderService} from '../../Services/user-provider.service';

import {Subscription} from 'rxjs/Subscription';
import {Http, Headers, RequestOptions } from '@angular/http';

const API_END_POINT: string="https://cursoayesa.firebaseio.com/Employee";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  jobs:Array<string>;
  employee: Employee;
  employeeForm:FormGroup;
  users: Array<any>;
  updateSubscription?: Subscription=null;
  
  constructor(
    private userProvider: UserProviderService,
    private http:Http
    ) { 
    this.jobs=['Project Manager', 'Programmer','Designer'];
    this.employee= new Employee();
  }

  ngOnInit() {
    
    this.users= [];
    this.loadAllUsers();
    
    this.employeeForm= new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      age:new FormControl(),
      job:new FormControl(),
      isActive:new FormControl(),
      id: new FormControl(),
      valoration: new FormControl()
    });
    
    this.employeeForm.valueChanges.subscribe(
      value=> {
        
        if(this.employeeForm.invalid){
          return;
        }
        
        this.userProvider.updateUser(value);
        
        if(this.employee.id != null && this.employeeForm.dirty){
          this.updateUser();
        }
      }
      );
    }

    loadAllUsers(): void{
      this.http.get(API_END_POINT + '.json').subscribe(
        response=>{
          let data=response.json();
          this.users=[];
          
          for(let key in data){
            this.users.push(
              new Employee(
                data[key].name,
                data[key].email,
                data[key].job,
                data[key].age,
                data[key].isActive,
                data[key].valoration,
                key
                
              )
            );
          }
        },
        error =>console.log("Hubo un error en loadAllUsers() "+ error),
        () => console.log("Fin petición loadAllUsers()"));
    }
  
    createUser(): void{
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers:headers});
      let body= JSON.stringify(this.userProvider.sessionUser());
      
      this.http.post(API_END_POINT + '.json',body,options).subscribe(
        
        response=>{
          console.log("El usuario se creó correctamente");
          this.employee= new Employee();
          this.employeeForm.reset();
          this.loadAllUsers();
        },
        error=>{
          console.log("Hubo un error en createUser(): " + error)
        },
        ()=>{
          console.log("Terminó la petición createUser()");
        }
      );
    }
  
    removeUser(user: Employee): void{
      this.http.delete(API_END_POINT + '/' + user.id + '.json').subscribe(
        response => {
          this.loadAllUsers();
          
          console.log("El usuario se borró correctamente");
        },
        error=> console.log("El usuario no se pudo borrar: " + error)
      );
    }  
  
    loadUser(user: Employee): void{
      this.employee= user;
      if(!user.isActive)
        user.isActive=false;
      
      this.employeeForm.setValue(user);
    }
  
    updateUser(): void{
      
      // Si hya una suscripción previa y no está cerrada la cancelamos antes de volver a suscribirnos
      
      if(this.updateSubscription!=null && !this.updateSubscription.closed){
        this.updateSubscription.unsubscribe();
      }
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers:headers});
      let body= JSON.stringify(this.userProvider.sessionUser());
      
      this.updateSubscription=this.http.put(
        API_END_POINT + '/' + this.employee.id +'.json' , body,options)
        .subscribe(
          response=>{
            this.employee= response.json();
            this.loadAllUsers();
          }
      );
    }
}
