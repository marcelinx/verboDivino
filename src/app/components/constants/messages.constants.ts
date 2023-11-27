export const cabecalho = {
  titulo01: 'Página Inicial',
  titulo02: 'Contato',
  titulo03: 'Eventos',
  titulo04: 'Serviços',
  titulo05: 'Login'
}

export const telaPrincipal = {
  bemVindo: 'Bem-vindo à Verbo Divino',
  sigaRede: 'Nos acompanhe em nossas redes!',
  sobreNos: 'Sobre Nós',
  contandoSobre: `Somos uma comunidade dedicada a espalhar a palavra de Deus e a promover o
  amor e a compaixão entre as pessoas. Fundada em 2000, a Paróquia Verbo Divino é um santuário de devoção à Nossa Senhora Aparecida. Sob a liderança inspirada do Pe. Renato Augusto Trampellini, tem sido um farol espiritual em São Paulo, acolhendo almas sedentas de paz e espiritualidade. Oferecemos momentos sagrados de reflexão e comunhão durante as missas na Matriz paroquial, especialmente aos domingos e quartas. Além disso, exploramos comunidades afiliadas e serviços pastorais diversos, todos guiados pela devoção e orientação cuidadosa do clero.`,
  servicos: 'Nossos Serviços',
  descreveServicos: 'Oferecemos uma variedade de serviços para atender às necessidades espirituais de nossa comunidade, incluindo cultos, grupos de estudo e programas sociais.',
  eventoTitulo: 'Eventos',
  contatoTitulo: 'Contato',
  contatoDescricao: 'Estamos aqui para ajudar. Entre em contato conosco se tiver alguma pergunta ou necessidade.',
  comunidades: [
    {
      nome: 'Sagrado Coração de Jesus',
      horarioMissas: 'Missas Dominicais: 10h00',
      endereco: 'Rua Carlos Caprole, 164, Jd. Vera Cruz - São Paulo - SP, 04965-070'
    },
    {
      nome: 'Santa Edwiges',
      endereco: 'Rua Maria Trevissani, 223, Jd. Vera Cruz - São Paulo - SP, 04965-150'
    },
    {
      nome: 'São José',
      horarioMissas: 'Missas Dominicais: 17h00',
      endereco: 'Rua Messenia, 634, Vila Sol - São Paulo - SP, 04962-200'
    }
  ],
  eventoMissas: {
    titulo: 'Missas',
    descricao: `Horários de celebração da Matriz paroquial. Para outros horários, consulte abaixo as comunidades da paróquia.`,
    horarios: {
      domingo: ['08h00', '19h00'],
      quarta: ['20h00']
    }
  },
  eventoAdoracao: {
    titulo: 'Adoração ao Santíssimo Sacramento',
    horarios: {
      quinta: '09h às 12h'
    }
  }
};




export const footerInfo = {
  socialIcons: [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/verbodivinooficial/'
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/oficialverbodivino/'
    }
  ],
  contact: {
    title: 'Contato',
    description: 'Estamos aqui para ajudar. Entre em contato conosco se tiver alguma pergunta ou necessidade.',
    details: [
      {
        type: 'Email',
        address: 'paroquia.verbodivino@gmail.com'
      },
      {
        type: 'Telefone',
        number: '(11) 5517-1664'
      },
      {
        type: 'Secretaria',
        schedule: 'Segunda a sábado, das 9h às 17h'
      }
    ]
  },
  churchInfo: {
    copyright: '© 2023 Paróquia Verbo Divíno',
    symbol: 'fas fa-cross'
  }
};
