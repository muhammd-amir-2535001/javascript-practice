//ya ju Function hn set karth h current  
//clock k uper or  date and year be
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const date = now.getDate();
    const year = now.getFullYear();
  
    // Calculate the rotation angles
    const hourRotation = 360 * ((hour % 12) + minute / 60) / 12;
    const minuteRotation = 360 * (minute + second / 60) / 60;
    const secondRotation = 360 * second / 60;
  
    // Apply rotation to the clock hands
    document.querySelector('.hand.hour').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.hand.mint').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.hand.second').style.transform = `rotate(${secondRotation}deg)`;
    // Update the date and year display
    
    document.querySelector('.date').textContent = date;
    document.querySelector('.year').textContent = year;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to update the clock
  updateClock();
  