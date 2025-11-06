import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private dataCatalogo = [
    { 
      id: '1',
      type: 'vigilancia-metabolica',
      titulo: 'Vigilancia Metabólica y Endocrina',
      subtitulo: 'Perfil Metabólico Básico, Panel de Resistencia a la Insulina, Perfil Tiroideo Completo',
      descripcion: '',
      precio: '',
      url: '/servicios/vigilancia-metabolica',
      urlredirect: '',
      urlImage: 'https://i.imgur.com/R927xyu.jpeg',
      servicios: [
        { titulo:'Perfil Metabólico Básico', 
          subtitulo:'Seguimiento del control glucémico y riesgo aterogénico', 
          marcadores:['Glucosa en ayunas', 'Hemoglobina Glicosilada (HbA1c)', 'Perfil Lipídico (Colesterol total, HDL, LDL, Triglicéridos)'], 
          tiempoEntrega:'24 horas', 
          precio:'45€ - 60€',
          image:''
        },
        { titulo:'Panel de Resistencia a la Insulina', 
          subtitulo:'Detección temprana y evaluación de la respuesta al tratamiento.', 
          marcadores:['Insulina basal', 'Péptido C', 'HOMA-IR'], 
          tiempoEntrega:'48 horas', 
          precio:'65€ - 85€',
          image:''
        },
        { titulo:'Perfil Tiroideo Completo', 
          subtitulo:'Detección temprana y evaluación de la respuesta al tratamiento.', 
          marcadores:['TSH', 'T3 Libre', 'T4 Libre', 'Anticuerpos anti-TPO'], 
          tiempoEntrega:'48 - 72 horas', 
          precio:'70€ - 90€',
          image:''
        }
      ]
    },
    { 
      id: '2',
      type: 'perfiles-cardiovasculares',
      titulo: 'Perfiles Cardiovasculares, Renales y Hepáticos',
      subtitulo: 'Panel de Riesgo Cardiovascular Avanzado, Perfil de Función Renal, Perfil Hepático Crónico',
      descripcion: '',
      precio: '',
      url: '/servicios/perfiles-cardiovasculares',
      urlredirect: '',
      urlImage: 'https://i.imgur.com/6cSmwYG.jpeg',
      servicios: [
        { 
          titulo:'Panel de Riesgo Cardiovascular Avanzado', 
          subtitulo:'Identificación de inflamación subclínica y riesgo de evento.', 
          marcadores:['PCR ultrasensible (hs-CRP)', 'Homocisteína', 'Lipoproteína (a)'], 
          tiempoEntrega:'24 horas', 
          precio:'50€ - 70€',
          image:''
        },
        { 
          titulo:' Perfil de Función Renal', 
          subtitulo:'Detección temprana de daño renal en pacientes diabéticos e hipertensos.', 
          marcadores:['Creatinina', 'Tasa de Filtración Glomerular Estimada (eGFR)', 'Microalbuminuria/Creatinina en orina'], 
          tiempoEntrega:'48 horas', 
          precio:'65€ - 85€',
          image:''
        },
        { 
          titulo:'Perfil Hepático Crónico', 
          subtitulo:'Seguimiento de esteatosis hepática no alcohólica (EHNA) e inflamación crónica.', 
          marcadores:['Enzimas hepáticas (ALT, AST)', 'Bilirrubinas', 'Marcadores de Fibrosis Hepática (p. ej., FibroTest)'], 
          tiempoEntrega:'24 horas', 
          precio:'45€ - 60€',
          image:''
        },
      ]
    },
    { 
      id: '3',
      type: 'perfiles-inflamatorios',
      titulo: 'Perfiles Inflamatorios y Autoinmunes',
      subtitulo: 'Panel de Inflamación Crónica, Panel de Autoanticuerpos',
      descripcion: '',
      precio: '',
      url: '/servicios/perfiles-inflamatorios',
      urlredirect: '',
      urlImage: 'https://i.imgur.com/43wy4r8.jpeg',
      servicios: [
        { 
          titulo:'Panel de Inflamación Crónica', 
          subtitulo:'Monitoreo de actividad en enfermedades autoinmunes (p. ej., Artritis Reumatoide, Lupus).', 
          marcadores:['Velocidad de Sedimentación Globular (VSG)', 'Proteína C-Reactiva (PCR)'], 
          tiempoEntrega:'24 horas', 
          precio:'30€ - 45€',
          image:''
        },
        { 
          titulo:'Panel de Autoanticuerpos', 
          subtitulo:'Soporte diagnóstico y monitoreo de la evolución de enfermedades autoinmunes.', 
          marcadores:['Anticuerpos Antinucleares (ANA) con patrón y títulos', 'FR', 'Anti-CCP (según necesidad)'], 
          tiempoEntrega:'48 - 72 horas', 
          precio:'80€- 110€',
          image:''
        },
      ]
    },
    { 
      id: '4',
      type: 'logistica-accesibilidad',
      titulo: 'Servicios Logísticos y de Accesibilidad',
      subtitulo: 'Servicio a Domicilio y 24 Horas, Atención Especializada, Kits de Autodiagnóstico en Casa',
      descripcion: '',
      precio: '',
      url: '/servicios/logistica-accesibilidad',
      urlredirect: '',
      urlImage: 'https://i.imgur.com/lfch5w7.jpeg',
      servicios: [
        { 
          titulo:'Servicio a Domicilio y 24 Horas', 
          subtitulo:'Toma de muestras programada en casa, ideal para adultos mayores y personas con movilidad reducida.', 
          marcadores:[], 
          tiempoEntrega:'', 
          precio:'15€ - 20€',
          image:''
        },
        { 
          titulo:'Kits de Autodiagnóstico en Casa', 
          subtitulo:'Kits preenvasados para pruebas no invasivas (ej. orina, saliva, gotas de sangre para HbA1c), con instrucciones claras y recogida programada.', 
          marcadores:[], 
          tiempoEntrega:'', 
          precio:'25€ - 100€',
          image:''
        },
        { 
          titulo:'Atención Especializada', 
          subtitulo:'Personal capacitado para la atención de adultos mayores y personas con discapacidad, asegurando comodidad y dignidad en el proceso de toma de muestra.', 
          marcadores:[], 
          tiempoEntrega:'', 
          precio:'Incluido',
          image:''
        },
      ]
    },
    { 
      id: '5',
      type: 'seguimiento-cronico',
      titulo: 'Diagnóstico y Seguimiento Crónico',
      subtitulo: 'Diagnóstico Preventivo con IA, Plataforma de Alertas y Resultados',
      descripcion: '',
      precio: '',
      url: '/servicios/seguimiento-cronico',
      urlredirect: '',
      urlImage: 'https://i.imgur.com/ECdTIgx.jpeg',
      servicios: [
        { 
          titulo:'Diagnóstico Preventivo con IA', 
          subtitulo:'Utilización de algoritmos de Inteligencia Artificial para analizar los resultados de los paneles e identificar patrones de riesgo (metabólico, cardiovascular) antes de que se manifieste la enfermedad.', 
          marcadores:[], 
          tiempoEntrega:'', 
          precio:'20€',
          image:''
        },
        { 
          titulo:'Plataforma de Alertas y Resultados', 
          subtitulo:'Acceso en Línea 24/7: Resultados disponibles en el portal web/app. Alertas Críticas: Notificaciones automáticas (SMS/email) al paciente y al médico ante resultados fuera de rango', 
          marcadores:[], 
          tiempoEntrega:'', 
          precio:'',
          image:''
        },
      ]
    },
    { 
      id: '6',
      type: 'interpretacion-educacion',
      titulo: 'Interpretación y Educación',
      subtitulo: 'Informes Interpretados, Talleres y Charlas de Autocuidado, Alianzas con Médicos Especialistas',
      descripcion: '',
      precio: '',
      url: '/servicios/interpretacion-educacion',
      urlredirect: '',
      urlImage: 'https://i.imgur.com/TqgfTra.png',
      servicios: [
        { 
          titulo:'Informes Interpretados', 
          subtitulo:'Informes no solo con números, sino con una explicación en lenguaje sencillo e imagenes del significado de los marcadores para la condición crónica del paciente.', 
          marcadores:[], 
          tiempoEntrefa:'', 
          precio:'Incluido',
          image:''
        },
        { 
          titulo:'Talleres y Charlas de Autocuidado', 
          subtitulo:'Sesiones presenciales u online sobre nutrición, manejo del estrés y adherencia al tratamiento, como complemento al diagnóstico.', 
          marcadores:[], 
          tiempoEntrefa:'', 
          precio:'20€',
          image:''
        },
        { 
          titulo:'Alianzas con Médicos Especialistas', 
          subtitulo:'Médicos de especialistas para asegurar la derivación y el tratamiento oportunos tras los resultados.', 
          marcadores:[], 
          tiempoEntrefa:'', 
          precio:'30€',
          image:''
        },
      ]
    },
  ];

  constructor() { }

  getCatalogo() {
    return this.dataCatalogo;
  }

  getServicioById(id: string) {
    return this.dataCatalogo.find(item => item.id === id);
  }

  getServicioByType(type: string) {
    return this.dataCatalogo.filter(item => item.type === type);
  }
}
