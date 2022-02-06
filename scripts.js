//NAVBAR

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageXOffset ||
        this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

//TYPED

var typed = new Typed('.typed', {
    strings: ["", "Bienvenue sur mon site CV", "Bonjour, je vais me présenter, je m'appelle Florent Aka Toto, j'ai 27 ans et je suis originaire de Charente-Maritime, j'ai toujours vécu dans ma région et j'aime les paysages qu'elle offre le climat et la nature de celle si je suis actuellement auto - entrepreneur dans le commerce et plus précisément dans la vente sur les marchés je vends des huîtres et divers coquillages.J 'ai la chance d'avoir un travail qui me laisse le temps d'apprendre , j'ai la soif et l'envie de me diversifier et d'acquérir de nouvelles connaissance c 'est pour cela que je me lance dans cette nouvelle aventure.J 'aime apprendre et je suis autodidacte, suite à une très grosse et lourde épreuve de ma vie je souhaite me reconvertir professionnellement et souhaite donc devenir développeur,j'apprend donc via une auto - formation puis une formation un peu plus pousser."],
    typeSpeed: 25,

});