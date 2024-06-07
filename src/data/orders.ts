import { Order } from '../types/Order';

export const orders: Order[] = [
  {
    order: '#857-970',
    name: 'Rafael Costa',
    adress: 'Avenida Ipiranga, 700 - República',
    valor: 98.2,
    quantidade: 2,
    status: 'Aceito',
    orderProducts: {
      produto1: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 15.0,
        unity: 2,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto2: {
        nome: 'Alface',
        valor: 8.0,
        unity: 3,
        img: '../../../../assets/alface.jpeg',
      },
    },
  },
  {
    order: '#857-971',
    name: 'Julia Mendes',
    adress: 'Rua dos Pinheiros, 150 - Pinheiros',
    valor: 65.0,
    quantidade: 3,
    status: 'Pendente',
    orderProducts: {
      produto1: {
        nome: 'Feijão Preto Kicaldo',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Tomate',
        valor: 15.0,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
      produto3: {
        nome: 'Pimentão Verde',
        valor: 5.0,
        unity: 2,
        img: '../../../../assets/pimentao.jpeg',
      },
    },
  },
  {
    order: '#857-972',
    name: 'Pedro Alves',
    adress: 'Rua da Consolação, 1000 - Consolação',
    valor: 32.0,
    quantidade: 2,
    status: 'Em separação',
    orderProducts: {
      produto1: {
        nome: 'Coxinha da Asa',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 17.0,
        unity: 1,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
    },
  },
  {
    order: '#857-973',
    name: 'Carla Martins',
    adress: 'Rua dos Andradas, 500 - Sé',
    valor: 49.0,
    quantidade: 3,
    status: 'Rota de entrega',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Pimentão Verde',
        valor: 14.0,
        unity: 2,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto3: {
        nome: 'Alface',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/alface.jpeg',
      },
    },
  },
  {
    order: '#857-974',
    name: 'Lucas Silva',
    adress: 'Avenida Paulista, 1578 - Bela Vista',
    valor: 78.5,
    quantidade: 4,
    status: 'Concluído',
    orderProducts: {
      produto1: {
        nome: 'Tomate',
        valor: 15.5,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
      produto2: {
        nome: 'Feijão Preto Kicaldo',
        valor: 18.0,
        unity: 1,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
      produto3: {
        nome: 'Alface',
        valor: 10.0,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
      produto4: {
        nome: 'Pimentão Verde',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/pimentao.jpeg',
      },
    },
  },
  {
    order: '#857-975',
    name: 'Fernanda Souza',
    adress: 'Praça da Sé, 200 - Centro',
    valor: 52.5,
    quantidade: 3,
    status: 'Cancelado',
    orderProducts: {
      produto1: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto2: {
        nome: 'Alface',
        valor: 7.5,
        unity: 1,
        img: '../../../../assets/alface.jpeg',
      },
      produto3: {
        nome: 'Coxinha da Asa',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
    },
  },
  {
    order: '#857-976',
    name: 'Bruno Almeida',
    adress: 'Rua das Oliveiras, 230 - Santa Cecília',
    valor: 43.2,
    quantidade: 2,
    status: 'Aceito',
    orderProducts: {
      produto1: {
        nome: 'Feijão Preto Kicaldo',
        valor: 20.0,
        unity: 2,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Pimentão Verde',
        valor: 23.2,
        unity: 3,
        img: '../../../../assets/pimentao.jpeg',
      },
    },
  },
  {
    order: '#857-977',
    name: 'Laura Souza',
    adress: 'Avenida Brigadeiro Faria Lima, 500 - Itaim Bibi',
    valor: 97.5,
    quantidade: 3,
    status: 'Pendente',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 30.0,
        unity: 2,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Tomate',
        valor: 12.5,
        unity: 3,
        img: '../../../../assets/tomate.jpeg',
      },
      produto3: {
        nome: 'Alface',
        valor: 5.0,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
    },
  },
  {
    order: '#857-978',
    name: 'Paula Silva',
    adress: 'Rua dos Girassóis, 123 - Jardim Botânico',
    valor: 56.0,
    quantidade: 2,
    status: 'Em separação',
    orderProducts: {
      produto1: {
        nome: 'Coxinha da Asa',
        valor: 25.0,
        unity: 3,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
      produto2: {
        nome: 'Feijão Preto Kicaldo',
        valor: 31.0,
        unity: 2,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-979',
    name: 'Diego Ferreira',
    adress: 'Rua das Magnólias, 456 - Vila Mariana',
    valor: 82.5,
    quantidade: 4,
    status: 'Rota de entrega',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 15.0,
        unity: 3,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Alface',
        valor: 10.0,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
      produto3: {
        nome: 'Coxinha da Asa',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
      produto4: {
        nome: 'Tomate',
        valor: 32.5,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
    },
  },
  {
    order: '#857-980',
    name: 'Mariana Costa',
    adress: 'Rua das Acácias, 789 - Moema',
    valor: 61.0,
    quantidade: 3,
    status: 'Concluído',
    orderProducts: {
      produto1: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto2: {
        nome: 'Pimentão Verde',
        valor: 21.0,
        unity: 3,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto3: {
        nome: 'Alface',
        valor: 25.0,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
    },
  },
  {
    order: '#857-981',
    name: 'Gabriel Lima',
    adress: 'Rua das Palmeiras, 321 - Vila Clementino',
    valor: 45.5,
    quantidade: 2,
    status: 'Cancelado',
    orderProducts: {
      produto1: {
        nome: 'Tomate',
        valor: 10.5,
        unity: 1,
        img: '../../../../assets/tomate.jpeg',
      },
      produto2: {
        nome: 'Feijão Preto Kicaldo',
        valor: 35.0,
        unity: 3,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-982',
    name: 'Patricia Souza',
    adress: 'Rua das Laranjeiras, 654 - Morumbi',
    valor: 88.0,
    quantidade: 3,
    status: 'Aceito',
    orderProducts: {
      produto1: {
        nome: 'Alface',
        valor: 25.0,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
      produto2: {
        nome: 'Feijão carioca Kicaldo',
        valor: 40.0,
        unity: 2,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto3: {
        nome: 'Tomate',
        valor: 23.0,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
    },
  },
  {
    order: '#857-983',
    name: 'Tiago Santos',
    adress: 'Avenida São João, 101 - Centro',
    valor: 53.5,
    quantidade: 3,
    status: 'Pendente',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 15.0,
        unity: 2,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto3: {
        nome: 'Alface',
        valor: 13.5,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
    },
  },
  {
    order: '#857-984',
    name: 'Bruna Ribeiro',
    adress: 'Rua das Oliveiras, 789 - Jardins',
    valor: 45.0,
    quantidade: 2,
    status: 'Em separação',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Coxinha da Asa',
        valor: 25.0,
        unity: 3,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
    },
  },
  {
    order: '#857-985',
    name: 'Rodrigo Silva',
    adress: 'Avenida Brasil, 1234 - Jardim América',
    valor: 38.5,
    quantidade: 2,
    status: 'Rota de entrega',
    orderProducts: {
      produto1: {
        nome: 'Alface',
        valor: 18.5,
        unity: 3,
        img: '../../../../assets/alface.jpeg',
      },
      produto2: {
        nome: 'Tomate',
        valor: 20.0,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
    },
  },
  {
    order: '#857-986',
    name: 'Carla Oliveira',
    adress: 'Rua das Figueiras, 654 - Santo Amaro',
    valor: 66.0,
    quantidade: 3,
    status: 'Concluído',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Coxinha da Asa',
        valor: 30.0,
        unity: 2,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
      produto3: {
        nome: 'Feijão Preto Kicaldo',
        valor: 11.0,
        unity: 1,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-987',
    name: 'Marcos Silva',
    adress: 'Rua dos Jacarandás, 321 - Tatuapé',
    valor: 54.0,
    quantidade: 2,
    status: 'Cancelado',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 30.0,
        unity: 2,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Tomate',
        valor: 24.0,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
    },
  },
  {
    order: '#857-988',
    name: 'Paulo Lima',
    adress: 'Rua das Laranjeiras, 432 - Morumbi',
    valor: 35.0,
    quantidade: 2,
    status: 'Aceito',
    orderProducts: {
      produto1: {
        nome: 'Coxinha da Asa',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
      produto2: {
        nome: 'Alface',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/alface.jpeg',
      },
    },
  },
  {
    order: '#857-989',
    name: 'Júlia Melo',
    adress: 'Rua das Mangueiras, 567 - Itaim Bibi',
    valor: 73.0,
    quantidade: 4,
    status: 'Pendente',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 20.0,
        unity: 2,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto3: {
        nome: 'Tomate',
        valor: 18.0,
        unity: 1,
        img: '../../../../assets/tomate.jpeg',
      },
      produto4: {
        nome: 'Feijão Preto Kicaldo',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-990',
    name: 'Marcelo Ferreira',
    adress: 'Rua das Palmeiras, 654 - Vila Mariana',
    valor: 44.0,
    quantidade: 2,
    status: 'Em separação',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Pimentão Verde',
        valor: 24.0,
        unity: 2,
        img: '../../../../assets/pimentao.jpeg',
      },
    },
  },
  {
    order: '#857-991',
    name: 'Ana Paula',
    adress: 'Rua das Flores, 789 - Centro',
    valor: 56.0,
    quantidade: 3,
    status: 'Rota de entrega',
    orderProducts: {
      produto1: {
        nome: 'Tomate',
        valor: 20.0,
        unity: 2,
        img: '../../../../assets/tomate.jpeg',
      },
      produto2: {
        nome: 'Alface',
        valor: 15.0,
        unity: 1,
        img: '../../../../assets/alface.jpeg',
      },
      produto3: {
        nome: 'Feijão Preto Kicaldo',
        valor: 21.0,
        unity: 3,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-992',
    name: 'Carlos Silva',
    adress: 'Avenida das Nações, 123 - Vila Olímpia',
    valor: 68.0,
    quantidade: 3,
    status: 'Concluído',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 25.0,
        unity: 2,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 25.0,
        unity: 2,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto3: {
        nome: 'Coxinha da Asa',
        valor: 18.0,
        unity: 3,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
    },
  },
  {
    order: '#857-993',
    name: 'Felipe Costa',
    adress: 'Rua das Margaridas, 456 - Vila Mariana',
    valor: 32.5,
    quantidade: 2,
    status: 'Cancelado',
    orderProducts: {
      produto1: {
        nome: 'Alface',
        valor: 15.0,
        unity: 2,
        img: '../../../../assets/alface.jpeg',
      },
      produto2: {
        nome: 'Tomate',
        valor: 17.5,
        unity: 1,
        img: '../../../../assets/tomate.jpeg',
      },
    },
  },
  {
    order: '#857-994',
    name: 'Isabela Melo',
    adress: 'Avenida das Flores, 789 - Morumbi',
    valor: 75.0,
    quantidade: 3,
    status: 'Aceito',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 30.0,
        unity: 2,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto3: {
        nome: 'Pimentão Verde',
        valor: 20.0,
        unity: 2,
        img: '../../../../assets/pimentao.jpeg',
      },
    },
  },
  {
    order: '#857-995',
    name: 'Ricardo Oliveira',
    adress: 'Rua das Hortências, 432 - Pinheiros',
    valor: 55.0,
    quantidade: 2,
    status: 'Pendente',
    orderProducts: {
      produto1: {
        nome: 'Tomate',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/tomate.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 30.0,
        unity: 2,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
    },
  },
  {
    order: '#857-996',
    name: 'Renata Souza',
    adress: 'Rua das Rosas, 654 - Moema',
    valor: 40.0,
    quantidade: 2,
    status: 'Em separação',
    orderProducts: {
      produto1: {
        nome: 'Coxinha da Asa',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/coxinha-da-asa.jpeg',
      },
      produto2: {
        nome: 'Feijão Preto Kicaldo',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-997',
    name: 'Alessandra Lima',
    adress: 'Avenida das Acácias, 789 - Jardins',
    valor: 77.5,
    quantidade: 3,
    status: 'Rota de entrega',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 25.0,
        unity: 2,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
      produto3: {
        nome: 'Feijão Preto Kicaldo',
        valor: 27.5,
        unity: 1,
        img: '../../../../assets/feijao-preto-kicaldo.jpeg',
      },
    },
  },
  {
    order: '#857-998',
    name: 'João Costa',
    adress: 'Rua das Flores, 123 - Centro',
    valor: 60.0,
    quantidade: 2,
    status: 'Concluído',
    orderProducts: {
      produto1: {
        nome: 'Alface',
        valor: 30.0,
        unity: 1,
        img: '../../../../assets/alface.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 30.0,
        unity: 1,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
    },
  },
  {
    order: '#857-999',
    name: 'Marina Silva',
    adress: 'Rua das Margaridas, 456 - Vila Mariana',
    valor: 50.0,
    quantidade: 2,
    status: 'Cancelado',
    orderProducts: {
      produto1: {
        nome: 'Feijão carioca Kicaldo',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/feijao-carioca-kicaldo.jpeg',
      },
      produto2: {
        nome: 'Tomate',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/tomate.jpeg',
      },
    },
  },
  {
    order: '#857-1000',
    name: 'Gustavo Silva',
    adress: 'Rua das Oliveiras, 789 - Jardins',
    valor: 45.0,
    quantidade: 2,
    status: 'Aceito',
    orderProducts: {
      produto1: {
        nome: 'Pimentão Verde',
        valor: 25.0,
        unity: 1,
        img: '../../../../assets/pimentao.jpeg',
      },
      produto2: {
        nome: 'Arroz Branco Camil Tipo 1',
        valor: 20.0,
        unity: 1,
        img: '../../../../assets/arroz-branco-camil-tipo-1.jpeg',
      },
    },
  },
];