<!DOCTYPE html>
<html lang="fr">
  <head>
  	<meta charset="utf-8">
  	<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/documentation.css">
  	<title>&lt;CodePhenix&gt; Typographies</title>
    <style>
      main {
        height: 100vh;
        overflow: hidden;
      }
      aside {
        height: 100%;
        overflow: auto;
      }
      ul:first-child h2{margin:0;}
      section {height: 100%;font-size: 1.2em;}
      ul{list-style: none;}
      button{background: transparent;border: none;color: #777;}
      a.cta {
          background: #52d3aa;
          color: #fff;
          text-decoration: none;
          padding: 1em;
          margin-bottom: 1em;
          display: inline-block;
          transition: all .6s ease;
          font-weight: 900;
      }
    </style>
  </head>
  <body>
    <?php include '../assets/structure/header.php' ;?>
    <main class="tab-content" id="pills-tabContent">
          <aside>
          </aside>
          <section class="tab-content" id="v-pills-tabContent">
            <article class="tab-pane fade show active" id="dumb" role="tabpanel" aria-labelledby="dumb-tab">
              <h3 >Cliquez sur une typographie pour avoir un aperçu</h3>
              <div>
                <p>
                  <span style="text-transform:uppercase">
                  a 	b 	c 	d 	e 	f 	g 	h 	i 	j 	k 	l 	m
                  n 	o 	p 	q 	r 	s 	t 	u 	v 	w 	x 	y 	z
                  </span>
                a 	b 	c 	d 	e 	f 	g 	h 	i 	j 	k 	l 	m
                n 	o 	p 	q 	r 	s 	t 	u 	v 	w 	x 	y 	z
                </p>
                <p>
                À à 	Â â 	Æ æ 	Ç ç 	É é 	È è 	Ê ê 	Ë ë
                Î î 	Ï ï 	Ô ô 	Œ œ 	Ù ù 	Û û 	Ü ü 	Ÿ ÿ
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a style="display:none;" class="cta dl" href=""><span>Télécharger la typo</span> <i class="bi bi-arrow-down-circle-fill"></i></a>
              </div>
            </article>
          </section>
    </main>
    <?php include '../assets/structure/footer.php' ;?>
    <script>

    const fontCats = ["sans-serif","serif", "calligraphic", "handdrawn", "retro", "comic" ,"blackletter", "autre" ]

    const typos = [
      {
        nom: "2dumb",
        cat:"handdrawn",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "20db",
        cat:"retro",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
    {
      nom: "3dumb",
      cat:"handdrawn",
      format: "ttf",
      graisse: {
        light:"",
        bold: ""
      }
    },
    {
      nom: "acme",
      cat:"sans-serif",
      format: "ttf",
      graisse: {
        light:"",
        bold: ""
      }
    },
    {
      nom: "airstream",
      cat:"retro",
      format: "otf",
      graisse: {
        light:"",
        bold: ""
      }
    },
    {
      nom: "alata",
      cat:"sans-serif",
      format: "ttf",
      graisse: {
        light:"",
        bold: ""
      }
    },
    {
      nom: "alex-brush",
      cat:"calligraphic",
      format: "ttf",
      graisse: {
        light:"",
        bold: ""
      }
    },
    {
      nom: "amatic",
      cat:"handdrawn",
      format: "ttf",
      graisse: {
        light:"",
        bold: ""
      }
    },
    {
      nom: "architects-daughter",
      cat:"handdrawn",
      format: "ttf",
      graisse: {
        light:"",
        bold: ""
      }
    },
      {
        nom: "baloo",
        cat:"sans-serif",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "baskervville",
        cat:"serif",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "blackjack",
        cat:"handdrawn",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "carrington",
        cat:"calligraphic",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "chomsky",
        cat:"blackletter",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "codystar",
        cat:"autre",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "cookie",
        cat:"handdrawn",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "deutsch",
        cat:"blackletter",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "distant-galaxy",
        cat:"retro",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "dymaxionscript",
        cat:"retro",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "eraser",
        cat:"autre",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "germania-one",
        cat:"blackletter",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "green-fuz",
        cat:"autre",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "hetilica",
        cat:"comic",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "impact-label",
        cat:"autre",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "karatula",
        cat:"comic",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "komika-axis",
        cat:"comic",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "komika-display",
        cat:"comic",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "lato",
        cat:"sans-serif",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "leckerli-one",
        cat:"handdrawn",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "modak",
        cat:"autre",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "nimbus",
        cat:"serif",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "overlock",
        cat:"sans-serif",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "playfair-display",
        cat:"serif",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "quicksand",
        cat:"sans-serif",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "redressed",
        cat:"handdrawn",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "scratch",
        cat:"comic",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "seaside",
        cat:"retro",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "sesquipedalian",
        cat:"retro",
        format: "ttf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "sh-pinscher",
        cat:"autre",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      },
      {
        nom: "yellowtail",
        cat:"handdrawn",
        format: "otf",
        graisse: {
          light:"",
          bold: ""
        }
      }

    ]

    let newStyle = document.createElement('style');
    let aside = document.querySelector("aside");
    let article = document.querySelector("article");

    for(var fontCat of fontCats){
        let ul = document.createElement('ul');
        ul.classList.add(fontCat);
        let ulTitle = "<li><h2>"+  fontCat  +"</h2></li>";
        ul.innerHTML=ulTitle;
        aside.appendChild(ul)
    }

    let asideUls = document.querySelectorAll("aside ul");

    for (var typo of typos){
      newStyle.appendChild(document.createTextNode("\
      @font-face {\
        font-family: '" + typo.nom + "';\
        src: url('../assets/fonts/" + typo.nom + "/" + typo.nom + "." + typo.format + "');\
      }\
      "));

      document.head.appendChild(newStyle);

      for(var asideUl of asideUls){
        if(asideUl.classList.contains(typo.cat)){
          let listLiens = "<li><button>"+  typo.nom  +"</button></li>";
          asideUl.innerHTML += listLiens;
        }
      }
    }

    let buttons = document.querySelectorAll("button");

    for (var button of buttons){
      button.addEventListener('click', function(){
        article.querySelector("h3").innerHTML = this.textContent;
        article.style.fontFamily="'"+this.textContent+"'";
        article.querySelector("a.cta").style.display="inline-block";
        article.querySelector("a.cta").href = "../cours/download/typo/"+this.textContent+".zip";

      });
    }
    </script>
      <!-- Liaison au script Bootstap -->
      <script src="assets/bootstrap/js/bootstrap.js" type="text/javascript"></script>
    </body>
  </html>
