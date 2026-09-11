import { Clock3, Gift, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

// Replace the demo content with the restaurant's offer. Use ISO timestamps
// with a timezone for dates, or null for an open-ended campaign.
const promotion: {
    enabled: boolean;
    demo: boolean;
    startsAt: string | null;
    endsAt: string | null;
    title: string;
    benefit: string;
    schedule: string;
    description: string;
    conditions: string[];
} = {
    enabled: true,
    demo: true,
    startsAt: null,
    endsAt: null,
    title: 'Martes de pasta',
    benefit: 'Tu segunda pasta al 50%',
    schedule: 'Martes · 13:00–22:00',
    description:
        'Una buena pasta sabe mejor en compañía. Elige dos pastas de la casa y comparte el antojo.',
    conditions: [
        'El descuento aplica a la pasta de igual o menor precio.',
        'Válido únicamente para consumo en el restaurante.',
        'No acumulable con otras promociones. Sujeto a disponibilidad.',
    ],
};

export function RestaurantPromotion({ onContact }: { onContact: () => void }) {
    const [open, setOpen] = useState(false);
    const now = Date.now();
    const active =
        promotion.enabled &&
        (promotion.startsAt === null ||
            now >= Date.parse(promotion.startsAt)) &&
        (promotion.endsAt === null || now < Date.parse(promotion.endsAt));

    if (!active) return null;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <aside
                className="promotion-bar"
                aria-label="Promoción del restaurante"
            >
                <div className="promotion-bar-copy">
                    <Gift size={18} aria-hidden="true" />
                    <p>
                        <strong>{promotion.title}</strong>
                        <span className="promotion-bar-benefit">
                            {' '}
                            · {promotion.benefit}
                        </span>
                        {promotion.demo && (
                            <span className="promotion-demo">Ejemplo</span>
                        )}
                    </p>
                </div>
                <DialogTrigger asChild>
                    <button className="promotion-link">
                        Ver promoción{' '}
                        <ArrowRight size={16} aria-hidden="true" />
                    </button>
                </DialogTrigger>
            </aside>
            <DialogContent className="restaurant-promotion">
                <img
                    className="promotion-photo"
                    src="/images/restaurant/pasta.jpg"
                    alt="Pasta de la casa con tomates cherry y albahaca"
                />
                <div className="promotion-details">
                    <p className="promotion-eyebrow">
                        {promotion.demo
                            ? 'Promoción de ejemplo'
                            : 'Para compartir y disfrutar'}
                    </p>
                    <DialogTitle>{promotion.title}</DialogTitle>
                    <p className="promotion-benefit">{promotion.benefit}</p>
                    <DialogDescription>
                        {promotion.description}
                    </DialogDescription>
                    <p className="promotion-schedule">
                        <Clock3 size={18} aria-hidden="true" />
                        {promotion.schedule}
                    </p>
                    {promotion.demo && (
                        <p className="promotion-demo-notice">
                            Esta oferta es ilustrativa y todavía no está
                            disponible para canjear.
                        </p>
                    )}
                    <div className="promotion-conditions">
                        <h3>
                            Condiciones{promotion.demo ? ' de ejemplo' : ''}
                        </h3>
                        <ul>
                            {promotion.conditions.map((condition) => (
                                <li key={condition}>{condition}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className="promotion-contact"
                        onClick={() => {
                            setOpen(false);
                            onContact();
                        }}
                    >
                        Consultar promoción{' '}
                        <MessageCircle size={18} aria-hidden="true" />
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
