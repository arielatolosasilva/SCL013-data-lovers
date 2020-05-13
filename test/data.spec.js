import data from '../src/data.js';

const input = [{
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    hogwartsStudent: true,
    hogwartsStaff: false,
    image: 'http://hp-api.herokuapp.com/images/luna.jpg',
  },
  {
    name: 'Severus Snape',
    gender: 'male',
    house: 'Slytherin',
    hogwartsStudent: false,
    hogwartsStaff: true,
    image: 'http://hp-api.herokuapp.com/images/snape.jpg',
  },
  {
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    hogwartsStudent: true,
    hogwartsStaff: false,
    image: 'http://hp-api.herokuapp.com/images/cedric.png',
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    hogwartsStudent: true,
    hogwartsStaff: false,
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },
  {
    name: 'Lord Voldemort',
    gender: 'male',
    house: 'Slytherin',
    hogwartsStudent: false,
    hogwartsStaff: false,
    image: 'http://hp-api.herokuapp.com/images/voldemort.jpg',
  },

];


const arrayGenderMale = [{
    name: 'Harry Potter',
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Severus Snape',
    image: 'http://hp-api.herokuapp.com/images/snape.jpg',
  },
  {
    name: 'Cedric Diggory',
    image: 'http://hp-api.herokuapp.com/images/cedric.png',
  },
  {
    name: 'Lord Voldemort',
    image: 'http://hp-api.herokuapp.com/images/voldemort.jpg',
  },
];
const arrayGenderFemale = [{
    name: 'Luna Lovegood',
    image: 'http://hp-api.herokuapp.com/images/luna.jpg',
  },
  {
    name: 'Hermione Granger',
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },
];
const arrayFilterStudent = [{
    name: 'Harry Potter',
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Luna Lovegood',
    image: 'http://hp-api.herokuapp.com/images/luna.jpg',
  },
  {
    name: 'Cedric Diggory',
    image: 'http://hp-api.herokuapp.com/images/cedric.png',
  },
  {
    name: 'Hermione Granger',
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },


];

const arrayFilterTeacher = [{
  name: 'Severus Snape',
  image: 'http://hp-api.herokuapp.com/images/snape.jpg',
}, ];

const arrayFilterOther = [{
  name: 'Lord Voldemort',
  image: 'http://hp-api.herokuapp.com/images/voldemort.jpg',
}, ]
const input2 = [{
    name: 'Harry Potter',
  },
  {
    name: 'Luna Lovegood',
  },
  {
    name: 'Severus Snape',
  },
  {
    name: 'Cedric Diggory',
  },
  {
    name: 'Hermione Granger',

  },
  {
    name: 'Lord Voldemort',
  },

]

const arrayOrderAz = [{
    name: 'Cedric Diggory',
  },
  {
    name: 'Harry Potter',
  },
  {
    name: 'Hermione Granger',
  },
  {
    name: 'Lord Voldemort',
  },
  {
    name: 'Luna Lovegood',
  },
  {
    name: 'Severus Snape',
  },
]

const arrayOrderZa = [{
    name: 'Severus Snape',
  },

  {
    name: 'Luna Lovegood',
  },
  {
    name: 'Lord Voldemort',
  },

  {
    name: 'Hermione Granger',
  },
  {
    name: 'Harry Potter',
  },
  {
    name: 'Cedric Diggory',
  }
]





describe('data', () => {

  test('should be an object', () => {
    expect(typeof data).toBe('object');
  });

  describe('window.data.filterGender', () => {

    test('should be a function', () => {
      expect(typeof window.data.filterGender).toBe('function');
    });
    test('Deberia retornar un array de objetos con la propiedad gender = male', () => {
      expect(window.data.filterGender(input, 'male')).toEqual(arrayGenderMale);

    });
    test('Deberia retornar un array de objetos con la propiedad gender = female', () => {
      expect(window.data.filterGender(input, 'female')).toEqual(arrayGenderFemale);
    });

  });

  describe('window.data.filterRol', () => {

    test('should be a function', () => {
      expect(typeof window.data.filterRol).toBe('function');
    });
    test('Deberia retornar un array de objetos con la propiedad hogwartsStudent: true', () => {
      expect(window.data.filterRol(input, 'student')).toEqual(arrayFilterStudent);

    });
    test('Deberia retornar un array de objetos con la propiedad hogwartsStaff: true', () => {
      expect(window.data.filterRol(input, 'teacher')).toEqual(arrayFilterTeacher);
    });
    test('Deberia retornar un array de objetos con la propiedad hogwartsStaff: false y hogwartsStaff: false', () => {
      expect(window.data.filterRol(input, 'other')).toEqual(arrayFilterOther);
    });
  });

  describe('window.data.filterOrderAsc', () => {

    test('should be a function', () => {
      expect(typeof window.data.filterOrderAsc).toBe('function');
    });
    test('Deberia retornar un array de objetos ordenados de la A a la Z', () => {
      expect(window.data.filterOrderAsc(input2)).toEqual(arrayOrderAz);
    });
  });

  describe('window.data.filterOrderDesc', () => {

    test('should be a function', () => {
      expect(typeof window.data.filterOrderDesc).toBe('function');
    });
    test('Deberia retornar un array de objetos ordenados de la Z a la A', () => {
      expect(window.data.filterOrderDesc(input2)).toEqual(arrayOrderZa);
    });
  });

});
