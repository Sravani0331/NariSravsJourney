import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [DialogModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  showLoveDialog = false;
openLovePopup() {
    this.showLoveDialog = true;
    const music = document.getElementById('bgMusic') as HTMLAudioElement;
    music?.play();
  }
}
