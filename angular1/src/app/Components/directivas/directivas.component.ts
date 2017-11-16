import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  activeColor: string="azul";
  changeColor(color:string): void{
    this.activeColor = color;
  }
  
  colorList: Array<string> = ['Azul', 'Verde', 'Amarillo', 'Rojo', 'Naranja'];
  
  userIsLogin: boolean=false;
  changeUserStatus(): void{
    this.userIsLogin=!this.userIsLogin;
  }
  alertStatus:string;
  changeAlertStatus(status: string):void{
    this.alertStatus=status;
  
  }
  constructor() { }

  ngOnInit() {
  }

}
