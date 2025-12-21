// ===== DATOS DE PRODUCTOS =====
const productos = [
    {
        id: 1,
        nombre: "Quinua Orgánica Real",
        descripcion: "Quinua premium cultivada en Puno a 3800 msnm. Alto contenido de proteínas y minerales esenciales.",
        precio: 18.90,
        imagen: "fas fa-seedling",
        color: "#1F4B66",
        categoria: "Superfoods",
        origen: "Puno, Perú",
        peso: "500g"
    },
    {
        id: 2,
        nombre: "Café Andino Premium",
        descripcion: "Café de altura de Chanchamayo. Notas a chocolate negro, nueces tostadas y un final dulce persistente.",
        precio: 32.00,
        imagen: "fas fa-coffee",
        color: "#8B4513",
        categoria: "Café & Tés",
        origen: "Chanchamayo, Perú",
        peso: "250g"
    },
    {
        id: 3,
        nombre: "Maca Gelatinizada",
        descripcion: "Polvo de maca amarilla de Junín. Energía natural, equilibrio hormonal y adaptógeno andino.",
        precio: 28.75,
        imagen: "fas fa-mortar-pestle",
        color: "#EF476F",
        categoria: "Superfoods",
        origen: "Junín, Perú",
        peso: "200g"
    },
    {
        id: 4,
        nombre: "Aceite de Sacha Inchi",
        descripcion: "Omega 3, 6 y 9 puro de la Amazonía. Extraído en frío para conservar todas sus propiedades.",
        precio: 35.20,
        imagen: "fas fa-wind",
        color: "#88C44D",
        categoria: "Superfoods",
        origen: "Amazonía, Perú",
        peso: "250ml"
    },
    {
        id: 5,
        nombre: "Cacao en Grano Crudo",
        descripcion: "Granos de cacao 100% puro de la selva de Cusco. Ideal para chocolatería artesanal y smoothies.",
        precio: 24.50,
        imagen: "fas fa-seedling",
        color: "#8B4513",
        categoria: "Superfoods",
        origen: "Cusco, Perú",
        peso: "300g"
    },
    {
        id: 6,
        nombre: "Té de Hoja de Coca Orgánico",
        descripcion: "Tradicional infusión andina. Ideal para el mal de altura, digestión y energía natural.",
        precio: 15.80,
        imagen: "fas fa-mug-hot",
        color: "#1F4B66",
        categoria: "Café & Tés",
        origen: "Andes Peruanos",
        peso: "100g"
    }
];

// ===== TRADUCCIONES =====
const traducciones = {
    es: {
        // Navegación
        inicio: "Inicio",
        productos: "Productos",
        nosotros: "Nosotros",
        impacto: "Impacto",
        carrito: "Carrito",
        perfil: "Perfil",
        
        // Hero Section
        tituloHeroLine1: "Productos Orgánicos",
        tituloHeroHighlight1: "Peruanos",
        tituloHeroLine2: "con",
        tituloHeroHighlight2: "Precio Justo",
        subtituloHero: "Descubre la auténtica riqueza de los Andes. Cada compra apoya directamente a las comunidades agrícolas y promueve prácticas regenerativas.",
        explorarProductos: "Explorar Productos",
        conocerHistoria: "Conocer Nuestra Historia",
        
        // Sellos
        organicoCertificado: "100% Orgánico Certificado",
        precioJustoGarantizado: "Precio Justo Garantizado",
        envasesSostenibles: "Envases Sostenibles",
        
        // Productos
        productosDestacados: "Nuestros Productos Estrella",
        subtituloProductos: "Selección premium de los Andes Peruanos, cultivados con amor y respeto",
        verTodos: "Ver todos los productos",
        precioJusto: "Precio Justo",
        
        // Nosotros
        tituloNosotros: "Más que una marca, un compromiso de",
        tituloNosotrosHighlight: "Ayni",
        textoNosotros1: "En la cosmovisión andina, <strong>Ayni</strong> representa la reciprocidad sagrada entre las personas y la Pachamama (Madre Tierra). Es un intercambio armonioso donde cada acción tiene una respuesta equilibrada.",
        textoNosotros2: "En Onda Ayni, hemos hecho de este principio milenario nuestra filosofía central. Trabajamos <strong>directamente con cooperativas de pequeños agricultores</strong> en las regiones andinas, eliminando intermediarios y garantizando un pago justo que supera hasta en un 40% los precios del mercado convencional.",
        caracteristica1: "Comercio directo sin intermediarios",
        caracteristica2: "Agricultura regenerativa y sostenible",
        caracteristica3: "Transparencia total en la cadena de valor",
        caracteristica4: "Apoyo a proyectos educativos comunitarios",
        
        // Impacto
        tituloImpacto: "Nuestro Impacto en Números",
        subtituloImpacto: "El poder transformador de cada compra consciente",
        familiasApoyadas: "Familias agricultoras apoyadas",
        tierraRegenerativa: "Tierra bajo cultivo regenerativo",
        ingresosComunidades: "Ingresos para comunidades",
        productosPrecioJusto: "Productos con precio justo",
        custodiaAmbiental: "Custodia Ambiental",
        descCustodia: "Promovemos prácticas que regeneran el suelo y protegen la biodiversidad andina.",
        comunidadesFortalecidas: "Comunidades Fortalecidas",
        descComunidades: "Invertimos en educación, salud e infraestructura para las comunidades productoras.",
        capacitacionContinua: "Capacitación Continua",
        descCapacitacion: "Formamos a los agricultores en técnicas sostenibles y gestión empresarial.",
        
        // Carrito - CORREGIDO
        tuCanasta: "Tu Canasta",
        canastaVacia: "Tu canasta está vacía",
        agregarProductos: "¡Agrega algunos productos orgánicos!",
        total: "Total:",
        procederPago: "Proceder al Pago",
        vaciarCanasta: "Vaciar Canasta",
        cerrarCarrito: "Cerrar",
        
        // Login/Registro
        iniciarSesion: "Iniciar Sesión",
        crearCuenta: "Crear Cuenta",
        email: "Correo Electrónico",
        contrasena: "Contraseña",
        confirmarContrasena: "Confirmar Contraseña",
        nombre: "Nombre",
        apellido: "Apellido",
        pais: "País",
        direccion: "Dirección",
        codigoPostal: "Código Postal",
        celular: "Celular de Contacto",
        recordarme: "Recordarme",
        olvidasteContrasena: "¿Olvidaste tu contraseña?",
        yaTienesCuenta: "¿Ya tienes una cuenta?",
        noTienesCuenta: "¿No tienes una cuenta?",
        ingresar: "Ingresar",
        registrar: "Registrar",
        cerrarSesion: "Cerrar Sesión",
        miPerfil: "Mi Perfil",
        misPedidos: "Mis Pedidos",
        
        // Footer
        comercioConciencia: "Comercio con Conciencia,",
        consumoProposito: "Consumo con Propósito.",
        tituloProductos: "Productos",
        superfoods: "Superfoods",
        cafeTes: "Café & Tés",
        snacksDulces: "Snacks & Dulces",
        harinasGranos: "Harinas & Granos",
        tituloEmpresa: "Empresa",
        nuestraHistoria: "Nuestra Historia",
        impactoSocial: "Impacto Social",
        trabajaConNosotros: "Trabaja con Nosotros",
        contacto: "Contacto",
        tituloAyuda: "Ayuda",
        preguntasFrecuentes: "Preguntas Frecuentes",
        enviosEntregas: "Envíos y Entregas",
        cambiosDevoluciones: "Cambios y Devoluciones",
        guiaProductos: "Guía de Productos",
        derechos: "Todos los derechos reservados.",
        hechoConAmor: "Hecho con amor en los Andes Peruanos"
    },
    en: {
        // Navegación
        inicio: "Home",
        productos: "Products",
        nosotros: "About Us",
        impacto: "Impact",
        carrito: "Cart",
        perfil: "Profile",
        
        // Hero Section
        tituloHeroLine1: "Peruvian Organic",
        tituloHeroHighlight1: "Products",
        tituloHeroLine2: "with",
        tituloHeroHighlight2: "Fair Price",
        subtituloHero: "Discover the authentic richness of the Andes. Each purchase directly supports farming communities and promotes regenerative practices.",
        explorarProductos: "Explore Products",
        conocerHistoria: "Our Story",
        
        // Sellos
        organicoCertificado: "100% Organic Certified",
        precioJustoGarantizado: "Fair Price Guaranteed",
        envasesSostenibles: "Sustainable Packaging",
        
        // Productos
        productosDestacados: "Our Featured Products",
        subtituloProductos: "Premium selection from the Peruvian Andes, grown with love and respect",
        verTodos: "View all products",
        precioJusto: "Fair Price",
        
        // Nosotros
        tituloNosotros: "More than a brand, a commitment to",
        tituloNosotrosHighlight: "Ayni",
        textoNosotros1: "In the Andean worldview, <strong>Ayni</strong> represents the sacred reciprocity between people and Pachamama (Mother Earth). It is a harmonious exchange where every action has a balanced response.",
        textoNosotros2: "At Onda Ayni, we have made this ancient principle our central philosophy. We work <strong>directly with small farmers' cooperatives</strong> in the Andean regions, eliminating intermediaries and ensuring fair payment that exceeds conventional market prices by up to 40%.",
        caracteristica1: "Direct trade without intermediaries",
        caracteristica2: "Regenerative and sustainable agriculture",
        caracteristica3: "Total transparency in the value chain",
        caracteristica4: "Support for community educational projects",
        
        // Impacto
        tituloImpacto: "Our Impact in Numbers",
        subtituloImpacto: "The transformative power of every conscious purchase",
        familiasApoyadas: "Farming families supported",
        tierraRegenerativa: "Land under regenerative cultivation",
        ingresosComunidades: "Income for communities",
        productosPrecioJusto: "Products with fair price",
        custodiaAmbiental: "Environmental Stewardship",
        descCustodia: "We promote practices that regenerate soil and protect Andean biodiversity.",
        comunidadesFortalecidas: "Strengthened Communities",
        descComunidades: "We invest in education, health, and infrastructure for producing communities.",
        capacitacionContinua: "Continuous Training",
        descCapacitacion: "We train farmers in sustainable techniques and business management.",
        
        // Carrito - CORREGIDO
        tuCanasta: "Your Cart",
        canastaVacia: "Your cart is empty",
        agregarProductos: "Add some organic products!",
        total: "Total:",
        procederPago: "Proceed to Checkout",
        vaciarCanasta: "Empty Cart",
        cerrarCarrito: "Close",
        
        // Login/Registro
        iniciarSesion: "Sign In",
        crearCuenta: "Create Account",
        email: "Email Address",
        contrasena: "Password",
        confirmarContrasena: "Confirm Password",
        nombre: "First Name",
        apellido: "Last Name",
        pais: "Country",
        direccion: "Address",
        codigoPostal: "Postal Code",
        celular: "Phone Number",
        recordarme: "Remember me",
        olvidasteContrasena: "Forgot your password?",
        yaTienesCuenta: "Already have an account?",
        noTienesCuenta: "Don't have an account?",
        ingresar: "Sign In",
        registrar: "Register",
        cerrarSesion: "Sign Out",
        miPerfil: "My Profile",
        misPedidos: "My Orders",
        
        // Footer
        comercioConciencia: "Commerce with Consciousness,",
        consumoProposito: "Consumption with Purpose.",
        tituloProductos: "Products",
        superfoods: "Superfoods",
        cafeTes: "Coffee & Tea",
        snacksDulces: "Snacks & Sweets",
        harinasGranos: "Flours & Grains",
        tituloEmpresa: "Company",
        nuestraHistoria: "Our Story",
        impactoSocial: "Social Impact",
        trabajaConNosotros: "Work With Us",
        contacto: "Contact",
        tituloAyuda: "Help",
        preguntasFrecuentes: "Frequently Asked Questions",
        enviosEntregas: "Shipping & Delivery",
        cambiosDevoluciones: "Returns & Exchanges",
        guiaProductos: "Product Guide",
        derechos: "All rights reserved.",
        hechoConAmor: "Made with love in the Peruvian Andes"
    },
    fr: {
        // Navegación
        inicio: "Accueil",
        productos: "Produits",
        nosotros: "À propos",
        impacto: "Impact",
        carrito: "Panier",
        perfil: "Profil",
        
        // Hero Section
        tituloHeroLine1: "Produits Organiques",
        tituloHeroHighlight1: "Péruviens",
        tituloHeroLine2: "avec",
        tituloHeroHighlight2: "Prix Juste",
        subtituloHero: "Découvrez la richesse authentique des Andes. Chaque achat soutient directement les communautés agricoles et promeut des pratiques régénératives.",
        explorarProductos: "Explorer les Produits",
        conocerHistoria: "Notre Histoire",
        
        // Sellos
        organicoCertificado: "100% Certifié Biologique",
        precioJustoGarantizado: "Prix Juste Garanti",
        envasesSostenibles: "Emballages Durables",
        
        // Productos
        productosDestacados: "Nos Produits Phares",
        subtituloProductos: "Sélection premium des Andes péruviennes, cultivées avec amour et respect",
        verTodos: "Voir tous les produits",
        precioJusto: "Prix Juste",
        
        // Nosotros
        tituloNosotros: "Plus qu'une marque, un engagement envers",
        tituloNosotrosHighlight: "Ayni",
        textoNosotros1: "Dans la vision du monde andine, <strong>Ayni</strong> représente la réciprocité sacrée entre les personnes et la Pachamama (Terre Mère). C'est un échange harmonieux où chaque action a une réponse équilibrée.",
        textoNosotros2: "Chez Onda Ayni, nous avons fait de ce principe millénaire notre philosophie centrale. Nous travaillons <strong>directement avec des coopératives de petits agriculteurs</strong> dans les régions andines, éliminant les intermédiaires et garantissant un paiement équitable qui dépasse jusqu'à 40% les prix du marché conventionnel.",
        caracteristica1: "Commerce direct sans intermédiaires",
        caracteristica2: "Agriculture régénérative et durable",
        caracteristica3: "Transparence totale dans la chaîne de valeur",
        caracteristica4: "Soutien aux projets éducatifs communautaires",
        
        // Impacto
        tituloImpacto: "Notre Impact en Chiffres",
        subtituloImpacto: "Le pouvoir transformateur de chaque achat conscient",
        familiasApoyadas: "Familles agricoles soutenues",
        tierraRegenerativa: "Terres sous culture régénérative",
        ingresosComunidades: "Revenus pour les communautés",
        productosPrecioJusto: "Produits à prix équitable",
        custodiaAmbiental: "Gestion Environnementale",
        descCustodia: "Nous promouvons des pratiques qui régénèrent le sol et protègent la biodiversité andine.",
        comunidadesFortalecidas: "Communautés Renforcées",
        descComunidades: "Nous investissons dans l'éducation, la santé et les infrastructures pour les communautés productrices.",
        capacitacionContinua: "Formation Continue",
        descCapacitacion: "Nous formons les agriculteurs aux techniques durables et à la gestion d'entreprise.",
        
        // Carrito - CORREGIDO
        tuCanasta: "Votre Panier",
        canastaVacia: "Votre panier est vide",
        agregarProductos: "Ajoutez des produits biologiques!",
        total: "Total :",
        procederPago: "Passer à la Caisse",
        vaciarCanasta: "Vider le Panier",
        cerrarCarrito: "Fermer",
        
        // Login/Registro
        iniciarSesion: "Se Connecter",
        crearCuenta: "Créer un Compte",
        email: "Adresse Email",
        contrasena: "Mot de Passe",
        confirmarContrasena: "Confirmer le Mot de Passe",
        nombre: "Prénom",
        apellido: "Nom",
        pais: "Pays",
        direccion: "Adresse",
        codigoPostal: "Code Postal",
        celular: "Téléphone",
        recordarme: "Se souvenir de moi",
        olvidasteContrasena: "Mot de passe oublié?",
        yaTienesCuenta: "Vous avez déjà un compte?",
        noTienesCuenta: "Vous n'avez pas de compte?",
        ingresar: "Se Connecter",
        registrar: "S'inscrire",
        cerrarSesion: "Se Déconnecter",
        miPerfil: "Mon Profil",
        misPedidos: "Mes Commandes",
        
        // Footer
        comercioConciencia: "Commerce avec Conscience,",
        consumoProposito: "Consommation avec Intention.",
        tituloProductos: "Produits",
        superfoods: "Superaliments",
        cafeTes: "Café & Thés",
        snacksDulces: "Snacks & Sucreries",
        harinasGranos: "Farines & Céréales",
        tituloEmpresa: "Entreprise",
        nuestraHistoria: "Notre Histoire",
        impactoSocial: "Impact Social",
        trabajaConNosotros: "Travailler avec Nous",
        contacto: "Contact",
        tituloAyuda: "Aide",
        preguntasFrecuentes: "Questions Fréquentes",
        enviosEntregas: "Livraison & Expédition",
        cambiosDevoluciones: "Retours & Échanges",
        guiaProductos: "Guide des Produits",
        derechos: "Tous droits réservés.",
        hechoConAmor: "Fabriqué avec amour dans les Andes péruviennes"
    },
    de: {
        // Navegación
        inicio: "Startseite",
        productos: "Produkte",
        nosotros: "Über uns",
        impacto: "Wirkung",
        carrito: "Warenkorb",
        perfil: "Profil",
        
        // Hero Section
        tituloHeroLine1: "Peruanische Bio",
        tituloHeroHighlight1: "Produkte",
        tituloHeroLine2: "mit",
        tituloHeroHighlight2: "Fairem Preis",
        subtituloHero: "Entdecken Sie den authentischen Reichtum der Anden. Jeder Kauf unterstützt direkt landwirtschaftliche Gemeinden und fördert regenerative Praktiken.",
        explorarProductos: "Produkte erkunden",
        conocerHistoria: "Unsere Geschichte",
        
        // Sellos
        organicoCertificado: "100% Bio-Zertifiziert",
        precioJustoGarantizado: "Fairer Preis Garantiert",
        envasesSostenibles: "Nachhaltige Verpackungen",
        
        // Productos
        productosDestacados: "Unsere Produkt-Highlights",
        subtituloProductos: "Premium-Auswahl aus den peruanischen Anden, mit Liebe und Respekt angebaut",
        verTodos: "Alle Produkte anzeigen",
        precioJusto: "Fairer Preis",
        
        // Nosotros
        tituloNosotros: "Mehr als eine Marke, ein Engagement für",
        tituloNosotrosHighlight: "Ayni",
        textoNosotros1: "In der andinen Weltanschauung repräsentiert <strong>Ayni</strong> die heilige Gegenseitigkeit zwischen Menschen und Pachamama (Mutter Erde). Es ist ein harmonischer Austausch, bei dem jede Handlung eine ausgewogene Antwort hat.",
        textoNosotros2: "Bei Onda Ayni haben wir dieses jahrtausendealte Prinzip zu unserer zentralen Philosophie gemacht. Wir arbeiten <strong>directamente mit Kooperativen kleiner Landwirte</strong> in den Andenregionen zusammen, eliminieren Zwischenhändler und garantieren eine faire Bezahlung, die die konventionellen Marktpreise um bis zu 40% übersteigt.",
        caracteristica1: "Direkter Handel ohne Zwischenhändler",
        caracteristica2: "Regenerative und nachhaltige Landwirtschaft",
        caracteristica3: "Volle Transparenz in der Wertschöpfungskette",
        caracteristica4: "Unterstützung von Bildungsprojekten in der Gemeinschaft",
        
        // Impacto
        tituloImpacto: "Unsere Wirkung in Zahlen",
        subtituloImpacto: "Die transformative Kraft jedes bewussten Kaufs",
        familiasApoyadas: "Landwirtschaftliche Familien unterstützt",
        tierraRegenerativa: "Land unter regenerativem Anbau",
        ingresosComunidades: "Einkommen für Gemeinden",
        productosPrecioJusto: "Produkte mit fairem Preis",
        custodiaAmbiental: "Umweltschutz",
        descCustodia: "Wir fördern Praktiken, die den Boden regenerieren und die andine Biodiversität schützen.",
        comunidadesFortalecidas: "Gestärkte Gemeinden",
        descComunidades: "Wir investieren in Bildung, Gesundheit und Infrastruktur für produzierende Gemeinden.",
        capacitacionContinua: "Kontinuierliche Schulung",
        descCapacitacion: "Wir schulen Landwirte in nachhaltigen Techniken und Betriebsführung.",
        
        // Carrito - CORREGIDO
        tuCanasta: "Ihr Warenkorb",
        canastaVacia: "Ihr Warenkorb ist leer",
        agregarProductos: "Fügen Sie biologische Produkte hinzu!",
        total: "Gesamt:",
        procederPago: "Zur Kasse gehen",
        vaciarCanasta: "Warenkorb leeren",
        cerrarCarrito: "Schließen",
        
        // Login/Registro
        iniciarSesion: "Anmelden",
        crearCuenta: "Konto Erstellen",
        email: "E-Mail-Adresse",
        contrasena: "Passwort",
        confirmarContrasena: "Passwort Bestätigen",
        nombre: "Vorname",
        apellido: "Nachname",
        pais: "Land",
        direccion: "Adresse",
        codigoPostal: "Postleitzahl",
        celular: "Telefonnummer",
        recordarme: "Angemeldet bleiben",
        olvidasteContrasena: "Passwort vergessen?",
        yaTienesCuenta: "Haben Sie bereits ein Konto?",
        noTienesCuenta: "Noch kein Konto?",
        ingresar: "Anmelden",
        registrar: "Registrieren",
        cerrarSesion: "Abmelden",
        miPerfil: "Mein Profil",
        misPedidos: "Meine Bestellungen",
        
        // Footer
        comercioConciencia: "Handel mit Bewusstsein,",
        consumoProposito: "Konsum mit Sinn.",
        tituloProductos: "Produkte",
        superfoods: "Superfoods",
        cafeTes: "Kaffee & Tee",
        snacksDulces: "Snacks & Süßigkeiten",
        harinasGranos: "Mehle & Getreide",
        tituloEmpresa: "Unternehmen",
        nuestraHistoria: "Unsere Geschichte",
        impactoSocial: "Soziale Wirkung",
        trabajaConNosotros: "Arbeiten Sie mit uns",
        contacto: "Kontakt",
        tituloAyuda: "Hilfe",
        preguntasFrecuentes: "Häufig Gestellte Fragen",
        enviosEntregas: "Versand & Lieferung",
        cambiosDevoluciones: "Rückgabe & Umtausch",
        guiaProductos: "Produktführer",
        derechos: "Alle Rechte vorbehalten.",
        hechoConAmor: "Hergestellt mit Liebe in den peruanischen Anden"
    },
    zh: {
        // Navegación
        inicio: "首页",
        productos: "产品",
        nosotros: "关于我们",
        impacto: "影响力",
        carrito: "购物车",
        perfil: "个人资料",
        
        // Hero Section
        tituloHeroLine1: "秘鲁有机",
        tituloHeroHighlight1: "产品",
        tituloHeroLine2: "拥有",
        tituloHeroHighlight2: "公平价格",
        subtituloHero: "探索安第斯山脉的真实财富。每次购买都直接支持农业社区并促进再生实践。",
        explorarProductos: "探索产品",
        conocerHistoria: "我们的故事",
        
        // Sellos
        organicoCertificado: "100%有机认证",
        precioJustoGarantizado: "公平价格保证",
        envasesSostenibles: "可持续包装",
        
        // Productos
        productosDestacados: "我们的特色产品",
        subtituloProductos: "来自秘鲁安第斯山脉的精选产品，以爱心和尊重种植",
        verTodos: "查看所有产品",
        precioJusto: "公平价格",
        
        // Nosotros
        tituloNosotros: "不仅是一个品牌，更是对",
        tituloNosotrosHighlight: "Ayni的承诺",
        textoNosotros1: "在安第斯世界观中，<strong>Ayni</strong>代表了人与帕查妈妈（大地母亲）之间的神圣互惠。这是一种和谐的交換，每一次行动都有平衡的回应。",
        textoNosotros2: "在Onda Ayni，我们已将这一古老原则作为我们的核心理念。我们与安第斯地区的小农合作社直接合作，消除中间商，确保公平的支付，超过传统市场价格高达40%。",
        caracteristica1: "直接贸易，无中间商",
        caracteristica2: "再生和可持续农业",
        caracteristica3: "价值链完全透明",
        caracteristica4: "支持社区教育项目",
        
        // Impacto
        tituloImpacto: "我们的影响力数据",
        subtituloImpacto: "每次有意识购买的变革力量",
        familiasApoyadas: "支持农业家庭",
        tierraRegenerativa: "再生耕作土地",
        ingresosComunidades: "社区收入",
        productosPrecioJusto: "公平价格产品",
        custodiaAmbiental: "环境管理",
        descCustodia: "我们推广再生土壤和保护安第斯生物多样性的实践。",
        comunidadesFortalecidas: "加强的社区",
        descComunidades: "我们为生产社区投资教育、健康和基础设施。",
        capacitacionContinua: "持续培训",
        descCapacitacion: "我们培训农民可持续技术和业务管理。",
        
        // Carrito - CORREGIDO
        tuCanasta: "您的购物车",
        canastaVacia: "您的购物车是空的",
        agregarProductos: "添加一些有机产品！",
        total: "总计：",
        procederPago: "进行结账",
        vaciarCanasta: "清空购物车",
        cerrarCarrito: "关闭",
        
        // Login/Registro
        iniciarSesion: "登录",
        crearCuenta: "创建账户",
        email: "电子邮件地址",
        contrasena: "密码",
        confirmarContrasena: "确认密码",
        nombre: "名字",
        apellido: "姓氏",
        pais: "国家",
        direccion: "地址",
        codigoPostal: "邮政编码",
        celular: "联系电话",
        recordarme: "记住我",
        olvidasteContrasena: "忘记密码？",
        yaTienesCuenta: "已有账户？",
        noTienesCuenta: "没有账户？",
        ingresar: "登录",
        registrar: "注册",
        cerrarSesion: "退出登录",
        miPerfil: "我的资料",
        misPedidos: "我的订单",
        
        // Footer
        comercioConciencia: "有意识的贸易，",
        consumoProposito: "有目的的消费。",
        tituloProductos: "产品",
        superfoods: "超级食品",
        cafeTes: "咖啡 & 茶",
        snacksDulces: "零食 & 甜点",
        harinasGranos: "面粉 & 谷物",
        tituloEmpresa: "公司",
        nuestraHistoria: "我们的故事",
        impactoSocial: "社会影响",
        trabajaConNosotros: "加入我们",
        contacto: "联系我们",
        tituloAyuda: "帮助",
        preguntasFrecuentes: "常见问题",
        enviosEntregas: "运输与交付",
        cambiosDevoluciones: "退货与换货",
        guiaProductos: "产品指南",
        derechos: "版权所有。",
        hechoConAmor: "在秘鲁安第斯山脉用心制作"
    }
};

// ===== VARIABLES GLOBALES =====
let carrito = JSON.parse(localStorage.getItem('carritoOndaAyni')) || [];
let idiomaActual = 'es';
let usuarioActual = JSON.parse(localStorage.getItem('usuarioOndaAyni')) || null;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    actualizarCarritoUI();
    configurarEventos();
    establecerAnoActual();
    configurarIdiomas();
    iniciarAnimaciones();
    crearModalLogin();
    actualizarEstadoUsuario();
    
    // Cargar idioma preferido DESPUÉS de que todo esté configurado
    setTimeout(() => {
        const idiomaGuardado = localStorage.getItem('preferenciaIdioma');
        if (idiomaGuardado && traducciones[idiomaGuardado]) {
            cambiarIdioma(idiomaGuardado, true); // true = sin notificación
        }
    }, 100);
});

// ===== FUNCIONES DE PRODUCTOS =====
function cargarProductos() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = productos.map(producto => `
        <div class="product-card">
            <div class="product-badge">
                <i class="fas fa-certificate"></i> ${traducciones[idiomaActual].precioJusto}
            </div>
            <div class="product-image" style="background: linear-gradient(45deg, ${producto.color}20, ${producto.color}40);">
                <i class="${producto.imagen}" style="color: ${producto.color};"></i>
            </div>
            <div class="product-content">
                <span class="product-category">${producto.categoria}</span>
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-footer">
                    <div class="product-price">
                        S/ ${producto.precio.toFixed(2)} <small>/ ${producto.peso}</small>
                    </div>
                    <button class="add-to-cart" data-id="${producto.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== FUNCIONES DEL CARRITO =====
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const existente = carrito.find(item => item.id === id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    guardarCarrito();
    actualizarCarritoUI();
    mostrarNotificacion(`${producto.nombre} añadido al carrito`);
}

function removerDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarCarritoUI();
    mostrarNotificacion('Producto removido');
}

function vaciarCarrito() {
    if (carrito.length === 0) return;
    
    if (confirm('¿Seguro que deseas vaciar tu carrito?')) {
        carrito = [];
        guardarCarrito();
        actualizarCarritoUI();
        mostrarNotificacion('Carrito vaciado');
    }
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

function guardarCarrito() {
    localStorage.setItem('carritoOndaAyni', JSON.stringify(carrito));
}

function actualizarCarritoUI() {
    // Actualizar contador
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('cartCount').textContent = totalItems;

    // Actualizar items del carrito
    const cartItems = document.getElementById('cartItems');
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>${traducciones[idiomaActual].canastaVacia}</p>
                <p class="empty-subtitle">${traducciones[idiomaActual].agregarProductos}</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = carrito.map(item => `
            <div class="cart-item">
                <div class="cart-item-image" style="background: linear-gradient(45deg, ${item.color}20, ${item.color}40); color: ${item.color};">
                    <i class="${item.imagen}"></i>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nombre}</div>
                    <div class="cart-item-price">S/ ${(item.precio * item.cantidad).toFixed(2)}</div>
                    <div class="cart-item-quantity">${item.cantidad} × S/ ${item.precio.toFixed(2)}</div>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        // Añadir eventos a los botones de eliminar
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                removerDelCarrito(id);
            });
        });
    }

    // Actualizar total
    document.getElementById('cartTotal').textContent = `S/ ${calcularTotal().toFixed(2)}`;
    
    // Actualizar título del carrito - CORRECCIÓN IMPORTANTE
    const cartTitle = document.querySelector('.cart-title');
    if (cartTitle) {
        cartTitle.innerHTML = `
            <i class="fas fa-shopping-basket"></i> ${traducciones[idiomaActual].tuCanasta}
        `;
    }
    
    // Actualizar botones del carrito
    const cartTotalElement = document.querySelector('.cart-total span:first-child');
    if (cartTotalElement) {
        cartTotalElement.textContent = `${traducciones[idiomaActual].total}`;
    }
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.innerHTML = `<i class="fas fa-lock"></i> ${traducciones[idiomaActual].procederPago}`;
    }
    
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.textContent = traducciones[idiomaActual].vaciarCanasta;
    }
}

// ===== FUNCIONES DE UI =====
function configurarEventos() {
    // Botones "Añadir al carrito"
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart')) {
            const btn = e.target.closest('.add-to-cart');
            const id = parseInt(btn.getAttribute('data-id'));
            agregarAlCarrito(id);
        }
    });

    // Carrito
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            abrirCarrito();
        });
    }

    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', cerrarCarrito);
    }

    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', cerrarCarrito);
    }

    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (carrito.length > 0) {
                alert(`¡Gracias por tu compra!\n\nTotal: S/ ${calcularTotal().toFixed(2)}\n\nRedirigiendo al proceso de pago...\n\nEn una implementación real, aquí se integraría una pasarela de pago como PayPal, Stripe o Culqi.`);
                vaciarCarrito();
                cerrarCarrito();
            } else {
                alert('Tu carrito está vacío. Agrega algunos productos primero.');
            }
        });
    }

    // Vaciar carrito
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', vaciarCarrito);
    }

    // Perfil/Login
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            abrirModalLogin();
        });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function abrirCarrito() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function mostrarNotificacion(mensaje) {
    // Crear notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, var(--azul-principal), var(--verde-vibrante));
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(31, 75, 102, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 400px;
    `;
    notificacion.innerHTML = `<i class="fas fa-check-circle"></i> ${mensaje}`;
    document.body.appendChild(notificacion);

    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// ===== FUNCIONES DE IDIOMA =====
function configurarIdiomas() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (!languageBtn || !languageDropdown) return;
    
    // Mostrar/ocultar dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Seleccionar idioma
    languageDropdown.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const nuevoIdioma = this.getAttribute('data-lang');
            cambiarIdioma(nuevoIdioma);
            languageDropdown.style.display = 'none';
        });
    });
    
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function() {
        languageDropdown.style.display = 'none';
    });
}

function cambiarIdioma(idioma, sinNotificacion = false) {
    if (!traducciones[idioma]) return;
    
    idiomaActual = idioma;
    
    // Nombres de idioma para el botón
    const languageNames = {
        es: "Español",
        en: "English", 
        fr: "Français",
        de: "Deutsch",
        zh: "中文"
    };
    
    // Actualizar botón de idioma PRIMERO
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.innerHTML = `
            <i class="fas fa-globe"></i> ${languageNames[idioma]}
            <i class="fas fa-chevron-down"></i>
        `;
    }
    
    // Actualizar navegación
    document.querySelectorAll('.nav-link[href="#inicio"]').forEach(el => {
        el.innerHTML = `<i class="fas fa-home"></i> ${traducciones[idioma].inicio}`;
    });
    
    document.querySelectorAll('.nav-link[href="#productos"]').forEach(el => {
        el.innerHTML = `<i class="fas fa-store"></i> ${traducciones[idioma].productos}`;
    });
    
    document.querySelectorAll('.nav-link[href="#nosotros"]').forEach(el => {
        el.innerHTML = `<i class="fas fa-users"></i> ${traducciones[idioma].nosotros}`;
    });
    
    document.querySelectorAll('.nav-link[href="#impacto"]').forEach(el => {
        el.innerHTML = `<i class="fas fa-handshake"></i> ${traducciones[idioma].impacto}`;
    });
    
    // Actualizar Hero Section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `
            ${traducciones[idioma].tituloHeroLine1} <span class="highlight peru">${traducciones[idioma].tituloHeroHighlight1}</span><br>
            ${traducciones[idioma].tituloHeroLine2} <span class="highlight justo">${traducciones[idioma].tituloHeroHighlight2}</span>
        `;
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = traducciones[idioma].subtituloHero;
    }
    
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.innerHTML = `<i class="fas fa-seedling"></i> ${traducciones[idioma].explorarProductos}`;
    }
    
    const btnSecondary = document.querySelector('.btn-secondary');
    if (btnSecondary) {
        btnSecondary.innerHTML = `<i class="fas fa-handshake"></i> ${traducciones[idioma].conocerHistoria}`;
    }
    
    // Actualizar sellos
    const badges = document.querySelectorAll('.badge-text');
    if (badges.length >= 3) {
        badges[0].textContent = traducciones[idioma].organicoCertificado;
        badges[1].textContent = traducciones[idioma].precioJustoGarantizado;
        badges[2].textContent = traducciones[idioma].envasesSostenibles;
    }
    
    // Actualizar productos
    const sectionTitleProductos = document.querySelector('.products-section .section-title');
    if (sectionTitleProductos) {
        sectionTitleProductos.textContent = traducciones[idioma].productosDestacados;
    }
    
    const sectionSubtitleProductos = document.querySelector('.products-section .section-subtitle');
    if (sectionSubtitleProductos) {
        sectionSubtitleProductos.textContent = traducciones[idioma].subtituloProductos;
    }
    
    const btnOutline = document.querySelector('.btn-outline');
    if (btnOutline) {
        btnOutline.innerHTML = `<i class="fas fa-store"></i> ${traducciones[idioma].verTodos}`;
    }
    
    // Actualizar productos individuales
    cargarProductos();
    
    // Actualizar Nosotros
    const aboutTitle = document.querySelector('.about-text .section-title');
    if (aboutTitle) {
        aboutTitle.innerHTML = `${traducciones[idioma].tituloNosotros} <span class="highlight">${traducciones[idioma].tituloNosotrosHighlight}</span>`;
    }
    
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].innerHTML = traducciones[idioma].textoNosotros1;
        aboutParagraphs[1].innerHTML = traducciones[idioma].textoNosotros2;
    }
    
    const features = document.querySelectorAll('.about-features li');
    if (features.length >= 4) {
        features[0].innerHTML = `<span class="feature-icon"><i class="fas fa-check"></i></span> ${traducciones[idioma].caracteristica1}`;
        features[1].innerHTML = `<span class="feature-icon"><i class="fas fa-check"></i></span> ${traducciones[idioma].caracteristica2}`;
        features[2].innerHTML = `<span class="feature-icon"><i class="fas fa-check"></i></span> ${traducciones[idioma].caracteristica3}`;
        features[3].innerHTML = `<span class="feature-icon"><i class="fas fa-check"></i></span> ${traducciones[idioma].caracteristica4}`;
    }
    
    // Actualizar Impacto
    const impactoTitle = document.querySelector('#impacto .section-title');
    if (impactoTitle) {
        impactoTitle.textContent = traducciones[idioma].tituloImpacto;
    }
    
    const impactoSubtitle = document.querySelector('#impacto .section-subtitle');
    if (impactoSubtitle) {
        impactoSubtitle.textContent = traducciones[idioma].subtituloImpacto;
    }
    
    const impactLabels = document.querySelectorAll('.impact-label');
    if (impactLabels.length >= 4) {
        impactLabels[0].textContent = traducciones[idioma].familiasApoyadas;
        impactLabels[1].textContent = traducciones[idioma].tierraRegenerativa;
        impactLabels[2].textContent = traducciones[idioma].ingresosComunidades;
        impactLabels[3].textContent = traducciones[idioma].productosPrecioJusto;
    }
    
    const detailCards = document.querySelectorAll('.impact-detail-card');
    if (detailCards.length >= 3) {
        detailCards[0].querySelector('h3').textContent = traducciones[idioma].custodiaAmbiental;
        detailCards[0].querySelector('p').textContent = traducciones[idioma].descCustodia;
        detailCards[1].querySelector('h3').textContent = traducciones[idioma].comunidadesFortalecidas;
        detailCards[1].querySelector('p').textContent = traducciones[idioma].descComunidades;
        detailCards[2].querySelector('h3').textContent = traducciones[idioma].capacitacionContinua;
        detailCards[2].querySelector('p').textContent = traducciones[idioma].descCapacitacion;
    }
    
    // Actualizar Footer COMPLETAMENTE
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) {
        footerTagline.innerHTML = `${traducciones[idioma].comercioConciencia}<br>${traducciones[idioma].consumoProposito}`;
    }
    
    // Títulos de las secciones del footer
    const linkTitles = document.querySelectorAll('.link-title');
    if (linkTitles.length >= 3) {
        linkTitles[0].textContent = traducciones[idioma].tituloProductos;
        linkTitles[1].textContent = traducciones[idioma].tituloEmpresa;
        linkTitles[2].textContent = traducciones[idioma].tituloAyuda;
    }
    
    // Enlaces de Productos
    const productosLinks = document.querySelectorAll('.link-group:nth-child(1) .footer-link');
    if (productosLinks.length >= 4) {
        productosLinks[0].textContent = traducciones[idioma].superfoods;
        productosLinks[1].textContent = traducciones[idioma].cafeTes;
        productosLinks[2].textContent = traducciones[idioma].snacksDulces;
        productosLinks[3].textContent = traducciones[idioma].harinasGranos;
    }
    
    // Enlaces de Empresa
    const empresaLinks = document.querySelectorAll('.link-group:nth-child(2) .footer-link');
    if (empresaLinks.length >= 4) {
        empresaLinks[0].textContent = traducciones[idioma].nuestraHistoria;
        empresaLinks[1].textContent = traducciones[idioma].impactoSocial;
        empresaLinks[2].textContent = traducciones[idioma].trabajaConNosotros;
        empresaLinks[3].textContent = traducciones[idioma].contacto;
    }
    
    // Enlaces de Ayuda
    const ayudaLinks = document.querySelectorAll('.link-group:nth-child(3) .footer-link');
    if (ayudaLinks.length >= 4) {
        ayudaLinks[0].textContent = traducciones[idioma].preguntasFrecuentes;
        ayudaLinks[1].textContent = traducciones[idioma].enviosEntregas;
        ayudaLinks[2].textContent = traducciones[idioma].cambiosDevoluciones;
        ayudaLinks[3].textContent = traducciones[idioma].guiaProductos;
    }
    
    // Copyright
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const currentYear = document.getElementById('currentYear').textContent;
        copyright.innerHTML = `&copy; ${currentYear} Onda Ayni. ${traducciones[idioma].derechos}<br><i class="fas fa-heart"></i> ${traducciones[idioma].hechoConAmor}`;
    }
    
    // Actualizar Carrito - IMPORTANTE: Se debe llamar para actualizar textos
    actualizarCarritoUI();
    
    // Actualizar modal de login si existe
    actualizarModalLogin();
    
    // Actualizar estado del usuario
    actualizarEstadoUsuario();
    
    // Guardar preferencia
    localStorage.setItem('preferenciaIdioma', idioma);
    
    // Mostrar notificación (solo si no es la carga inicial)
    if (!sinNotificacion) {
        mostrarNotificacion(`Idioma cambiado a ${languageNames[idioma]}`);
    }
}

// ===== SISTEMA DE LOGIN/REGISTRO =====
function crearModalLogin() {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'login-overlay';
    overlay.id = 'loginOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1998;
        display: none;
        justify-content: center;
        align-items: center;
    `;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'login-modal';
    modal.id = 'loginModal';
    modal.style.cssText = `
        background: white;
        border-radius: 20px;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    `;

    // Contenido del modal (se actualizará dinámicamente)
    modal.innerHTML = `
        <div class="login-header" style="padding: 30px; border-bottom: 2px solid rgba(136, 196, 77, 0.1);">
            <h3 style="font-family: 'Quicksand', sans-serif; font-size: 24px; color: var(--verde-vibrante); margin: 0;">
                <i class="fas fa-user-circle"></i> <span id="loginTitle">${traducciones[idiomaActual].iniciarSesion}</span>
            </h3>
            <button class="close-login" id="closeLogin" style="position: absolute; top: 25px; right: 25px; background: none; border: none; font-size: 24px; color: var(--texto-claro); cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="login-content" style="padding: 30px;" id="loginContent">
            <!-- El contenido se cargará dinámicamente -->
        </div>
        <div class="login-footer" style="padding: 20px 30px; border-top: 2px solid rgba(136, 196, 77, 0.1); text-align: center;" id="loginFooter">
            <!-- El footer se cargará dinámicamente -->
        </div>
    `;

    // Añadir al body
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Configurar eventos
    document.getElementById('closeLogin').addEventListener('click', cerrarModalLogin);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            cerrarModalLogin();
        }
    });

    // Cargar formulario de login por defecto
    cargarFormularioLogin();
}

function cargarFormularioLogin() {
    const content = document.getElementById('loginContent');
    const footer = document.getElementById('loginFooter');
    const title = document.getElementById('loginTitle');

    if (!content || !footer || !title) return;

    title.textContent = traducciones[idiomaActual].iniciarSesion;

    content.innerHTML = `
        <form id="loginForm" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
                <label for="loginEmail" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                    <i class="fas fa-envelope"></i> ${traducciones[idiomaActual].email}
                </label>
                <input type="email" id="loginEmail" required style="width: 100%; padding: 15px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px; transition: border-color 0.3s;">
            </div>
            <div class="form-group">
                <label for="loginPassword" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                    <i class="fas fa-lock"></i> ${traducciones[idiomaActual].contrasena}
                </label>
                <input type="password" id="loginPassword" required style="width: 100%; padding: 15px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px; transition: border-color 0.3s;">
            </div>
            <div class="form-options" style="display: flex; justify-content: space-between; align-items: center;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input type="checkbox" id="rememberMe">
                    <span>${traducciones[idiomaActual].recordarme}</span>
                </label>
                <a href="#" id="forgotPassword" style="color: var(--verde-vibrante); text-decoration: none; font-size: 14px;">
                    ${traducciones[idiomaActual].olvidasteContrasena}
                </a>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 10px; padding: 16px; font-size: 16px; font-weight: 600;">
                <i class="fas fa-sign-in-alt"></i> ${traducciones[idiomaActual].ingresar}
            </button>
        </form>
    `;

    footer.innerHTML = `
        <p style="margin: 0; color: var(--texto-claro);">
            ${traducciones[idiomaActual].noTienesCuenta}
            <a href="#" id="switchToRegister" style="color: var(--verde-vibrante); font-weight: 600; text-decoration: none;">
                ${traducciones[idiomaActual].crearCuenta}
            </a>
        </p>
    `;

    // Configurar eventos
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        iniciarSesion();
    });

    document.getElementById('switchToRegister').addEventListener('click', function(e) {
        e.preventDefault();
        cargarFormularioRegistro();
    });
}

function cargarFormularioRegistro() {
    const content = document.getElementById('loginContent');
    const footer = document.getElementById('loginFooter');
    const title = document.getElementById('loginTitle');

    if (!content || !footer || !title) return;

    title.textContent = traducciones[idiomaActual].crearCuenta;

    content.innerHTML = `
        <form id="registerForm" style="display: flex; flex-direction: column; gap: 15px;">
            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="form-group">
                    <label for="registerNombre" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                        <i class="fas fa-user"></i> ${traducciones[idiomaActual].nombre}
                    </label>
                    <input type="text" id="registerNombre" required style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
                </div>
                <div class="form-group">
                    <label for="registerApellido" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                        <i class="fas fa-user"></i> ${traducciones[idiomaActual].apellido}
                    </label>
                    <input type="text" id="registerApellido" required style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
                </div>
            </div>
            
            <div class="form-group">
                <label for="registerEmail" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                    <i class="fas fa-envelope"></i> ${traducciones[idiomaActual].email}
                </label>
                <input type="email" id="registerEmail" required style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
            </div>
            
            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="form-group">
                    <label for="registerPassword" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                        <i class="fas fa-lock"></i> ${traducciones[idiomaActual].contrasena}
                    </label>
                    <input type="password" id="registerPassword" required style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
                </div>
                <div class="form-group">
                    <label for="registerConfirmPassword" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                        <i class="fas fa-lock"></i> ${traducciones[idiomaActual].confirmarContrasena}
                    </label>
                    <input type="password" id="registerConfirmPassword" required style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
                </div>
            </div>
            
            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="form-group">
                    <label for="registerPais" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                        <i class="fas fa-globe-americas"></i> ${traducciones[idiomaActual].pais}
                    </label>
                    <select id="registerPais" required style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px; background: white;">
                        <option value="">${traducciones[idiomaActual].seleccionar}</option>
                        <option value="peru">Perú</option>
                        <option value="argentina">Argentina</option>
                        <option value="chile">Chile</option>
                        <option value="colombia">Colombia</option>
                        <option value="mexico">México</option>
                        <option value="usa">Estados Unidos</option>
                        <option value="spain">España</option>
                        <option value="france">Francia</option>
                        <option value="germany">Alemania</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="registerCelular" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                        <i class="fas fa-phone"></i> ${traducciones[idiomaActual].celular}
                    </label>
                    <input type="tel" id="registerCelular" style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
                </div>
            </div>
            
            <div class="form-group">
                <label for="registerDireccion" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                    <i class="fas fa-map-marker-alt"></i> ${traducciones[idiomaActual].direccion}
                </label>
                <input type="text" id="registerDireccion" style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
            </div>
            
            <div class="form-group">
                <label for="registerCodigoPostal" style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--texto-oscuro);">
                    <i class="fas fa-mail-bulk"></i> ${traducciones[idiomaActual].codigoPostal}
                </label>
                <input type="text" id="registerCodigoPostal" style="width: 100%; padding: 12px; border: 2px solid rgba(136, 196, 77, 0.3); border-radius: 10px; font-size: 16px;">
            </div>
            
            <button type="submit" class="btn btn-primary" style="margin-top: 10px; padding: 16px; font-size: 16px; font-weight: 600;">
                <i class="fas fa-user-plus"></i> ${traducciones[idiomaActual].registrar}
            </button>
        </form>
    `;

    footer.innerHTML = `
        <p style="margin: 0; color: var(--texto-claro);">
            ${traducciones[idiomaActual].yaTienesCuenta}
            <a href="#" id="switchToLogin" style="color: var(--verde-vibrante); font-weight: 600; text-decoration: none;">
                ${traducciones[idiomaActual].iniciarSesion}
            </a>
        </p>
    `;

    // Configurar eventos
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        registrarUsuario();
    });

    document.getElementById('switchToLogin').addEventListener('click', function(e) {
        e.preventDefault();
        cargarFormularioLogin();
    });
}

function cargarPerfilUsuario() {
    const content = document.getElementById('loginContent');
    const footer = document.getElementById('loginFooter');
    const title = document.getElementById('loginTitle');

    if (!content || !footer || !title || !usuarioActual) return;

    title.textContent = traducciones[idiomaActual].miPerfil;

    content.innerHTML = `
        <div class="user-profile" style="text-align: center;">
            <div class="user-avatar" style="width: 100px; height: 100px; background: linear-gradient(45deg, var(--azul-principal), var(--verde-vibrante)); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 40px;">
                <i class="fas fa-user"></i>
            </div>
            <h4 style="color: var(--texto-oscuro); margin-bottom: 5px;">${usuarioActual.nombre} ${usuarioActual.apellido}</h4>
            <p style="color: var(--texto-claro); margin-bottom: 30px;">${usuarioActual.email}</p>
            
            <div class="user-info" style="text-align: left; background: #f8f9fa; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <i class="fas fa-globe-americas" style="color: var(--verde-vibrante); width: 24px;"></i>
                    <span style="margin-left: 10px;"><strong>${traducciones[idiomaActual].pais}:</strong> ${usuarioActual.pais}</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <i class="fas fa-map-marker-alt" style="color: var(--verde-vibrante); width: 24px;"></i>
                    <span style="margin-left: 10px;"><strong>${traducciones[idiomaActual].direccion}:</strong> ${usuarioActual.direccion || 'No especificada'}</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-phone" style="color: var(--verde-vibrante); width: 24px;"></i>
                    <span style="margin-left: 10px;"><strong>${traducciones[idiomaActual].celular}:</strong> ${usuarioActual.celular || 'No especificado'}</span>
                </div>
            </div>
            
            <button id="verPedidos" class="btn btn-secondary" style="width: 100%; margin-bottom: 15px;">
                <i class="fas fa-shopping-bag"></i> ${traducciones[idiomaActual].misPedidos}
            </button>
        </div>
    `;

    footer.innerHTML = `
        <button id="cerrarSesionBtn" class="btn" style="background: rgba(239, 71, 111, 0.1); color: var(--rojo-acento); border: none; width: 100%; padding: 15px; font-weight: 600; border-radius: 10px;">
            <i class="fas fa-sign-out-alt"></i> ${traducciones[idiomaActual].cerrarSesion}
        </button>
    `;

    // Configurar eventos
    document.getElementById('cerrarSesionBtn').addEventListener('click', cerrarSesion);
}

function actualizarModalLogin() {
    if (usuarioActual) {
        cargarPerfilUsuario();
    } else {
        // Actualizar textos del formulario actual
        const title = document.getElementById('loginTitle');
        if (title) {
            title.textContent = usuarioActual ? traducciones[idiomaActual].miPerfil : traducciones[idiomaActual].iniciarSesion;
        }
        
        // Actualizar todos los textos dentro del modal
        const modal = document.getElementById('loginModal');
        if (modal) {
            // Esta función se llama desde cambiarIdioma, así que el contenido ya debería estar actualizado
        }
    }
}

function abrirModalLogin() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Cargar el contenido apropiado según el estado del usuario
        if (usuarioActual) {
            cargarPerfilUsuario();
        } else {
            cargarFormularioLogin();
        }
    }
}

function cerrarModalLogin() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function iniciarSesion() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // En una implementación real, aquí harías una petición al servidor
    // Por ahora, simulamos un usuario de prueba
    if (email && password) {
        usuarioActual = {
            email: email,
            nombre: email.split('@')[0],
            apellido: "Usuario",
            pais: "Perú",
            direccion: "Av. Principal 123",
            celular: "+51 987 654 321",
            fechaRegistro: new Date().toISOString()
        };
        
        localStorage.setItem('usuarioOndaAyni', JSON.stringify(usuarioActual));
        actualizarEstadoUsuario();
        cargarPerfilUsuario();
        mostrarNotificacion(`${traducciones[idiomaActual].iniciarSesion} exitoso`);
    } else {
        alert('Por favor ingresa email y contraseña');
    }
}

function registrarUsuario() {
    const nombre = document.getElementById('registerNombre').value;
    const apellido = document.getElementById('registerApellido').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const pais = document.getElementById('registerPais').value;
    const celular = document.getElementById('registerCelular').value;
    const direccion = document.getElementById('registerDireccion').value;
    const codigoPostal = document.getElementById('registerCodigoPostal').value;
    
    // Validaciones básicas
    if (!nombre || !apellido || !email || !password || !confirmPassword || !pais) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    // Registrar usuario
    usuarioActual = {
        email: email,
        nombre: nombre,
        apellido: apellido,
        pais: pais,
        celular: celular,
        direccion: direccion,
        codigoPostal: codigoPostal,
        fechaRegistro: new Date().toISOString()
    };
    
    localStorage.setItem('usuarioOndaAyni', JSON.stringify(usuarioActual));
    actualizarEstadoUsuario();
    cargarPerfilUsuario();
    mostrarNotificacion(`${traducciones[idiomaActual].crearCuenta} exitoso`);
}

function cerrarSesion() {
    usuarioActual = null;
    localStorage.removeItem('usuarioOndaAyni');
    actualizarEstadoUsuario();
    cargarFormularioLogin();
    mostrarNotificacion('Sesión cerrada');
}

function actualizarEstadoUsuario() {
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        if (usuarioActual) {
            // Cambiar el icono a un usuario con check
            profileBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
            profileBtn.title = usuarioActual.nombre;
        } else {
            // Volver al icono original
            profileBtn.innerHTML = `<i class="fas fa-user-circle"></i>`;
            profileBtn.title = traducciones[idiomaActual].perfil;
        }
    }
}

// ===== ANIMACIONES =====
function iniciarAnimaciones() {
    // Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Aplicar a elementos con animación
    document.querySelectorAll('.product-card, .impact-card, .badge').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== UTILIDADES =====
function establecerAnoActual() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Añadir estilos CSS para animaciones y modal
const estiloAnimacion = document.createElement('style');
estiloAnimacion.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .product-card {
        animation: fadeIn 0.6s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Estilos para el modal de login */
    .login-modal input:focus,
    .login-modal select:focus {
        outline: none;
        border-color: var(--verde-vibrante) !important;
        box-shadow: 0 0 0 3px rgba(136, 196, 77, 0.2);
    }
    
    .login-modal .btn-primary {
        background: var(--gradiente-verde);
        color: white;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .login-modal .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(136, 196, 77, 0.3);
    }
    
    .login-modal .btn-secondary {
        background: white;
        color: var(--azul-principal);
        border: 2px solid var(--azul-principal);
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .login-modal .btn-secondary:hover {
        background: var(--azul-principal);
        color: white;
    }
    
    @media (max-width: 576px) {
        .login-modal .form-row {
            grid-template-columns: 1fr !important;
        }
    }
`;
document.head.appendChild(estiloAnimacion);