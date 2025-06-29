//window.addEventListener('mousemove', e => console.log('Mouse Move', e));
window.addEventListener('mouseenter', e => console.log('Mouse Enter', e));
window.addEventListener('mouseleave', e => console.log('Mouse Leave', e));
window.addEventListener('mousedown', e => console.log('Mouse Down', e));
window.addEventListener('mouseup', e => console.log('Mouse Up', e));
window.addEventListener('wheel', e => console.log('Mouse Wheel Scroll', e));

window.addEventListener('keypress', e => console.log('Key Pressed', e.key));
window.addEventListener('keyup', e => console.log('Key Up', e.key));

window.addEventListener('touchstart', e => console.log('Touch Start', e));
window.addEventListener('touchend', e => console.log('Touch End', e));
window.addEventListener('touchmove', e => console.log('Touch Move', e));

window.addEventListener('touchstart', e => console.log('Touch Start', e));
window.addEventListener('touchend', e => console.log('Touch End', e));
window.addEventListener('touchmove', e => console.log('Touch Move', e));

window.addEventListener('scroll', () => console.log('Scroll event'));
window.addEventListener('resize', () => console.log('Window resized'));
document.addEventListener('visibilitychange', () => {
  console.log(document.hidden ? 'Tab hidden' : 'Tab visible');
});

window.addEventListener('focus', () => console.log('Window focused'));
window.addEventListener('blur', () => console.log('Window blurred'));

window.addEventListener('contextmenu', e => {
  //e.preventDefault();
  console.log('Right Click (Context Menu)');
});

window.addEventListener('copy', () => console.log('Text copied'));
window.addEventListener('paste', () => console.log('Text pasted'));

window.addEventListener('beforeunload', () => console.log('About to leave the page'));

document.addEventListener('selectionchange', () => {
  console.log('Text selection changed');
});
