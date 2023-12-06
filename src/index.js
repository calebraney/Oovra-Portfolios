import { attr } from './utilities';
import { runSplit } from './utilities';
import SplitType from 'split-type';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);
  gsap.registerPlugin(TextPlugin);

  //////////////////////////////
  //Global Variables
  //Lightbox
  const LIGHTBOX_COMPONENT = '[lightbox-el="component"]';
  const LIGHTBOX_TRIGGER = '[lightbox-el="trigger"]';
  const LIGHTBOX_CLOSE_BTN = '[lightbox-el="close"]';
  const LIGHTBOX_NEXT_BTN = '[lightbox-el="next"]';
  const LIGHTBOX_PREVIOUS_BTN = '[lightbox-el="previous"]';
  const LIGHTBOX_IMAGE = '[lightbox-el="image"]';
  const LIGHTBOX_THUMBNAIL = '[lightbox-el="thumbnail"]';
  const WORKS_ITEM = '[lightbox-el="works-item"]';
  const WORKS_LIST = '[lightbox-el="works-list"]';
  //Password
  const PASSWORD_COMPONENT = '[pass-el="component"]';
  const PASSWORD_INPUT = '[pass-el="input"]';
  const PASSWORD_BUTTON = '[pass-el="button"]';
  const PASSWORD_ERROR = '[pass-el="error"]';
  //GSAP Selectors
  const SCROLL_HEADING = '[gsap-scroll="heading"]';
  const SCROLL_EL = '[gsap-scroll="el"]';
  const SCROLL_LINE = '.line-fill';
  const SCROLL_CONTAINER = '[gsap-scroll="container"]';
  const SCROLL_STAGGER = '[gsap-scroll="stagger"]';
  //General Variables
  const NO_SCROLL = 'no-scroll';
  const body = document.querySelector('body');

  // Functionality

  const password = function () {
    const passComponent = document.querySelector(PASSWORD_COMPONENT);
    const passInput = document.querySelector(PASSWORD_INPUT);
    const passButton = document.querySelector(PASSWORD_BUTTON);
    const passError = document.querySelector(PASSWORD_ERROR);
    let passSet = false;
    let userInput;
    let password;
    if (!passComponent || !passInput || !passButton) return;
    if (!passComponent.classList.contains('w-condition-invisible')) {
      passSet = true;
      body.classList.add(NO_SCROLL);
    }

    if (passSet) {
      password = attr('oovra', passButton.getAttribute('pass'));
      passInput.addEventListener('input', function () {
        userInput = this.value;
        passError.style.display = 'none';

        passInput.addEventListener('change', function () {
          userInput = this.value;
          passError.style.display = 'none';
        });

        passInput.addEventListener('keydown', function (e) {
          if (e.which == 13) {
            checkPassword();
          }
        });
      });

      function checkPassword() {
        if (userInput === password) {
          setTimeout(() => {
            passComponent.style.display = 'none';
            body.classList.remove(NO_SCROLL);
          }, 800);
        } else {
          passError.style.display = 'block';
        }
      }

      passButton.addEventListener('click', function () {
        checkPassword();
      });
    }
  };

  const lightbox = function () {
    const worksList = document.querySelector(WORKS_LIST);
    worksList.addEventListener('click', (e) => {
      let openLightbox = false;
      const processClick = function (e) {
        // Check if the clicked element is an open button
        const worksItem = e.target.closest(WORKS_ITEM);
        // return if the target was not in a work item
        if (!worksItem) return;
        const clickedTrigger = e.target.closest(LIGHTBOX_TRIGGER);
        const clickedClose = e.target.closest(LIGHTBOX_CLOSE_BTN);
        const clickedNext = e.target.closest(LIGHTBOX_NEXT_BTN);
        const clickedPrevious = e.target.closest(LIGHTBOX_PREVIOUS_BTN);
        if (clickedTrigger) {
          console.log('clicked trigger');
          // Find the next dialog sibling and open it
          const lightbox = clickedTrigger.nextElementSibling;
          openModal(lightbox);
          openLightbox = lightbox;
        }
        // Check if the clicked element is a close button inside a dialog
        else if (clickedClose) {
          // Find the closest dialog parent and close it
          const dialog = clickedClose.closest(LIGHTBOX_COMPONENT);
          closeModal(dialog);
          openLightbox = false;
        }
        // Check if the clicked element is a close button inside a dialog
        else if (clickedNext) {
          const currentLightbox = clickedNext.closest(LIGHTBOX_COMPONENT);
          const nextItem = worksItem.nextElementSibling;
          const nextLightbox = nextItem.querySelector(LIGHTBOX_COMPONENT);
          closeModal(currentLightbox);
          openModal(nextLightbox);
          openLightbox = nextLightbox;
        }
        // Check if the clicked element is a close button inside a dialog
        else if (clickedPrevious) {
          const currentLightbox = clickedPrevious.closest(LIGHTBOX_COMPONENT);
          const previousItem = worksItem.previousElementSibling;
          const previousLightbox = previousItem.querySelector(LIGHTBOX_COMPONENT);
          closeModal(currentLightbox);
          openModal(previousLightbox);
          openLightbox = previousLightbox;
        }
      };
      processClick(e);
      window.addEventListener('keydown', (e) => {
        // if (e.defaultPrevented) {
        //   return; // Do nothing if the event was already processed
        // }
        if (e.key == 'Escape') {
          if (openLightbox !== false) {
            closeModal(openLightbox);
            openLightbox = false;
          }
          console.log('Esc key pressed.');
        }
      });
    });

    const openModal = function (modal) {
      if (!modal) return;
      modal.showModal();
      lightboxThumbnails(modal);
      body.classList.add(NO_SCROLL);
    };
    const closeModal = function (modal) {
      if (!modal) return;
      modal.close();
      body.classList.remove(NO_SCROLL);
    };
    const lightboxThumbnails = function (lightbox) {
      const thumbnails = lightbox.querySelectorAll(LIGHTBOX_THUMBNAIL);
      const lightboxImage = lightbox.querySelector(LIGHTBOX_IMAGE);
      thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
          source = thumbnail.src;
          lightboxImage.src = source;
        });
      });
    };
  };

  //////////////////////////////
  //GSAP Animations

  const scrollTL = function (item) {
    // default GSAP options
    const settings = {
      scrub: false,
      toggleActions: 'play none none none',
      start: 'top 90%',
      end: 'top 75%',
    };
    //override settings if an attribute is present and a valid type.
    settings.toggleActions = attr(settings.toggleActions, item.getAttribute('gsap-toggle-actions'));
    settings.scrub = attr(settings.scrub, item.getAttribute('gsap-scrub'));
    settings.start = attr(settings.start, item.getAttribute('gsap-scroll-start'));
    settings.end = attr(settings.end, item.getAttribute('gsap-scroll-end'));
    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: 'power1.out',
      },
      scrollTrigger: {
        trigger: item,
        start: settings.start,
        end: settings.end,
        toggleActions: settings.toggleActions,
        scrub: settings.scrub,
      },
    });
    return tl;
  };

  const scrollHeading = function () {
    const items = gsap.utils.toArray(SCROLL_HEADING);
    items.forEach((item) => {
      const splitText = runSplit(item);
      if (!splitText) return;
      item.style.opacity = 1;
      const tl = scrollTL(item);
      tl.fromTo(
        splitText.words,
        {
          opacity: 0,
          y: '2rem',
        },
        {
          opacity: 1,
          y: '0rem',
          stagger: { each: 0.1, from: 'start' },
        }
      );
    });
  };

  const scrollEl = function () {
    const items = gsap.utils.toArray(SCROLL_EL);
    items.forEach((item) => {
      if (!item) return;
      item.style.opacity = 1;
      const tl = scrollTL(item);
      tl.fromTo(
        item,
        {
          opacity: 0,
          y: '2rem',
        },
        {
          opacity: 1,
          y: '0rem',
        }
      );
    });
  };

  const scrollLine = function () {
    const items = gsap.utils.toArray(SCROLL_LINE);
    items.forEach((item) => {
      if (!item) return;
      item.style.opacity = 1;
      const tl = scrollTL(item);
      tl.fromTo(
        item,
        {
          width: '0%',
        },
        {
          width: '100%',
        }
      );
    });
  };

  const scrollContainer = function () {
    const items = gsap.utils.toArray(SCROLL_CONTAINER);
    items.forEach((item) => {
      if (!item) return;
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const tl = scrollTL(child);
        tl.fromTo(
          child,
          {
            opacity: 0,
            y: '2rem',
          },
          {
            opacity: 1,
            y: '0rem',
          }
        );
      });
    });
  };

  const scrollStagger = function () {
    const items = gsap.utils.toArray(SCROLL_STAGGER);
    items.forEach((item) => {
      const children = gsap.utils.toArray(item.children);
      if (children.length === 0) return;
      const tl = scrollTL(item);
      tl.fromTo(
        children,
        {
          opacity: 0,
          y: '2rem',
        },
        {
          opacity: 1,
          y: '0rem',
          stagger: { each: 0.1, from: 'start' },
        }
      );
    });
  };

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = context.conditions;
        // run animation functions
        password();
        lightbox();
        if (!reduceMotion) {
          scrollHeading();
          scrollEl();
          scrollContainer();
          scrollStagger();
          scrollLine();
        }
      }
    );
  };
  gsapInit();
});
