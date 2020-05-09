// estas funciones son de ejemplo


window.data = {

  filterGender: function (arrayDataPotter,gender) {
    const arrFilterData = [];
    for (let i= 0; i<arrayDataPotter.length; i++){
      if (arrayDataPotter[i].gender == gender){
        arrFilterData.push({
          name: arrayDataPotter[i].name,
          image: arrayDataPotter[i].image
        });
      }
    }
    return arrFilterData;

  },

  filterRol: function(arrayDataPotter,rol){
    const arrFilterData = [];
    const tipoStudent;
    const tipoTeacher;
    if (rol == 'student') {
      tipoStudent = true;
      tipoTeacher = false;
    } else if (rol == 'teacher') {
      tipoStudent = false;
      tipoTeacher = true;
    }  else if (rol == 'other') {
      tipoStudent = false;
      tipoTeacher = false;
    }




    if (rol == 'student') {
      for (let i= 0; i<arrayDataPotter.length; i++){
      if (arrayDataPotter[i].hogwartsStudent === tipoStudent && arrayDataPotter[i].hogwartsStaff === tipoTeacher){
           arrFilterData.push({
             name: arrayDataPotter[i].name,
             image: arrayDataPotter[i].image
           });
         }
        }
   } else if (rol == 'teacher') {
    for (let i= 0; i<arrayDataPotter.length; i++){
     if (arrayDataPotter[i].hogwartsStaff === true && arrayDataPotter[i].hogwartsStudent === false){
           arrFilterData.push({
             name: arrayDataPotter[i].name,
             image: arrayDataPotter[i].image
           });
         }
        }
   }  else if (rol == 'other') {
    for (let i= 0; i<arrayDataPotter.length; i++){
    if (arrayDataPotter[i].hogwartsStaff === false && arrayDataPotter[i].hogwartsStudent === false){
      arrFilterData.push({
        name: arrayDataPotter[i].name,
        image: arrayDataPotter[i].image
      });
    }
  }
   }
    return arrFilterData;
  }
}

export default window.data;
//cambios*/

