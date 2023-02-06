import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopi',
  templateUrl: './create-onomatopi.component.html',
  styleUrls: ['./create-onomatopi.component.scss']
})
export class CreateOnomatopiComponent {
  newOnomatopia: string = ''
  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter(); 

  createOnomatopia(): void{
          
this.sendOnomatopiaToParent.emit(this.newOnomatopia);
this.newOnomatopia = '';
  }
}
