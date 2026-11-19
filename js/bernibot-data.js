/* EDICIÓN DOCENTE / INSTITUCIONAL: contenido y rutas del sitio.
   Actualizar paths al integrar con el proyecto definitivo.
   No publicar datos personales, horarios o fechas sin confirmación. */
window.ET20_CHATBOT_CONFIG = {
  nombre: 'BerniBot',
  subtitulo: 'Escuela Técnica N.º 20 · Antonio Berni',
  bienvenida: '¡Hola! 👋 Soy BerniBot, el asistente virtual de la ET N.º 20 «Antonio Berni». Puedo ayudarte a conocer nuestra propuesta educativa, los proyectos y las actividades de la escuela. ¿Qué te gustaría saber?',
  rutas: {
    inicio: 'index.html',
    oferta: 'nivel-educativo.html',
    practicas: 'practicas.html',
    proyectos: 'proyectos.html',
    novedades: 'novedades.html',
    contacto: 'contacto.html',
    salidas: 'salidas-laborales.html'
  },
  respuestas: [
    {
      id:'institucion', etiqueta:'Sobre la escuela',
      palabras:['escuela','colegio','institucion','berni','et20','historia','quienes son','donde estudian'],
      texto:'Somos la Escuela Técnica N.º 20 «Antonio Berni». A través de nuestra página institucional compartimos la formación que ofrecemos y las experiencias educativas de nuestra comunidad.',
      enlace:{texto:'Conocer la escuela',ruta:'inicio'}
    },
    {
      id:'orientacion', etiqueta:'Oferta educativa',
      palabras:['oferta','orientacion','titulo','tecnico','informatica','estudiar','materias','carrera','especialidad'],
      texto:'Nuestra propuesta incluye formación técnica en Informática. Los estudiantes integran conocimientos de programación, redes, aplicaciones, proyectos y otras áreas de la formación técnica. Para inscripciones, requisitos y vacantes, consultá los canales oficiales de la escuela.',
      enlace:{texto:'Ver oferta educativa',ruta:'oferta'}
    },
    {
      id:'practicas', etiqueta:'Prácticas profesionalizantes',
      palabras:['practicas','profesionalizantes','convenios','talleres','scratch','excel','portal educativo','instituciones','pasantias'],
      texto:'Las prácticas profesionalizantes vinculan la formación con experiencias reales. Nuestros estudiantes participan en actividades y talleres con otras instituciones, entre ellas propuestas relacionadas con herramientas digitales, Excel y Scratch.',
      enlace:{texto:'Ver prácticas',ruta:'practicas'}
    },
    {
      id:'proyectos', etiqueta:'Proyectos estudiantiles',
      palabras:['proyectos','arduino','videos','galeria','robotica','basurero','elevador','programacion','pagina web','sitio web','innovacion'],
      texto:'Los estudiantes desarrollan proyectos que integran programación, electrónica, diseño y resolución de problemas. En nuestra galería podés ver fotografías y videos auténticos de prototipos realizados en la escuela. También participan en el desarrollo de esta página institucional.',
      enlace:{texto:'Explorar proyectos',ruta:'proyectos'}
    },
    {
      id:'salidas', etiqueta:'Salidas laborales',
      palabras:['trabajo','salida laboral','salidas laborales','egresados','empleo','perfil profesional'],
      texto:'La formación en Informática aporta herramientas para continuar estudios y desempeñarse en tareas vinculadas con desarrollo de software, soporte técnico, redes y tecnologías digitales, de acuerdo con la formación y especialización de cada egresado.',
      enlace:{texto:'Ver salidas laborales',ruta:'salidas'}
    },
    {
      id:'novedades', etiqueta:'Novedades y actividades',
      palabras:['novedades','noticias','jornada','puertas abiertas','evento','actividad','calendario','fecha','acto'],
      texto:'Consultá las novedades de la escuela para conocer las fechas de evaluaciones, el acto de egresados, la Jornada de Puertas Abiertas y las actividades institucionales. Verificá los horarios y cronogramas en los canales oficiales.',
      enlace:{texto:'Ver novedades',ruta:'novedades'}
    },
    {
      id:'contacto', etiqueta:'Contacto',
      palabras:['inscripcion','inscripciones','contacto','direccion','telefono','email','correo','horario','secretaria','consultar','ubicacion','inscribirme'],
      texto:'Para consultas administrativas, inscripciones, documentación, horarios o información de contacto, te recomendamos utilizar los canales institucionales publicados en el sitio.',
      enlace:{texto:'Ir a contacto',ruta:'contacto'}
    }
  ],
  sinRespuesta:'No encontré una respuesta exacta en la información disponible. Podés elegir uno de los temas sugeridos o consultar directamente a la escuela desde la sección Contacto.',
  privacidad:'Asistente automático · No ingreses datos personales.'
};
