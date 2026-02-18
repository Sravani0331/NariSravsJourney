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
    if (this.joined && this.showFinal) {
      clearTimeout(this.timer);
      this.joined = false;
      this.showFinal = false;
      return;
    }

    // ▶️ FIRST CLICK (Start animation)
    if (!this.joined) {
      this.joined = true;
      // 6s move + 2s pause = 8s
      this.timer = setTimeout(() => {
        this.showFinal = true;
      }, 4000);
    }
  }
}