import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
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
