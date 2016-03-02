Package.describe({
  name: 'canotto90:swal-forms',
  summary: 'Swal-Forms wrapped for meteor',
  version: '0.2.0',
  git: 'https://github.com/taromero/meteor-swal-forms'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('kevohagan:sweetalert@0.5.0')
  api.addFiles([
    'swal-forms/swal-forms.css',
    'swal-forms/swal-forms.js'
  ], 'client');
});
