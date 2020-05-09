// estas funciones son de ejemplo


window.data = {

  filterGender: function (arrayDataPotter,gender) {
    const arrFilterData = [];
    for (let i= 0; i<arrayDataPotter.length; i++){
      if (arrayDataPotter[i].gender === gender){
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
    if (rol == 'student') {
      for (let i= 0; i<arrayDataPotter.length; i++){
      if (arrayDataPotter[i].hogwartsStudent === true && arrayDataPotter[i].hogwartsStaff === false){
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

