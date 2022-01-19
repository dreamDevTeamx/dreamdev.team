const linksForCopy = document.querySelectorAll('.link_for_copy');
const linksForCopyFunc = 'CopyToClipboard(this.previousElementSibling.href)';
const emailsForCopyFunc =
  "CopyToClipboard(this.previousElementSibling.href.replace('mailto:', ''))";

let isLinkEmail = false;

for (let i = 0; i < linksForCopy.length; i++) {
  isLinkEmail = linksForCopy[i].getAttribute('href').indexOf('mailto:') != -1;
  linksForCopy[i].insertAdjacentHTML(
    'afterEnd',
    '<button class="copyButton" onclick="' +
      ((isLinkEmail && emailsForCopyFunc) || (!isLinkEmail && linksForCopyFunc)) +
      '">Copy</button>'
  );
}

function CopyToClipboard(arg) {
  var aux = document.createElement('input');
  aux.setAttribute('value', arg);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
}
