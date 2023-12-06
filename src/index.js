import { attr } from './utilities';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

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
  //General Variables
  const NO_SCROLL = 'no-scroll';
  const body = document.querySelector('body');

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
    console.log(passSet);

    if (passSet) {
      password = attr('oovra', passButton.getAttribute('pass'));
      console.log('password is ', password);
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
  password();

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
          const nextDialog = clickedTrigger.nextElementSibling;
          openModal(nextDialog);
          openLightbox = nextDialog;
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
      body.classList.add(NO_SCROLL);
    };
    const closeModal = function (modal) {
      if (!modal) return;
      modal.close();
      body.classList.remove(NO_SCROLL);
    };
  };
  lightbox();

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
      }
    );
  };
  gsapInit();
});
