import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'output';

onomatopoeiaList: Array<string> = []

  onReceiveNewOnomatopia(event: string): void{
    this.onomatopoeiaList.push(event)
  }
}
