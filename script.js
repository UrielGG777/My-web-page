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
    imgLinea: "imagenes/walter a shewhart/shewhart-linea-tiempo.png",
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
    contexto: "Durante el auge industrial de Japón, Imai analizó el contraste entre la gestión occidental (enfocada en innovaciones bruscas) y el enfoque nipón de pequeños cambios progresivos de bajo costo con la participación de todo el personal.",
    obras: [
      "<strong>Kaizen: The Key to Japan's Competitive Success (1986):</strong> El texto cumbre que internacionalizó el concepto de mejora continua.",
      "<strong>Gemba Kaizen (1997):</strong> Enfoque de sentido común y disciplina en el lugar donde ocurre la acción real de trabajo."
    ],
    filosofia: [
      "El Kaizen es una filosofía de vida: mejorar todos los días, en todas partes.",
      "La mejora continua debe ser incremental, de bajo costo y constante.",
      "El Gemba (lugar de trabajo) es la máxima prioridad gerencial.",
      "La disciplina y la estandarización mediante 5S son la base de la eficiencia."
    ],
    aportacionesTexto: "Fundador del Kaizen Institute, estandarización de las 5S a escala internacional y desarrollo de la cultura participativa de taller Gemba."
  },
  {
    id: 3,
    nombre: "Joseph Moses Juran",
    resumen: "Ingeniero y consultor empresarial rumano-estadounidense que transformó la administración moderna con la Trilogía de la Calidad y el principio de Pareto.",
    imagen: "imagenes/Joseph M. Juran/Joseph Juran.png",
    icono: "fa-solid fa-diagram-project",
    concepto: "Trilogía de la Calidad",
    imgPremios: "imagenes/Joseph M. Juran/juran-premios.png",
    imgLinea: "imagenes/Joseph M. Juran/juran-linea-tiempo.png",
    imgEsquema: "imagenes/Joseph M. Juran/juran-esquema.png",
    contexto: "Frente a quienes creían que la calidad solo dependía del operador en la fábrica, Juran demostró que más del 80% de los defectos se debían a fallas en la planificación de la alta gerencia y enseñó a cuantificar las pérdidas por mala calidad.",
    obras: [
      "<strong>Quality Control Handbook (1951):</strong> El manual de referencia más consultado a nivel mundial en gestión de calidad.",
      "<strong>Managerial Breakthrough (1964):</strong> Tratado sobre la superación y el cambio organizacional planificado."
    ],
    filosofia: [
      "La calidad consiste en la adecuación al uso y satisfacción del cliente.",
      "Principio de Pareto: concentrar el esfuerzo en los 'pocos vitales' frente a los 'muchos triviales'.",
      "La calidad debe planificarse meticulosamente desde la alta dirección.",
      "La resistencia cultural al cambio es el principal obstáculo para la calidad."
    ],
    aportacionesTexto: "La Trilogía de Juran (Planificación, Control y Mejora de la Calidad), el enfoque de costos de la no calidad y la fundación del Juran Institute."
  },
  {
    id: 4,
    nombre: "William Edwards Deming",
    resumen: "Estadístico y profesor estadounidense, pieza clave en el milagro industrial japonés de posguerra y creador de los 14 Puntos para la Gestión.",
    imagen: "imagenes/Edward Deming/William Edwards Deming.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: "Ciclo PHVA",
    imgPremios: "imagenes/Edward Deming/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Edward Deming/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Edward Deming/White Modern Project Timeline Flyer (4).png",
    contexto: "Al no encontrar apertura en EE. UU. tras la Segunda Guerra Mundial, Deming viajó a Japón en 1950 invitado por la JUSE para capacitar a altos ejecutivos, revolucionando para siempre la reputación de las manufacturas japonesas.",
    obras: [
      "<strong>Out of the Crisis (1982):</strong> Crítica al sistema de gestión tradicional y formulación de sus 14 principios.",
      "<strong>The New Economics (1993):</strong> Desarrollo del Sistema de Conocimiento Profundo."
    ],
    filosofia: [
      "Constancia de propósito hacia la mejora de productos y servicios.",
      "Eliminar el miedo en la organización para fomentar el trabajo transparente.",
      "Erradicar las cuotas numéricas y la inspección masiva.",
      "El 94% de las fallas pertenecen al sistema y solo el 6% al trabajador."
    ],
    aportacionesTexto: "Los 14 Puntos de Deming, las 7 Enfermedades Mortales de la Gerencia, la popularización del Ciclo PHVA y el establecimiento del Premio Deming."
  },
  {
    id: 5,
    nombre: "Philip B. Crosby",
    resumen: "Empresario y autor estadounidense que popularizó el concepto de 'Cero Defectos' y la premisa de que 'la calidad es gratis'.",
    imagen: "imagenes/Philip b. crossby/Philip B. Crosby.png",
    icono: "fa-solid fa-circle-check",
    concepto: "Cero Defectos",
    imgPremios: "imagenes/Philip b. crossby/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Philip b. crossby/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Philip b. crossby/White Modern Project Timeline Flyer (4).png",
    contexto: "Como director de calidad en la fabricación de misiles en Martin Marietta, Crosby comprobó que tolerar márgenes de error generaba costos millonarios de reproceso, demostrando que hacer las cosas bien desde la primera vez es más económico.",
    obras: [
      "<strong>Quality is Free (1979):</strong> Éxito editorial que demostró los beneficios económicos de la prevención.",
      "<strong>Quality Without Tears (1984):</strong> Guía pragmática para involucrar al liderazgo en la calidad."
    ],
    filosofia: [
      "La calidad se define únicamente como cumplir con los requisitos establecidos.",
      "El sistema para lograr calidad es la prevención, no la corrección.",
      "El único estándar de desempeño admisible es 'Cero Defectos'.",
      "La medida de la calidad es el precio del incumplimiento."
    ],
    aportacionesTexto: "Los 4 Absolutos de la Calidad, el programa de 14 pasos hacia el Cero Defectos y la Matriz de Madurez de la Gestión de la Calidad."
  },
  {
    id: 6,
    nombre: "Kaoru Ishikawa",
    resumen: "Teórico japonés de la administración empresarial, creador del Diagrama de Causa y Efecto y principal promotor de los Círculos de Calidad.",
    imagen: "imagenes/Kaoru Ishikawa.png",
    icono: "fa-solid fa-code-fork",
    concepto: "Diagrama Causa-Efecto",
    imgPremios: "imagenes/KAORU ISHIKAWA/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/KAORU ISHIKAWA/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/KAORU ISHIKAWA/White Modern Project Timeline Flyer (4).png",
    contexto: "Ishikawa buscaba que los operarios de línea resolvieran problemas directamente en sus puestos de trabajo, democratizando las herramientas estadísticas para no depender de inspectores externos.",
    obras: [
      "<strong>¿Qué es el Control Total de Calidad? La modalidad japonesa (1985):</strong> Análisis del modelo participativo japonés.",
      "<strong>Guía para el Control de Calidad (1968):</strong> Manual elemental de herramientas prácticas."
    ],
    filosofia: [
      "El control de calidad empieza y termina con la educación.",
      "El siguiente proceso en la cadena es tu cliente interno.",
      "Administrar basándose en hechos y datos comprobados, sin suposiciones.",
      "El control de calidad es tarea y responsabilidad de todos en la empresa."
    ],
    aportacionesTexto: "El Diagrama de Ishikawa (Espina de Pescado), la creación de los Círculos de Calidad y la sistematización de las 7 Herramientas Básicas de la Calidad."
  },
  {
    id: 7,
    nombre: "Genichi Taguchi",
    resumen: "Ingeniero y estadístico japonés que formuló el Diseño Robusto de productos y la Función de Pérdida de la Calidad.",
    imagen: "imagenes/Genichi Taguchi.png",
    icono: "fa-solid fa-sliders",
    concepto: "Diseño Robusto",
    imgPremios: "imagenes/GENICHI TAGUCHI/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/GENICHI TAGUCHI/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/GENICHI TAGUCHI/White Modern Project Timeline Flyer (4).png",
    contexto: "Al trabajar en la reconstrucción del sistema de telecomunicaciones japonés, diseñó métodos experimentales rápidos para crear productos insensibles a factores de ruido ambiental.",
    obras: [
      "<strong>System of Experimental Design (1987):</strong> Metodología de arreglos ortogonales para diseño de parámetros.",
      "<strong>Introduction to Quality Engineering (1986):</strong> Fundamentos matemáticos de la función de pérdida."
    ],
    filosofia: [
      "La calidad es la pérdida monetaria que un producto causa a la sociedad desde que sale de fábrica.",
      "La calidad debe optimizarse en la fase de diseño, no durante la manufactura.",
      "El objetivo no es cumplir tolerancias rígidas, sino minimizar la variación alrededor del valor nominal."
    ],
    aportacionesTexto: "La Función de Pérdida de Taguchi, el Diseño Robusto mediante arreglos ortogonales y la optimización de la relación Señal/Ruido (S/N)."
  },
  {
    id: 8,
    nombre: "Shigeru Mizuno",
    resumen: "Ingeniero japonés y referente en gestión de calidad, cofundador del Despliegue de la Función de Calidad (QFD) junto con Yoji Akao.",
    imagen: "imagenes/Shigeru Mizuno.png",
    icono: "fa-solid fa-table-cells",
    concepto: "Despliegue QFD",
    imgPremios: "imagenes/Shigeru Mizuno/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Shigeru Mizuno/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Shigeru Mizuno/White Modern Project Timeline Flyer (4).png",
    contexto: "En los años 60 identificó que los métodos estadísticos operaban una vez iniciado el producto, por lo que desarrolló sistemas para conectar las demandas del cliente con la ingeniería previa al diseño.",
    obras: [
      "<strong>Company-Wide Quality Control (1988):</strong> Marco para el control total en corporaciones globales.",
      "<strong>Management for Quality Improvement: The 7 New QC Tools (1979):</strong> Sistematización de herramientas gerenciales."
    ],
    filosofia: [
      "El aseguramiento de la calidad debe comenzar desde el diseño conceptual.",
      "Es indispensable estructurar sistemáticamente cómo las necesidades del cliente se traducen a especificaciones.",
      "Las herramientas estadísticas deben complementarse con herramientas cualitativas de planificación."
    ],
    aportacionesTexto: "Co-creador del sistema QFD (Quality Function Deployment), impulsor de las 7 Nuevas Herramientas de Gestión y defensor del aseguramiento integral en diseño."
  },
  {
    id: 9,
    nombre: "Yoji Akao",
    resumen: "Especialista japonés en ingeniería de calidad. Desarrolló el método Hoshin Kanri (Planificación Estratégica) y fue pionero clave del QFD.",
    imagen: "imagenes/Yoji Akao.png",
    icono: "fa-solid fa-compass",
    concepto: "Hoshin Kanri",
    imgPremios: "imagenes/Yoji Akao/Yoji Akao.png",
    imgLinea: "imagenes/Yoji Akao/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Yoji Akao/White Modern Project Timeline Flyer (4).png",
    contexto: "Akao detectó que los planes estratégicos de la alta dirección no solían llegar con claridad a la base operativa, por lo que diseñó matrices de despliegue para alinear objetivos anuales con tareas medibles.",
    obras: [
      "<strong>Quality Function Deployment: Integrating Customer Requirements into Product Design (1990):</strong> La obra de referencia sobre QFD.",
      "<strong>Hoshin Kanri: Policy Deployment for Successful TQM (1991):</strong> Metodología de despliegue de políticas."
    ],
    filosofia: [
      "Escuchar la Voz del Cliente (VOC) y preservarla durante todo el ciclo productivo.",
      "El despliegue de políticas exige un diálogo bidireccional continuo (Catchball).",
      "Cada nivel de la empresa debe tener metas claras articuladas con la visión global."
    ],
    aportacionesTexto: "El diseño de la 'Casa de la Calidad' en el modelo QFD, el desarrollo del Hoshin Kanri y la integración de la planificación estratégica con la calidad total."
  },
  {
    id: 10,
    nombre: "Shigeo Shingo",
    resumen: "Ingeniero industrial japonés y asesor clave de Toyota. Desarrolló los dispositivos Poka-Yoke (a prueba de errores) y la metodología de cambios rápidos SMED.",
    imagen: "imagenes/Shingo Shigeo.png",
    icono: "fa-solid fa-shield-halved",
    concepto: "Poka-Yoke / SMED",
    imgPremios: "imagenes/Shingeo Shingo/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Shingeo Shingo/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Shingeo Shingo/White Modern Project Timeline Flyer (4).png",
    contexto: "Trabajando en el Sistema de Producción Toyota, Shingo comprendió que registrar defectos después de que ocurrían era un desperdicio; el camino radicaba en diseñar mecanismos que impidieran físicamente cometer el error.",
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
    imagen: "imagenes/Armand Vallin Feigenbaum.png",
    icono: "fa-solid fa-boxes-packing",
    concepto: "Control Total (TQC)",
    imgPremios: "imagenes/Armand Vallin Feigenbaum/White Modern Project Timeline Flyer (3).png",
    imgLinea: "imagenes/Armand Vallin Feigenbaum/White Modern Project Timeline Flyer (2).png",
    imgEsquema: "imagenes/Armand Vallin Feigenbaum/White Modern Project Timeline Flyer (4).png",
    contexto: "Como director de operaciones en General Electric, Feigenbaum advirtió que la calidad no podía confinarse a un departamento: dependía de finanzas, compras, ventas y servicio postventa por igual.",
    obras: [
      "<strong>Total Quality Control (1961):</strong> Obra pionera que convirtió la calidad en una disciplina de administración general.",
      "<strong>The Power of Management Capital (2003):</strong> Guía ejecutiva sobre el valor económico de la calidad."
    ],
    filosofia: [
      "La calidad es lo que el cliente dice que es, no lo que la empresa asume.",
      "La calidad no es una función técnica aislada, sino una forma holística de dirigir la empresa.",
      "Los costos de no tener calidad deterioran de forma oculta la rentabilidad del negocio."
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
    contexto: "Pirsig cuestionó la división tradicional entre la frialdad técnica de la ingeniería y el idealismo humanista, buscando una definición unificadora que devolviera el orgullo y la vocación al trabajo cotidiano.",
    obras: [
      "<strong>Zen and the Art of Motorcycle Maintenance (1974):</strong> Una de las obras filosóficas más leídas del siglo XX sobre la relación entre el ser humano y la calidad técnica.",
      "<strong>Lila: An Inquiry into Morals (1991):</strong> Sistematización formal de la Metafísica de la Calidad."
    ],
    filosofia: [
      "La calidad es un evento primordial anterior a la separación entre sujeto y objeto.",
      "La tranquilidad mental y la dedicación son indispensables para producir un trabajo excelente.",
      "La calidad dinámica fomenta la innovación, mientras que la estática sostiene la estructura."
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
      "<strong>La Quinta Disciplina (1990):</strong> Texto fundamental sobre el aprendizaje continuo y la gestión sistémica en empresas.",
      "<strong>The Necessary Revolution (2008):</strong> Enfoque sobre sostenibilidad y toma de decisiones complejas."
    ],
    filosofia: [
      "Las organizaciones competitivas son las que aprenden con mayor rapidez que su entorno.",
      "Los problemas de hoy suelen derivar de las soluciones mal calculadas de ayer.",
      "Transformar una empresa exige revisar los modelos mentales de sus líderes.",
      "El pensamiento sistémico permite ver patrones completos y no hechos aislados."
    ],
    aportacionesTexto: "Las 5 Disciplinas del Aprendizaje Organizacional (Dominio Personal, Modelos Mentales, Visión Compartida, Aprendizaje en Equipo y Pensamiento Sistémico) y la fundación de la Society for Organizational Learning (SoL)."
  }
];

// =============================================================
// 1. CARGA EN LA PÁGINA PRINCIPAL (index.html)
// =============================================================
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
          <p style="margin-top: 10px; margin-bottom: 6px;">La perspectiva de calidad de ${p.nombre} se fundamenta en los siguientes principios:</p>
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