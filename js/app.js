search_focus = false;
lang = "fr";
lang_focus = false;
fr_search = "Entrez une question ...";
en_search = "Enter a question ...";

function searchFocus() {
    document.getElementById("form").style.borderColor = "rgba(81, 203, 238, 1)";
    document.getElementById("form").style.boxShadow = "0 0 5px rgba(81, 203, 238, 1)";
    search_focus = true;
}

function searchBlur() {
    document.getElementById("form").style.borderColor = "gray";
    document.getElementById("form").style.boxShadow = "none";
    search_focus = false;
}

function searchOver() {
    if(!search_focus) document.getElementById("form").style.borderColor = "#333333";
}

function searchOut() {
    if(!search_focus) document.getElementById("form").style.borderColor = "gray";
}

/*
function langOver() {
    if(lang == "fr" && !lang_focus)
    {
        document.getElementById("lang-icon").src="../ressources/uk.png";
        lang = "en";
        lang_focus = true;
    }
    else if(lang == "en" && !lang_focus)
    {
        document.getElementById("lang-icon").src="../ressources/fr.png";
        lang = "fr";
        lang_focus = true;
    }
}

function langOut() {
    lang_focus = false;
}
*/

/*
* OnClick event on langage button
*/
function langClick() {
    if(lang == "fr")
    {
        document.getElementById("lang-icon").src="../ressources/uk.png";
        langChange();
    }
    else if(lang == "en")
    {
        document.getElementById("lang-icon").src="../ressources/fr.png";
        langChange();
    }
}

/*
* Change langage function
*/
function langChange() {
    if(lang == "fr")
    {
        document.getElementById("search").placeholder = en_search;
        lang = "en";
    }
    else if(lang == "en")
    {
        document.getElementById("search").placeholder = fr_search;
        lang = "fr";
    }
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}