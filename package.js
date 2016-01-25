Package.describe({
  name: 'gqm:sweetalert2',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: "a beautiful replacement for javascript's alert()",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/limonte/sweetalert2',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
      'sweetalert2/dist/sweetalert2.css',
      'sweetalert2/dist/sweetalert2.min.js'
  ], ['client']);

      if(api.export){

      }
});
