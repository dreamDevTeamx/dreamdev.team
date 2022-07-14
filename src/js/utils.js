export const copyToClipboard = (text) => {
  const tempInput = document.createElement('input');
  tempInput.setAttribute('value', text);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
};
