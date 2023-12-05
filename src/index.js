document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

  //////////////////////////////
  //Global Variables
  const LIGHTBOX_COMPONENT = '[lightbox-el="component"]';
  const LIGHTBOX_TRIGGER = '[lightbox-el="trigger"]';
  const LIGHTBOX_CLOSE_BTN = '[lightbox-el="close"]';
  const LIGHTBOX_NEXT_BTN = '[lightbox-el="next"]';
  const LIGHTBOX_PREVIOUS_BTN = '[lightbox-el="previous"]';
  const LIGHTBOX_IMAGE = '[lightbox-el="image"]';
  const LIGHTBOX_THUMBNAIL = '[lightbox-el="thumbnail"]';
  const WORKS_ITEM = '[lightbox-el="works-item"]';
  const WORKS_LIST = '[lightbox-el="works-list"]';
  const NO_SCROLL = 'no-scroll';
  const body = document.querySelector('body');

  const lightbox = function () {
    const worksList = document.querySelector(WORKS_LIST);
    worksList.addEventListener('click', (e) => {
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
        }
        // Check if the clicked element is a close button inside a dialog
        else if (clickedClose) {
          // Find the closest dialog parent and close it
          const dialog = clickedClose.closest(LIGHTBOX_COMPONENT);
          closeModal(dialog);
        }
        // Check if the clicked element is a close button inside a dialog
        else if (clickedNext) {
          const currentLightbox = clickedNext.closest(LIGHTBOX_COMPONENT);
          const nextItem = worksItem.nextElementSibling;
          const nextLightbox = nextItem.querySelector(LIGHTBOX_COMPONENT);
          closeModal(currentLightbox);
          openModal(nextLightbox);
        }
        // Check if the clicked element is a close button inside a dialog
        else if (clickedPrevious) {
          const currentLightbox = clickedPrevious.closest(LIGHTBOX_COMPONENT);
          const previousItem = worksItem.previousElementSibling;
          const previousLightbox = previousItem.querySelector(LIGHTBOX_COMPONENT);
          closeModal(previousLightbox);
          openModal(currentLightbox);
        }
      };
      processClick(e);
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
