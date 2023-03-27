//Using typed.js to create typewriter effect

const retype1 = new Typed('#retype1', {
    strings: ['hello', 'researchers^2000', 'businesses^2000', 'clients'],
    typeSpeed: 50,
    startDelay: 2000,
    backSpeed: 0,
});

const retype2 = new Typed('#retype2', {
    strings: ['students', 'thinkers^2000', 'innovators^2000', 'developers'],
    typeSpeed: 50,
    startDelay: 2000,
    backSpeed: 0,
});

const retype3 = new Typed('#retype3', {
    strings: ['tools', 'results^2000', 'solutions^2000', 'the future'],
    typeSpeed: 50,
    startDelay: 2000,
    backSpeed: 0,
});

setTimeout(() => {
    $("#retype3").addClass("underlineThickR");
}, 10600);
