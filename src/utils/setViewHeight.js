import debounce from 'lodash.debounce';

const setViewHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const autoUpdateViewHeight = () => {
  setViewHeight();
  document.addEventListener('resize', debounce(autoUpdateViewHeight, 150));
}

export default autoUpdateViewHeight;
