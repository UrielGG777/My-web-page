// =============================================================
// BASE DE DATOS MAESTRA DE LOS 13 PRECURSORES DE LA CALIDAD
// =============================================================
const personajes = [
  {
    id: 1,
    nombre: "Walter Andrew Shewhart",
    resumen: "Nació en 1891 en Illinois, Estados Unidos. Fue ingeniero físico y estadístico. Desarrolló el método estadístico aplicado a los procesos industriales y es el padre del control de calidad.",
    imagen: "imagenes/walter a shewhart/Walter Andrew Shewhart.png",
    icono: "fa-solid fa-chart-line",
    concepto: "Control estadístico",
    imgPremios: "imagenes/walter a shewhart/shewhart-premios.png",
    imgLinea: "imagenes/walter a shewhart/shewhart-linea-tiempo.jpg",
    imgEsquema: "imagenes/walter a shewhart/shewhart-esquema.png",
    contexto: "A principios del siglo XX, la producción en masa reveló que la inspección final era costosa e ineficiente. Ante el reto de Bell Labs de reducir fallos en telefonía, Shewhart aplicó la física y la estadística para comprender y controlar la variabilidad.",
    obras: [
      "<strong>Economic Control of Quality of Manufactured Product (1931):</strong> Obra fundamental sobre el control estadístico de la calidad.",
      "<strong>Statistical Method from the Viewpoint of Quality Control (1939):</strong> Explica la aplicación de métodos estadísticos al control de procesos industriales."
    ],
    filosofia: [
      "Todo proceso productivo presenta variaciones naturales.",
      "Es indispensable distinguir entre causas comunes y causas especiales de variación.",
      "Los procesos deben mantenerse estables y bajo control estadístico continuo.",
      "Las decisiones directivas deben basarse en datos y evidencia numérica comprobada."
    ],
    aportacionesTexto: "Creador de las Cartas de Control de procesos, formulador original del ciclo PHVA (Planear, Hacer, Verificar, Actuar) y precursor del Control Estadístico de Procesos (SPC)."
  },
  {
    id: 2,
    nombre: "Masaaki Imai",
    resumen: "Nació en Tokio en 1930. Conocido mundialmente por difundir la filosofía Kaizen, la cultura de mejora continua y la técnica de las 5S en todo el mundo occidental.",
    imagen: "imagenes/Masaaki Imai/Masaaki Imai.png",
    icono: "fa-solid fa-infinity",
    concepto: "Kaizen<br>Mejora continua",
    imgPremios: "imagenes/Masaaki Imai/imai-premios.png",
    imgLinea: "imagenes/Masaaki Imai/imai-linea-tiempo.png",
    imgEsquema: "imagenes/Masaaki Imai/imai-esquema.png",
    contexto: "Masaaki Imai impulsó la internacionalización de las prácticas de gestión japonesas tras la Segunda Guerra Mundial. En las décadas de 1950 y 1960, colaboró en la formación de ejecutivos japoneses bajo el modelo industrial de EE. UU. Al presenciar la evolución del milagro económico en su país, sistematizó estas prácticas y fundó el KAIZEN Institute en 1985. ",
    obras: [
      "<strong>Kaizen: The Key to Japan's Competitive Success (1986):</strong> Libro que introdujo la mejora continua a Occidente para aumentar calidad, productividad y competitividad.",
      "<strong>Gemba Kaizen (1997):</strong> Desarrolla la importancia de realizar mejoras directamente en el lugar donde ocurre la acción y el trabajo (el Gemba)."
    ],
    filosofia: [
      "La calidad debe buscarse mediante la mejora continua (Kaizen).",
      "Todos los trabajadores deben involucrarse, desde operarios de línea hasta directivos.",
      "Los problemas deben identificarse y resolverse directamente desde su origen.",
      "Eliminación sistemática de actividades y desperdicios que no agregan valor.",
      "El Gemba (el taller o sitio de trabajo real) es el punto clave para detectar oportunidades de mejora.",
      "La calidad no recae únicamente en un departamento, sino en toda la empresa."
    ],
    aportacionesTexto: "Creación del Kaizen Institute, difusión de la metodología Gemba y estandarización del modelo de las 5S en industrias de manufactura y servicios globales."
  },
 {
    id: 3,
    nombre: "Joseph Moses Juran",
    resumen: "Fue un ingeniero y consultor administrativo y empresarial que revolucionó los conceptos alrededor de la administración empresarial y la gestión de calidad en distintos niveles de producción.",
    imagen: "imagenes/Joseph M. Juran/Joseph Juran.png",
    icono: "fa-solid fa-diagram-project",
    concepto: "Trilogía de la Calidad",
    imgPremios: "imagenes/Joseph M. Juran/juran-premios.png",
    imgLinea: "imagenes/Joseph M. Juran/juran-linea-tiempo.png",
    imgEsquema: "imagenes/Joseph M. Juran/juran-esquema.png",
    contexto: "<strong>Inicios en Western Electric (1920s-1930s):</strong> Trabajó en la planta de Hawthorne, donde integró el control estadístico a la gestión corporativa real.<br><br><strong>Segunda Guerra Mundial:</strong> Se desempeñó como administrador público en Washington D.C., mejorando los procesos de adquisición y logística de suministros bélicos.",
    obras: [
      "<strong>Quality Control Handbook (1951):</strong> Considerada la 'biblia' de la gestión de calidad mundial, obra de referencia técnica y estratégica que sigue actualizándose.",
      "<strong>Managerial Breakthrough (1964):</strong> Presenta la metodología formal para lograr mejoras drásticas y continuas dentro de cualquier organización.",
      "<strong>Juran on Planning for Quality (1988):</strong> Manual detallado sobre cómo diseñar productos y servicios estructurados desde cero para evitar defectos.",
      "<strong>Architect of Quality (2004):</strong> Su autobiografía, donde repasa la evolución del movimiento global de la calidad durante el siglo XX."
    ],
   filosofia: [
      "<strong>La Trilogía de Juran:</strong> Su marco fundamental para gestionar la calidad operacional.",
      "<strong>Planificación de la calidad:</strong> Identificar clientes, determinar sus necesidades y desarrollar procesos capaces de satisfacerlas.",
      "<strong>Control de la calidad:</strong> Monitorear procesos en tiempo real para corregir variaciones fuera de estándares.",
      "<strong>Mejora de la calidad:</strong> Superar niveles previos para reducir desperdicios de forma crónica (crear avance o breakthrough).",
      "<strong>Principio de Pareto (Regla del 80/20):</strong> Fue el primero en aplicar la observación del economista Vilfredo Pareto a la gestión de calidad, acuñando la frase 'los pocos vitales y los muchos triviales' para priorizar los problemas de mayor impacto.",
      "<strong>Costos de la Calidad:</strong> Clasificó los costos de no tener calidad en prevención, evaluación, fallas internas y fallas externas."
    ],
    aportacionesTexto: "La formulación de la Trilogía de la Calidad, la aplicación gerencial de la Regla del 80/20 de Pareto y la creación del Juran Institute para la consultoría de calidad global."
  },
  {
    id: 4,
    nombre: "William Edwards Deming",
    resumen: "Fue un estadístico, profesor universitario, autor y consultor estadounidense considerado mundialmente como el padre de la gestión de la calidad moderna.",
    imagen: "imagenes/Edward Deming/William Edwards Deming.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: "Ciclo PHVA",
    carpeta: "Edward Deming",
    imgPremios: "imagenes/Edward Deming/White Modern Project Timeline Flyer (4).png",
    imgLinea: "imagenes/Edward Deming/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Edward Deming/White Modern Project Timeline Flyer (3).png",
    contexto: "<strong>Segunda Guerra Mundial:</strong> Perfeccionó el Control Estadístico de Procesos (SPC) en la industria militar de EE. UU.<br><br><strong>Milagro Económico Japonés (1950s):</strong> Convocado por la JUSE, capacitó a ingenieros y ejecutivos en Japón. Enseñó a mejorar la calidad del proceso para reducir costos y aumentar la productividad, convirtiendo a empresas como Toyota y Sony en potencias mundiales.",
    obras: [
      "<strong>Out of the Crisis (1982):</strong> Presenta los 14 puntos de gestión y las '7 enfermedades mortales' de la gerencia tradicional.",
      "<strong>The New Economics (1993):</strong> Desarrolla a fondo el Sistema de Conocimiento Profundo y la importancia de la cooperación sobre la competencia.",
      "<strong>Some Theory of Sampling (1950):</strong> Texto clave sobre teoría de muestreo estadístico aplicado."
    ],
    filosofia: [
      "<strong>Ciclo PDCA (Plan-Do-Check-Act):</strong> Modelo iterativo para probar cambios y lograr una mejora continua continua.",
      "<strong>Sistema de Conocimiento Profundo:</strong> Enfoque que combina la comprensión de sistemas, el control de la variación estadística, la teoría del conocimiento y la psicología humana.",
      "<strong>Los 14 Puntos de la Administración:</strong> Reglas clave como crear constancia en el propósito, eliminar la dependencia de la inspección masiva, desterrar el miedo laboral y sustituir la supervisión punitiva por liderazgo."
    ],
    aportacionesTexto: "Los 14 Puntos de la Gerencia, las 7 Enfermedades Mortales, el Ciclo Deming (PDCA) y el establecimiento del Premio Deming en Japón."
  },
  {
    id: 5,
    nombre: "Philip B. Crosby",
    resumen: "Empresario y autor estadounidense que popularizó el concepto de 'Cero Defectos' y la premisa de que 'la calidad es gratis'.",
    imagen: "imagenes/Philip b. crossby/Philip B. Crosby.png",
    icono: "fa-solid fa-circle-check",
    concepto: "Cero Defectos",
    carpeta: "Philip b. crossby",
    imgPremios: "imagenes/Philip b. crossby/White Modern Project Timeline Flyer (4).png",
    imgLinea: "imagenes/Philip b. crossby/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Philip b. crossby/White Modern Project Timeline Flyer (3).png",
    contexto: "En los años 60 y 70, las empresas japonesas adoptaron las enseñanzas de calidad de Deming y Juran, superando a las americanas en fiabilidad y costos. Frente a esta crisis de competitividad, Philip B. Crosby introdujo en 1979 su concepto de 'Cero Defectos' y la idea de que prevenir fallas resulta mucho más barato que corregirlas, transformando la gestión empresarial hacia la prevención integral.",
    obras: [
      "<strong>Quality Is Free: The Art of Making Quality Certain (1979):</strong> Su libro más emblemático. Popularizó el concepto de que invertir en prevención genera ahorros mayores que los costos de no tener calidad.",
      "<strong>Quality Without Tears: The Art of Hassle-Free Management (1984):</strong> Guía práctica orientada a la gerencia para implementar programas de calidad sin generar conflictos internos.",
      "<strong>The Eternally Successful Organization (1988):</strong> Examina las características gerenciales necesarias para mantener a una empresa competitiva y saludable a largo plazo.",
      "<strong>Let's Talk Quality (1989):</strong> Compilación de respuestas directas sobre problemas comunes de calidad y liderazgo empresarial.",
      "<strong>Completeness: Quality in the 21st Century (1992):</strong> Aborda el concepto de la plenitud organizacional, integrando a proveedores, empleados y clientes en el proceso de calidad."
    ],
    filosofia: [
      "<strong>Definición:</strong> La calidad es cumplir con los requisitos, no ser 'bonito' o 'excelente'.",
      "<strong>Sistema:</strong> Se logra mediante la prevención, no la inspección.",
      "<strong>Estándar:</strong> El único nivel aceptable es Cero Defectos ('hacerlo bien a la primera').",
      "<strong>Medición:</strong> Su costo se mide por el precio de la no conformidad (lo que cuesta equivocarse)."
    ],
    aportacionesTexto: "Los 4 Absolutos de la Calidad, el programa de los 14 Pasos para el Cero Defectos y el desarrollo de la cuadrícula de madurez de la gestión gerencial."
  },
  {
    id: 6,
    nombre: "Kaoru Ishikawa",
    resumen: "Teórico japonés de la administración empresarial, creador del Diagrama de Causa y Efecto y principal promotor de los Círculos de Calidad.",
    imagen: "imagenes/Kaoru Ishikawa/Kaoru Ishikawa.png",
    icono: "fa-solid fa-code-fork",
    concepto: "Diagrama Causa-Efecto",
    imgPremios: "imagenes/KAORU ISHIKAWA/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/KAORU ISHIKAWA/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/KAORU ISHIKAWA/White Modern Project Timeline Flyer (4).png",
    contexto: "Tras la Segunda Guerra Mundial, Japón enfrentó la devastación económica y una pésima reputación global por sus productos de baja calidad. En las décadas de 1950 y 1960, Ishikawa lideró la transformación del modelo industrial japonés junto a expertos como Deming y Juran, convirtiendo al país en una potencia manufacturera referente en precisión, compromiso laboral y mejora continua.",
    obras: [
      "<strong>¿Qué es el Control Total de Calidad? La modalidad japonesa (1985):</strong> Análisis del modelo participativo japonés.",
      "<strong>Guía para el Control de Calidad (1968):</strong> Manual elemental de herramientas prácticas.",
      "<strong>Introducción al Control de Calidad (Introduction to Quality Control, 1989):</strong> Fundamentos teóricos y aplicaciones prácticas."
    ],
    introFilosofia: "La filosofía del Control Total de Calidad (CWQC) sostiene que la calidad es un compromiso participativo de toda la organización, articulado en cinco ejes:",
    filosofia: [
      "<strong>Orientación al cliente:</strong> La calidad la define el cliente, no el fabricante.",
      "<strong>Cliente interno:</strong> 'El siguiente proceso es tu cliente'; cada área debe entregar un trabajo impecable a la siguiente etapa.",
      "<strong>Participación total:</strong> Involucra a todos los empleados y niveles de la empresa.",
      "<strong>Educación continua:</strong> Inicia y termina con la capacitación constante del personal.",
      "<strong>Gestión basada en datos:</strong> Las decisiones se fundamentan en análisis estadísticos reales, no en intuiciones."
    ],
    aportacionesTexto: "El Diagrama de Ishikawa (Espina de Pescado), la creación de los Círculos de Calidad y la sistematización de las 7 Herramientas Básicas de la Calidad."
  },
  {
    id: 7,
    nombre: "Genichi Taguchi",
    resumen: "Ingeniero y estadístico japonés que formuló el Diseño Robusto de productos y la Función de Pérdida de la Calidad.",
    imagen: "imagenes/Genichi Taguchi/Genichi Taguchi.png",
    icono: "fa-solid fa-sliders",
    concepto: "Diseño Robusto",
    imgPremios: "imagenes/Genichi Taguchi/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Genichi Taguchi/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Genichi Taguchi/White Modern Project Timeline Flyer (4).png",
    contexto: "Tras la Segunda Guerra Mundial, Japón enfrentó una severa escasez de recursos y la urgencia de reconstruir su industria. En las décadas de 1940 y 1950, Genichi Taguchi revolucionó la ingeniería al desarrollar métodos estadísticos de Diseño Robusto y Calidad Off-line, permitiendo crear productos altamente confiables al menor costo posible. Posteriormente, en los años 80, grandes multinacionales de Estados Unidos y Europa adoptaron sus innovadores enfoques para resolver sus propias crisis de competitividad..",
    obras: [
      "<strong>Sistemas de Diseño de Experimentos (System of Experimental Design, 1987)</strong>",
      "<strong>Introducción a la Ingeniería de Calidad (Introduction to Quality Engineering, 1986)</strong>",
      "<strong>Función de Pérdida de la Calidad (Quality Loss Function, publicaciones de los años 70 y 80)</strong>",
      "<strong>Diseño Robusto usando los Métodos Taguchi (Robust Design Using Taguchi Methods)</strong>"
    ],
    filosofia: [
      "<strong>Función de Pérdida de Calidad:</strong> Cuantifica el costo financiero social de la variabilidad; cualquier desviación del valor objetivo genera pérdidas, aunque esté dentro de los límites de tolerancia.",
      "<strong>Diseño Robusto:</strong> Crea productos y procesos insensibles a factores externos o ambientales impredecibles, asegurando un desempeño estable sin encarecer la producción.",
      "<strong>Control de Calidad fuera de línea (Off-line):</strong> Optimiza el diseño de productos y procesos mediante experimentación estadística antes de la fabricación masiva."
    ],
    aportacionesTexto: "La Función de Pérdida de Taguchi (Loss Function), el Diseño de Experimentos Robusto y la optimización mediante la Relación Señal/Ruido (S/R)."
  },
  {
    id: 8,
    nombre: "Shigeru Mizuno",
    resumen: "Ingeniero japonés y referente en gestión de calidad, cofundador del Despliegue de la Función de Calidad (QFD) junto con Yoji Akao.",
    imagen: "imagenes/Shigeru Mizuno/Shigeru Mizuno.png",
    icono: "fa-solid fa-table-cells",
    concepto: "Despliegue QFD",
    imgPremios: "imagenes/Shigeru Mizuno/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Shigeru Mizuno/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Shigeru Mizuno/White Modern Project Timeline Flyer (4).png",
    contexto: "Inició su carrera tras la Segunda Guerra Mundial integrándose a la Unión de Científicos e Ingenieros Japoneses (JUSE) y al Grupo de Investigación del Control de Calidad. Desarrolló su labor docente en el Instituto Tecnológico de Tokio colaborando estrechamente con figuras como Kaoru Ishikawa, Tetsuichi Asaka y Masao Kogure para adaptar las teorías de pioneros estadounidenses (Deming y Juran) al modelo industrial japonés de la época.",
    obras: [
      "<strong>Company-Wide Total Quality Control:</strong> Libro fundamental donde explica la implementación del control de calidad total a nivel organizacional.",
      "<strong>Quality Function Deployment (QFD): Integrating Customer Requirements into Product Design:</strong> Coautor junto con Yoji Akao.",
      "<strong>Management for Quality Improvement: The 7 New QC Tools:</strong> Obra dedicada al desarrollo y aplicación de las 7 nuevas herramientas de gestión."
    ],
    filosofia: [
      "<strong>Despliegue de políticas:</strong> La alta dirección establece metas de calidad claras y las delega sistemáticamente a los niveles operativos.",
      "<strong>Gestión interfuncional:</strong> Promueve una estructura matricial para eliminar barreras entre departamentos, garantizando calidad en cada etapa del diseño y manufactura.",
      "<strong>Participación total:</strong> Define responsabilidades concretas para todos los colaboradores, desde la dirección gerencial hasta los operarios de planta."
    ],
    aportacionesTexto: "Co-creador del sistema QFD (Quality Function Deployment), impulsor de las 7 Nuevas Herramientas de Gestión y promotor del aseguramiento integral en diseño."
  },
  {
    id: 9,
    nombre: "Yoji Akao",
    resumen: "Especialista japonés en ingeniería de calidad. Desarrolló el método Hoshin Kanri (Planificación Estratégica) y fue pionero clave del QFD.",
    imagen: "imagenes/Yoji Akao/Yoji Akao.png",
    icono: "fa-solid fa-compass",
    concepto: "Hoshin Kanri",
    imgPremios: "imagenes/Yoji Akao/Yoji Akao.png",
    imgLinea: "imagenes/Yoji Akao/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Yoji Akao/White Modern Project Timeline Flyer (4).png",
    contexto: "Desarrolló su trabajo en el Japón de posguerra durante la segunda mitad del siglo XX, periodo caracterizado por la urgente reconstrucción industrial del país. Formó parte del movimiento de Control de Calidad Total (TQC) enfocado en transitary estructurar las demandas cambiantes del mercado globalizado hacia el diseño e ingeniería de productos.",
    obras: [
      "<strong>Quality Function Deployment (QFD): Integrating Customer Requirements into Product Design:</strong> Obra referente sobre el Despliegue de la Función de Calidad.",
      "<strong>Hoshin Kanri: Policy Deployment for Successful TQM:</strong> Libro fundamental para la implementación del despliegue de políticas y alineación estratégica."
    ],
    filosofia: [
      "<strong>Orientación absoluta al cliente (Voice of the Customer):</strong> Diseñar de forma proactiva lo que el usuario realmente desea y valora, en lugar de solo corregir fallos o cumplir especificaciones internas.",
      "<strong>Prevención y diseño desde el origen:</strong> Incorporar la calidad desde la fase conceptual del producto, lo cual es más eficiente y económico que corregir errores en producción.",
      "<strong>Traducibilidad y trazabilidad:</strong> Traducir los deseos del cliente a especificaciones técnicas y controles de proceso para eliminar la brecha entre el lenguaje del mercado y el de la ingeniería.",
      "<strong>Alineación estratégica global (Hoshin Kanri):</strong> Integrar la calidad en la estrategia general de la empresa, alineando las metas directivas con el trabajo diario de cada área."
    ],
    aportacionesTexto: "El diseño de la 'Casa de la Calidad' en el modelo QFD, el desarrollo del Hoshin Kanri y la integración de la planificación estratégica con la calidad total."
  },
  {
    id: 10,
    nombre: "Shigeo Shingo",
    resumen: "Ingeniero industrial japonés y asesor clave de Toyota. Desarrolló los dispositivos Poka-Yoke (a prueba de errores) y la metodología de cambios rápidos SMED.",
    imagen: "imagenes/Shingeo Shingo/Shingo Shigeo.png",
    icono: "fa-solid fa-shield-halved",
    concepto: "Poka-Yoke / SMED",
    imgPremios: "imagenes/Shingeo Shingo/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Shingeo Shingo/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Shingeo Shingo/White Modern Project Timeline Flyer (4).png",
    contexto: "En 1930 Japón estaba absorbiendo ávidamente los conceptos occidentales de la Administración Científica de Frederick Taylor (el estudio formal de tiempos y movimientos en las fábricas). Shingo adoptó esta base analítica, pero observó una falla crítica: el Taylorismo trataba a los operarios como robots y asumía que el error humano en los productos era inevitable, algo que él se propuso corregir de raíz.",
    obras: [
      "<strong>A Study of the Toyota Production System (1981):</strong> Análisis técnico y operativo del Just in Time.",
      "<strong>Zero Quality Control: Source Inspection and the Poka-Yoke System (1986):</strong> Manual de inspección en la fuente."
    ],
    filosofia: [
      "Los errores humanos son naturales; los defectos en el producto terminado no lo son.",
      "Cero defectos se logra con inspección en la fuente y retroalimentación inmediata.",
      "La flexibilidad de producción exige reducir drásticamente los tiempos de preparación de maquinaria."
    ],
    aportacionesTexto: "El sistema SMED (Single-Minute Exchange of Die para cambios de matriz en menos de 10 minutos), los mecanismos Poka-Yoke y el Sistema de Cero Control de Calidad (ZQC)."
  },
  {
    id: 11,
    nombre: "Armand Vallin Feigenbaum",
    resumen: "Empresario y experto estadounidense en calidad. Formuló el concepto fundacional de Control Total de la Calidad (TQC) y la medición de los Costos de Calidad.",
    imagen: "imagenes/Armand Vallin Feigenbaum/Armand Vallin Feigenbaum.png",
    icono: "fa-solid fa-boxes-packing",
    concepto: "Control Total (TQC)",
    imgPremios: "imagenes/Armand Vallin Feigenbaum/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Armand Vallin Feigenbaum/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Armand Vallin Feigenbaum/White Modern Project Timeline Flyer (4).png",
    contexto: "El contexto histórico de  Feigenbaum abarca las décadas centrales del siglo XX, un periodo en el que la industria global experimentó una transformación radical debido al crecimiento masivo de la producción, la postguerra y la creciente complejidad de los sistemas tecnológicos y corporativos.",
    obras: [
      "<strong>Total Quality Control (Control Total de la Calidad):</strong> Considerada su obra cumbre y un pilar fundamental para la industria global.",
      "<strong>The Power of Management Capital (El Poder del Capital de Gestión):</strong> Escrito en 2003 junto a su hermano Donald S. Feigenbaum.",
      "<strong>The Power of Management Innovation (El Poder de la Innovación en la Gestión):</strong> Publicado en 2009 (también en coautoría con su hermano)."
    ],
    filosofia: [
      "<strong>El cliente decide:</strong> La calidad no la define la empresa ni el ingeniero, sino la experiencia real y la satisfacción del cliente.",
      "<strong>Control Total (TQC):</strong> Es un compromiso de toda la empresa. No es tarea de un solo departamento, sino un modelo de vida corporativa desde la gerencia hasta el operario.",
      "<strong>Ciclo completo:</strong> La calidad se construye desde el diseño y los proveedores hasta el servicio posventa; no se logra solo inspeccionando el producto al final.",
      "<strong>La 'Planta Oculta':</strong> Al hacer las cosas mal, se desperdicia entre el 15% y el 40% de la capacidad de una fábrica en corregir errores y repetir trabajos.",
      "<strong>La calidad ahorra dinero:</strong> Hacerlo bien a la primera reduce los costos por fallas (devoluciones, quejas y desechos), lo que aumenta la rentabilidad."
    ],
    aportacionesTexto: "Creación del concepto Control Total de Calidad (TQC), clasificación de los Costos de Calidad (Prevención, Evaluación, Fallas Internas y Fallas Externas) y liderazgo en la ASQ."
  },
  {
    id: 12,
    nombre: "Robert M. Pirsig",
    resumen: "Filósofo y escritor estadounidense. Aportó una perspectiva humanista y ontológica fundamental sobre el significado intrínseco de la Calidad.",
    imagen: "imagenes/Robert M. Pirsig.png",
    icono: "fa-solid fa-lightbulb",
    concepto: "Metafísica de la Calidad",
    imgPremios: "imagenes/Robert M. Pirsig/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Robert M. Pirsig/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Robert M. Pirsig/White Modern Project Timeline Flyer (4).png",
    contexto: "Durante la segunda mitad del siglo XX, Pirsig reflexionó sobre la relación entre las personas, la tecnología, los valores y la búsqueda de la excelencia. Sus ideas cuestionaron la separación estricta entre los aspectos técnicos y humanos de las actividades, proponiendo una visión más amplia de la calidad.",
    obras: [
      "<strong>Zen and the Art of Motorcycle Maintenance (1974):</strong> Es su obra más conocida. Combina el relato de un viaje en motocicleta con reflexiones filosóficas sobre la tecnología, los valores, la racionalidad y el concepto de Calidad.",
      "<strong>Lila: An Inquiry into Morals (1991):</strong> Obra en la que profundizó en sus ideas filosóficas y desarrolló con mayor amplitud su teoría sobre los valores y los patrones de evolución."
    ],
    introFilosofia: "La filosofía de la calidad de Robert M. Pirsig, desarrollada en su obra Zen y el arte del mantenimiento de la motocicleta, propone una visión profundamente humanista y metafísica que se aparta de los modelos estadísticos o puramente corporativos tradicionales. Sus pilares fundamentales son:",
    filosofia: [
      "<strong>La Calidad como una Realidad Indivisible:</strong> Pirsig argumenta que la calidad no es meramente subjetiva ni totalmente objetiva, sino es una esencia universal que todos reconocemos de forma intuitiva al experimentarla.",
      "<strong>El Cuidado y la Conexión Humana (Care):</strong> La calidad está intrínsecamente ligada al grado de devoción, atención y respeto que una persona invierte en su labor.",
      "<strong>La Unión entre lo Clásico y lo Romántico:</strong> Pirsig señala que los conflictos de la modernidad nacen de la separación entre el pensamiento clásico (analítico, lógico y basado en la estructura técnica) y el romántico. La verdadera calidad surge al integrar ambas dimensiones para que la ciencia, la tecnología y el arte humano convivan en equilibrio."
    ],
    aportacionesTexto: "La formulación de la Metafísica de la Calidad (MOQ), la reconciliación entre la tecnología y los valores humanos, e inspiración clave en la cultura moderna de ingeniería de software y procesos."
  },
  {
    id: 13,
    nombre: "Peter Senge",
    resumen: "Científico e investigador del MIT. Desarrolló el modelo de la 'Organización Abierta al Aprendizaje' y las 5 disciplinas del pensamiento sistémico.",
    imagen: "imagenes/Peter Senge.png",
    icono: "fa-solid fa-network-wired",
    concepto: "Organización Inteligente",
    imgPremios: "imagenes/Peter Senge/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Peter Senge/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Peter Senge/White Modern Project Timeline Flyer (4).png",
    contexto: "Senge demostró que en un mundo globalizado los esquemas de mando rígido fracasaban porque trataban los problemas de forma aislada, en lugar de comprenderlos como sistemas interconectados.",
    obras: [
      "<strong>La Quinta Disciplina (1990):</strong> Considerada su obra maestra orientada a la calidad estructural.",
      "<strong>La Quinta Disciplina en la Práctica (1994):</strong> Es el manual operativo indispensable para la implementación de la calidad en los procesos de trabajo.",
      "<strong>La Danza del Cambio (1999):</strong> Esta obra se enfoca directamente en la mejora continua (Kaizen), un pilar de la gestión de la calidad."
    ],
    introFilosofia: "La filosofía de la calidad de Peter Senge se fundamenta en que la verdadera calidad no se logra mediante inspecciones rígidas o controles estadísticos aislados, sino a través del desarrollo humano y el aprendizaje colectivo. Para Senge, la calidad sostenible es un resultado natural de una organización inteligente:",
    filosofia: [
      "La verdadera calidad no se logra mediante inspecciones rígidas o controles estadísticos aislados, sino a través del desarrollo humano y el aprendizaje colectivo.",
      "Para Senge, la calidad sostenible es un resultado natural de una organización inteligente.",
      "<strong>La Calidad es un Problema Sistémico, no de Control:</strong> Senge sostiene que los defectos, errores o problemas de productividad no se deben a fallas individuales de los trabajadores, sino a las deficiencias de los sistemas en los que operan.",
      "<strong>El Aprendizaje Organizacional como Motor de la Calidad:</strong> Para que la calidad sea continua (el concepto de Kaizen), una organización debe aprender constantemente de sus propios errores.",
      "<strong>La Calidad Nace de la Motivación Intrínseca:</strong> A diferencia de los enfoques que imponen métricas de calidad por decreto o mediante bonos y castigos, la visión de Senge se apoya en el Dominio Personal."
    ],
    aportacionesTexto: "Las 5 Disciplinas del Aprendizaje Organizacional (Dominio Personal, Modelos Mentales, Visión Compartida, Aprendizaje en Equipo y Pensamiento Sistémico) y la fundación de la Society for Organizational Learning (SoL)."
  }
];

const contenedorLista = document.getElementById("lista-personajes");

if (contenedorLista) {
  // Render de las tarjetas en 3 columnas
  personajes.forEach(p => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-precursor");

    tarjeta.innerHTML = `
      <div class="col-foto">
        <img src="${p.imagen}" alt="${p.nombre}" onerror="this.src='imagenes/thinking.jpg'">
      </div>
      <div class="col-info">
        <h2 class="nombre-precursor">${p.nombre}</h2>
        <p class="resumen-precursor">${p.resumen}</p>
        <a href="personaje.html?id=${p.id}" class="btn-mas-info">
          Ver más información <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="col-insignia">
        <i class="${p.icono}"></i>
        <span>${p.concepto}</span>
      </div>
    `;

    contenedorLista.appendChild(tarjeta);
  });

  // Tarjeta final de Bibliografías
  const tarjetaBiblio = document.createElement("article");
  tarjetaBiblio.classList.add("tarjeta-precursor", "tarjeta-bibliografia");

  tarjetaBiblio.innerHTML = `
    <div class="col-info">
      <h2 class="nombre-precursor">Referencias bibliográficas</h2>
      <div class="lista-citas-texto">
        <p class="item-biblio">American Society for Quality. (s. f.). <em>Walter A. Shewhart</em>. https://asq.org/about-asq/honorary-members/shewhart</p>
        <p class="item-biblio">Crosby, P. B. (1979). <em>Quality is Free: The Art of Making Quality Certain</em>. McGraw-Hill.</p>
        <p class="item-biblio">Deming, W. E. (1986). <em>Out of the Crisis</em>. MIT Press.</p>
        <p class="item-biblio">Feigenbaum, A. V. (1961). <em>Total Quality Control</em>. McGraw-Hill.</p>
        <p class="item-biblio">Imai, M. (1986). <em>Kaizen: The key to Japan’s competitive success</em>. McGraw-Hill.</p>
        <p class="item-biblio">Ishikawa, K. (1985). <em>What is Total Quality Control? The Japanese Way</em>. Prentice-Hall.</p>
        <p class="item-biblio">Juran, J. M. (1951). <em>Quality Control Handbook</em>. McGraw-Hill.</p>
        <p class="item-biblio">Pirsig, R. M. (1974). <em>Zen and the Art of Motorcycle Maintenance</em>. William Morrow & Company.</p>
        <p class="item-biblio">Senge, P. M. (1990). <em>The Fifth Discipline: The Art and Practice of the Learning Organization</em>. Doubleday.</p>
        <p class="item-biblio">Shingo, S. (1986). <em>Zero Quality Control: Source Inspection and the Poka-Yoke System</em>. Productivity Press.</p>
        <p class="item-biblio">Taguchi, G. (1986). <em>Introduction to Quality Engineering</em>. Asian Productivity Organization.</p>
      </div>
    </div>
  `;

  contenedorLista.appendChild(tarjetaBiblio);
}

// =============================================================
// 2. CARGA DINÁMICA DE INFOGRAFÍAS (personaje.html)
// =============================================================
const contenedorDetalle = document.getElementById("contenedor-detalle");

if (contenedorDetalle) {
  const params = new URLSearchParams(window.location.search);
  const idSeleccionado = parseInt(params.get("id")) || 1;

  // Busca el personaje seleccionado según el parámetro ?id=
  const p = personajes.find(item => item.id === idSeleccionado) || personajes[0];

  const listaObrasHTML = p.obras.map(obra => `<li>${obra}</li>`).join("");
  const listaFilosofiaHTML = p.filosofia.map(f => `<li>${f}</li>`).join("");

  contenedorDetalle.innerHTML = `
    <div class="grid-infografia">
      
      <!-- COLUMNA IZQUIERDA -->
      <aside class="col-izquierda-info">
        <img src="${p.imagen}" alt="${p.nombre}" class="foto-infografia" onerror="this.src='imagenes/walter a shewhart/Walter Andrew Shewhart.png'">

        <div class="capsula-contexto">
          ${p.contexto}
        </div>

        <h3 class="titulo-premios">Premios y<br>Reconocimientos</h3>

        <div class="banner-premios-img">
          <img src="${p.imgPremios}" alt="Premios y Reconocimientos" class="img-infografica-completa" onerror="this.parentElement.style.display='none'">
        </div>
      </aside>

      <!-- COLUMNA DERECHA -->
      <section class="col-derecha-info">
        <h1 class="nombre-principal-info">${p.nombre}</h1>

        <div class="banner-linea-tiempo-img">
          <img src="${p.imgLinea}" alt="Línea de tiempo" class="img-infografica-completa" onerror="this.parentElement.style.display='none'">
        </div>

       <!-- Obras Principales -->
        <div class="bloque-seccion">
          <h2 class="pildora-seccion">Obras principales</h2>
          <ul>
            ${listaObrasHTML}
          </ul>
        </div>

        <!-- Filosofía de la Calidad -->
        <div class="bloque-seccion">
          <h2 class="pildora-seccion">Filosofía de la Calidad</h2>
          ${p.introFilosofia ? `<p style="margin-top: 10px; margin-bottom: 8px; color: #334155; line-height: 1.5;">${p.introFilosofia}</p>` : ''}
          <ul>
            ${listaFilosofiaHTML}
          </ul>
        </div>

        <!-- Principales Aportaciones -->
        <div class="bloque-seccion">
          <h2 class="pildora-seccion">Principales Aportaciones</h2>
          <p style="margin-bottom: 12px; font-size: 0.9rem; color: #334155; line-height: 1.55;">${p.aportacionesTexto}</p>
          
          <div class="diagrama-resumen-box">
            <img src="${p.imgEsquema}" alt="Esquema de aportaciones" class="img-infografica-completa" onerror="this.parentElement.style.display='none'">
          </div>
        </div>

      </section>
    </div>
  `;
  
}