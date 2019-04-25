const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dg9frkd6i/upload';
const CLOUDINARY_UPLOAD_PRESET = 'axp4twlm';

const fileReader = document.getElementById('canvas');
const fileUpload = document.getElementById('file-upload');
// const cancel = document.querySelector('input[name="cancel"]');
// console.log(cancel);

/*const rectangle = document.getElementById('canvas').innerHTML = '<img src="'+e.target.result+'" alt=""/>';
console.log(rectangle);*/

/*!//Image preview
if (fileUpload.files && fileUpload.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
    document.getElementById('canvas').innerHTML = '<img src="'+e.target.result+'"/>';
    };
    reader.readAsDataURL(fileUpload.files[0]);
}
}*/

fileUpload.addEventListener('change', () => {
    // *********** file extension test: for user - html, for browser - here, for server - cloudinary *********** //
    const filePath = fileUpload.value;
    const allowedExtensions = /(\.jpg|\.png)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload file having extensions .jpg/.png/ only.');
        fileUpload.value = '';
        return false;
    } else {
        const reader = new FileReader;
        // console.log(reader);
        reader.onload = function () {
            const img = new Image();
            // console.log(img);

            img.onload = function () {
                const canvas = document.getElementById('canvas');
                // const canvas = document.createElement('canvas');

                // ****************************** scaling to a given width *********************** //
                let width;                                               // you can change the base width here:
                img.width > img.height ? width = 300 : width = 168.75;   // 1 st - for a horizontal photo
                const scaleFactor = width / img.width;                   // 2nd  - for the vertical one
                canvas.width = width;
                canvas.height = img.height * scaleFactor;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, canvas.height);
                // ******************************************************************************* //

                document.getElementById("canvas").src = canvas.toDataURL();

                // ********************************* sending file to Cloudinary ****************** //
                canvas.toBlob((blob) => {
                    const formData = new FormData();
                    formData.append('file', blob, 'canvas');
                    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
                    const config = {
                        headers: {"X-Requested-With": "XMLHttpRequest"},
                    };

                    axios.post(CLOUDINARY_URL, formData, config)
                        .then(res => {
                            fileUpload.src = res.data.secure_url;
                        })
                        .catch((err) => alert('Network Error'));
                });
                // ****************************************************************************** //

                // ctx.clearRect(0, 0, canvas.width, canvas.height);

            };
            img.src = reader.result;
        };
        // ***************************************** displaying canvas ************************** //
        reader.readAsDataURL(fileUpload.files[0]);




    }

    /*// const file = fileUpload.files[0];
           const formData = new FormData();
           formData.append('file', file);
           formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
           const config = {
               headers: {"X-Requested-With": "XMLHttpRequest"},
           };

           axios.post(CLOUDINARY_URL, formData, config)
               .then(res => {
                   imgPreview.src = res.data.secure_url;
               })
               .catch((err) => alert('Network Error'));*/

    //TODO cancelling
    /*cancel.addEventListener("click", e =>{
        console.log(e);
        const empty = e.target.src;
        console.log(empty);
        imgPreview.src = '';
    });*/
});


/*
const cloudName = 'dg9frkd6i';
const unsignedUploadPreset = 'axp4twlm';

const imgPreview = document.getElementById('gallery');


var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function(e) {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

// ************************ Drag and drop ***************** //
function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var files = dt.files;

    handleFiles(files);
}


// *********** Upload file to Cloudinary ******************** //
function uploadFile(file) {
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Reset the upload progress bar
    document.getElementById('progress').style.width = 0;

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function(e) {
        var progress = Math.round((e.loaded * 100.0) / e.total);
        document.getElementById('progress').style.width = progress + "%";

        console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // File uploaded successfully
            var response = JSON.parse(xhr.responseText);
            // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
            var url = response.secure_url;
            imgPreview.src = response.secure_url;
            // Create a thumbnail of the uploaded image, with 150px width
            var tokens = url.split('/');
            tokens.splice(-2, 0, 'w_150,c_scale');
            var img = new Image(); // HTML5 Constructor
            img.src = tokens.join('/');
            img.alt = response.public_id;
            document.getElementById('gallery').appendChild(img);
        }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
}

// *********** Handle selected files ******************** //
var handleFiles = function(files) {
    for (var i = 0; i < files.length; i++) {
        uploadFile(files[i]); // call the function to upload the file
    }
};*/

