const isChromeOnMobile = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (!isMobile) return false;

  const chrome = /chrome|crios/i.test(navigator.userAgent);
  if (!chrome) return false;

  return true;
}

export default isChromeOnMobile;

