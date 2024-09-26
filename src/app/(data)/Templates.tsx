const templates = [
  {
    name: "Título del Blog",
    desc: "Una herramienta de IA que genera títulos de blog según la información de tu blog",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Dame ideas de temas de blog basadas únicamente en el nicho y esquema proporcionado, y dame el resultado en formato de editor de texto enriquecido en formato de viñetas",
    slug: "generar-titulo-blog",
    form: [
      {
        label: "Ingresa el nicho de tu blog",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Ingresa el esquema del blog",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Contenido de Blog",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "generacion-contenido-blog",
    aiPrompt:
      "Generar contenido de blog basado en el tema y proporciona la salida en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa el tema de tu blog",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Ingresa el esquema del blog aquí",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Ideas de Temas para Blog",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "ideas-temas-blog",
    aiPrompt:
      "Genera las 5 mejores ideas de temas de blog en formato de viñetas (sin descripción) basadas en un nicho en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa tu Nicho",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Título SEO para YouTube",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    category: "Herramientas para YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "titulo-seo-youtube",
    aiPrompt:
      "Dame las 5 mejores ideas de títulos SEO optimizados y bien rankeados en formato de viñetas basadas en palabras clave y esquema, y dame el resultado en formato de etiquetas HTML",
    form: [
      {
        label: "Ingresa las palabras clave del tema de tu video de YouTube",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Ingresa el esquema de la descripción de YouTube aquí",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Descripción para YouTube",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    category: "Herramientas para YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "descripcion-youtube",
    aiPrompt:
      "Genera una descripción de YouTube con emojis de 4-5 líneas basada en el tema y esquema en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa el tema/título de tu blog",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Ingresa el esquema de YouTube aquí",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Etiquetas para YouTube",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    category: "Herramientas para YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "etiquetas-youtube",
    aiPrompt:
      "Genera 10 etiquetas de YouTube en formato de viñetas basadas en el título y esquema en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa el título de tu video de YouTube",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Ingresa el esquema de tu video de YouTube aquí (Opcional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Reescribir Artículo (Libre de Plagio)",
    desc: "Usa esta herramienta para reescribir un artículo o publicación de blog existente que pueda evitar los detectores de IA y hacerlo libre de plagio.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Herramienta de Reescritura",
    slug: "reescribir-articulo",
    aiPrompt:
      "Reescribe el artículo proporcionado sin ningún plagio en formato de editor de texto enriquecido",
    form: [
      {
        label: "🤖 Proporciona tu Artículo/Publicación de Blog u otro contenido para reescribir.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Mejorador de Texto",
    desc: "Esta útil herramienta refina tu escritura, eliminando errores y redundancias para obtener un resultado claro y legible. También ofrece un análisis de tono y sugiere mejores opciones de palabras.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Asistente de Escritura",
    slug: "mejorador-texto",
    aiPrompt:
      "Dado el texto a mejorar, reescribe el texto sin errores gramaticales y de forma profesional en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa el texto que deseas reescribir o mejorar",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Agregar Emojis al Texto",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "agregar-emojis-al-texto",
    aiPrompt:
      "Agrega emojis al texto del esquema según el esquema y reescríbelo en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa tu texto para agregar emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Generador de Publicaciones de Instagram",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",
    slug: "generador-publicaciones-instagram",
    aiPrompt:
      "Genera 3 publicaciones de Instagram según las palabras clave dadas y da el resultado en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa palabras clave para tu publicación",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Generador de Hashtags de Instagram",
    desc: "Una herramienta de IA que actúa como tu redactor personal de títulos de blog, generando títulos llamativos y dignos de viralizar en el idioma de tu elección.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",
    slug: "generador-hashtags-instagram",
    aiPrompt:
      "Genera 15 hashtags de Instagram basados en las palabras clave proporcionadas y da el resultado en formato de editor de texto enriquecido",
    form: [
      {
        label: "Ingresa palabras clave para tus hashtags de Instagram",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Idea para publicación/reel de Instagram",
    desc: "Una herramienta de IA que genera nuevas y populares ideas para Instagram según tu nicho",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",
    slug: "generador-ideas-publicacion-instagram",
    aiPrompt:
      "Genera entre 5-10 ideas de publicaciones de Instagram basadas en el nicho con las últimas tendencias, y da la salida en formato de editor de texto enriquecido.",
    form: [
      {
        label: "Introduce palabras clave / nicho para tu idea de Instagram",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
},
{
    name: "Corrector de gramática en inglés",
    desc: "Modelo de IA para corregir la gramática en inglés proporcionando el texto",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",
    slug: "corrector-gramatica-ingles",
    aiPrompt:
      "Reescribe el texto de entrada en ingles corrigiendo la gramática y proporciona la salida en formato de editor de texto enriquecido.",
    form: [
      {
        label: "Introduce el texto para corregir la gramática",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
},
{
    name: "Escribir código",
    desc: "Modelo de IA para generar código de programación en cualquier lenguaje",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "generador-codigo",
    aiPrompt:
      "Con base en la descripción proporcionada por el usuario, escribe un código y proporciona la salida en formato de editor de texto enriquecido en bloque de código.",
    form: [
      {
        label: "Introduce la descripción del código que deseas junto con el lenguaje de programación",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
},
{
    name: "Explicar código",
    desc: "Modelo de IA para explicar código de programación en cualquier lenguaje",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explicador-codigo",
    aiPrompt:
      "Con base en el código proporcionado por el usuario, explica el código línea por línea y proporciona la salida en formato de editor de texto enriquecido en bloque de código.",
    form: [
      {
        label: "Introduce el código que deseas entender",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
},
{
    name: "Detector de errores de código",
    desc: "Esta herramienta analiza la entrada, como mensajes de error y fragmentos de código, para identificar y corregir errores, ofreciendo soluciones detalladas y alternativas de forma clara y fácil de entender.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",
    slug: "detector-bugs-codigo",
    aiPrompt:
      "Con base en el código proporcionado por el usuario, encuentra errores en el código y proporciona una solución en formato de editor de texto enriquecido en bloque de código.",
    form: [
      {
        label: "Introduce el código que deseas probar en busca de errores",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
},
{
    name: "Generador de eslóganes",
    desc: "¿Te cuesta encontrar el eslogan perfecto para tu marca? Nuestra herramienta de IA te ayudará a crear un eslogan que destaque.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",
    slug: "generador-esloganes",
    aiPrompt:
      "Con base en el nombre del producto y el resumen proporcionado por el usuario, genera de 5 a 10 eslóganes atractivos para el producto o negocio y da la salida en formato de editor de texto enriquecido.",
    form: [
      {
        label: "Nombre del producto o marca",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "¿Qué estás vendiendo o promocionando?",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
},
{
    name: "Descripción del producto",
    desc: "Este es tu experto en SEO impulsado por IA, creando descripciones de productos para e-commerce cautivadoras y ricas en palabras clave para aumentar tus ventas en línea.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",
    slug: "generador-descripcion-producto",
    aiPrompt:
      "Con base en el nombre y la descripción proporcionados por el usuario, genera una pequeña descripción del producto para e-commerce y proporciona la salida en formato de editor de texto enriquecido.",
    form: [
      {
        label: "Nombre del producto",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Detalles del producto",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
}

];
export default templates;
