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
export class HeroComponent implements AfterViewInit {
  showLoveDialog = false;
openLovePopup() {
    this.showLoveDialog = true;
    const music = document.getElementById('bgMusic') as HTMLAudioElement;
    music?.play();
  }
  ngAfterViewInit() {
    const music = document.getElementById('bgMusic') as HTMLAudioElement;
    const btn = document.getElementById('musicToggle') as HTMLElement;

    let playing = false;

    btn.addEventListener('click', () => {
      if (!playing) {
        music.play();
        btn.innerHTML = '⏸️ <span>Pause Music</span>';
      } else {
        music.pause();
        btn.innerHTML = '🎶 <span>Play Music</span>';
      }
      playing = !playing;
    });
  }
}
