const leaveAnimation = (container) => {
    const card = container.querySelector(".card");
    const cards = [...container.querySelectorAll(".card")];

    const cardPositions = Array.from(cards).map(card => {
        const rect = card.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    });
    console.log(cardPositions);

/*     function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
    };
    const xPosition = getOffset(card).left;
    console.log(xPosition)
    const yPosition = getOffset(card).top;
    console.log(yPosition) */

    const tl = gsap.timeline({
        defaults: {
            ease: "expo.inOut",
            duration: 2,
        }
    });

    tl.to(container, {
        height: "auto",
    })

    return tl;
}

const enterAnimation = (container) => {
    const cardImage = container.querySelector(".card__image");
    const card = container.querySelector(".card");

    const tl = gsap.timeline({
        defaults: {
            ease: "expo.inOut",
            duration: 2,
        }
    });

    tl.to(cardImage, {
        scale: 1,
        objectPosition: "top"
    }, 0).to(card, {
        width: "100%"
    }, 0).to(container, {
        height: "auto"
    }, 0)

    return tl;
}

barba.init({
    transitions: [{
      name: 'basic-transition',
      sync: true,
      from: {
        namespace: [
          'home'
        ]
      },
      to: {
        namespace: [
          'project'
        ]
      },
      leave({current}) {
        return leaveAnimation(current.container);
      },
      enter({next}) {
        return enterAnimation(next.container);
      }
    }]
  });