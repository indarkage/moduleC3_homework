//Task 1
//Функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств

function printObject (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}


//Task 2
//Функция, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем

function checkStrInObj (str, obj) {
  return (str in obj);
}

//Task 3
//Функция, которая создает пустой объект, но без прототипа

function createObjWithoutProto() {
  return Object.create(null);
}