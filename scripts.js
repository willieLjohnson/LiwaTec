import anime from './js/anime.es.js';

window.onload = (event) => {
  document
    .getElementById('site-avatar')
    .addEventListener('mouseenter', (event) => {
      onAvatarMouseEnter();
    });
  document
    .getElementById('site-avatar')
    .addEventListener('mouseleave', (event) => {
      onAvatarMouseLeave();
    });

  var navBarItems = document.getElementsByClassName('navbar-item');
  [].forEach.call(navBarItems, function (item) {
    item.addEventListener('mouseenter', (event) => {
      onNavBarItemMouseEnter(event.target);
    });
    item.addEventListener('mouseleave', (event) => {
      onNavBarItemMouseLeave(event.target);
    });
  });
};

function onAvatarMouseEnter() {
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

function onAvatarMouseLeave() {
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

function onNavBarItemMouseEnter(target) {
  anime({
    targets: target,
    scale: {
      value: 1.1,
      duration: 50,
      easing: 'easeOutElastic(1, .1)',
    },
    borderRadius: {
      value: 2,
      duration: 50,
    },
  });
}

function onNavBarItemMouseLeave(target) {
  anime({
    targets: target,
    scale: {
      value: 1,
      duration: 50,
      easing: 'easeOutElastic(1, .1)',
    },
    borderRadius: {
      value: 0,
      duration: 50,
    },
  });
}
