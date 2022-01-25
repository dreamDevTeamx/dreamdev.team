const linksForCopy = document.querySelectorAll('.link_for_copy');

// TODO: try to simplify in future
const linksForCopyFunc = 'copyToClipboard(this.previousElementSibling.href)';
const emailsForCopyFunc =
  "copyToClipboard(this.previousElementSibling.href.replace('mailto:', ''))";

for (let i = 0; i < linksForCopy.length; i++) {
  const isLinkEmail = linksForCopy[i].getAttribute('href').indexOf('mailto:') != -1;
  linksForCopy[i].insertAdjacentHTML(
    'afterEnd',
    '<button class="copyButton" onclick="' +
      ((isLinkEmail && emailsForCopyFunc) || (!isLinkEmail && linksForCopyFunc)) +
      '">Copy</button>'
  );
}

function copyToClipboard(textForCopy) {
  let tempInput = document.createElement('input');
  tempInput.setAttribute('value', textForCopy);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}
