import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding',
  standalone: true,
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent {
  joined = false;
showFinal = false;
timer: any;

toggleJoin() {
  if (this.joined) return; 

  this.joined = true;

  this.timer = setTimeout(() => {
    this.showFinal = true;
  }, 4000);
}

}