document.addEventListener('DOMContentLoaded', function() {
  console.log('Age Verifier Loaded'); // برای دیباگ
  
  const overlay = document.getElementById('age-verification-overlay');
  const confirmBtn = document.getElementById('age-confirm');
  const denyBtn = document.getElementById('age-deny');
  
  // بررسی آیا کاربر قبلاً تایید کرده است
  if (!getCookie('age_verified')) {
    console.log('Showing age verification');
    setTimeout(() => {
      overlay.style.display = 'flex';
    }, 1000);
  } else {
    console.log('User already verified');
  }
  
  // تایید سن
  confirmBtn.addEventListener('click', function() {
    setCookie('age_verified', 'true', 30);
    overlay.style.display = 'none';
    console.log('Age confirmed');
  });
  
  // رد سن
  denyBtn.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
    console.log('Age denied');
  });
  
  // توابع کمکی برای کوکی
  function setCookie(name, value, days) {
    const date = new Date();
    //date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    date.setTime(date.getTime() + (10000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log('Cookie set: ' + name);
  }
  
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        console.log('Cookie found: ' + name);
        return c.substring(nameEQ.length, c.length);
      }
    }
    console.log('Cookie not found: ' + name);
    return null;
  }
});