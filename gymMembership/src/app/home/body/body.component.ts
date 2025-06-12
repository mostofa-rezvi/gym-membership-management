import { Component, OnInit, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit, AfterViewInit {
  showScrollButton = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return; // Exit if not in browser or IntersectionObserver is not available
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    // Fade-in animation observer
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeInObserver.unobserve(entry.target); // Optional: unobserve after first animation
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => {
      fadeInObserver.observe(el);
    });

    // Counter animation function
    const animateValue = (
      element: Element,
      start: number,
      end: number,
      duration: number
    ): void => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        if (element instanceof HTMLElement) {
          element.innerHTML = value + (element.innerHTML.includes('+') ? '+' : '');
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    // Stats number animation observer
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumber = entry.target.querySelector('.stat-number');
          if (statNumber && statNumber.textContent) {
            const finalNumber = parseInt(statNumber.textContent.replace(/\D/g, ''), 10);
            if (!isNaN(finalNumber)) {
              animateValue(statNumber, 0, finalNumber, 2000);
              statsObserver.unobserve(entry.target);
            }
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.stat-item').forEach((el) => {
      statsObserver.observe(el);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
