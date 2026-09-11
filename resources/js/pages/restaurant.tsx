import { Head, Link } from '@inertiajs/react';
import { Image } from 'antd';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { RestaurantPromotion } from '@/components/restaurant-promotion';
import {
    ArrowRight,
    BookOpen,
    Camera,
    ChefHat,
    Clock3,
    Gift,
    Heart,
    Images,
    Leaf,
    MapPin,
    Menu as MenuIcon,
    MessageCircle,
    ShoppingBag,
    Sprout,
    Utensils,
    X,
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from '@/components/ui/dialog';
import '../../css/restaurant.css';

const categories = [
    'Todo',
    'Entradas',
    'Platos fuertes',
    'Ensaladas',
    'Bebidas',
    'Postres',
];
const dishes = [
    {
        name: 'Pasta de la casa',
        category: 'Platos fuertes',
        price: 185,
        image: 'pasta',
        description: 'Salsa cremosa, tomates cherry y albahaca.',
    },
    {
        name: 'Hamburguesa artesanal',
        category: 'Platos fuertes',
        price: 165,
        image: 'hamburguesa',
        description: 'Carne a la parrilla, queso y papas doradas.',
    },
    {
        name: 'Ensalada del huerto',
        category: 'Ensaladas',
        price: 145,
        image: 'ensalada',
        description: 'Hojas frescas, aguacate y vegetales de temporada.',
    },
    {
        name: 'Bruschettas',
        category: 'Entradas',
        price: 85,
        image: 'bruschettas',
        description: 'Pan tostado, tomate y albahaca fresca.',
    },
    {
        name: 'Limonada natural',
        category: 'Bebidas',
        price: 45,
        image: 'limonada',
        description: 'Limón recién exprimido y un toque de frescura.',
    },
    {
        name: 'Tarta de frutos rojos',
        category: 'Postres',
        price: 95,
        image: 'tarta',
        description: 'El final dulce perfecto para tu comida.',
    },
];
const photo = (name: string) => '/images/restaurant/' + name + '.jpg';
const exampleAddress =
    'Av. México s/n, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX';
const encodedAddress = encodeURIComponent(exampleAddress);
const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const benefits = [
    {
        icon: Leaf,
        title: 'Ingredientes de calidad',
        text: 'Productos frescos y locales para un sabor auténtico.',
    },
    {
        icon: ChefHat,
        title: 'Cocina con pasión',
        text: 'Recetas cuidadas en cada detalle.',
    },
    {
        icon: Heart,
        title: 'Ambiente único',
        text: 'Un lugar para compartir y crear buenos recuerdos.',
    },
    {
        icon: Gift,
        title: 'Atención cercana',
        text: 'Te recibimos como en casa, siempre con una sonrisa.',
    },
];

type SocialNetwork = 'facebook' | 'instagram' | 'tiktok';

const socialLinks: Array<{
    name: string;
    type: SocialNetwork;
    href: string;
}> = [
    {
        name: 'Facebook',
        type: 'facebook',
        href: 'https://www.facebook.com/',
    },
    {
        name: 'Instagram',
        type: 'instagram',
        href: 'https://www.instagram.com/',
    },
    {
        name: 'TikTok',
        type: 'tiktok',
        href: 'https://www.tiktok.com/',
    },
];

const galleryCategories = ['Todo', 'El espacio', 'Nuestra cocina', 'Momentos'];
const galleryPhotos = [
    {
        image: 'interior',
        category: 'El espacio',
        title: 'Un rincón para compartir',
        alt: 'Interior cálido del restaurante con mesas de madera y plantas',
    },
    {
        image: 'hero',
        category: 'Nuestra cocina',
        title: 'El sabor de la casa',
        alt: 'Pasta de la casa servida en una mesa del restaurante',
    },
    {
        image: 'takeaway',
        category: 'Momentos',
        title: 'También para llevar',
        alt: 'Presentación de comida para llevar del restaurante',
    },
    {
        image: 'pasta',
        category: 'Nuestra cocina',
        title: 'Pasta hecha al momento',
        alt: 'Pasta cremosa con tomates cherry y albahaca',
    },
    {
        image: 'hamburguesa',
        category: 'Nuestra cocina',
        title: 'Nuestra hamburguesa artesanal',
        alt: 'Hamburguesa artesanal acompañada de papas doradas',
    },
    {
        image: 'ensalada',
        category: 'Nuestra cocina',
        title: 'Fresco y de temporada',
        alt: 'Ensalada del huerto con aguacate y vegetales frescos',
    },
    {
        image: 'bruschettas',
        category: 'Momentos',
        title: 'Para comenzar juntos',
        alt: 'Bruschettas para compartir con tomate y albahaca',
    },
    {
        image: 'limonada',
        category: 'Momentos',
        title: 'Sobremesas que se alargan',
        alt: 'Limonada natural servida en la mesa',
    },
    {
        image: 'tarta',
        category: 'Nuestra cocina',
        title: 'El momento dulce',
        alt: 'Tarta de frutos rojos preparada en el restaurante',
    },
];

function SocialIcon({ type }: { type: SocialNetwork }) {
    if (type === 'facebook') {
        return (
            <svg
                className="social-icon social-facebook"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M14.2 8.4V6.7c0-.8.5-1 1-1h2.6V2.1L15.1 2c-3.4 0-5.5 2-5.5 5.6v.8H6.7v4h2.9V22h4.6v-9.6h3.2l.5-4h-3.7Z" />
            </svg>
        );
    }

    if (type === 'tiktok') {
        return (
            <svg
                className="social-icon social-tiktok"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M15.4 2c.3 2.5 1.7 4 4.2 4.2v3.5a8.6 8.6 0 0 1-4.2-1.2v6.6a6.8 6.8 0 1 1-5.9-6.7v3.7a3.2 3.2 0 1 0 2.3 3V2h3.6Z" />
            </svg>
        );
    }

    return (
        <svg
            className="social-icon social-instagram"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.7" r="1" className="social-dot" />
        </svg>
    );
}

export default function Restaurant({
    view = 'home',
}: {
    view?: 'home' | 'menu' | 'gallery';
}) {
    const isMenu = view === 'menu';
    const isGallery = view === 'gallery';
    const [category, setCategory] = useState('Todo');
    const [galleryCategory, setGalleryCategory] = useState('Todo');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const visibleMenuSections = categories
        .filter((item) => item !== 'Todo')
        .filter((item) => category === 'Todo' || item === category)
        .map((name) => ({
            name,
            dishes: dishes.filter((dish) => dish.category === name),
        }));
    const visibleDishCount = visibleMenuSections.reduce(
        (total, section) => total + section.dishes.length,
        0,
    );
    const visibleGalleryPhotos = galleryPhotos.filter(
        (item) =>
            galleryCategory === 'Todo' || item.category === galleryCategory,
    );
    const menuLink = (label = 'Ver menú completo', dark = false) => (
        <Link
            className={'restaurant-button ' + (dark ? 'button-dark' : '')}
            href="/menu"
        >
            {label}
            <ArrowRight size={17} />
        </Link>
    );
    return (
        <div className="restaurant">
            <Head
                title={
                    isMenu
                        ? 'Nuestro menú | Restaurante Pixel Perfect'
                        : isGallery
                          ? 'Galería | Restaurante Pixel Perfect'
                          : 'Restaurante Pixel Perfect'
                }
            >
                <meta
                    name="description"
                    content="Cocina hecha con cariño. Descubre los platillos, bebidas y postres de Restaurante Pixel Perfect."
                />
            </Head>
            <a href="#contenido" className="skip-link">
                Saltar al contenido
            </a>
            <header className="restaurant-header">
                <Link
                    className="wordmark"
                    href="/"
                    aria-label="Pixel Perfect, inicio"
                >
                    <span className="pixel-perfect-lockup" aria-hidden="true">
                        <img
                            className="pixel-perfect-mark"
                            src="/images/restaurant/pixel-perfect-mark.png"
                            alt=""
                        />
                        <span className="pixel-perfect-name">
                            <span className="pixel-perfect-pixel">PIXEL</span>
                            <span className="pixel-perfect-perfect">
                                PERFECT
                            </span>
                        </span>
                    </span>
                    <Sprout aria-hidden="true" />
                </Link>
                <button
                    className="mobile-toggle"
                    aria-label={
                        mobileOpen ? 'Cerrar navegación' : 'Abrir navegación'
                    }
                    aria-expanded={mobileOpen}
                    aria-controls="restaurant-nav"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X /> : <MenuIcon />}
                </button>
                <nav
                    id="restaurant-nav"
                    className={mobileOpen ? 'navigation is-open' : 'navigation'}
                    aria-label="Navegación principal"
                >
                    <Link
                        href="/"
                        aria-current={view === 'home' ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/menu"
                        aria-current={isMenu ? 'page' : undefined}
                        onClick={() => {
                            setMobileOpen(false);
                            setCategory('Todo');
                        }}
                    >
                        Menú
                    </Link>
                    <Link
                        href="/galeria"
                        aria-current={isGallery ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                    >
                        Galería
                    </Link>
                    <button
                        className="restaurant-button header-cta"
                        onClick={() => {
                            setMobileOpen(false);
                            setContactOpen(true);
                        }}
                    >
                        {isMenu ? 'Contactar' : 'Pedir para llevar'}
                        {isMenu ? (
                            <MessageCircle size={18} />
                        ) : (
                            <ShoppingBag size={18} />
                        )}
                    </button>
                </nav>
            </header>
            <RestaurantPromotion onContact={() => setContactOpen(true)} />
            <main id="contenido">
                {view === 'home' ? (
                    <>
                        <section className="restaurant-hero">
                            <img
                                src={photo('hero')}
                                alt="Pasta cremosa con albahaca y parmesano en nuestra mesa"
                                fetchPriority="high"
                            />
                            <div className="hero-shade" />
                            <div className="hero-content">
                                <h1>
                                    Sabores que
                                    <br />
                                    cuentan historias
                                </h1>
                                <p>
                                    Cocina hecha con cariño, para disfrutar aquí
                                    <br className="desktop-break" /> o donde
                                    quieras.
                                </p>
                                <div className="button-row">
                                    {menuLink('Ver menú')}
                                    <button
                                        className="restaurant-button button-outline"
                                        onClick={() => setContactOpen(true)}
                                    >
                                        Pedir para llevar
                                        <ShoppingBag size={17} />
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="favorites section-wrap">
                            <div className="section-heading">
                                <div>
                                    <p className="script-label">
                                        Nuestros favoritos
                                    </p>
                                    <p className="eyebrow">
                                        PLATOS QUE HACEN LA VIDA MÁS RICA
                                    </p>
                                </div>
                                <Link href="/menu" className="text-link">
                                    Descubre todos los sabores{' '}
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div className="food-mosaic">
                                <Image.PreviewGroup>
                                    <div className="mosaic-photo mosaic-pasta">
                                        <Image
                                            src={photo('pasta')}
                                            alt="Pasta de la casa"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mosaic-photo mosaic-burger">
                                        <Image
                                            src={photo('hamburguesa')}
                                            alt="Hamburguesa artesanal"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mosaic-photo mosaic-salad">
                                        <Image
                                            src={photo('ensalada')}
                                            alt="Ensalada del huerto"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mosaic-photo mosaic-cake">
                                        <Image
                                            src={photo('tarta')}
                                            alt="Tarta de frutos rojos"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mosaic-photo mosaic-drink">
                                        <Image
                                            src={photo('limonada')}
                                            alt="Limonada natural"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mosaic-photo mosaic-toast">
                                        <Image
                                            src={photo('bruschettas')}
                                            alt="Bruschettas de tomate y albahaca"
                                            loading="lazy"
                                        />
                                    </div>
                                    <blockquote>
                                        <span aria-hidden="true">“</span>
                                        <p>
                                            Cada plato tiene
                                            <br />
                                            algo que contar.
                                        </p>
                                        <cite>Restaurante Pixel Perfect</cite>
                                    </blockquote>
                                    <div className="mosaic-photo mosaic-extra">
                                        <Image
                                            src={photo('pasta')}
                                            alt="Descubre la cocina de la casa"
                                            loading="lazy"
                                        />
                                    </div>
                                </Image.PreviewGroup>
                            </div>
                        </section>
                        {/*
                        <section className="home-menu section-wrap">
                            <div className="section-heading">
                                <div>
                                    <p className="script-label">Nuestro menú</p>
                                    <h2>Un antojo para cada momento</h2>
                                </div>
                                {menuLink('Ver todo el menú')}
                            </div>
                            <div className="preview-grid">
                                {dishes
                                    .filter((d) => d.image !== 'bruschettas')
                                    .map((dish) => (
                                        <Link
                                            href="/menu"
                                            className="preview-dish"
                                            key={dish.name}
                                        >
                                            <img
                                                src={photo(dish.image)}
                                                alt={dish.name}
                                                loading="lazy"
                                            />
                                            <h3>{dish.name}</h3>
                                            <span className="dish-price">
                                                ${dish.price} <small>MXN</small>
                                            </span>
                                            <p>{dish.description}</p>
                                        </Link>
                                    ))}
                            </div>
                        </section>
                        */}
                        <section className="gallery-teaser section-wrap">
                            <div className="gallery-teaser-copy">
                                <div>
                                    <p className="script-label">Galería</p>
                                    <h2>
                                        Conoce el lugar donde nacen los buenos
                                        momentos
                                    </h2>
                                </div>
                                <p>
                                    Un vistazo a nuestra mesa, nuestra cocina y
                                    esos pequeños detalles que hacen especial
                                    cada visita.
                                </p>
                                <Link
                                    href="/galeria"
                                    className="restaurant-button button-dark"
                                >
                                    Ver galería completa
                                    <Images size={18} />
                                </Link>
                            </div>
                            <div className="gallery-teaser-grid">
                                <Link
                                    href="/galeria"
                                    className="gallery-teaser-main"
                                    aria-label="Ver galería: interior del restaurante"
                                >
                                    <img
                                        src={photo('interior')}
                                        alt="Interior cálido de nuestro restaurante"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/galeria"
                                    aria-label="Ver galería: nuestra mesa"
                                >
                                    <img
                                        src={photo('hero')}
                                        alt="Pasta servida en nuestra mesa"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/galeria"
                                    className="gallery-teaser-last"
                                    aria-label="Ver las nueve fotos de la galería"
                                >
                                    <img
                                        src={photo('bruschettas')}
                                        alt="Bruschettas listas para compartir"
                                        loading="lazy"
                                    />
                                    <span>
                                        <Camera size={18} />9 fotos
                                    </span>
                                </Link>
                            </div>
                        </section>
                        <section id="nosotros" className="about-section">
                            <div className="about-inner section-wrap">
                                <div className="about-copy">
                                    <p className="script-label">
                                        Nuestra cocina
                                    </p>
                                    <h2>
                                        Hecho al momento,
                                        <br />
                                        con ingredientes frescos
                                    </h2>
                                    <p>
                                        Cocina de gran sabor, con alma casera.
                                        <br />
                                        Ingredientes de calidad, recetas que
                                        inspiran.
                                    </p>
                                    <div className="cuisine-features">
                                        {[
                                            {
                                                icon: Leaf,
                                                title: 'Ingredientes frescos',
                                                text: 'Lo mejor de cada temporada.',
                                            },
                                            {
                                                icon: ChefHat,
                                                title: 'Hecho al momento',
                                                text: 'Cocina al instante para más sabor.',
                                            },
                                            {
                                                icon: Utensils,
                                                title: 'Para todos los gustos',
                                                text: 'Opciones para cada antojo.',
                                            },
                                            {
                                                icon: Heart,
                                                title: 'Ambiente acogedor',
                                                text: 'Buena comida, mejores momentos.',
                                            },
                                        ].map((item) => (
                                            <div key={item.title}>
                                                <item.icon strokeWidth={1.2} />
                                                <h3>{item.title}</h3>
                                                <p>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="/menu"
                                        className="restaurant-button button-dark"
                                    >
                                        Ver menú completo
                                        <BookOpen size={18} />
                                    </Link>
                                </div>
                                <img
                                    className="about-photo"
                                    src={photo('interior')}
                                    alt="Nuestro restaurante, cálido y acogedor, con mesas de madera y plantas"
                                    loading="lazy"
                                />
                            </div>
                        </section>
                        <section className="benefits section-wrap">
                            <h2>¿Por qué elegir Restaurante Pixel Perfect?</h2>
                            <div className="benefit-grid">
                                {benefits.map((item) => (
                                    <div className="benefit" key={item.title}>
                                        <item.icon strokeWidth={1.1} />
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section id="ubicacion" className="location-section">
                            <div className="location-copy">
                                <p className="eyebrow accent">
                                    VISÍTANOS <span>—</span>
                                </p>
                                <h2>Estamos cerca de ti</h2>
                                <p>
                                    <MapPin />
                                    <span>
                                        Av. México s/n, Hipódromo
                                        <br />
                                        Cuauhtémoc, 06100 CDMX
                                    </span>
                                </p>
                                <p>
                                    <Clock3 />
                                    <span>Lun–Dom · 13:00–22:00</span>
                                </p>
                                <a
                                    className="restaurant-button"
                                    href={mapsSearchUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Explorar la zona
                                    <MapPin size={17} />
                                </a>
                            </div>
                            <div className="location-visual">
                                <img
                                    src={photo('interior')}
                                    alt="Un espacio para compartir buena comida"
                                    loading="lazy"
                                />
                                <div className="visit-card">
                                    <span className="round-icon">
                                        <MapPin />
                                    </span>
                                    <h3>
                                        Tu próxima
                                        <br />
                                        comida te espera
                                    </h3>
                                    <p>
                                        Tu mesa, tus personas favoritas
                                        <br />y algo delicioso.
                                    </p>
                                    <button
                                        className="restaurant-button"
                                        onClick={() => setContactOpen(true)}
                                    >
                                        Contactar
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="takeaway section-wrap">
                            <div>
                                <p className="script-label">
                                    Tu comida, donde quieras
                                </p>
                                <h2>Tu antojo, para llevar</h2>
                                <p>
                                    Disfruta nuestros platillos en la comodidad
                                    <br />
                                    de tu casa, oficina o donde estés.
                                </p>
                                <button
                                    className="restaurant-button"
                                    onClick={() => setContactOpen(true)}
                                >
                                    Pedir para llevar
                                    <ArrowRight size={17} />
                                </button>
                            </div>
                            <img
                                src={photo('takeaway')}
                                alt="Empaques para llevar de Restaurante Pixel Perfect"
                                loading="lazy"
                            />
                            <div className="takeaway-steps">
                                {[
                                    'Elige tus platillos',
                                    'Contáctanos para pedir',
                                    'Recoge y disfruta',
                                ].map((step, index) => (
                                    <div key={step}>
                                        <span>{index + 1}</span>
                                        <p>{step}</p>
                                    </div>
                                ))}
                                <p>Buena comida, también fuera de casa.</p>
                            </div>
                        </section>
                    </>
                ) : isMenu ? (
                    <section className="menu-page section-wrap">
                        <div className="menu-intro">
                            <p className="script-label">
                                De nuestra cocina a tu mesa
                            </p>
                            <h1>Nuestro menú</h1>
                            <p>
                                Ingredientes frescos, recetas con cariño y algo
                                delicioso para cada antojo.
                            </p>
                        </div>
                        <div className="menu-toolbar">
                            <div
                                className="category-filters"
                                aria-label="Filtrar platillos por categoría"
                            >
                                {categories.map((item) => (
                                    <button
                                        key={item}
                                        aria-pressed={category === item}
                                        className={
                                            category === item ? 'selected' : ''
                                        }
                                        onClick={() => setCategory(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                            <button
                                className="restaurant-button button-dark menu-toolbar-contact"
                                onClick={() => setContactOpen(true)}
                            >
                                Contactar
                                <MessageCircle size={18} />
                            </button>
                        </div>
                        <div className="menu-banner">
                            <img
                                src={photo('hero')}
                                alt="Pasta recién preparada, el sabor de la casa"
                            />
                            <div className="hero-shade" />
                            <div>
                                <h2>El sabor de la casa</h2>
                                <p>Descubre nuestros favoritos.</p>
                                <Sprout strokeWidth={1} />
                            </div>
                        </div>
                        <p className="sr-only" role="status">
                            {visibleDishCount} platillos en {category}
                        </p>
                        <div className="menu-sections">
                            {visibleMenuSections.map((section, index) => (
                                <section
                                    className="menu-section"
                                    key={section.name}
                                    aria-labelledby={`menu-section-${index}`}
                                >
                                    <div className="menu-section-heading">
                                        <div>
                                            <p className="eyebrow">
                                                SECCIÓN{' '}
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </p>
                                            <h2 id={`menu-section-${index}`}>
                                                {section.name}
                                            </h2>
                                        </div>
                                        <span>
                                            {section.dishes.length}{' '}
                                            {section.dishes.length === 1
                                                ? 'opción'
                                                : 'opciones'}
                                        </span>
                                    </div>
                                    <div className="menu-grid">
                                        {section.dishes.map((dish) => (
                                            <article
                                                className="menu-dish"
                                                key={dish.name}
                                            >
                                                <img
                                                    src={photo(dish.image)}
                                                    alt={dish.name}
                                                    loading="lazy"
                                                />
                                                <div>
                                                    <h2>{dish.name}</h2>
                                                    <p>{dish.description}</p>
                                                    <span className="dish-price">
                                                        ${dish.price}
                                                    </span>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                        <p className="price-note">Precios de ejemplo en MXN</p>
                    </section>
                ) : (
                    <section className="gallery-page">
                        <div className="gallery-hero section-wrap">
                            <div>
                                <p className="script-label">Nuestra galería</p>
                                <h1>Historias servidas en imágenes</h1>
                            </div>
                        </div>
                        <div className="gallery-content section-wrap">
                            <div
                                className="gallery-filters"
                                aria-label="Filtrar fotografías por categoría"
                            >
                                {galleryCategories.map((item) => (
                                    <button
                                        key={item}
                                        aria-pressed={galleryCategory === item}
                                        className={
                                            galleryCategory === item
                                                ? 'selected'
                                                : ''
                                        }
                                        onClick={() => setGalleryCategory(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                            <p className="sr-only" role="status">
                                {visibleGalleryPhotos.length} fotografías en{' '}
                                {galleryCategory}
                            </p>
                            <Image.PreviewGroup>
                                <div className="gallery-grid">
                                    {visibleGalleryPhotos.map((item, index) => (
                                        <figure
                                            className={`gallery-card gallery-card-${index + 1}`}
                                            key={`${item.image}-${item.title}`}
                                        >
                                            <Image
                                                src={photo(item.image)}
                                                alt={item.alt}
                                                loading="lazy"
                                                classNames={{
                                                    cover: 'gallery-cover',
                                                }}
                                                preview={{
                                                    cover: {
                                                        coverNode: (
                                                            <span className="gallery-mask">
                                                                <Camera
                                                                    size={20}
                                                                />
                                                                Ver foto
                                                            </span>
                                                        ),
                                                        placement: 'center',
                                                    },
                                                }}
                                            />
                                            <figcaption>
                                                <span>{item.category}</span>
                                                <strong>{item.title}</strong>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            </Image.PreviewGroup>
                        </div>
                    </section>
                )}
                <aside
                    className="restaurant-social-rail"
                    aria-label="Síguenos en redes sociales"
                >
                    {socialLinks.slice(0, 2).map((social) => (
                        <div
                            className="restaurant-social-slot"
                            key={social.name}
                        >
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visitar ${social.name}`}
                                title={social.name}
                            >
                                <SocialIcon type={social.type} />
                                <span>{social.name}</span>
                            </a>
                        </div>
                    ))}
                </aside>
            </main>
            {view === 'home' ? (
                <section
                    className="restaurant-footer section-wrap"
                    aria-labelledby="restaurant-footer-heading"
                >
                <div className="footer-content">
                    <div className="footer-heading">
                        <Link
                            id="restaurant-footer-heading"
                            className="footer-brand"
                            href="/"
                        >
                            Restaurante
                            <br />
                            Pixel Perfect <Sprout />
                        </Link>
                        <p className="footer-eyebrow">COCINA CON ALMA</p>
                    </div>
                    <p className="footer-message">
                        Una mesa para compartir, sabores para recordar.
                    </p>
                    <div className="footer-details">
                        <p>
                            <MapPin size={19} />
                            <span>
                                Av. México s/n, Hipódromo
                                <br />
                                Cuauhtémoc, 06100 CDMX
                            </span>
                        </p>
                        <p>
                            <Clock3 size={19} />
                            <span>Lun–Dom · 13:00–22:00</span>
                        </p>
                    </div>
                    <div className="footer-actions">
                        <div
                            className="footer-socials"
                            aria-label="Redes sociales"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Visitar ${social.name}`}
                                    title={social.name}
                                >
                                    <SocialIcon type={social.type} />
                                </a>
                            ))}
                        </div>
                        <Link className="footer-gallery-link" href="/galeria">
                            Ver galería <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
                <div className="footer-map">
                    <iframe
                        src={mapsEmbedUrl}
                        title={`Mapa de ${exampleAddress}`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                    <a
                        className="footer-map-label"
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MapPin size={18} />
                        <span>
                            Roma–Condesa
                            <small>Abrir en Google Maps</small>
                        </span>
                        <ArrowRight size={16} />
                    </a>
                </div>
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Restaurante Pixel Perfect.
                        Todos los derechos reservados.
                    </p>
                    <nav aria-label="Navegación del pie de página">
                        <Link href="/">Inicio</Link>
                        <Link href="/menu">Menú</Link>
                        <Link href="/galeria">Galería</Link>
                    </nav>
                </div>
                </section>
            ) : null}
            <SiteFooter />
            <Dialog open={contactOpen} onOpenChange={setContactOpen}>
                <DialogContent className="restaurant-contact">
                    <Sprout className="contact-leaf" />
                    <DialogTitle>Hablemos de tu próximo antojo</DialogTitle>
                    <DialogDescription>
                        Para consultar disponibilidad y hacer pedidos para
                        llevar.
                    </DialogDescription>
                    <div className="contact-notice">
                        <MessageCircle />
                        <p>
                            Próximamente compartiremos aquí nuestro teléfono y
                            correo de contacto.
                        </p>
                    </div>
                    <p className="contact-hours">
                        <Clock3 size={18} />
                        Lun–Dom · 13:00–22:00
                    </p>
                    <button
                        className="restaurant-button button-dark"
                        onClick={() => {
                            setContactOpen(false);
                            window.location.assign('/menu');
                        }}
                    >
                        Mientras tanto, explora el menú
                        <ArrowRight size={18} />
                    </button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
