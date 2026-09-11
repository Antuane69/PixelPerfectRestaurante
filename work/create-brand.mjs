import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Sprout } from 'lucide-react';
import { writeFileSync } from 'node:fs';
writeFileSync('public/images/restaurant/brand.svg', renderToStaticMarkup(createElement(Sprout, { color: '#ce496f', size: 32, strokeWidth: 1.4 })));
