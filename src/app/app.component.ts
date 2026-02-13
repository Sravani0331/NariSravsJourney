import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from "./components/gallery/gallery.component";
import { StoryComponent } from "./components/story/story.component";
import { LoveLetterComponent } from "./components/love-letter/love-letter.component";
import { WeddingComponent } from "./wedding/wedding.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, GalleryComponent, StoryComponent, LoveLetterComponent, WeddingComponent, AboutComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nari-sravs-journey';
}
