import anime from './js/anime.es.js';

window.onload = (event) => {
  document.getElementById('site-avatar').onmouseenter = onAvatarOnHover;
  document.getElementById('site-avatar').onmouseleave = onAvatarOffHover;
};

function onAvatarOnHover() {
  var siteAvatar = document.getElementById('site-avatar');
  if (!siteAvatar.classList.contains('hovering')) {
    siteAvatar.classList.add('hovering');
  }
  anime({
    targets: '.site-avatar',
    rotate: {
      value: 180,
      duration: 750,
      easing: 'spring(1, 80, 10, 0)',
    },
    scale: {
      value: 1.5,
      duration: 800,
      delay: 150,
      easing: 'spring(1, 80, 10, 0)',
    },
    delay: 50,
  });
}

function onAvatarOffHover() {
  var siteAvatar = document.getElementById('site-avatar');

  if (siteAvatar.classList.contains('hovering')) {
    siteAvatar.classList.remove('hovering');
  }

  anime({
    targets: '.site-avatar',
    scale: {
      value: 1,
      duration: 500,
      delay: 150,
      easing: 'spring(1, 80, 10, 0)',
    },
    rotate: {
      value: -360,
      duration: 250,
      easing: 'spring(1, 80, 10, 0)',
    },

    delay: 25,
  });
}
