function encodeUrl(q) {
    q1 = q.replace('/', ' ')
    q1 = q1.replace(/\s{2,}/i, " ")
    return encodeURI(q1)
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}


var urls = ["https://hgjoy.com/XYjl","https://hgjoy.com/0poE","https://hgjoy.com/8wJ7","https://hgjoy.com/1pow"]

window.location.href = _.sample(urls);
