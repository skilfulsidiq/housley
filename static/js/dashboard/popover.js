var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
}); 
  var slider = document.getElementById('slider');
var output = document.getElementById('output');
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
  const range = document.getElementById('range'),
    tooltip = document.getElementById('tooltip'),
    setValue = () => {
      const newValue = Number(
          ((range.value - range.min) * 100) / (range.max - range.min)
        ),
        newPosition = 16 - newValue * 0.32;
      tooltip.innerHTML = `<span>${range.value}%</span>`;
      tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
      document.documentElement.style.setProperty(
        '--range-progress',
        `calc(${newValue}% + (${newPosition}px))`
      );
    };
document.addEventListener('DOMContentLoaded', setValue);
range.addEventListener('input', setValue);
  var popover = new bootstrap.Popover(
    document.querySelector('.popover-dismiss'), {
      trigger: 'focus',
    }
  );
