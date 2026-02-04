import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, TimelineModule],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  constructor(private sanitizer: DomSanitizer) {}

  getYoutubeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  events = [
    {
      title: 'First Meet',
      date: 'Mamaiah’s Marriage',
      icon: 'pi pi-heart',
      text: 'Among wedding lights and blessings, destiny quietly introduced us ❤️'
    },
    {
      title: 'Engagement',
      date: '31 January 2025',
      icon: 'pi pi-diamond',
      text: 'A promise made with love, smiles, and families together 💍',
      images: ['eng1.JPG']
    },
    {
      title: 'Pre-Wedding Shoot',
      date: '4 February 2025',
      icon: 'pi pi-camera',
      text: 'Captured our love before the forever began ✨',
      youtubeId: 'SFnY951uohk'
    },
    {
      title: 'Wedding Day',
      date: 'Our Forever Begins',
      icon: 'pi pi-ring',
      text: 'Two souls, one promise — we became forever ❤️',
      images: ['wedding.JPG']
    }
  ];

}
