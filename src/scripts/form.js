
const Form = function () {
    this.html = document.createElement("div");
    this.html.setAttribute("id", "form");
    output = `
        <form id='addReview' method='post' accept-charset='UTF-8'>
            <fieldset>
                <legend>Add Review</legend>
        
                <div class='short_explanation'>* required fields</div><br><br>
                
                <div><span class='error'></span></div>
                <div class=''>
                    <label for='name'>Your Full Name: * </label><br/>
                    <input type='text' name='name' id='name' maxlength="50"><br/>
                    <span id='name_errorloc' class='error'></span>
                </div><br>
                
                <div><span class='error'></span>
                <div id='evaluation' class=''>
                    <span>Please Rate Our Work *</span><br>
                    <input type="radio" name="evaluation" id="a" value="a" checked="checked">
                    <label for='a'>Благодарность</label><br/>
                    <input type="radio" name="evaluation" id='b' value="b">
                    <label for='b'>Предложение об улучшении сервиса</label><br/>
                    <input type="radio" name="evaluation" id='c' value="c">
                    <label for='c'>Жалоба</label><br/>
                    <input type="radio" name="evaluation" id='d' value="d">
                    <label for='d'>Kill yourself</label><br/>
                    <span id='evaluation_errorloc' class='error'></span>
                </div><br>
                
                <div><span class='error'></span></div>
                <div class=''>
                    <label for='body'>Your Review: *</label><br/>
                    <textarea id='body'></textarea><br/>
                    <span id='review_errorloc' class='error'></span>
                </div><br>
                
                <div id="img"></div>
                    <label class="file-upload-container" for='file-upload'>Your Photo</label><br/>
                    <i><small>Please add file having extensions .jpg/.png/ only.</small></i><br>
                    <canvas id="canvas"></canvas>
                    <input type="file" id="file-upload" accept="image/png,image/jpeg"><br>
                    <input type="button" name='cancel' value="Cancel"><br>
<!--                    <img src="" id="image" alt="" />-->
<!--                    Your photo can be here-->
<!--                    <progress id="progress-bar" max=100 value=0></progress>-->
                 </div><br/>
                 
                 <!--<div id="dropbox">
                    <form class="my-form">
                        <div class="form_line">
                            <h4>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</h4>
                            <div class="form_controls">
                                <div class="upload_button_holder">
                                    <input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
                                    <a href="#" id="fileSelect">Select some files</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="progress-bar" id="progress-bar">
                        <div class="progress" id="progress"></div>
                    </div>
                    <div id="gallery"></div>
                 </div>-->
                
                <div>
                    Have a nice day! And even if you don't like our site, please give a "Like"
                    <input type="checkbox" name="like" value="like">
                </div><p>
                
                <div class='container'>
                    <input class="file-upload-container" type='submit' name='submit' id='submit' value='Submit'/>
                </div>
        
            </fieldset>
        </form>
    `;
    this.html.innerHTML = output;
};


// Creates a form inside a <script> tag and replaces that tag with the form's html.
Form.create = function () {

    let form, script;

    // Get the currently running script.
    script = document.currentScript;

    form = new Form();

    /* Replace the running script with the html of the Form object. */
    script.parentNode.replaceChild(form.html, script);
};
