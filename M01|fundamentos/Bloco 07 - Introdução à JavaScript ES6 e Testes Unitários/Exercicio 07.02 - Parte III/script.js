const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const nightShift = (key, object, value) => {
      object[key] = value;
  }
  
  nightShift(lesson2, 'turno', 'noite');

  const keyList = (object) => {
      Object.keys(object);
  }

  keyList(lesson3);

  const objectLength = (object) => {
      Object.keys(object).length;
  }

  console.log(objectLength(lesson2));

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

  allLessons();

  const allStudents = (object) => {
      const lessons = Object.keys(object);
      let students = 0;

      for(student in lessons) {
          students += object[lessons[student]].numeroEstudantes;
      }

      return students;
  }
