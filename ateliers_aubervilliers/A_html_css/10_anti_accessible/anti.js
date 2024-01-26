document.addEventListener("DOMContentLoaded", function () {
  const darknessWrapper = document.querySelector("#darkness");
  const removeBtn = document.querySelector("#remove button");
  let systemOn = true;
  const DEFAULT_RADIUS = 60;
  const FOCUS_RADIUS = 120;
  let radius = DEFAULT_RADIUS;
  let lastX = 0;
  let lastY = 0;

  const focusPointer = (focus) => {
    radius = focus ? FOCUS_RADIUS : DEFAULT_RADIUS;
  };

  const getScreenSize = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return [screenWidth, screenHeight];
  };
  const getDarknessSvg = (cx, cy, r) => {
    if (!systemOn) {
      return;
    }
    const [screenWidth, screenHeight] = getScreenSize();
    return `
      <svg viewBox="0 0 ${screenWidth} ${screenHeight}">
        <defs>
          <mask id="stripe">
            <rect x="0" y="0" height="${screenHeight}" width="${screenWidth}" fill="white" />
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="black" />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          height="${screenHeight}"
          width="${screenWidth}"
          fill="black"
          mask="url(#stripe)"
        />
      </svg>
    `;
  };
  const renderDarknessSVG = () => {
    const newSvg = getDarknessSvg(lastX, lastY, radius);
    darknessWrapper.innerHTML = newSvg;
  };
  const handlePointerDown = (event) => {
    if (lastX < 20 && lastY < 20) {
      disableAll();
      return;
    }
    focusPointer(true);
    renderDarknessSVG();
  };
  const handlePointerUp = (event) => {
    focusPointer(false);
    renderDarknessSVG();
  };
  const handlePointerMove = (event) => {
    lastX = event.clientX;
    lastY = event.clientY;
    renderDarknessSVG();
  };
  document.addEventListener("pointerdown", handlePointerDown);
  document.addEventListener("pointerup", handlePointerUp);
  document.addEventListener("pointermove", handlePointerMove);

  const disableAll = () => {
    console.log("disable");
    systemOn = false;
    document.removeEventListener("pointerdown", handlePointerDown);
    document.removeEventListener("pointerup", handlePointerUp);
    document.removeEventListener("pointermove", handlePointerMove);
    darknessWrapper?.remove();
  };
});
