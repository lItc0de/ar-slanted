const getBrowserVersion = () => {
  const match = navigator.userAgent.match(/(opera|chrome|crios|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);

  if (!match) return '';

  return match[1].toLowerCase();
}

export default getBrowserVersion;
