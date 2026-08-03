// Dumpster bookings are handled by Kletz Dumpsters (kletzdumpsters.com), a
// separate booking platform. This panel replaces the old on-site booking form
// that posted to /api/dumpster-service/book.
export const KD_SITE = "https://kletzdumpsters.com"
export const KD_BOOK = "https://kletzdumpsters.com/booking"
export const KD_SIZES = "https://kletzdumpsters.com/dumpster-sizes"

export default function DumpsterBookingCTA({
    id = "booking-form",
    title = "Book Your Dumpster in Minutes",
    description = "Dumpster rentals are booked through Kletz Dumpsters, our dedicated roll-off division. Pick your size, see your exact price, and lock in a delivery date — all online.",
}) {
    return (
        <div className="cta-area text-center mt-60" id={id}>
            <div style={{
                backgroundColor: '#1a1c1e',
                borderRadius: '8px',
                padding: '50px 40px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
                <a href={KD_SITE} target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/img/logo/kletz-dumpsters-logo.svg"
                        alt="Kletz Dumpsters"
                        style={{ maxWidth: '260px', width: '100%', marginBottom: '25px' }}
                    />
                </a>
                <h2 style={{ color: 'white', marginBottom: '15px' }}>{title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '30px' }}>
                    {description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                    <a
                        href={KD_BOOK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            background: 'linear-gradient(to right,#ce202f,#a81a26)',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: '600',
                            padding: '15px 40px',
                            border: 'none',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                        }}
                    >
                        <i className="fas fa-truck" style={{ marginRight: '10px' }}></i>
                        Book Online Now
                    </a>
                    <a
                        href={KD_SIZES}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            background: 'transparent',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: '600',
                            padding: '15px 40px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                        }}
                    >
                        View Sizes & Pricing
                    </a>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '25px', marginBottom: 0 }}>
                    Prefer to talk it through? Call{' '}
                    <a href="tel:4122197279" style={{ color: '#d4a845', fontWeight: 'bold' }}>(412) 219-7279</a>
                </p>
            </div>
        </div>
    )
}
