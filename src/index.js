import './styles.css';

const ref = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
      this.time = this.targetDate.getTime() - this.currentTime;

      if (this.time > 0) {
        ref.days.textContent = pad(
          Math.floor(this.time / (1000 * 60 * 60 * 24)),
        );
        ref.hours.textContent = pad(
          Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        ref.minutes.textContent = pad(
          Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)),
        );
        ref.seconds.textContent = pad(
          Math.floor((this.time % (1000 * 60)) / 1000),
        );
      } else {
        clearInterval(this.timer);
        ref.days.textContent = 0;
        ref.hours.textContent = 0;
        ref.minutes.textContent = 0;
        ref.seconds.textContent = 0;
      }
    }, 1000);
  }
}

const firstTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('dec 02, 2020'),
});

firstTimer.startTimer();
