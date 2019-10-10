let appInfo = {
    'Congrats' : 'A warm word,',
    'RLeaderoom' : 'More than reading note,',
    'Schulglocke' : 'The smartest daily planner,'
};

function saveID(appName) {
    sessionStorage.setItem('currentItem', appName);
}

function setAppDetail() {
    let currentItem = sessionStorage.getItem('currentItem');
    let titleDiv = document.getElementById('detail-title');
    let subTitleDiv = document.getElementById('detail-subTitle')
    titleDiv.innerHTML = currentItem;
    subTitleDiv.innerHTML = appInfo[currentItem];
}

function moveTo(pageName, currentPage) {
    let fileName = pageName + '.html'; 
    if (currentPage == 'home') {
        if (pageName == 'home') {
            window.location.href = "index.html";
            return;
        }
        window.location.href = 'page/' + fileName;
    } else {
        if (pageName == 'home') {
            window.location.href = "../" + "index.html";
            return;
        }
        window.location.href = '../page/' + fileName;
    }
}

