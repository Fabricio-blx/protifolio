const buttons = document.querySelectorAll(".sidebar button");
const title = document.getElementById("title");
const description = document.getElementById("description");
const infoBox = document.querySelector(".infoBox");
const rain = document.getElementById("codeRain");

let current = "html";

const data = {

    html:{

        title:"HTML",

        color:"#ff4b2b",

        text:"HTML é a linguagem responsável pela estrutura das páginas da web. Com ela você cria títulos, imagens, vídeos, links, formulários, botões e todo o conteúdo da página..",

        codes:[
            "<html>",
            "<head>",
            "<body>",
            "<title>",
            "<div>",
            "<section>",
            "<header>",
            "<footer>",
            "<main>",
            "<nav>",
            "<article>",
            "<aside>",
            "<button>",
            "<img>",
            "<video>",
            "<audio>",
            "<form>",
            "<input>",
            "<label>",
            "<a>",
            "<span>",
            "<h1>",
            "<h2>",
            "<p>"
        ]

    },

    css:{

        title:"CSS",

        color:"#2196f3",

        text:"CSS é responsável pelo visual da página. Ele controla cores, tamanhos, fontes, animações, sombras e posicionamento dos elementos.",

        codes:[
            "display:flex;",
            "justify-content:center;",
            "align-items:center;",
            "background:#000;",
            "color:white;",
            "font-size:20px;",
            "padding:20px;",
            "margin:auto;",
            "border-radius:15px;",
            "box-shadow:0 0 20px;",
            "transition:.4s;",
            "animation:fade;"
        ]

    },

    javascript:{

        title:"JavaScript",

        color:"#00ff66",

        text:"JavaScript adiciona interatividade ao site. Com ele você cria menus, animações, sistemas, jogos e comunicação com servidores.",

        codes:[
            "const app = {};",
            "let score = 0;",
            "document.querySelector();",
            "addEventListener();",
            "fetch();",
            "setTimeout();",
            "setInterval();",
            "console.log();",
            "if(true){}",
            "for(let i=0;i<10;i++){}",
            "return true;",
            "async function(){}"
        ]

    }

};

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        current=button.dataset.lang;

        title.textContent=data[current].title;
        description.textContent=data[current].text;

        title.style.color=data[current].color;

        infoBox.style.borderLeftColor=data[current].color;

        infoBox.classList.remove("animate");

        void infoBox.offsetWidth;

        infoBox.classList.add("animate");

    });

});

function createCode(){

    const span=document.createElement("span");

    span.className="code";

    const list=data[current].codes;

    span.textContent=list[Math.floor(Math.random()*list.length)];

    span.style.left=Math.random()*100+"vw";

    span.style.top="-80px";

    span.style.color=data[current].color;

    span.style.fontSize=(16+Math.random()*18)+"px";

    span.style.animationDuration=(4+Math.random()*4)+"s";

    span.style.transform=`rotate(${Math.random()*20-10}deg)`;

    rain.appendChild(span);

    span.addEventListener("animationend",()=>{

        span.remove();

    });

}

setInterval(createCode,120);