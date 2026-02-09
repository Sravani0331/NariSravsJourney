import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
months = [
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January'
];
memories = [
  { month: 'February', text: 'Shivaratri' },
  { month: 'March', text: '16 rojulla panduga' },
  { month: 'April', text: 'Ugadi' },
  { month: 'May', text: 'Naris Birthday' },
  { month: 'June', text: 'Going to Relakayapally' },
  { month: 'July', text: 'Leonia Resort' },
  { month: 'August', text: 'Tirupathi' },
  { month: 'September', text: 'Vinayaka Chavithi' },
  { month: 'October', text: 'Gandipet Landscape' },
  { month: 'November', text: 'Swarnagiri' },
  { month: 'December', text: 'Sravs Birthday' },
  { month: 'January', text: 'Medaram' }
];

}
