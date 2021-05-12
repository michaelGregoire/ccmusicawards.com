var jQuery = require('jquery');
var munge = require('munge');

jQuery(document).ready(function ($) {
  const at = '@';
  const dot = '.';
  let contacts = [
    {
      el: $('.ccma'),
      address: 'ccma' + at + 'blocsonic' + dot + 'com',
    },
    {
      el: $('.ccmaadmin'),
      address: 'ccmaadmin' + at + 'blocsonic' + dot + 'com',
    },
  ];

  contacts.forEach(function (contact) {
    let subject = encodeURI('?subject=CC Music Awards');
    contact.el.attr('href', 'mailto:' + munge(contact.address));

    contact.el.on('click', function () {
      contact.el.attr('href', 'mailto:' + contact.address + subject);
      setTimeout(function () {
        contact.el.attr('href', 'mailto:' + munge(contact.address));
      }, 150);
    });
  });
});
