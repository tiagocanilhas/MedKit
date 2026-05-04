import { TranslationType } from './type'

const esTranslations: TranslationType = {
  home: {
    title: 'Botiquín de Primeros Auxilios',
    description: '¡Explora los elementos del botiquín, consulta las normas de mantenimiento y descubre recomendaciones importantes seleccionando los iconos a continuación!'
  },
  items: {},
  item: {
    whatIsIt: 'Qué es',
    howToUse: 'Cómo usarlo',
    importantNotes: 'Notas importantes',
    quantity: 'Cantidad',
  },
  maintenance: {
    title: 'Normas de Mantenimiento',
    location: 'Ubicación',
    location_text: 'Debe ser de conocimiento general, estar debidamente señalizada y ser accesible.',
    resposibility: 'Responsabilidad',
    responsibility_text: 'La gestión y verificación periódica del contenido (incluyendo las fechas de caducidad) es responsabilidad del profesional encargado.',
    documentation: 'Documentación',
    documentation_text: 'Debe existir una lista de verificación (checklist) del contenido.',
    procedures: 'Procedimientos',
    procedures_text: 'Se recomienda la existencia de instrucciones escritas sobre la actuación en caso de emergencia.',
    dontUse: 'Qué no utilizar',
    item1: 'Algodón (puede absorber e infectar).',
    item2: 'Alcohol, Agua Oxigenada o Tintura de Yodo (pueden retrasar la cicatrización).',
  },
  recommendations: {
    title: 'Recomendaciones Importantes',
    maintenance: 'Mantenimiento',
    maintenance_text: 'Verifique regularmente la validez de los productos, especialmente antisépticos y sueros, y reponga el material utilizado.',
    accessibility: 'Accesibilidad',
    accessibility_text: 'El maletín debe estar en un lugar conocido por todos los empleados, seco, fresco y fuera del alcance directo de los niños pequeños, pero de acceso rápido para los adultos.',
    identification: 'Identificación',
    identification_text: 'La caja debe ser visible (color rojo o con una cruz blanca) y fácil de transportar.',
    safety: 'Seguridad',
    safety_text: 'Evite guardar medicamentos que requieran receta médica, a menos que sean de uso personal y autorizado de un niño específico.',
  }
}

export default esTranslations
