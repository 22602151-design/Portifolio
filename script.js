function mascara_telefone(){
          
            
    let tel_formatado = document.querySelector("#tel").value
    console.log(tel_formatado)
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("tel").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("tel").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }

    if (tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("tel").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("modo-claro");
  }


  let habilidadeAtual = 0;

function proximaHabilidade() {

    if (habilidadeAtual < 1) {

        habilidadeAtual++;

        document.querySelector(".slider-conteudo").style.transform =
            "translateX(-100%)";
    }

}


function voltarHabilidade() {

    if (habilidadeAtual > 0) {

        habilidadeAtual--;

        document.querySelector(".slider-conteudo").style.transform =
            "translateX(0)";
    }

}


let softSkillAtual = 0;


function proximaSoftSkill() {

    if (softSkillAtual < 1) {

        softSkillAtual++;

        document.querySelector(".slider-soft-conteudo").style.transform =
            "translateX(-100%)";

    }

}


function voltarSoftSkill() {

    if (softSkillAtual > 0) {

        softSkillAtual--;

        document.querySelector(".slider-soft-conteudo").style.transform =
            "translateX(0)";

    }
}


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



