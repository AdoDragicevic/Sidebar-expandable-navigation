(function() {
    
    const nav   = document.querySelector(".nav"),
          arrow = document.querySelector(".nav__header i"),
          mainHeaders = document.querySelector(".main-headers");

    function rotateArrow() {
        const currRotation = arrow.style.transform;
        const deg = currRotation ? parseInt( currRotation.substring( currRotation.indexOf("(") + 1, currRotation.indexOf("deg") ) ) : 0;
        const newDeg = deg + 180;
        arrow.style.transform = `rotate(${newDeg}deg)`;
        mainHeaders.style.opacity = "0.5";
    };

    arrow.addEventListener("click", () => {
        nav.classList.toggle("nav--contract");
        rotateArrow();
    });

})();