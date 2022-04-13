var levels = [
  {
    helpTitle : "Sélectionnez les éléments par leur type",
    selectorName : "Sélecteur des types",
    doThis : "Sélectionnez les assiettes",
    selector : "assiette",
    syntax : "A",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type d'un éléments, c'est le type de balise. Ainsi, <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> sont tous des éléments de types différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <assiette/>
    <assiette/>
    `
  },
  {
    doThis : "Sélectionnez les Bentos",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionnez les éléments par leur type",
    selectorName : "Sélecteur des types",
    help : "Sélectionne tous les éléments de type <strong>A</strong>. Le type d'un éléments, c'est le type de balise. Ainsi, <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> sont tous des éléments de types différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <assiette/>
    <bento/>
    `
  },
  {
    doThis : "Sélectionnez les belles assiettes",
    selector : "#belle",
    selectorName: "Sélection par l'ID",
    helpTitle: "Sélectionnez des éléments par un ID",
    syntax: "#id",
    help : "Sélectionne l'élément avec un <strong>id</strong> spécifique. Il est aussi possible de combiner le sélecteur ID avec le sélecteur de type.",
    examples : [
      '<strong>#cool</strong> sélectionne tout élément <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <assiette id="belle"/>
    <assiette/>
    <bento/>
    `
  },
  {
    helpTitle: "Sélectionnez un élément à l'intérieur d'un autre",
    selectorName : "Sélecteur du descendant",
    doThis : "Sélectionnez la pomme sur l'assiette",
    selector : "assiette pomme",
    syntax: "A&nbsp;&nbsp;B",
    help : "Sélectionne tous les éléments <strong>B</strong> à l'intérieur d'un élément <strong>A</strong>. On dit que <strong>B</strong> descend de <strong>A</strong>.",
    examples : [
      "<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les éléments <tag>strong</tag> qui sont à l'intérieur d'un <tag>p</tag>",
      '<strong>#belle&nbsp;&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont dans un élément avec <strong>id="belle"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <assiette>
      <pomme/>
    </assiette>
    <pomme/>
    `
  },
  {
    doThis : "Sélectionnez le cornichon sur la belle assiette",
    selector : "#belle cornichon",
    helpTitle: "Combinaison des sélecteurs de descendant et d'ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : "Vous pouvez combiner n'importe quel sélecteur avec le sélecteur de descendant.",
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont dans un élément avec <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <assiette id="belle">
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    `
  },
  {
    doThis : "Sélectionnez les petites pommes",
    selector : ".petit",
    selectorName: "Sélecteur de Classe",
    helpTitle: "Sélectionne des éléments par leur classe",
    syntax: ".classname",
    help : "Le sélecteur de classe sélectionne tous les éléments avec l'attribut class indiqué. Un élément ne peut avoir qu'un seul ID, mais peut avoir plusieurs classes.",
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <pomme/>
    <pomme class="petit"/>
    <assiette>
      <pomme class="petit"/>
    </assiette>
    <assiette/>
    `
  },
  {
    doThis : "Séléctionnez les petites oranges",
    selector : "orange.petit",
    helpTitle: "Combinaison de sélecteur de Classe",
    syntax: "A.className",
    help : "Vous pouvez combinez le sélecteur de classe avec n'importe quel autre sélecteur, comme le sélecteur de type par exemple.",
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec <strong>id="big"</strong> qui ont aussi <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <pomme/>
    <pomme class="petit"/>
    <bento>
      <orange class="petit"/>
    </bento>
    <assiette>
      <orange/>
    </assiette>
    <assiette>
      <orange class="petit"/>
    </assiette>`
  },
  {
    doThis : "Sélectionnez les petites oranges dans les bentos",
    selector : "bento orange.petit",
    syntax: "Allez!",
    helpTitle: "Vous pouvez y arriver!!",
    help : 'Utilisez ce que vous avez appris des niveaux précédents pour résoudre ce niveau!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="petit"/>
    <bento>
      <orange class="petit"/>
    </bento>
    <bento>
      <pomme class="petit"/>
    </bento>
    <bento>
      <orange class="petit"/>
    </bento>
    `
  },
  {
    doThis : "Sélectionnez toutes les assiettes et les bentos",
    selector : "assiette,bento",
    selectorName : "Groupe de sélecteurs",
    helpTitle: "Groupez les sélecteurs avec des... virgules!",
    syntax : "A, B",
    help : 'Grace à la technologie Shatner, cela sélectionne tous les éléments <strong>A</strong> et <strong>B</strong>. Vous pouvez grouper tous les sélecteurs de cette façon, et vous pouvez en grouper plus que deux.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> et tous les éléments avec <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    boardMarkup : `
    <cornichon class="petit"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <bento>
      <cornichon/>
    </bento>
    <assiette>
      <cornichon/>
    </assiette>
    <cornichon/>
    <cornichon class="petit"/>
    `
  },
  {
    doThis : "Sélectionnez tous les objets!",
    selector : "*",
    selectorName:  "Le Sélecteur Universel",
    helpTitle: "Vous pouvez tout sélectionner!",
    syntax : "*",
    help : 'Avec le sélectionneur universel, vous pouvez sélectionner tous les éléments! ',
    examples : [
      "<strong>p *</strong> sélectionne tous les éléments à l'intérieur des éléments <tag>p</tag>.",
    ],
    boardMarkup : `
    <pomme/>
    <assiette>
      <orange class="petit" />
    </assiette>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <assiette id="belle"/>
    `
  },
  {
    doThis : "Sélectionnez tout les objets sur une assiette",
    selector : "assiette *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combinez le Sélecteur Universel",
    help : "Cela sélectionne tous les éléments à l'intérieur de <strong>A</strong>.",
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments dans chaque élément <tag>p</tag>.',
      '<strong>ul.belle *</strong> sélectionne tous les éléments dans chaque élément <tag>ul class="belle"</tag>.'
    ],
    boardMarkup: `
    <assiette id="belle">
      <orange class="petit"/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    <pomme class="petit"/>
    <assiette>
      <pomme/>
    </assiette>`
  },
  {
    doThis : "Sélectionnez toutes les pommes qui sont à côté d'une assiette",
    selector : "assiette + pomme",
    helpTitle: "Sélectionne un élément qui suit directement un autre élément",
    selectorName: "Sélecteur de Voisin Direct",
    syntax : "A + B",
    help : "Cela sélectionne tous les éléments <strong>B</strong> qui suivent directement <strong>A</strong>. Les éléments qui suivent directement un autre éléments sont appelés voisins (siblings en anglais). Ils sont au même niveau, à la même profondeur. <br/><br/>Pour ce niveau, dans la façon d'écrire le HTML, les éléments qui ont la même indentation sont des voisins.",
    examples : [
      '<strong>p + .intro</strong> sélectionne tous les éléments avec <strong>class="intro"</strong> qui suivent directement un élément <tag>p</tag>',
      '<strong>div + a</strong> sélectionne tous les éléments <tag>a</tag> qui suivent directement un élément <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <pomme class="petit"/>
    </bento>
    <assiette />
    <pomme class="petit"/>
    <assiette />
    <pomme/>
    <pomme class="petit"/>
    <pomme class="petit"/>
    `
  },
  {
    selectorName: "Sélecteur de Voisins",
    helpTitle: "Sélectionne les éléments qui suivent un autre élément",
    syntax: "A ~ B",
    doThis : "Sélectionnez les cornichons après le bento",
    selector : "bento ~ cornichon",
    help : "Vous pouvez sélectionner tous les voisins qui suivent un élément. C'est pareil que le Sélecteur de Voisin Direct (A + B) sauf qu'il sélectionne tous les éléments suivant, pas juste un seul.",
    examples : [
      '<strong>A ~ B</strong> sélectionne tous les éléments <strong>B</strong> qui suivent un élément <strong>A</strong>'
    ],
    boardMarkup : `
    <cornichon/>
    <bento>
      <orange class="petit"/>
    </bento>
    <cornichon class="petit"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon class="petit"/>
    </assiette>
    `
  },
  {
    selectorName: "Sélecteur d'élément fils",
    syntax: "A > B&nbsp;",
    doThis : "Sélectionnez la pomme directement sur une assiette",
    selector : "assiette > pomme",
    helpTitle: "Sélectionne les enfants directs d'un élément",
    help : "Vous pouvez sélectionner tous les éléments qui sont les enfants directs d'un autre élément. Un élément enfant est n'importe quel élément qui est directement à l'intérieur d'un autre élément. <br><br>Les éléments qui sont plus profondément à l'intérieur sont appelés éléments descendants.",
    examples : [
      "<strong>A > B</strong> sélectionne tous les éléments <strong>B</strong> qui sont des enfants directs d'un élément <strong>A</strong>"
    ],
    boardMarkup: `
    <assiette>
      <bento>
        <pomme/>
      </bento>
    </assiette>
    <assiette>
      <pomme/>
    </assiette>
    <assiette/>
    <pomme/>
    <pomme class="petit"/>
    `
  },
  {
    selectorName: "Le Pseudo-Sélecteur First Child",
    helpTitle: "Sélectionne le premier enfant d'un autre élément",
    doThis : "Sélectionnez l'orange en haut",
    selector : "assiette :first-child",
    syntax: ":first-child",

    help : "Vous pouvez sélectionner le premier enfant d'un élément. Un élément enfant est n'importe quel élément qui est directement à l'intérieur d'un autre élément. Vous pouvez combiner ce pseudo-sélecteurs avec d'autres sélecteurs.",
    examples : [
      "<strong>:first-child</strong> sélectionne tous les premiers enfants d'éléments.",
      "<strong>p:first-child</strong> sélectionne tous les premiers enfants d'éléments <tag>p</tag>.",
      "<strong>div p:first-child</strong> sélectionne tous les premiers enfants des éléments <tag>p</tag> qui sont dans un élément <tag>div</tag>."
    ],
    boardMarkup :`
    <bento/>
    <assiette />
    <assiette>
      <orange />
      <orange />
      <orange />
    </assiette>
    <cornichon class="petit" />
    `
  },
  {
    selectorName: "Le Pseudo-sélecteur Only Child",
    helpTitle: "Sélectionne un élément s'il est le seul élément à l'intérieur d'un autre.",
    doThis : "Sélectionnez la pomme et le cornichon sur les assiettes",
    selector : "assiette :only-child",
    syntax: ":only-child",
    help : "Vous pouvez sélectionner tout élément qui sont les seuls éléments à l'intérieur d'un autre.",
    examples : [
      "<strong>span:only-child</strong> sélectionne les éléments <tag>span</tag> qui sont les seuls enfants d'un autre élément.",
      "<strong>ul li:only-child</strong> sélectionne l'élément <tag>li</tag> qui est seul dans un <tag>ul</tag>."
    ],
    boardMarkup : `
    <assiette>
      <pomme/>
    </assiette>
    <assiette>
      <cornichon />
    </assiette>
    <bento>
      <cornichon />
    </bento>
    <assiette>
      <orange class="petit"/>
      <orange/>
    </assiette>
    <cornichon class="petit"/>
    `
  },
  {
    selectorName: "Le Pseudo-selecteur Last Child",
    helpTitle: "Sélectionne le dernier élément à l'intérieur d'un autre élément",
    doThis : "Sélectionnez la petite pomme et le cornichon",
    selector : ".petit:last-child",
    syntax: ":last-child",
    help : "Vous pouvez utiliser ce sélecteur pour sélectionner un élément qui est le dernier enfant d'un autre élément. <br><br>Astuce de pro &rarr; Dans le cas où il n'y a qu'un élément enfant, cet élément est considéré comme first-child, only-child et last-child!",
    examples : [
      '<strong>:last-child</strong> sélectionne tous les éléments qui sont des derniers enfants.',
      '<strong>span:last-child</strong> sélectionne tous les derniers enfants de type span.',
      '<strong>ul li:last-child</strong> sélectionne le dernier élément <tag>li</tag> dans chaque <tag>ul</tag>.'
    ],
    boardMarkup : `
    <assiette id="belle">
      <pomme class="petit"/>
    </assiette>
    <assiette/>
    <assiette>
      <orange class="petit"/>
      <orange>
    </assiette>
    <cornichon class="petit"/>`
  },
  {
    selectorName: "Le Pseudo-selecteur Nth Child",
    helpTitle: "Sélectionne un élément selon l'ordre des enfants d'un autre élément.",
    doThis : "Sélectionnez la 3ème assiette",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Sélectionne le <strong>ième</strong> enfant (Ex: 1er, 3ème, 12ème etc.) d'un autre élément.",
    examples : [
      '<strong>:nth-child(8)</strong> sélectionne tous les éléments qui sont à la 8ème place dans un autre élément.',
      '<strong>div p:nth-child(2)</strong> sélectionne le deuxième <strong>p</strong> dans chaque <strong>div</strong>',
    ],
    boardMarkup : `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette id="belle"/>
    `
  },
  {
    selectorName: "Le Sélecteur Nth Last Child",
    helpTitle: "Sélectionne un élément selon l'ordre des enfants dans un autre élément, en comptant de la fin.",
    doThis : "Sélectionnez le premier bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Sélectionne les enfants en partant de la fin du parent. C'est pareil que le sélecteur nth-child, mais en comptant depuis la fin!",
    examples : [
      '<strong>:nth-last-child(2)</strong> sélectionne tous les éléments qui sont avant-avant-dernier enfant dans le parent.'
    ],
    boardMarkup: `
    <assiette/>
    <bento/>
    <assiette>
      <orange/>
      <orange/>
      <orange/>
    </assiette>
    <bento/>
    `
  },
  {
    selectorName: "Le Sélecteur First of Type",
    helpTitle: "Sélectionne le premier élément du type spécifié",
    doThis : "Sélectionnez la première pomme",
    selector : "pomme:first-of-type",
    syntax: ":first-of-type",
    help : "Sélectionne le premier élément d'un certain type dans un autre élément.",
    examples : [
      "<strong>span:first-of-type</strong> sélectionne le premier élément <tag>span</tag> dans n'importe quel autre élément."
    ],
    boardMarkup: `
    <orange class="petit"/>
    <pomme/>
    <pomme class="petit"/>
    <pomme/>
    <pomme class="petit"/>
    <assiette>
      <orange class="petit"/>
      <orange/>
    </assiette>
    `
  },
  {
    selectorName: "Le sélecteur Nth of Type",
    doThis: "Sélectionnez toutes les assiettes paires",
    selector: "assiette:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Sélectionne un élément spécifique selon son type et son ordre à l'intérieur d'un autre élément - ou les éléments paires (even en anglais) ou impaires (odd en anglais).",
    examples: [
      '<strong>div:nth-of-type(2)</strong> sélectionne le deuxième div.',
      '<strong>.exemple:nth-of-type(odd)</strong> sélectionne les éléments impaires avec la classe exemple.'
    ],
    boardMarkup : `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette id="belle"/>
    <assiette/>
    `
  },
  {
    selectorName: "Le Sélecteur Nth-of-type avec une formule",
    doThis: "Sélectionnez une assiette sur deux à partir de la 3ème",
    selector: "assiette:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "La formule nth-of-type sélectionne tous les nth élément, en commançant à compter à partir d'un certain nombre de cet élément.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> sélectionne un élément <tag>span</tag> sur 6, à partir (et incluant) le 2ème <tag>span</tag.'
    ],
    boardMarkup : `
    <assiette/>
    <assiette>
      <cornichon class="petit" />
    </assiette>
    <assiette>
      <pomme class="petit" />
    </assiette>
    <assiette/>
    <assiette>
      <pomme />
    </assiette>
    <assiette/>
    `
  },
  {
    selectorName: "Le Sélecteur Only of Type",
    helpTitle: "Sélectionne les éléments qui sont les seuls de leur type dans un élément parent",
    selector : "pomme:only-of-type",
    syntax: ":only-of-type",
    doThis : "Sélectionnez la pomme dans l'assiette du milieu",
    help : "Sélectionne le seul élément de ce type dans un autre élément.",
    examples : [
      "<strong>p span:only-of-type</strong> sélectionne un élément <tag>span</tag> dans tout élément <tag>p</tag> si c'est le seul <tag>span</tag> dans le <tag>p</tag>."
    ],
    boardMarkup: `
    <assiette id="belle">
      <pomme class="petit" />
      <pomme />
    </assiette>
    <assiette>
      <pomme class="petit" />
    </assiette>
    <assiette>
      <cornichon />
    </assiette>
    `
  },
  {
    selectorName: "Le Sélecteur Last of Type",
    helpTitle: "Sélectionne le dernier élément du type spécifié",
    doThis : "Sélectionnez la dernière pomme et la dernière orange",
    selector : ".petit:last-of-type",
    syntax: ":last-of-type",
    help : "Sélectionne chaque dernier élément d'un type dans un autre élément. Pour rappel, le type est la sorte de balise, donc <tag>p</tag> et <tag>span</tag> sont deux types différents.",
    examples : [
      '<strong>div:last-of-type</strong> sélectionne le dernier élément <tag>div</tag> dans chaque élément.',
      '<strong>p span:last-of-type</strong> sélectionne le dernier élément <tag>span</tag> dans tous les <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="petit"/>
    <orange class="petit" />
    <cornichon />
    <cornichon />
    <pomme class="petit" />
    <pomme class="petit" />
    `
  },
  {
    selectorName: "Le Sélecteur Empty",
    helpTitle: "Sélectionne les éléments qui n'ont aucune descendance",
    doThis : "Sélectionnez les bentos vides",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Sélectionne les éléments qui n'ont aucun autre élément à l'intérieur d'eux.",
    examples : [
      '<strong>div:empty</strong> sélectionne tous les éléments <tag>div</tag> qui sont vides.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <cornichon class="petit"/>
    </bento>
    <assiette/>
    <bento/>`
  },
  {
    selectorName: "La Pseudo-class négative",
    helpTitle: "Sélectionne tous les éléments qui ne correspondent pas au sélecteur négatif",
    doThis : "Sélectionnez les grandes pommes",
    selector : "pomme:not(.petit)",
    syntax: ":not(X)",
    help : 'Vous pouvez utiliser ce sélecteur pour sélectionner tous les éléments qui ne correspondent pas au sélecteur <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#belle)</strong> sélectionne tous les éléments sans attribut <strong>id="belle"</strong>.',
      '<strong>div:not(:first-child)</strong> sélectionne tous les éléments <tag>div</tag> qui ne sont pas un premier enfant.',
      '<strong>:not(.big, .medium)</strong> sélectionne tous les éléments sans attribut <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <assiette id="belle">
      <pomme class="petit" />
    </assiette>
    <assiette>
      <pomme />
    </assiette>
    <pomme />
    <assiette>
      <orange class="petit" />
    </assiette>
    <cornichon class="petit" />
    `
  },
  {
    selectorName: "Le Sélecteur Attribut",
    helpTitle: "Sélectionne tous les éléments qui ont un attribut spécifique",
    doThis : "Sélectionnez tous les éléments qui sont pour quelqu'un",
    selector : "[pour]",
    syntax: "[attribute]",
    help : "Les attributs se trouvent dans la balise ouvrante d'un élément, comme ceci: <tag>span attribute='value'</tag>. Un attribut n'a pas toujours de valeur, il peut être laissé vide!",
    examples : [
      "<strong>a[href]</strong> sélectionne tous les élément <tag>a</tag> dont l'attribut <strong>href</strong> est renseigné.",
      "<strong>[type]</strong> sélectionne tous les éléments dont l'attribut <strong>type</strong> est renseigné."
    ],
    boardMarkup:`
    <bento><pomme class="petit"/></bento>
    <pomme pour="Ethan"/>
    <assiette pour="Alice"><cornichon/></assiette>
    <bento pour="Clara"><orange/></bento>
    <cornichon/>`
  },
  {
    selectorName: "Le Sélecteur Attribut",
    helpTitle: "Sélectionne tous les éléments qui ont un attribut spécifique",
    doThis : "Sélectionnez les assiettes qui sont pour quelqu'un",
    selector : "assiette[pour]",
    syntax: "A[attribute]",
    help : "Combinez le sélecteur attribut avec n'importe quel sélecteur (par exemple le sélecteur de type) en l'ajoutant à la fin.",
    examples : [
      "<strong>[value]</strong> sélectionne tous les éléments qui ont l'attribut <strong>value</strong> renseigné.",
      "<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> qui ont l'attribut <strong>href</strong> renseigné.",
      "<strong>input[disabled]</strong> sélectionne tous les éléments <tag>input</tag> qui ont l'attribut <strong>disabled</strong> "
    ],
    boardMarkup:`
    <assiette pour="Sarah"><cornichon/></assiette>
    <assiette pour="Luke"><pomme/></assiette>
    <assiette/>
    <bento pour="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Le Sélecteur Attribut avec Valeur",
    helpTitle: "Sélectionne tous les éléments qui ont un attribut spécifique renseigné avec une valeur spécifique",
    doThis : "Sélectionnez le repas de Jacques",
    selector : "[pour=Jacques]",
    syntax: '[attribute="value"]',
    help : "Les sélecteurs attributs sont 'case sensitive', c'est à dire qu'ils sont sensibles aux majuscules et minuscules. Tous les caractères doivent correspondre exactement.",
    examples : [
      '<strong>input[type="checkbox"]</strong> sélectionne tous les élément input de type checkbox.'
    ],
    boardMarkup:`
    <pomme pour="Pierre" />
    <bento pour="Paul"><pomme /></bento>
    <bento pour="Jacques"><orange/></bento>
    <cornichon/>
    `
  },
  {
    selectorName: "Le Sélecteur Début d'Attribut",
    helpTitle: "Sélectionne tous les éléments qui ont un attribut dont la valeur commence par des caractères spécifiques",
    doThis : "Sélectionnez les objets qui sont pour quelqu'un dont le nom commence par 'Sa'",
    selector : '[pour^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.jeu[categorie^="Ad"]</strong> sélectionne les éléments avec la classe <strong>jeu</strong> et soit <strong>category="Adulte"</strong> ou <strong>category="Adolescent"</strong>.'
    ],
    boardMarkup: `
    <assiette pour="Sam"><cornichon/></assiette>
    <bento pour="Sarah"><pomme class="petit"/></bento>
    <bento pour="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Le Sélecteur Fin d'Attribut",
    helpTitle: "Sélectionne tous les éléments qui ont un attribut dont la valeur fini par des caractères spécifiques",
    doThis : "Sélectionnez les objets qui sont pour quelqu'un dont le nom finit par 'ato'",
    selector : '[pour$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> sélectionne toutes les images qui sont des images <strong>.jpg</strong>.',
    ],
    boardMarkup:`
    <pomme class="petit"/>
    <bento pour="Hayato"><cornichon/></bento>
    <pomme pour="Ryota"></pomme>
    <assiette pour="Minato"><orange/></assiette>
    <cornichon class="petit"/>
    `
  },
  {
    selectorName: "Le Sélecteur Attribut Wildcard",
    helpTitle: "Sélectionne tous les éléments qui ont un attribut dont la valeur contient des caractères spécifiques à n'importe quel endroit",
    syntax: '[attribute*="value"]',
    doThis : "Sélectionnez les repas qui sont pour quelqu'un dont le nom contient 'obb'",
    selector : '[pour*="obb"]',
    help : 'Un sélecteur très pratique si vous identifiez un schéma commun dans les attributs comme <strong>class</strong>, <strong>href</strong> ou <strong>src</strong>.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> sélectionne toutes les images qui viennent du dossier "thumbnails".',
      '<strong>[class*="heading"]</strong> sélectionne tous les élément avec "heading" dans leur classe, comme <strong>class="main-heading"</strong> et <strong>class="sub-heading"</strong> par exemple.'
    ],
    boardMarkup:`
    <bento pour="Robbie"><pomme /></bento>
    <bento pour="Timmy"><cornichon /></bento>
    <bento pour="Bobby"><orange /></bento>
    `
  }
];
