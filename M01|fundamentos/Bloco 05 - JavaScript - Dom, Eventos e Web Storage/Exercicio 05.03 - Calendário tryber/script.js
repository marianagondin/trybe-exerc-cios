function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//Exercício 01:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulIdDays = document.getElementById('days');
let monthDays = document.getElementsByClassName('day');
function addClassDay () {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let listOfDays = document.createElement('li');
    listOfDays.innerText = dezDaysList[i];
    listOfDays.classList.add('day');
    ulIdDays.appendChild(listOfDays);
  }
  monthDays[25].classList.add('holiday');
  monthDays[26].classList.add('holiday');
  monthDays[32].classList.add('holiday');
  monthDays[5].classList.add('friday');
  monthDays[12].classList.add('friday');
  monthDays[19].classList.add('friday');
  monthDays[26].classList.add('friday');
}

addClassDay();

// Exercício 02:
const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
function buttonForHoliday (feriados) {
  feriados = document.createElement('button');
  feriados.innerText = "Feriados";
  feriados.setAttribute('id','btn-holiday');
  buttonsContainer.appendChild(feriados);
}
buttonForHoliday();

// Exercício 03:
function colorForHolidays() {
  let feriadosButton = document.querySelector('#btn-holiday');
  let listOfHolidays = document.querySelectorAll('.holiday');

  feriadosButton.addEventListener('click', function() {
    for (let i = 0; i < listOfHolidays.length; i += 1) {
      if (listOfHolidays[i].style.backgroundColor === 'green') {
        listOfHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
        listOfHolidays[i].style.color = '#777';
        listOfHolidays[i].style.border = 'none';
      } else {
        listOfHolidays[i].style.backgroundColor = 'green';
        listOfHolidays[i].style.color = 'white';
        listOfHolidays[i].style.border = 'solid', '1px';
        listOfHolidays[i].style.borderColor = 'rgb(238,238,238)';
        listOfHolidays[i].style.borderRadius = '10px';
      }
    }
  })
}
colorForHolidays();

// Exercício 04:
function buttonForFriday (nameit) {
  let fridays = document.createElement('button');
  fridays.setAttribute('id', 'btn-friday');
  fridays.innerHTML = nameit;
  buttonsContainer.appendChild(fridays);
}

buttonForFriday('Sexta-feira');

// Exercício 05:
function changeFridays (nameThem) {
  const fridayButton = document.querySelector('#btn-friday');
  const fridaysClass = document.getElementsByClassName('friday');
  const sextou = 'Sextou 🎉';
  console.log(fridaysClass);
  fridayButton.addEventListener('click', function() {
  for (let i = 0; i < fridaysClass.length; i += 1) {
    if (fridaysClass[i].innerHTML !== sextou) {
      fridaysClass[i].innerHTML = sextou;
    } else {
      fridaysClass[i].innerHTML = nameThem[i];
    }
    }
  })
};
changeFridays([4, 11, 18, 25]);

// Exercício 06:
let novDecDays = document.querySelector('#days')
function mouseOverDays () {
  novDecDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
  });
}

function mouseOutOfDays () {
  novDecDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
}

mouseOverDays();
mouseOutOfDays();

// Exercício 07:
function personalizedTask (taskName) {
  let myTasks = document.querySelector('.my-tasks');
  let eachTask = document.createElement('span');
  eachTask.innerHTML = taskName;
  myTasks.appendChild(eachTask);
}

personalizedTask('Cozinhar');

//Exercício 08:
function legendForTask (colorTask) {
  let myTasks = document.querySelector('.my-tasks');
  let eachTask = document.createElement('div');
  eachTask.setAttribute('class', 'task');
  eachTask.style.backgroundColor = colorTask;
  myTasks.appendChild(eachTask);

}

legendForTask('green');

// Exercício 09:
function selectedTask() {
  let eachTask = document.querySelector('.task');
  
  eachTask.addEventListener('click', function (event) {
    if(eachTask.classList.contains('selected')) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected')
    }
  });
  
}

selectedTask();

// Exercício 10 - Gabarito da Trybe:
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// Exercício Bônus - Gabarito da Trybe:
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();