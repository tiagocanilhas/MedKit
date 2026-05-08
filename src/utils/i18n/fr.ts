import { TranslationType } from './type'

const frTranslations: TranslationType = {
  home: {
    title: 'Trousse de Premiers Secours',
    description: 'Explorez les articles de la trousse de secours, consultez les règles d\'entretien et découvrez des recommandations importantes en sélectionnant les icônes ci-dessous !',
    footer: {
      courseLabel: 'Cours',
      authorLabel: 'Auteur',
      supervisionLabel: 'Supervision',
      revisionLabel: 'Revue scientifique',
    }
  },
  items: {},
  item: {
    whatIsIt: 'Qu\'est-ce que c\'est ',
    howToUse: 'Comment l\'utiliser ',
    importantNotes: 'Notes importantes ',
    quantity: 'Quantité',
  },
  maintenance: {
    title: "Règles d'Entretien :",
    location: 'Emplacement ',
    location_text: 'Il doit être connu de tous, dûment signalé et accessible.',
    resposibility: 'Responsabilité ',
    responsibility_text: 'La gestion et la vérification périodique du contenu (y compris les dates de péremption) incombent au professionnel responsable.',
    documentation: 'Documentation ',
    documentation_text: 'Une liste de vérification (checklist) du contenu doit être disponible.',
    procedures: 'Procédures ',
    procedures_text: "L'existence d'instructions écrites sur la conduite à tenir en cas d'urgence est recommandée.",
    dontUse: 'Ce qu’il ne faut pas utiliser ',
    item1: 'Coton (peut absorber et infecter).',
    item2: 'Alcool, eau oxygénée ou teinture d’iode (peuvent retarder la cicatrisation).',
  },
  recommendations: {
    title: 'Recommandations Importantes',
    maintenance: 'Entretien ',
    maintenance_text: 'Vérifiez régulièrement la validité des produits, notamment les antiseptiques et les sérums, et remplacez le matériel utilisé.',
    accessibility: 'Accessibilité ',
    accessibility_text: 'La mallette doit être placée dans un endroit connu de tous les employés, sec, frais et hors de portée directe des jeunes enfants, mais rapidement accessible aux adultes.',
    identification: 'Identification ',
    identification_text: 'La boîte doit être visible (couleur rouge ou avec une croix blanche) et facile à transporter.',
    safety: 'Sécurité ',
    safety_text: 'Évitez de conserver des médicaments sur ordonnance, sauf s’ils sont destinés à l’usage personnel et autorisé d’un enfant spécifique.',
  }
}

export default frTranslations
