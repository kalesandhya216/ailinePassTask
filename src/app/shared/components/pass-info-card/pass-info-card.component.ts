import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pass-info-card',
  templateUrl: './pass-info-card.component.html',
  styleUrls: ['./pass-info-card.component.scss']
})
export class PassInfoCardComponent implements OnInit {

  @Input() getObj! : any;
  @Output() sendObjToParent : EventEmitter<any> = new EventEmitter<any>; 

  public flag : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(event : Event){
    console.log(event.target);    
    console.log(this.getObj.id);

    this.flag = !this.flag;
    
  }

  onDone(event : Event){
    console.log(event);
    this.flag = !this.flag;
  }

  onDelete(event : Event){
    console.log(event);
    this.sendObjToParent.emit(this.getObj.id); 
    this.flag = this.flag;

  }

  onInput(event : any){
    console.log(event.target.value);
    this.getObj.fullname = event.target.value;
  }
  
}
