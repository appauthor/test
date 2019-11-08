setNavEventListener();

window.onload = function what() {
    setCopyright();
}


function setCopyright() {
    if (screen.width >= 768) {
        document.getElementsByClassName("copyright")[0].innerHTML = "© 앱틀리에 (Apptelier) &nbsp;&nbsp; | &nbsp;&nbsp; 대표 : 장영석<br>사업자 등록번호 : 229-01-76224";
        document.getElementsByClassName("copyright")[0].style.lineHeight = "25px";
    } else {
        document.getElementsByClassName("copyright")[0].innerHTML = "© 앱틀리에 (Apptelier) &nbsp;&nbsp; | &nbsp;&nbsp; 사업자 등록번호 : 229-01-76224 &nbsp;&nbsp; | &nbsp;&nbsp; 대표 : 장영석";
    }
}


function setNavEventListener() {
    window.addEventListener('scroll', function(event) {
        let scrolled = window.scrollY;
        let nav = document.getElementById("nav");
    
        //console.log(window.innerWidth, scrolled);
    
        // 디바이스 가로 사이즈에 따라 네비게이션 배경색이 변하는 위치를 달리한다.
        var changingY = 200;
        if (window.innerWidth <= 540) { // window.innerWidth를 screen.width로 수정해야 함.
            changingY = 50;
        }
    
        if (scrolled > changingY) {
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });
}



function toKorean() {
    document.getElementById("home").innerHTML = " 홈 ";
    document.getElementById("apps").innerHTML = " 출시작 ";
    document.getElementById("authors").innerHTML = " 작가 소개 ";
    document.getElementById("contact").innerHTML = " 문의하기 ";

    document.getElementsByClassName("intro")[0].innerHTML = "앱, 하나의 작품이 되다.";
    document.getElementsByClassName("logo")[0].innerHTML = "앱틀리에";
 

    document.getElementsByClassName("app-subname")[0].innerHTML = "생일과 기념일엔,";
    document.getElementsByClassName("app-name")[0].innerHTML = "축하해";
    document.getElementsByClassName("app-subtitle")[0].innerHTML = "예쁘게 전하는 축하 메시지";

    document.getElementsByClassName("ab")[0].src = "res/ab_kr.jpg"
    
    document.getElementById("ai-h3").innerHTML = "안녕하세요.<br>앱틀리에를 찾아주셔서 감사합니다.<br>앞으로 출시될 애플리케이션들이<br>단순히 소프트웨어로써 제공되는 것이 아니라<br>인문학적이고 예술적인 철학을 담은<br>하나의 작품이 될 수 있도록 노력하겠습니다.";

    setCopyright();
}

function toEnglish() {
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("apps").innerHTML = "App Works";
    document.getElementById("authors").innerHTML = "App Authors";
    document.getElementById("contact").innerHTML = "Contact Us";

    document.getElementsByClassName("intro")[0].innerHTML = "App becomes a work.";
    document.getElementsByClassName("logo")[0].innerHTML = "Apptelier";
 

    document.getElementsByClassName("app-subname")[0].innerHTML = "On birthdays and anniversaries,";
    document.getElementsByClassName("app-name")[0].innerHTML = "Congrats";
    document.getElementsByClassName("app-subtitle")[0].innerHTML =  "A beautiful congratulations message<br>that conveys your mind";;

    document.getElementsByClassName("ab")[0].src = "res/ab_us.jpg"
    
    document.getElementById("ai-h3").innerHTML = "Hello.<br>Thanks for visiting Apptelier.<br>Our applications in the future will<br>not only be provided as software,<br>but will be a work of art<br>with a humanistic and artistic philosophy.";

    document.getElementsByClassName("copyright")[0].innerHTML = "© Apptelier";
}