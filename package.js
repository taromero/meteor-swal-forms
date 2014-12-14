Package.describe({
  name: 'canotto90:swal-forms',
  summary: 'Swal-Forms wrapped for meteor',
  version: '0.0.5',
  git: 'https://github.com/taromero/meteor-swal-forms'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles([
    'swal-forms.css',
    'swal-forms.js'
  ], 'client');
});
