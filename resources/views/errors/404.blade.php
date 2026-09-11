<!DOCTYPE html>
<html lang="es-MX">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex">
        <meta name="color-scheme" content="light">
        <title>Página no encontrada | Restaurante Pixel Perfect</title>
        <link rel="icon" href="/images/restaurant/brand.svg" type="image/svg+xml">
        <style>
            * { box-sizing: border-box; }
            body { margin: 0; background: #fdfaf8; color: #2b142a; font-family: Arial, sans-serif; }
            .page { min-height: 100vh; min-height: 100svh; display: flex; flex-direction: column; }
            header { padding: 28px 24px; text-align: center; }
            .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; font-family: Georgia, serif; font-size: 19px; font-weight: bold; }
            .brand img { width: 36px; height: 36px; object-fit: contain; }
            main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 36px 24px 64px; text-align: center; }
            .content { width: 100%; max-width: 580px; }
            .code { margin: 0; color: #ce496f; font-family: Georgia, serif; font-size: clamp(100px, 23vw, 160px); line-height: 1; letter-spacing: -.06em; }
            .eyebrow { margin: 20px 0 16px; font-size: 11px; font-weight: bold; letter-spacing: .14em; text-transform: uppercase; }
            h1 { margin: 0 0 20px; font-family: Georgia, serif; font-size: clamp(30px, 6vw, 44px); font-weight: normal; line-height: 1.15; }
            .description { max-width: 430px; margin: 0 auto; color: #665561; font-size: 16px; line-height: 1.7; }
            .actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
            .button { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 14px 24px; border: 1px solid #2b142a; border-radius: 6px; color: #fff; background: #2b142a; font-size: 14px; font-weight: bold; text-decoration: none; }
            .button:hover { background: #4d2948; }
            .secondary { color: #2b142a; border-color: #ffd0dc; background: #ffd0dc; }
            .secondary:hover { background: #f6b9cb; }
            a:focus-visible { outline: 3px solid #ac3e69; outline-offset: 5px; }
            footer { padding: 20px 24px; border-top: 1px solid #eee4e8; text-align: center; color: #665561; font-size: 12px; }
            @media (max-width: 380px) { .actions { flex-direction: column; } }
        </style>
    </head>
    <body>
        <div class="page">
            <header>
                <a class="brand" href="/" aria-label="Pixel Perfect, inicio">
                    <img src="/images/restaurant/pixel-perfect-mark.png" alt="">
                    <span>PIXEL PERFECT</span>
                </a>
            </header>
            <main>
                <div class="content">
                    <p class="code">404</p>
                    <p class="eyebrow">Página no encontrada</p>
                    <h1>Esta página no está en el menú</h1>
                    <p class="description">Puede que el enlace haya cambiado o que la dirección no sea correcta. Vuelve al inicio o descubre algo rico en nuestro menú.</p>
                    <nav class="actions" aria-label="Continuar navegando">
                        <a class="button" href="/">Volver al inicio</a>
                        <a class="button secondary" href="/menu">Ver menú</a>
                    </nav>
                </div>
            </main>
            <footer>Restaurante Pixel Perfect · Cocina con alma</footer>
        </div>
    </body>
</html>
