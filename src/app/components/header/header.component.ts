import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isMenuOpen = false;

scrollTo(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
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
