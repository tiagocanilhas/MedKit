import { TranslationType } from './type'

const enTranslations: TranslationType = {
  home: {
    title: 'First Aid Kit',
    description: 'Explore the medical kit items, check the maintenance guidelines, and discover important recommendations by selecting the icons below!',
    footer: {
      courseLabel: 'Course',
      authorLabel: 'Author',
      supervisionLabel: 'Supervision',
      revisionLabel: 'Scientific Review',
    }
  },
  items: {},
  item: {
    whatIsIt: 'What is it',
    howToUse: 'How to use',
    importantNotes: 'Important Notes',
    quantity: 'Quantity',
  },
  maintenance: {
    title: 'Maintenance Guidelines',
    location: 'Location',
    location_text: 'It must be common knowledge, properly signaled, and accessible.',
    resposibility: 'Responsibility',
    responsibility_text: 'The management and periodic verification of the contents (including expiration dates) is the responsibility of the assigned professional.',
    documentation: 'Documentation',
    documentation_text: 'A checklist of the contents must be available.',
    procedures: 'Procedures',
    procedures_text: 'Written instructions on how to act in an emergency are recommended.',
    dontUse: 'What not to use',
    item1: 'Cotton (can absorb and cause infection).',
    item2: 'Alcohol, Hydrogen Peroxide, or Iodine Tincture (can delay healing).',
  },
  recommendations: {
    title: 'Important Recommendations',
    maintenance: 'Maintenance',
    maintenance_text: 'Regularly check the expiration date of products, especially antiseptics and saline solutions, and replace used material.',
    accessibility: 'Accessibility',
    accessibility_text: 'The kit should be in a location known to all staff, dry, cool, and out of direct reach of small children, but quickly accessible to adults.',
    identification: 'Identification',
    identification_text: 'The box must be visible (red color or with a white cross) and easy to carry.',
    safety: 'Safety',
    safety_text: 'Avoid storing prescription medications unless they are for the personal and authorized use of a specific child.',
  }
}

export default enTranslations
