import { TranslationType } from './type'

const ptTranslations: TranslationType = {
  home: {
    title: 'Kit de Primeiros Socorros',
    description: 'Explora os itens do kit médico, consulta as normas de manutenção e descobre recomendações importantes selecionando os ícones abaixo!',
    footer: {
      authorLabel: 'Autoria',
      supervisionLabel: 'Orientação',
      revisionLabel: 'Revisão Científica',
    }
  },
  items: {},
  item: {
    whatIsIt: 'O que é',
    howToUse: 'Como usar',
    importantNotes: 'Dicas Importantes',
    quantity: 'Quantidade',
  },
  maintenance: {
    title: 'Normas de Manutenção',
    location: 'Localização',
    location_text: 'Deve ser de conhecimento geral, devidamente sinalizada e acessível.',
    resposibility: 'Responsabilidade',
    responsibility_text: 'A gestão e verificação periódica do conteúdo (incluindo datas de validade) é da responsabilidade do profissional habilitado.',
    documentation: 'Documentação',
    documentation_text: 'Deve existir uma lista de verificação (checklist) do conteúdo.',
    procedures: 'Procedimentos',
    procedures_text: 'Recomenda-se a existência de instruções escritas sobre a atuação em caso de emergência.',
    dontUse: 'O que não utilizar',
    item1: 'Algodão (pode absorver e infetar).',
    item2: 'Álcool, Água Oxigenada ou Tintura de Iodo (podem atrasar a cicatrização).',
  },
  recommendations: {
    title: 'Recomendações Importantes',
    maintenance: 'Manutenção',
    maintenance_text: 'Verifique regularmente a validade dos produtos, especialmente antissépticos e soros, e reponha o material gasto.',
    accessibility: 'Acessibilidade',
    accessibility_text: 'A mala deve estar num local conhecido por todos os funcionários, seco, fresco e fora do alcance direto das crianças pequenas, mas de acesso rápido para os adultos.',
    identification: 'Identificação',
    identification_text: 'A caixa deve ser visível (cor vermelha ou com cruz branca) e fácil de transportar.',
    safety: 'Segurança',
    safety_text: 'Evite guardar medicamentos que exijam receita médica, a menos que sejam de uso pessoal e autorizado de uma criança específica.',
  }
}

export default ptTranslations
