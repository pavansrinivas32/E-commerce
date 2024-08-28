import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  images: string[] = [
    'https://via.placeholder.com/800x300?text=Slide+1',
    'https://via.placeholder.com/800x300?text=Slide+2',
    'https://via.placeholder.com/800x300?text=Slide+3',
  ];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 1000);
  }
}
