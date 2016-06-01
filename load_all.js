function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("https://fonts.googleapis.com/css?family=Roboto:400,700","css");
loadjscssfile("//isglobal.github.io/health_effects_of_air_pollution/libs/jscrollpane/jquery.jscrollpane.css","css");
loadjscssfile("//isglobal.github.io/health_effects_of_air_pollution/style.css","css");
loadjscssfile("//isglobal.github.io/health_effects_of_air_pollution/style_nonvw.css","css");



// loadjscssfile("./libs/d3.v3.min.js","js");
// loadjscssfile("/libs/ijs/jquery.min.js","js");
// loadjscssfile("./libs/ijs/i.min.js","js");
// loadjscssfile("./libs/utils.js","js");
// loadjscssfile("./libs/modernizr-custom.js","js");
// loadjscssfile("./libs/jscrollpane/jquery.jscrollpane.min.js","js");
// loadjscssfile("./libs/jscrollpane/jquery.mousewheel.js","js");

// loadjscssfile("./main.js","js");

loadjscssfile("//isglobal.github.io/health_effects_of_air_pollution/main_all.min.js","js");
