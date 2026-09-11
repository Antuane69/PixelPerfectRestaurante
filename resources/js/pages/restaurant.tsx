import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    ArrowRight,
    BookOpen,
    ChefHat,
    Clock3,
    Gift,
    Heart,
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

export default function Restaurant({
    view = 'home',
}: {
    view?: 'home' | 'menu';
}) {
    const isMenu = view === 'menu';
    const [category, setCategory] = useState('Todo');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const visibleDishes = dishes.filter(
        (dish) => category === 'Todo' || dish.category === category,
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
                    aria-label="Restaurante Pixel Perfect, inicio"
                >
                    Restaurante Pixel Perfect <Sprout aria-hidden="true" />
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
                        aria-current={!isMenu ? 'page' : undefined}
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
                        href="/#nosotros"
                        onClick={() => setMobileOpen(false)}
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/#ubicacion"
                        onClick={() => setMobileOpen(false)}
                    >
                        Ubicación
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
            <main id="contenido">
                {!isMenu ? (
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
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-pasta"
                                >
                                    <img
                                        src={photo('pasta')}
                                        alt="Pasta de la casa"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-burger"
                                >
                                    <img
                                        src={photo('hamburguesa')}
                                        alt="Hamburguesa artesanal"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-salad"
                                >
                                    <img
                                        src={photo('ensalada')}
                                        alt="Ensalada del huerto"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-cake"
                                >
                                    <img
                                        src={photo('tarta')}
                                        alt="Tarta de frutos rojos"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-drink"
                                >
                                    <img
                                        src={photo('limonada')}
                                        alt="Limonada natural"
                                        loading="lazy"
                                    />
                                </Link>
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-toast"
                                >
                                    <img
                                        src={photo('bruschettas')}
                                        alt="Bruschettas de tomate y albahaca"
                                        loading="lazy"
                                    />
                                </Link>
                                <blockquote>
                                    <span aria-hidden="true">“</span>
                                    <p>
                                        Cada plato tiene
                                        <br />
                                        algo que contar.
                                    </p>
                                    <cite>Restaurante Pixel Perfect</cite>
                                </blockquote>
                                <Link
                                    href="/menu"
                                    className="mosaic-photo mosaic-extra"
                                >
                                    <img
                                        src={photo('pasta')}
                                        alt="Descubre la cocina de la casa"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                        </section>
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
                                        Ubicación de ejemplo · Ciudad de México
                                        <br />
                                        Col. Roma Norte, CDMX
                                    </span>
                                </p>
                                <p>
                                    <Clock3 />
                                    <span>Lun–Dom · 13:00–22:00</span>
                                </p>
                                <a
                                    className="restaurant-button"
                                    href="https://www.google.com/maps/search/?api=1&query=Roma+Norte+Ciudad+de+Mexico"
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
                ) : (
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
                            {visibleDishes.length} platillos en {category}
                        </p>
                        <div className="menu-grid">
                            {visibleDishes.map((dish) => (
                                <article className="menu-dish" key={dish.name}>
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
                        <p className="price-note">Precios de ejemplo en MXN</p>
                        <div className="contact-band">
                            <Sprout strokeWidth={0.8} aria-hidden="true" />
                            <div>
                                <h2>¿Se te antojó algo?</h2>
                                <p>
                                    Escríbenos para consultar disponibilidad o
                                    planear tu visita.
                                </p>
                            </div>
                            <button
                                className="restaurant-button button-dark"
                                onClick={() => setContactOpen(true)}
                            >
                                <MessageCircle size={20} />
                                Contactar
                            </button>
                        </div>
                    </section>
                )}
            </main>
            <footer className="restaurant-footer section-wrap">
                <Link className="footer-brand" href="/">
                    Restaurante
                    <br />
                    Pixel Perfect <Sprout />
                </Link>
                <div className="footer-details">
                    <p>
                        <MapPin size={18} />
                        <span>
                            Ubicación de ejemplo · Ciudad de México
                            <br />
                            Col. Roma Norte, CDMX
                        </span>
                    </p>
                    <p>
                        <Clock3 size={18} />
                        Lun–Dom · 13:00–22:00
                    </p>
                </div>
                <div className="footer-right">
                    <Link href="/menu">
                        Nuestro menú <ArrowRight size={15} />
                    </Link>
                    <p>
                        © {new Date().getFullYear()} Restaurante Pixel Perfect.
                        <br />
                        Todos los derechos reservados.
                    </p>
                </div>
            </footer>
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
