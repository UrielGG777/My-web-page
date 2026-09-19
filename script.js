// Arreglo de personajes para la página principal
const personajes = [
  {
    id: 1,
    nombre: "Walter Andrew Shewhart",
    resumen: "Nació en 1891 en Illinois, Estados Unidos. Fue ingeniero físico y estadístico. Desarrolló el método estadístico aplicado a los procesos industriales y es padre del control de calidad.",
    imagen: "imagenes/walter a shewhart/Walter Andrew Shewhart.png",
    icono: "fa-solid fa-chart-line",
    concepto: "Control estadístico"
  },
  {
    id: 2,
    nombre: "Masaaki Imai",
    resumen: "Nació en Tokio, Japón, en 1930. Conocido mundialmente por difundir la filosofía Kaizen, mejora continua y técnica del 5S.",
    imagen: "imagenes/Masaaki Imai.png",
    icono: "fa-solid fa-infinity",
    concepto: "Kaizen<br>Mejora continua"
  },
  {
    id: 3,
    nombre: "Joseph Juran",
    resumen: "Fue un ingeniero y consultor administrativo y empresarial que revolucionó los conceptos alrededor de la administración empresarial y la gestión de calidad en distintos niveles de producción.",
    imagen: "imagenes/Joseph Juran.png",
    icono: "fa-solid fa-diagram-project",
    concepto: "Trilogía de la Calidad"
  },
  {
    id: 4,
    nombre: "William Edwards Deming",
    resumen: "Fue un estadístico, profesor universitario, autor y consultor estadounidense considerado mundialmente como el padre de la gestión de la calidad moderna.",
    imagen: "imagenes/William Edwards Deming.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: "Ciclo PHVA"
  },
  {
    id: 5,
    nombre: "PHilip b. crossby",
    resumen: "",
    imagen: "imagenes/Philip B. Crosby.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 6,
    nombre: "KAORU ISHIKAWA",
    resumen: "",
    imagen: "imagenes/Kaoru Ishikawa.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 7,
    nombre: "GENICHI TAGUCHI",
    resumen: "",
    imagen: "imagenes/Genichi Taguchi.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 8,
    nombre: "Shigeru Mizuno",
    resumen: "",
    imagen: "imagenes/Shigeru Mizuno.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 9,
    nombre: "Yoji akao",
    resumen: "",
    imagen: "imagenes/Yoji Akao.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 10,
    nombre: "Shingo Shigeo",
    resumen: "",
    imagen: "imagenes/Shingo Shigeo.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 11,
    nombre: "Armand Vallin Feigenbaum",
    resumen: "",
    imagen: "imagenes/Armand Vallin Feigenbaum.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 12,
    nombre: "Robert M. Pirsig",
    resumen: "",
    imagen: "imagenes/Robert M. Pirsig.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
  {
    id: 13,
    nombre: "Peter Senge",
    resumen: "",
    imagen: "imagenes/Peter Senge.png",
    icono: "fa-solid fa-arrows-spin",
    concepto: ""
  },
];

// =============================================================
// 1. CARGA EN LA PÁGINA PRINCIPAL (index.html)
// =============================================================
const contenedorLista = document.getElementById("lista-personajes");

if (contenedorLista) {
  // 1.1 Tarjetas de 3 columnas para cada personaje
  personajes.forEach(p => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-precursor");

    tarjeta.innerHTML = `
      <div class="col-foto">
        <img src="${p.imagen}" alt="${p.nombre}">
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

  // 1.2 Tarjeta final de Bibliografías (sin columna derecha ni botón)
  const tarjetaBiblio = document.createElement("article");
  tarjetaBiblio.classList.add("tarjeta-precursor", "tarjeta-bibliografia");

  tarjetaBiblio.innerHTML = `
    <div class="col-info">
      <h2 class="nombre-precursor">Referencias bibliográficas</h2>
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

  contenedorLista.appendChild(tarjetaBiblio);
}

// =============================================================
// 2. CARGA EN LA PÁGINA DE DETALLE (personaje.html)
// =============================================================
// =============================================================
// CARGA EN LA PÁGINA DE DETALLE (personaje.html)
// =============================================================
const contenedorDetalle = document.getElementById("contenedor-detalle");

if (contenedorDetalle) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id")) || 1; // Walter Shewhart por defecto

  if (id === 1) {
    contenedorDetalle.innerHTML = `
      <div class="grid-infografia">
        
        <!-- COLUMNA IZQUIERDA -->
        <aside class="col-izquierda-info">
          <img src="imagenes/walter a shewhart/Walter Andrew Shewhart.png" alt="Walter Andrew Shewhart" class="foto-infografia">

          <div class="capsula-contexto">
            A principios del siglo XX, la expansión de la producción en masa reveló que la inspección tradicional al final de la línea resultaba ineficiente y costosa para la industria. Ante el reto de Bell Labs de reducir fallos en los sistemas de telecomunicaciones, Walter A. Shewhart aplicó la física y la estadística para comprender la variabilidad de los procesos.
          </div>

          <h3 class="titulo-premios">Premios y<br>Reconocimientos</h3>

          <!-- Imagen directa de Premios y Reconocimientos -->
          <div class="banner-premios-img">
            <img src="imagenes/walter a shewhart/shewhart-premios.png" alt="Premios y Reconocimientos Shewhart" class="img-infografica-completa">
          </div>
        </aside>

        <!-- COLUMNA DERECHA -->
        <section class="col-derecha-info">
          <h1 class="nombre-principal-info">WALTER ANDREW SHEWHART</h1>

          <!-- Imagen directa de la Línea de Vida Horizontal -->
          <div class="banner-linea-tiempo-img">
            <img src="imagenes/walter a shewhart/shewhart-linea-tiempo.jpg" alt="Línea de tiempo de Walter Shewhart" class="img-infografica-completa">
          </div>

          <!-- Obras Principales -->
          <div class="bloque-seccion">
            <h2 class="pildora-seccion">Obras principales</h2>
            <ul>
              <li><strong>Economic Control of Quality of Manufactured Product (1931):</strong> Obra fundamental sobre el control estadístico de la calidad.</li>
              <li><strong>Statistical Method from the Viewpoint of Quality Control (1939):</strong> Explica la aplicación de métodos estadísticos al control de procesos y la calidad.</li>
              <li>Publicó numerosos artículos relacionados con estadística, producción y control de calidad.</li>
            </ul>
          </div>

          <!-- Filosofía de la Calidad -->
          <div class="bloque-seccion">
            <h2 class="pildora-seccion">Filosofía de la Calidad</h2>
            <p style="margin-top: 10px; margin-bottom: 6px;">La filosofía de Shewhart se basa en que la calidad debe controlarse durante el proceso de producción y no solamente al final. Sus principales ideas fueron:</p>
            <ul>
              <li>Todo proceso presenta variaciones.</li>
              <li>Es necesario distinguir entre causas comunes y causas especiales de variación.</li>
              <li>Los procesos deben mantenerse estables y bajo control estadístico.</li>
              <li>Las decisiones sobre calidad deben basarse en datos y métodos estadísticos.</li>
              <li>La calidad debe buscarse mediante la prevención y mejora del proceso, en lugar de depender únicamente de la inspección del producto terminado.</li>
              <li>El control de calidad debe considerar el aspecto económico, buscando producir con calidad sin generar costos innecesarios.</li>
            </ul>
          </div>

          <!-- Principales Aportaciones -->
          <div class="bloque-seccion">
            <h2 class="pildora-seccion">Principales Aportaciones</h2>
            <!-- Imagen directa del esquema de aportaciones -->
            <div class="diagrama-resumen-box">
              <img src="imagenes/walter a shewhart/shewhart-esquema.png" alt="Aportaciones principales de Walter Shewhart" class="img-infografica-completa">
            </div>
          </div>

        </section>
      </div>
    `;
  }
}