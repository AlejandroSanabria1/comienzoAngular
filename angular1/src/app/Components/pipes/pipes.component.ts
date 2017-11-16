import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [DatePipe]
})
export class PipesComponent implements OnInit {

  
  birdthDate: Date= new Date(1994,3,12);
  
  dummyText: string = "Lorem ipsum dolor sit amet. Consec..."
  
  htmlText: string= "Texto <strong> con etiquetas </strong> <u>HTML</u>";
  
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    console.log(this.datePipe.transform(this.birdthDate, 'dd-MM-yy'));
  }

}
