// exercio trybe gabarito
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    const customerInfo = (fullOrder) => {
        const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
        const costumerName = fullOrder.name;
        const phoneNumber = fullOrder.phoneNumber;
        const street = fullOrder.address.street;
        const addressNumber = fullOrder.address.number;
        const apartment = fullOrder.address.apartment;
      
        return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP: ${apartment}.`;
      }
      
      console.log(customerInfo(order));}
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    const orderModifier = (fullOrder) => {
        // Altera o nome
        fullOrder.name = 'Luiz Silva';
        fullOrder.payment.total = 50;
      
        // Pega todos os nomes de pizzas em um array e junto os valores com uma vírgula mais um espaço. join(', ')
        const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
      
        // Retorna a string com o resultado
        return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
      }
      
      console.log(orderModifier(order));}
  
  console.log(orderModifier(order));

  // exercicio 3
  const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(school, 0));

const getNumberOfStudents = (obj) => {
    // Declara uma variável para contador
    let count = 0;
  
    // Itera o array e incrementa em count o total de estudantes em cada curso
    for (let index = 0; index < obj.lessons.length; index += 1) {
      count += obj.lessons[index].students;
    }
  
    // Retorna o total de estudantes
    return count;
  }
  
  console.log(getNumberOfStudents(school));

  const verifyProp = (obj, key) => {
    for (let index = 0; index < obj.lessons.length; index += 1) {
      if (obj.lessons[index][key] === undefined) {
        return false;
      }
    }
    return true;
  }
  
  console.log(verifyProp(school, 'professor')); // false

  const changeKey = (obj, course, value) => {
    // Encontra o elemento que o course é igual a Python
    let findCourse;
    for (let index = 0; index < obj.lessons.length; index += 1) {
      let element = obj.lessons[index];
      if (element.course === course) {
        findCourse = element;
        break;
      }
    }
  
    // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
    if (findCourse !== undefined) {
      findCourse.shift = value;
      return findCourse;
    } else {
      return 'Curso não encontrado.';
    }
  };
  
  console.log(changeKey(school, 'Python', 'Noite'));




  const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  
  // Criação de objeto
  const result = {};
  
  // Loop que irá contar quantas vezes cada fruta aparece no array basket
  for (let index = 0; index < basket.length; index += 1) {
    let fruit = basket[index];
    // Se a propriedade com o nome da fruta ainda não existir, então ela será criada com o valor 1. Caso ela já exista, vamos incrementar o valor.
    if (!result[fruit]) {
      result[fruit] = 1;
    } else {
      result[fruit] += 1;
    }
  };
  
  // Convertemos o objeto result em um array
  const entries = Object.entries(result);
  
  // Criação de um novo array
  let newArray = [];
  
  // Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
  for (let index = 0; index < entries.length; index += 1) {
    if (entries[index][1] > 1) {
      newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
    } else {
      newArray.push(`${entries[index][1]} ${entries[index][0]}`);
    }
  };
  
  // Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
  console.log(`Sua cesta possui: ${newArray.join(', ')}.`);