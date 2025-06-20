export const fadeIn = (target, duration = 200) => {
    target.style.transitionProperty = 'opacity';
    target.style.transitionDuration = `${duration}ms`;
    target.style.opacity = 0;
    target.style.display = 'none';
    target.offsetHeight; // Trigger reflow
    target.style.opacity = 1;

    window.setTimeout(() => {
        target.style.display = 'block';
    }, duration);
};

export const fadeOut = (target, duration = 200) => {
    target.style.transitionProperty = 'opacity';
    target.style.transitionDuration = `${duration}ms`;
    target.style.opacity = 0;

    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('opacity');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

export const slideUp = (target, duration = 400) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

export const slideDown = (target, duration = 600) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}