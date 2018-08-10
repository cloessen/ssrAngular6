// (function(){
//   console.log('CKEDITOR Config file loaded');
//   const EDITOR = CKEDITOR.instances[Object.keys(CKEDITOR.instances)[0]];
//   console.log(EDITOR.name);
//   EDITOR.config.defaultLanguage = 'de';
//   // CKEDITOR.appendTo(EDITOR.name,
//   //   {height: 500});
//   CKEDITOR.editorConfig({
//     language: 'de',
//     uiColor: '#c3c3c3',
//     height: 500
//   });
// })();

// CKEDITOR.replace( 'editor1', {
//   extraPlugins: 'image2,uploadimage',
//
//   toolbar: [
//     { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
//     { name: 'styles', items: [ 'Styles', 'Format' ] },
//     { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
//     { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
//     { name: 'links', items: [ 'Link', 'Unlink' ] },
//     { name: 'insert', items: [ 'Image', 'Table' ] },
//     { name: 'tools', items: [ 'Maximize' ] },
//     { name: 'editing', items: [ 'Scayt' ] }
//   ],
//
//   // Configure your file manager integration. This example uses CKFinder 3 for PHP.
//   filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
//   filebrowserImageBrowseUrl: '/ckfinder/ckfinder.html?type=Images',
//   filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
//   filebrowserImageUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
//
//   // Upload dropped or pasted images to the CKFinder connector (note that the response type is set to JSON).
//   uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
//
//   // Reduce the list of block elements listed in the Format drop-down to the most commonly used.
//   format_tags: 'p;h1;h2;h3;pre',
//   // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
//   removeDialogTabs: 'image:advanced;link:advanced',
//
//   height: 450
// } );



CKEDITOR.editorConfig = function( config ) {
  // console.log(config)
  // Define changes to default configuration here. For example:
  config.language = 'de';
  config.basePath = '/assets/ckeditor/plugins/'
  config.uiColor = '#c3c3c3';
  config.fullPage = false;
  config.height = 500;
  config.width = '75%';
  // config.extraPlugins = 'image2,uploadimage';
  config.toolbar = [
    { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
    { name: 'styles', items: [ 'Styles', 'Format' ] },
    { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
    { name: 'links', items: [ 'Link', 'Unlink' ] },
    { name: 'insert', items: [ 'Image', 'Table' ] },
    { name: 'tools', items: [ 'Maximize' ] },
    { name: 'editing', items: [ 'Scayt' ] }
  ];
  config.extraPlugins = 'image2';
  // config.uploadUrl = 'https://us-central1-knochenbruchgilde.cloudfunctions.net/uploadImage';
  // config.filebrowserImageUploadUrl = 'https://us-central1-knochenbruchgilde.cloudfunctions.net/uploadImage';
  config.filebrowserBrowseUrl = '/browser/browse.php';
  config.filebrowserUploadUrl = 'https://us-central1-knochenbruchgilde.cloudfunctions.net/uploadImage';

  // config.filebrowserBrowseUrl = '/ckfinder/ckfinder.html';
  // config.filebrowserImageBrowseUrl = '/gs://knochenbruchgilde.appspot.com/images/';
  // config.filebrowserUploadUrl = '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
  // config.filebrowserImageUploadUrl = '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';

  console.log(config)
};

