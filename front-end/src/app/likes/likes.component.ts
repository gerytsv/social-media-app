import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const confettiAmount = 60;
    const confettiColors = [
      '#7d32f5',
      '#f6e434',
      '#63fdf1',
      '#e672da',
      '#295dfe',
      '#6e57ff'
    ];
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const createConfetti = to => {
      const elem = document.createElement('i');
      const set = Math.random() < 0.5 ? -1 : 1;
      elem.style.setProperty('--x', random(-260, 260) + 'px');
      elem.style.setProperty('--y', random(-160, 160) + 'px');
      elem.style.setProperty('--r', random(0, 360) + 'deg');
      elem.style.setProperty('--s', random(0.6, 1) + '');
      elem.style.setProperty('--b', confettiColors[random(0, 5)]);
      to.appendChild(elem);
    };

    document.querySelectorAll('.paw-button').forEach(elem => {
      elem.addEventListener('click', e => {
        const num = elem.children[1].textContent;
        if (!elem.classList.contains('animation')) {
          elem.classList.add('animation');
          for (let i = 0; i < confettiAmount; i++) {
            createConfetti(elem);
          }
          setTimeout(() => {
            elem.classList.add('confetti');
            setTimeout(() => {
              elem.classList.add('liked');
              elem.children[1].textContent = (parseInt(num) + 1).toString();
            }, 400);
            setTimeout(() => {
              elem.querySelectorAll('i').forEach(i => i.remove());
            }, 600);
          }, 260);
        } else {
          elem.classList.remove('animation', 'liked', 'confetti');
          elem.children[1].textContent = (parseInt(num) - 1).toString();
        }
        e.preventDefault();
      });
    });
  }
}
