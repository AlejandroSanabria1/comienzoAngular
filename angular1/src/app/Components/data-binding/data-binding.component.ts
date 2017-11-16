import { Component, OnInit, OnDestroy } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit, OnDestroy {

  params:any;
  
  title1: string = "Interpolacion";
  description1: string = "Ejemplo de data-bonding por interpolacion";
  
   title2: string = "Property Binding";
  description2: string = "Ejemplo de propertry binding";
  
  user1: any = {
  
  name: "Paco",
    email: "paquito@outlook.es"
  }
  
     title3: string = "Event Binding";
  description3: string = "Ejemplo de event binding";
  counter: number = 0;
  sumAction(): void{
    
    this.counter++;
  }
  
       title4: string = "Two-way Binding";
  description4: string = "Ejemplo de two-way binding";
  content: string = "Escribe aqui..."
  
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  goToPipes(){
    this.router.navigate(["/pipes"]);
  }
  
  ngOnInit() {
    this.params= this.activeRoute.params.subscribe(
      arg1=> {
        console.log(arg1);
      }
    );
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }
}
