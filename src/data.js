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

  }

}

export default window.data;
//cambios*/
