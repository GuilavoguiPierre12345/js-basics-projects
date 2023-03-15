const citation = [
    {
        c : `"L'enseignement de l'informatique ne peut faire de personne un programmeur expert plus que l'étude des pinceaux et du pigment peut faire de quelqu'un un peintre expert." `,
        a : `Eric S. Raymond`,
    },
    {
        c : `"Je m'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine !"`,
        a : `Inconnu.e`,
    },
    {
        c : `"Marcher sur l'eau et développer un logiciel à partir d'une spécification sont faciles si les deux sont gelés."`,
        a : `Edward V. Berard`,
    },
    {
        c : `"Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez."`,
        a : `Jeff Atwood`,
    },
    {
        c : `“N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre.”`,
        a : `Martin Fowler`,
    },
    {
        c : `"Ajouter des personnes à un projet en retard accroît son retard" - Frederick Brooks`,
        a : `Inconnu.e`,
    },
    {
        c : `"N'importe quel code que vous avez écrit depuis 6 mois ou plus sans y regarder pourrait tout aussi bien avoir été écrit par quelqu'un d'autre" - Frederick Brooks`,
        a : `Alan Eagleson`,
    },
    {
        c : `"Toute technologie suffisamment avancée est indiscernable de la magie." - Frederick Brooks`,
        a : `Arthur C. Clarke`,
    },
    {
        c : `"Il existe deux façons d'écrire des programmes sans erreur; Seul le troisième travaille ."`,
        a : `Alan Kay`,
    },
    {
        c : `"La plupart des logiciels aujourd'hui ressemblent à une pyramide égyptienne avec des millions de briques empilées sur l'autre, sans intégrité structurelle, mais juste effectuées par une force brute et des milliers d'esclaves ."`,
        a : `Alan Perlis`,
    },
    {
        c : `"Quand quelqu'un dit: "Je veux un langage de programmation dans lequel je n'ai besoin que de dire ce que je veux faire", donnez-lui une sucette ."`,
        a : `Alan Perlis`,
    },
    {
        c : `"Je pense qu'il est inévitable que les gens programment mal. La formation ne contribuera pas de manière substantielle. Nous devons apprendre à vivre avec elle ."`,
        a : `Alan Perlis`,
    },
    {
        c : `Cookie : Anciennement petit gâteau sucré, qu'on acceptait avec plaisir. Aujourd'hui : petit fichier informatique drôlement salé, qu'il faut refuser avec véhémence.`,
        a : `Luc Fayard`,
    },
    {
        c : `"Si vous pensez que la technologie peut résoudre vos problèmes de sécurité, vous ne comprenez pas les problèmes et vous ne comprenez pas la technologie ."`,
        a : `Bruce Schneier`,
    },
    {
        c : `"Les mots de passe sont comme des sous-vêtements: vous ne laissez pas les gens le voir, vous devriez le changer très souvent, et vous ne devriez pas la partager avec des étrangers ."`,
        a : `Chris Pirillo`,
    },
    {
        c : `"Si vous dépensez plus sur le café que sur la sécurité informatique, vous serez piraté. De plus, vous méritez d'être piraté ."`,
        a : `Richard A. Clarke`,
    },
    {
        c : `"Les entreprises passent des millions de dollars sur des pare-feu et des appareils d'accès sécurisés, et il est de l'argent gaspillé, car aucune de ces mesures ne concerne le lien le plus faible de la chaîne de sécurité: les personnes qui utilisent, gèrent et utilisent des systèmes informatiques"`,
        a : `Kevin Mitnick`,
    },
];

// les éléments clés
const c_box = document.querySelector('.c_box');
const c = document.getElementById('c');
const c_a = document.getElementById('c_a');

const n_btn = document.querySelector('.n_btn button');
const r_btn = document.querySelector('.r_btn button');
console.log(r_btn.textContent);
const p_btn = document.querySelector('.p_btn button');
const c_number = document.getElementById('c_number');

n_btn.style.display=p_btn.style.display = 'none';
const bcolor = ['#123456','coral','green','red','teal','aliceblue','coral','crimson'];
const color = ['#fff','#fff','#fff','#000','whitesmoke','red','#000','#fff'];
let i =0;
r_btn.onclick = () => {
    r_n = Math.floor(Math.random() * citation.length);
    show_cite();
    window.cite_index = () => {
        return r_n;
    }
    
}


n_btn.onclick = () => {
    r_n = window.cite_index();
    r_n++;
    if(r_n < citation.length)
        show_cite(); 
    else 
        n_btn.style.display = "none";
}
p_btn.onclick = () => {
    r_n = window.cite_index();
    r_n--;
    if(r_n >= 0)
        show_cite();
    else 
        p_btn.style.display = "none";
}

let show_cite = () => {
    c_number.textContent = r_n+1;
    let current_c = citation[r_n];
    c.textContent = current_c.c;
    c_a.textContent = current_c.a;
    ((r_n<citation.length) || (r_n >0)) ? n_btn.style.display=p_btn.style.display="block" :'';
    c_b_c();
}

c_b_c = () => {
    c_box.style.backgroundColor=bcolor[i];
    c_box.style.color=color[i];
    i++;
    (i >= color.length) ? i=0 : '' ;
}