// Project Object Structure
// {
//     image: "",
//     video: "",
//     title: "",
//     links: [
//       { type: "github", url: "" },
//       { type: "external", url: "" },
//     ],
//     technologies: [
//       'ReactJS', 'SCSS', 'Git'
//     ],
//     description: ''
//   }

const projects = [
  {
    image: "./images/Twitch Raid Checker Full.webp",
    video: "./videos/TwitchRaidChecker.mp4",
    title: "Twitch Raid Checker",
    param: "twitch-raid-checker",
    links: [
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/twitch-raid-checker-react",
      },
      { type: "external", url: "https://twitch-raid-checker.netlify.app/" },
    ],
    technologies: ["React", "Authentication", "API", "Git", "Material UI"],
    description: `A react app utilising the <span>Twitch API</span> designed to allow streamers to see which of their followers are currently streaming.<br><br>The user <span>authenticates with the twitch account</span>, the app requests a list of users who follow the logged in user, then requests "stream" data for each user to check which users are currently live, then displays these in a list sorted by most viewers to least viewers. I implemented an <span>OAuth implicit code flow</span> to interact with the Twitch API directly from the React app. The app makes <span>multiple API requests</span>, manipulates the return data before making further requests. Some data is <span>persisted in local storage</span> to reduce the number of API calls on a page reload.<br><br>The React App is <span>hosted on Netlify</span>. I began to implement Netlify functions to include an example screen which makes requests to twitch from a developer account rather than the user's own account. However, I realised some of the functions would take too long to complete to run as a Netlify function on their free tier. I instead implemented similar functionality with a <span>node app deployed on Heroku</span>: <a href="https://github.com/iamsamgibbs/twitch-raid-checker-backend" target="_blank">(View node code here)</a>.<br><br>Using material UI for the interface. It was designed with a minimalist interface in mind to provide just the necessary information for the streamer.`,
  },
  {
    image: "./images/Remix Auth Twitch Full.webp",
    video: "./videos/RemixAuthTwitch.mp4",
    title: "Remix Auth Twitch",
    param: "remix-auth-twitch",
    links: [
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/remix-auth-twitch",
      },
      {
        type: "external",
        url: "https://www.npmjs.com/package/@03gibbss/remix-auth-twitch",
      },
    ],
    technologies: ["TypeScript", "Remix", "React", "Authentication", "Jest"],
    description: `A <span>twitch authentication strategy</span> for use with the <span>remix auth library:</span> <a href="https://github.com/sergiodxa/remix-auth" target="_blank">https://github.com/sergiodxa/remix-auth</a><br><br>I used the <span>remix auth strategy template</span> provided by remix auth as a starting point. The strategy is written in <span>TypeScript</span> and implements the <span>twitch authorization code grant flow</span> to provide user authentication in the remix react framework. After authenticating the user it <span>retrieves profile information from the Twitch API</span> about the logged in user. I've also <span>published the package</span> to npm.<br><br>It utilises jest for testing and includes type checking and linting.`,
  },
  {
    image: "./images/Bingo Stream App Full.webp",
    video: "./videos/BingoStreamApp.mp4",
    title: "Bingo Stream App",
    param: "bingo-stream-app",
    links: [
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/Bingo-Stream-Server",
      },
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/Bingo-Stream-Frontend",
      },
    ],
    technologies: ["React", "Node.js", "Websockets", "Git", "Bootstrap"],
    description: `A stream broadcast tool built with <span>react</span> and <span>node</span> to control software across multiple machines on a local network.<br><br>This was built to help <span>facilitate a series of live broadcasts</span> where we were required to <span>recieve multiple video feeds</span> from up to 12 remote guests. It was proving too taxing to recieve all the feeds on just 1 PC, so instead the load was spread across 3 separate PCs. This app <span>sends commands</span> to each of those PCs to manipulate the video feeds and combine them for the main broadcast.<br><br>The app features a node backend which <span>establishes connections</span> with multiple instances of OBS and vMix broadcast software via websocket connections. It is then able to <span>send commands</span> to show / hide various video feeds - by sending commands to multiple instances at once it is <span>able to seemlessly perform complex video switches.</span> The app also features a React frontend to configure various settings and <span>trigger video switches.</span> There is a websocket connection between the frontend and backend allowing for <span>two way communication</span> to show on the frontend which video feed is currently live for example.<br><br>A recording of one of the live streams on which this app was used can be found here: <a href="https://youtu.be/2gYeabh04m4" target="_blank">https://youtu.be/2gYeabh04m4</a>`,
  },
  {
    image: "./images/Component Library Full.webp",
    video: "./videos/ComponentLibrary.mp4",
    title: "Component Library",
    param: "component-library",
    links: [
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/my-component-library",
      },
      {
        type: "external",
        url: "https://github.com/iamsamgibbs/my-component-library/packages/1326433",
      },
    ],
    technologies: ["React", "TypeScript", "SCSS", "Storybook", "Jest", "Git"],
    description: `A <span>custom react component library</span> written in TypeScript using rollup.<br><br>The library utilises jest for <span>automated component testing</span> and storybook for <span>UI testing</span>. It uses babel and rollup to <span>compile the code</span> to build the pacakage. SCSS is used for <span>styling the components</span> including global files for global styles and typographies.<br><br>The package has been <span>published to github</span> and is available to install via npm.`,
  },
  {
    image: "./images/Music Bee Full.webp",
    video: "./videos/MusicBee.mp4",
    title: "MusicBee Web Interface",
    param: "musicbee-web-interface",
    links: [
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/musicbee-web-interface-backend",
      },
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/MusicBee-web-interface-frontend",
      },
    ],
    technologies: ["React", "Node.js", "Websockets", "Git", "CSS"],
    description: `A web interface to allow <span>remote control of "MusicBee"</span> music player software from another machine on the same network.<br><br>There is a <span>"MusicBee Remote Plugin"</span> which allows remote control of the "MusicBee" software via an iOS or Android app, but it <span>does not provide remote control from another PC</span> - this node app connects to "MusicBee" <span>via the remote plugin</span> and provides a react frontend to control the software.<br><br>The other limitations of the remote plugin is that it <span>does not include functionality to browse the tracks in a playlist</span> or start a playlist from a particular track. This node app includes some <span>logic to go through each playlist</span>, get a list of the tracks and store it as a variable in the app - this allows each playlist to be shown on the frontend with it's full tracklist and <span>extends the original functionality of the plugin.</span><br><br>The node app has a <span>socket connection with both MusicBee and the frontend react app</span> which allows for two way communcation between them. This means when the user pauses the current track on the react app it will <span>update the UI correctly</span>, but also if the track is played in MusicBee itself the react UI will update to reflect this.`,
  },
  {
    image: "./images/Companion Enhanced Full.webp",
    video: "./videos/CompanionEnhanced.mp4",
    title: "Companion Enhanced",
    param: "companion-enhanced",
    links: [
      {
        type: "github",
        url: "https://github.com/iamsamgibbs/companion-enhanced",
      },
    ],
    technologies: ["React", "Node.js", "Git", "Bootstraph"],
    description: `A stream broadcast tool to <span>trigger stream actions from multiple machines</span> on the same network.<br><br>Companion is a piece of software to control multiple broadcast devices and software via a hardware control panel with buttons to trigger commands. The main limitation of the software is that it can only be controlled from the machine it is running on - however it is also possible to <span>trigger these commands via HTTP requests.</span><br><br>This app provides remote control of companion by recieving HTTP requests from other machines on the same network and sending HTTP requests onto the main companion instance. It is designed to work with 4 remote machines (also running companion to send HTTP requests to the app). It features a <span>react frontend which allows for configuration of the app</span> to set which commands are available remotely and the button text for each command. When the app recieves a HTTP request from the one of the remote clients it determines which command to run on the main instance.`,
  },
];

const githubSVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;

const externalSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.822 32.822" role="img"><title>External Link</title><g id="Lager_80" data-name="Lager 80" transform="translate(0 0.822)"><path id="Path_89" data-name="Path 89" d="M24,22v5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h5a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H3A3,3,0,0,0,0,7V29a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V22a2,2,0,0,0-2-2h0A2,2,0,0,0,24,22Z" fill="#161615"/><rect id="Rectangle_40" data-name="Rectangle 40" width="16" height="4" rx="2" transform="translate(16 0)" fill="#161615"/><rect id="Rectangle_41" data-name="Rectangle 41" width="16" height="4" rx="2" transform="translate(32 0) rotate(90)" fill="#161615"/><g id="Group_37" data-name="Group 37"> <rect id="Rectangle_42" data-name="Rectangle 42" width="32.296" height="3.971" rx="1.986" transform="translate(7.178 22.014) rotate(-45)" fill="#161615"/></g></g></svg>`;

// SELECTORS

const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const modal = document.querySelector(".modal");
const socialEmail = document.querySelector(".social-overlay__email");
const socialOverlay = document.querySelector(".social-overlay");

const modalPlay = modal.querySelector(".modal__play");
const modalImageContainer = modal.querySelector(".modal__image");
const modalVideoContainer = modal.querySelector(".modal__video");
const modalImage = modalImageContainer.querySelector("img");
const modalVideo = modalVideoContainer.querySelector("video");
const modalTitle = modal.querySelector(".modal__title");
const modalLinks = modal.querySelector(".modal__links");
const modalTechnologies = modal.querySelector(".modal__technologies");
const modalDescription = modal.querySelector(".modal__description");

const mobileNavOpenBtn = document.querySelector(".navbar__mobile-button--open");
const mobileNavCloseBtn = document.querySelector(
  ".navbar__mobile-button--close"
);
const mobileNavWrapper = document.querySelector(".navbar__mobile-wrapper");

const aboutHexagonContainer = document.querySelector(
  ".about__carousel-container"
);

const aboutHexagonOne = document.querySelector(".about__carousel-hexagon--1");
const aboutHexagonTwo = document.querySelector(".about__carousel-hexagon--2");

const showreel = document.querySelector(".showreel");
const showreelPlay = showreel.querySelector(".showreel__play");
const showreelImageContainer = showreel.querySelector(".showreel__image");
const showreelVideoContainer = showreel.querySelector(".showreel__video");

// UTILITY FUNCTIONS

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

function clamp(num, min = 0, max) {
  return Math.min(Math.max(num, min), max);
}

function scale(num, inMin, inMax, outMin, outMax) {
  const result = ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  if (result < outMin) {
    return outMin;
  } else if (result > outMax) {
    return outMax;
  }

  return result;
}

function reverseNumber(num, min, max) {
  return max + min - num;
}

// NAVBAR CLASS HANDLER
let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  throttle(() => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const socialEmailBottom = socialEmail.getBoundingClientRect().bottom;

    if (window.scrollY !== 0) {
      navbar.classList.add("navbar--not-top");
    } else {
      navbar.classList.remove("navbar--not-top");
    }

    if (lastScrollY < window.scrollY && 1 > heroBottom) {
      navbar.classList.add("navbar--hidden");
    } else {
      navbar.classList.remove("navbar--hidden");
    }

    if (heroBottom < socialEmailBottom) {
      socialOverlay.classList.add("social-overlay--not-top");
    } else {
      socialOverlay.classList.remove("social-overlay--not-top");
    }

    lastScrollY = window.scrollY;
  }, 100)
);

// MOBILE NAV HANDLER
mobileNavOpenBtn.addEventListener("click", () => {
  mobileNavWrapper.classList.add("navbar__mobile-wrapper--visible");
  preventScroll();
});

mobileNavCloseBtn.addEventListener("click", () => {
  mobileNavWrapper.classList.remove("navbar__mobile-wrapper--visible");
  resumeScroll();
});

// HEXAGON ANIMATION HANDLER
const maxDetectionRange = 300;
const maxMovementRange = 20;

window.addEventListener(
  "mousemove",
  throttle((e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const hexagonPosition = aboutHexagonContainer.getBoundingClientRect();

    const left = hexagonPosition.left + window.scrollX;
    const top = hexagonPosition.top + window.scrollY;

    const horizontalMid = left + hexagonPosition.width / 2;
    const verticalMid = top + hexagonPosition.height / 2;

    const diffX = mouseX - horizontalMid;
    const diffY = mouseY - verticalMid;

    const detectX = clamp(diffX, -maxDetectionRange, maxDetectionRange);
    const detectY = clamp(diffY, -maxDetectionRange, maxDetectionRange);

    let moveX = scale(
      detectX,
      -maxDetectionRange,
      maxDetectionRange,
      -maxMovementRange,
      maxMovementRange
    );

    let moveY = scale(
      detectY,
      -maxDetectionRange,
      maxDetectionRange,
      -maxMovementRange,
      maxMovementRange
    );

    aboutHexagonTwo.style.transform = `translate(${moveX}px, ${moveY}px)`;

    moveX = reverseNumber(moveX, -maxMovementRange, maxMovementRange);
    moveY = reverseNumber(moveY, -maxMovementRange, maxMovementRange);

    aboutHexagonOne.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }, 100)
);

// CAROUSEL SLIDES
const slides = document.querySelectorAll(".about__image-container");
const slideLength = 5000;
const transitionLength = 1000;

const styleSlides = (slides, i, duration) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index - i * 100}%)`;
    slide.style.transition = `transform ${duration}ms ease`;
  });
};

const moveSlides = (slides) => {
  styleSlides(slides, 0, 0);
  let i = 1;
  setInterval(() => {
    styleSlides(slides, i, transitionLength);

    if (i === slides.length - 1) {
      setTimeout(() => {
        i = 0;
        styleSlides(slides, i, 0);
        i++;
      }, transitionLength);
    } else {
      i++;
    }
  }, slideLength);
};

moveSlides(slides);

// FORM ERROR VALIDATION
const allRequiredInputs = document.querySelectorAll(".hide-validation");

allRequiredInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    input.classList.remove("hide-validation");
  });
});

// MODAL HANLDER
window.addEventListener("click", ({ target }) => {
  if (target.closest(".projects__tile")) {
    const id = target.closest(".projects__tile").dataset.project;

    openModal(id);
  }

  if (target.closest(".modal__mask")) {
    hideModal();
  }

  if (target.closest(".navbar__mobile-menu-item")) {
    mobileNavWrapper.classList.remove("navbar__mobile-wrapper--visible");
    resumeScroll();
  }

  if (target.closest(".modal__play")) {
    playModalVideo();
  }

  if (target.closest(".modal__close")) {
    hideModal();
  }
});

function openModal(id) {
  updateModal(id);
  modal.classList.add("modal--visible");
  preventScroll();
}

function preventScroll() {
  let scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";
  document.querySelector("body").style.marginRight = scrollbarWidth;
  document.querySelector("body").style.overflow = "hidden";
}

function resumeScroll() {
  document.querySelector("body").style.marginRight = 0;
  document.querySelector("body").style.overflow = "visible";
}

function playModalVideo() {
  modalPlay.classList.add("modal__play--hidden");
  modalImageContainer.classList.add("modal__image--hidden");
  modalVideoContainer.classList.add("modal__video--visible");

  const video = modalVideoContainer.children[0];

  video.play();
}

function hideModalVideo() {
  modalPlay.classList.remove("modal__play--hidden");
  modalImageContainer.classList.remove("modal__image--hidden");
  modalVideoContainer.classList.remove("modal__video--visible");

  const video = modalVideoContainer.children[0];

  video.pause();
}

function hideModal() {
  modal.classList.remove("modal--visible");
  hideModalVideo();
  resumeScroll();
}

function updateModal(id) {
  const project = projects[id];

  modalImage.src = project.image;
  modalVideo.src = project.video;
  modalTitle.innerText = project.title;

  modalLinks.innerHTML = null;

  project.links.forEach((link) => {
    const li = document.createElement("li");
    li.classList.add("modal__link");
    li.setAttribute("role", "listitem");

    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";

    switch (link.type) {
      case "github":
        a.innerHTML = githubSVG;
        break;
      case "external":
      default:
        a.innerHTML = externalSVG;
    }

    li.appendChild(a);

    modalLinks.append(li);
  });

  modalTechnologies.innerHTML = null;

  project.technologies.forEach((technology) => {
    const li = document.createElement("li");
    li.classList.add("modal__technology");
    li.setAttribute("role", "listitem");
    li.innerText = technology;

    modalTechnologies.append(li);
  });

  modalDescription.innerHTML = project.description;
}

// URL HANDLER
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let projectId = projects.findIndex((el) => {
  return el.param === params.project;
});

if (projectId !== -1) {
  openModal(projectId);
}

//SHOWREEL VIDEO
window.addEventListener("click", ({ target }) => {
  if (target.closest(".showreel__play")) {
    playShowreelVideo();
  }
});

function playShowreelVideo() {
  showreelPlay.classList.add("showreel__play--hidden");
  showreelImageContainer.classList.add("showreel__image--hidden");
  showreelVideoContainer.classList.add("showreel__video--visible");

  const video = showreelVideoContainer.children[0];

  video.play();
}
