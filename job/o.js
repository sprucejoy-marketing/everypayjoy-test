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


var q = getUrlParam('q', 'driver');
var url = "https://api.apply-now.io/api/v1/ja/0/" + encodeUrl(q) + "/0"
axios
    .get(url)
    .then(response => {
        var jobs = _.uniqBy(response.data['jobs'], 'company');
        var u = jobs[0].url
        
        var urls = _.map(jobs, function (o) {
            var cmp = o.company;
            var t = o.title.toLowerCase();
            if (cmp.includes("Survey") && q == "survey") return o.url;
            if (cmp.includes("Shipt") && q == "delivery") return o.url;
            if (cmp.includes("American Consumer Panel") && q == "usage%20tester"){  return o.url;}
            if (q == "warehouse") {
                if(cmp.includes("Shipt") || cmp.includes("Jobs2Careers") || cmp.includes("HomeAdvisor") ) return undefined;
                if (t.includes(q)) {
                    
                    return o.url; 
                }
            }
            if (t.includes(q) && q != "survey") return o.url;
        });

        
        l = _.without(urls, undefined)
        if (l.length > 0) u = l[0]
        
        window.location.href = u;
    });