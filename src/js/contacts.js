import { copyToClipboard } from './utils.js';

const membersTable = document.querySelector('.react-members');

const copyButton = `<button class="copyButton">Copy</button>`;

fetch('/data/contacts.json')
  .then(res => res.json())
  .then(data => {
    membersTable.innerHTML = data
      .filter(member => !member.ignore)
      .map(elem => {
        return `
<tr>
  <td><div class="inner-container-table-cell">${elem.fullName}</div></td>
  <td>
    <div class="inner-container-table-cell">
      <a href="https://github.com/${elem.github}" target="_blank"
        >${elem.github}</a
      >
      ${copyButton}
    </div>
  </td>
  <td>
    <div class="inner-container-table-cell">
      <a href="mailto:${elem.mail}">${elem.mail}</a>
      ${copyButton}
    </div>
  </td>
  <td>
    <div class="inner-container-table-cell">
      <a href="https://t.me/${elem.telegram}" target="_blank">${elem.telegram}</a>
      ${copyButton}
    </div>
  </td>
</tr>
        `;
      })
      .join('');
    document.querySelectorAll('.copyButton').forEach(button => {
      button.addEventListener('click', function () {
        let href = this.previousElementSibling.href;
        if (href.includes('mailto:')) href = href.replace('mailto:', '');
        copyToClipboard(href);
      });
    });
  });
