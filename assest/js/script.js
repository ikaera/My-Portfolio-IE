const projects = [
  {
    id: 'booze-hound',
    techs: ['HTML', 'CSS', 'JS', 'API'],
  },
  {
    id: 'weather-dashboard',
    techs: ['HTML', 'CSS', 'JS', 'API'],
  },
];
const techs = ['HTML', 'CSS', 'JS', 'API', 'Node', 'JQuery'];
const btnContainerEl = document.querySelector('#tech-container');
techs.forEach(tech => {
  const btn = document.createElement('button');
  btn.setAttribute('data-tech', tech);
  btn.textContent = tech;
  btnContainerEl.appendChild(btn);
});

btnContainerEl.addEventListener('click', evt => {
  const btn = evt.target;
  const selectedTech = btn.getAttribute('data-tech');
  console.log(selectedTech);
  const projectsEl = document.querySelectorAll('.app');
  projectsEl.forEach(project => {
    const id = project.getAttribute('id');
    const projectData = projects.find(proj => proj.id === id);
    console.log(projectData);
  });
});

// JQuery US Tooltip - custom styling
$(function () {
  $(document).tooltip({
    position: {
      my: 'center bottom-20',
      at: 'center top',
      using: function (position, feedback) {
        $(this).css(position);
        $('<div>')
          .addClass('arrow')
          .addClass(feedback.vertical)
          .addClass(feedback.horizontal)
          .appendTo(this);
      },
    },
  });
});
