
let mimes={
  "jpg": "image/jpeg",
  "png": "image/png",
  "gif": "image/gif",
  "mp4": "video/mp4",
  "mov": "video/quicktime",
  "wmv": "video/x-ms-wmv",
  "flv": "video/x-flv",
  "svg": "image/svg+xml",
  "psd": "image/photoshop",
  "mp3": "audio/mpeg",
  "rar": "application/x-rar-compressed",
  "zip": "application/zip",
  "json": "application/json",
  "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "doc": "application/msword",
  "pdf": "application/pdf",
  "xls": "application/vnd.ms-excel",
  "ppt": "application/vnd.ms-powerpoint"
};

let accept = function(extsList){
  var accepts = [];
  var exts = extsList.split(",");
  for (var i = 0; i < exts.length; i++) {
    accepts.push(mimes[exts[i]]);
  }
  ;
  return exts.join(",");
}


export default {
  accept,
  mimes
}
