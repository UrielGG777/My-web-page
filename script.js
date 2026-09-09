const personajes = [
  {
    id: 1,
    nombre: "Walter Andrew Shewhart",
    resumen: "Nació en 1891 en Illinois, Estados Unidos. Fue ingeniero, físico y estadístico. Desarrolló métodos estadísticos aplicados a los procesos industriales y es pionero del control de calidad...",
    imagen: "imagenes/Walter Andrew Shewhart.png",
    biografiaCompleta: `
      <h3>1. Biografía y Obras Principales</h3>
      <p>Nació en 1891 en Illinois, Estados Unidos. Fue ingeniero, físico y estadístico. Trabajó principalmente en Western Electric y Bell Telephone Laboratories, donde desarrolló métodos estadísticos aplicados a los procesos industriales.</p>
      
      <p>Entre sus principales obras se encuentran:</p>
      <ul>
        <li><strong>Economic Control of Quality of Manufactured Product (1931):</strong> Obra fundamental sobre el control estadístico de la calidad.</li>
        <li><strong>Statistical Method from the Viewpoint of Quality Control (1939):</strong> Explica la aplicación de métodos estadísticos al control de procesos y la calidad.</li>
        <li>Publicó numerosos artículos relacionados con estadística, producción y control de calidad.</li>
      </ul>

      <h3>2. Filosofía de la Calidad</h3>
      <p>La filosofía de Shewhart se basa en que la calidad debe controlarse durante el proceso de producción y no solamente al final. Sus principales ideas fueron:</p>
      <ul>
        <li>Todo proceso presenta variaciones.</li>
        <li>Es necesario distinguir entre causas comunes y causas especiales de variación.</li>
        <li>Los procesos deben mantenerse estables y bajo control estadístico.</li>
        <li>Las decisiones sobre calidad deben basarse en datos y métodos estadísticos.</li>
        <li>La calidad debe buscarse mediante la prevención y mejora del proceso, en lugar de depender únicamente de la inspección del producto terminado.</li>
        <li>El control de calidad debe considerar el aspecto económico, buscando producir con calidad sin generar costos innecesarios.</li>
      </ul>

      <h3>3. Principales Aportaciones</h3>
      <ul>
        <li><strong>Gráficas de control:</strong> Desarrolló las herramientas que permiten observar si un proceso se encuentra bajo control estadístico (su trabajo de 1924 es un hito clave).</li>
        <li><strong>Control estadístico de procesos:</strong> Estableció las bases para utilizar la estadística en la manufactura industrial.</li>
        <li><strong>Diferenciación de causas de variación:</strong> Distinguió entre causas comunes y causas especiales.</li>
        <li><strong>Concepto de proceso estable:</strong> Planteó que un proceso debe mantenerse estadísticamente estable para poder controlarlo y mejorarlo.</li>
        <li><strong>Enfoque preventivo:</strong> Promovió controlar el proceso para evitar que aparezcan defectos en vez de solo detectarlos al final.</li>
      </ul>

      <h3>4. Premios y Reconocimientos</h3>
      <ul>
        <li>Primer miembro honorario de la <strong>American Society for Quality (ASQ)</strong>.</li>
        <li>Reconocido mundialmente como uno de los pioneros del control estadístico de la calidad.</li>
        <li>Miembro honorario de la Royal Statistical Society de Inglaterra y de la Calcutta Statistical Association.</li>
        <li>Fellow de instituciones como la American Statistical Association y el Institute of Mathematical Statistics.</li>
        <li>En su honor, la ASQ creó la prestigiosa <strong>Medalla Shewhart</strong>.</li>
      </ul>
    `
  },
  {
    id: 2,
    nombre: "Masaaki Imai",
    resumen: "Nació en Tokio, Japón, en 1930. Conocido mundialmente por difundir la filosofía Kaizen (mejora continua) y fundar el Kaizen Institute en 1985...",
    imagen: "imagenes/Masaaki Imai.png",
    biografiaCompleta: `
      <h3>1. Biografía y Obras Principales</h3>
      <p>Nació en Tokio, Japón, en 1930. Es conocido mundialmente por difundir el concepto de <strong>Kaizen</strong>, término japonés que se traduce como "mejora continua". Fundó el <strong>Kaizen Institute en 1985</strong> para ayudar a organizaciones de todo el mundo a implementar esta filosofía.</p>
      
      <p>Entre sus publicaciones más destacadas están:</p>
      <ul>
        <li><strong>Kaizen: The Key to Japan's Competitive Success (1986):</strong> Libro que introdujo la mejora continua a Occidente para aumentar calidad, productividad y competitividad.</li>
        <li><strong>Gemba Kaizen (1997):</strong> Desarrolla la importancia de realizar mejoras directamente en el lugar donde ocurre la acción y el trabajo (el Gemba).</li>
      </ul>

      <h3>2. Filosofía de la Calidad</h3>
      <p>La filosofía de Imai se centra en realizar pequeñas mejoras constantes día a día en vez de esperar grandes cambios revolucionarios e infrecuentes:</p>
      <ul>
        <li>La calidad debe buscarse mediante la mejora continua (Kaizen).</li>
        <li>Todos los trabajadores deben involucrarse, desde operarios de línea hasta directivos.</li>
        <li>Los problemas deben identificarse y resolverse directamente desde su origen.</li>
        <li>Eliminación sistemática de actividades y desperdicios que no agregan valor.</li>
        <li>El <strong>Gemba</strong> (el taller o sitio de trabajo real) es el punto clave para detectar oportunidades de mejora.</li>
        <li>La calidad no recae únicamente en un departamento, sino en toda la empresa.</li>
      </ul>

      <h3>3. Principales Aportaciones</h3>
      <ul>
        <li><strong>Difusión mundial del Kaizen:</strong> Popularizó la metodología de mejora continua en los cinco continentes.</li>
        <li><strong>Gemba Kaizen:</strong> Orientó la atención directiva hacia el piso de trabajo real.</li>
        <li><strong>Eliminación de desperdicios (Muda):</strong> Reducción activa de costos, tiempos muertos y recursos innecesarios.</li>
        <li><strong>Estandarización:</strong> Señaló que tras lograr una mejora, debe crearse un nuevo estándar para consolidar el avance.</li>
        <li><strong>Vínculo calidad-productividad:</strong> Demostró que la mejora constante reduce costos y eleva la satisfacción del cliente.</li>
      </ul>

      <h3>4. Premios y Reconocimientos</h3>
      <ul>
        <li>Reconocimiento internacional como figura clave de las prácticas japonesas de gestión de calidad moderna.</li>
        <li>Su obra <em>Kaizen</em> es un texto de consulta obligatorio para estudiantes de ingeniería y administración industrial.</li>
        <li>A través del Kaizen Institute, capacitó e impactó los modelos productivos de cientos de multinacionales.</li>
      </ul>
    `
  },
  {
    id: 3,
    nombre: "Joseph Juran",
    resumen: "Fue un ingeniero y consultor  administrativo y empresarial que revolucionó los conceptos alrededor...",
    imagen: "imagenes/Joseph Juran.png",
    biografiaCompleta: `
      <h3>1. Biografía y Formación</h3>
      <p>Joseph Juran (1904–2008) nació en Braila, Rumania, y a corta edad emigró con su familia a Minnesota, Estados Unidos. Se graduó como ingeniero eléctrico en la Universidad de Minnesota en 1924 y comenzó su carrera en una filial de <strong>Western Electric</strong>, donde ingresó al comité de supervisión estadística.</p>
      
      <p>Durante la Gran Depresión concluyó estudios de derecho (1935), año en que publicó sus primeros artículos sobre gestión de calidad. Ocupó cargos públicos durante la Segunda Guerra Mundial bajo la presidencia de Franklin D. Roosevelt y más tarde se consolidó como consultor independiente para firmas como Gillette y General Foods, además de dictar cátedra en la Universidad de Nueva York.</p>

      <h3>2. Aportes Fundamentales a la Calidad</h3>
      <ul>
        <li><strong>Definición de calidad («Adecuación al uso»):</strong> Planteó que la calidad es definida por el usuario en función de la ausencia de deficiencias y la satisfacción de sus expectativas.</li>
        <li><strong>Principio de Pareto aplicado a la calidad:</strong> Fue pionero en emplear esta regla para distinguir los <em>«pocos vitales de los muchos triviales»</em>, priorizando la resolución de los problemas de mayor impacto.</li>
        <li><strong>Compromiso de la alta dirección:</strong> Argumentó que la calidad no es exclusiva de los operarios, sino una responsabilidad directa del liderazgo empresarial, el cual debe asignar recursos y fijar directrices.</li>
        <li><strong>Problemas esporádicos vs. crónicos:</strong> Clasificó las fallas entre eventos repentinos que exigen acción correctiva inmediata y deficiencias crónicas que requieren proyectos de mejora continua.</li>
      </ul>

      <h3>3. La Trilogía de la Calidad (Trilogía de Juran)</h3>
      <p>Propuso este esquema integral de tres etapas para administrar la calidad en cualquier organización:</p>
      <ul>
        <li><strong>Planificación de la calidad:</strong> Identificar clientes (internos y externos), determinar sus requerimientos, traducir esas necesidades en especificaciones y diseñar procesos operativos capaces de cumplirlas.</li>
        <li><strong>Control de la calidad:</strong> Establecer unidades de medida, fijar estándares de desempeño, monitorear los procesos en tiempo real y corregir las desviaciones frente a las normas.</li>
        <li><strong>Mejora de la calidad:</strong> Diagnosticar causas raíz de fallas crónicas, implementar soluciones probadas en condiciones operativas reales y consolidar nuevos controles para mantener los avances logrados.</li>
      </ul>

      <h3>4. Reconocimientos y Legado</h3>
      <ul>
        <li>Considerado junto con Deming uno de los pilares que impulsó el renacimiento de la calidad industrial en Japón.</li>
        <li>Galardonado en 1992 con la <strong>Medalla Nacional de Tecnología</strong> en Estados Unidos.</li>
        <li>Sus libros y postulados continúan siendo el marco central de las normas ISO y los modelos de gestión operativa global.</li>
      </ul>
    `
  },
    {
    id: 4,
      nombre: "William Edwards Deming",
      resumen: "Fue un estadístico, profesor universitario, autor y consultor estadounidense considerado mundialmente como el padre de la gestión de la calidad moderna...",
      imagen: "imagenes/William Edwards Deming.png",
      biografiaCompleta: `
      <h3>1. Primeros Años y Formación</h3>
      <p>William Edwards Deming (1900–1993) nació en Sioux City, Iowa. Se graduó en Ingeniería Eléctrica por la Universidad de Wyoming y obtuvo un doctorado en Física Matemática por la Universidad de Yale en 1928.</p>
      <p>En sus inicios profesionales trabajó en el Departamento de Agricultura y en la Oficina del Censo de los Estados Unidos, donde comenzó a aplicar técnicas de muestreo y métodos estadísticos rigurosos al control de procesos y recolección de datos.</p>

      <h3>2. El «Milagro Japonés» y Reconocimiento Global</h3>
      <p>En 1950, la Unión de Científicos e Ingenieros Japoneses (JUSE) lo invitó a impartir conferencias sobre control estadístico de procesos. Sus enseñanzas sobre reducción de la variabilidad, liderazgo y mejora continua transformaron por completo la manufactura japonesa, posicionándola como líder mundial en confiabilidad y tecnología industrial.</p>
      <ul>
        <li>En Japón fue tan valorado que en 1951 se creó en su honor el prestigioso <strong>Premio Deming</strong>.</li>
        <li>En Occidente su filosofía cobró fuerza decisiva en la década de 1980 tras la difusión de su obra cumbre <em>Out of the Crisis</em> (1982).</li>
        <li>Falleció en 1993, dejando las bases fundamentales del movimiento de Calidad Total (<em>Total Quality Management</em>).</li>
      </ul>

      <h3>3. Cambio de Paradigma en la Gestión</h3>
      <ul>
        <li><strong>Visión sistémica a largo plazo:</strong> La calidad real no se obtiene inspeccionando al final de la línea ni con parches temporales; exige rediseñar los procesos y transformar la cultura organizacional completa.</li>
        <li><strong>Eficiencia económica:</strong> Sostuvo que la calidad no eleva los costos de producción, sino que los disminuye drásticamente al eliminar reprocesos, desperdicios y demoras.</li>
      </ul>

      <h3>4. Principios Clave y Filosofía</h3>
      <ul>
        <li><strong>Constancia en el propósito:</strong> Mantener una dirección clara e inamovible hacia la mejora permanente del producto y servicio.</li>
        <li><strong>Eliminar la dependencia de la inspección masiva:</strong> La inspección llega tarde y es costosa; la calidad debe estar incorporada en el proceso desde el inicio.</li>
        <li><strong>Fin a las compras por menor precio:</strong> Establecer relaciones duraderas con proveedores basadas en confianza recíproca y consistencia en la calidad, no en costos inmediatos.</li>
        <li><strong>Mejora continua del sistema:</strong> Revisión permanente del diseño, métodos productivos y servicio posventa sin fecha de término.</li>
      </ul>

      <h3>5. Factor Humano y Métodos de Mejora</h3>
      <ul>
        <li><strong>Eliminar el miedo:</strong> Fomentar un ambiente de trabajo donde el personal reporte errores, proponga ideas e innove sin temor a represalias.</li>
        <li><strong>Liderazgo de apoyo:</strong> Sustituir la supervisión basada en castigos por un liderazgo que capacite y proporcione herramientas para cultivar el orgullo por el trabajo bien hecho.</li>
        <li><strong>Ciclo PHVA / PDCA:</strong> Consolidar el ciclo de <em>Planear, Hacer, Verificar y Actuar</em> como método estándar para resolver problemas y tomar decisiones sustentadas en datos estadísticos.</li>
      </ul>
    `
    },
    {
      id: 5,
      nombre: "Uriel el mas fregon",
      resumen: "Fue un estadístico, profesor universitario, autor y consultor estadounidense considerado mundialmente como el padre de la gestión de la calidad moderna...",
      imagen: "imagenes/",
      biografiaCompleta: ``
    }
      
    ];



// 1. CARGA AUTOMÁTICA EN LA PÁGINA PRINCIPAL (index.html)

const contenedorLista = document.getElementById("lista-personajes");

if (contenedorLista) {
  personajes.forEach(p => {
    const fila = document.createElement("article");
    fila.classList.add("fila-personaje");

    fila.innerHTML = `
      <div class="info-personaje">
        <h2 class="nombre-personaje">${p.nombre}</h2>
        <p class="resumen-personaje">${p.resumen}</p>
        <a href="personaje.html?id=${p.id}" class="btn-mas-info">Ver más información</a>
      </div>
      <div class="imagen-contenedor">
        <img src="${p.imagen}" alt="${p.nombre}" class="imagen-personaje">
      </div>
    `;

    contenedorLista.appendChild(fila);
  });

  // Tarjeta de Referencias Bibliográficas (sin imagen y con título)
  const filaBiblio = document.createElement("article");
  filaBiblio.classList.add("fila-personaje");

  filaBiblio.innerHTML = `
    <div class="info-personaje" style="flex: 1; width: 100%;">
      <h2 class="nombre-personaje">Referencias bibliográficas</h2>
      <div class="lista-citas-texto">
        <p class="item-biblio">American Society for Quality. (s. f.). Walter A. Shewhart. https://asq.org/about-asq/honorary-members/shewhart</p>
        
        <p class="item-biblio">Imai, M. (1986). <em>Kaizen: The key to Japan’s competitive success</em>. McGraw-Hill.</p>
        
        <p class="item-biblio">Kaizen Institute. (2023, 13 de junio). <em>Kaizen Institute announces the passing of its founder, Masaaki Imai</em>. https://kaizen.com/news/kaizen-institute-annouces-passing-of-founder-masaaki-imai/</p>
        
        <p class="item-biblio">Kaizen Institute. (s. f.). <em>Masaaki Imai</em>. https://kaizen.com/masaaki-imai/</p>
        
        <p class="item-biblio">ScienceDirect. (2005). Walter Andrew Shewhart, <em>Economic control of quality of manufactured product (1931)</em>. En <em>Landmark writings in Western mathematics 1640–1940</em> (pp. 926–935). Elsevier. https://doi.org/10.1016/B978-044450871-3/50153-4</p>
        
        <p class="item-biblio">Shewhart, W. A. (1931). <em>Economic control of quality of manufactured product</em>. D. Van Nostrand Company.</p>
        
        <p class="item-biblio">Shewhart, W. A. (1939). <em>Statistical method from the viewpoint of quality control</em>. Graduate School, U.S. Department of Agriculture.</p>
        
        <p class="item-biblio">https://www.uv.mx/personal/mojeda/files/2012/04/Deming_LaRevoluciondelacalidad.pdf</p>
        
        <p class="item-biblio">https://www.ingenieriadecalidad.com/2023/02/joseph-juran-aportes-a-la-calidad.html</p>
      </div>
    </div>
  `;

  contenedorLista.appendChild(filaBiblio);
}


const contenedorDetalle = document.getElementById("detalle-personaje");

if (contenedorDetalle) {
  // Obtenemos el parámetro ?id= de la barra de navegación
  const params = new URLSearchParams(window.location.search);
  const idSeleccionado = parseInt(params.get("id"));

  // Buscamos el personaje correspondiente
  const personaje = personajes.find(p => p.id === idSeleccionado);

  if (personaje) {
    contenedorDetalle.innerHTML = `
      <article class="fila-personaje detalle-layout">
        <div class="info-personaje">
          <a href="index.html" class="nav-link" style="display:inline-block; margin-bottom: 24px;">← Volver al listado</a>
          <h1 class="nombre-personaje" style="font-size: 2.2rem; margin-bottom: 20px;">${personaje.nombre}</h1>
          <div class="contenido-biografia">
            ${personaje.biografiaCompleta}
          </div>
        </div>
        <div class="imagen-contenedor sticky-foto">
          <img src="${personaje.imagen}" alt="${personaje.nombre}" class="imagen-personaje">
        </div>
      </article>
    `;
  } else {
    contenedorDetalle.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <h2>Personaje no encontrado</h2>
        <p style="margin: 15px 0 25px; color: #64748b;">No se encontró ningún registro para este enlace.</p>
        <a href="index.html" class="btn-mas-info">Volver al inicio</a>
      </div>
    `;
  }
}