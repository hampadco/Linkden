function autoScroll() {
  const scrollSpeed = 1; // Change this value to adjust scroll speed (larger values are faster)
  const scrollDelay = 10; // Change this value to adjust delay between each scroll step (in milliseconds)
  const focusDelay = 2000; // Delay before clicking after focusing (in milliseconds)

  const likeButtons = document.querySelectorAll('.artdeco-button__text.react-button__text');
  let currentIndex = 0; // Index of the current unclicked button

  const scrollInterval = setInterval(function() {
    const reachedBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;
    if (reachedBottom || currentIndex >= likeButtons.length) {
      clearInterval(scrollInterval);
      return;
    }

    const button = likeButtons[currentIndex];
    const buttonRect = button.getBoundingClientRect();
    const buttonIsInViewport = buttonRect.top >= 0 && buttonRect.bottom <= window.innerHeight;

    if (buttonIsInViewport && !button.getAttribute('data-clicked')) {
      button.focus(); // Focus on the button
      setTimeout(() => {
        button.click(); // Click the button after the delay
        button.setAttribute('data-clicked', 'true');
      }, focusDelay);
      currentIndex++;
    }

    if (!reachedBottom) {
      window.scrollBy(0, scrollSpeed);
    }
  }, scrollDelay);
}

autoScroll();
