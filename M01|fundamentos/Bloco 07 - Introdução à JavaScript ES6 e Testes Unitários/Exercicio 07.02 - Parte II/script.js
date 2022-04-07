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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (pedido) => {
      const client = order.name;
      const deliveryman = order.order.delivery.deliveryPerson;
      const clientTelephone = order.phoneNumber;
      const street = order.address.street;
      const numberStreet = order.address.number;
      const apartment = order.address.apartment;

      console.log(
          `Olá ${deliveryman}, entrega para: ${client}, Telefone: ${clientTelephone}, R. ${street}, Nº: ${numberStreet}, AP: ${apartment}`
      );
  }

  customerInfo();

  const orderModifier = (pedido) => {
      const newClient = order.name = 'Luiz Silva';
      const pizzas = Object.keys(order.order.pizza);
      const drinks = order.order.drinks.coke.type;
      const total = order.payment.total = 50;

      console.log(
          `Olá ${newClient}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é de R$ ${total},00`
      );
  }

  orderModifier()