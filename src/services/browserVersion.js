const getkBrowserVersion = () => {
  const match = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);

  if (!match) return '';

  return match[1].toLowerCase();
}

export default getkBrowserVersion;
