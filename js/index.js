// WhatsApp cart integration
// Set your phone number in international format (no + or 00)
const WA_PHONE = '59169609667';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.pro-container');
	if (!container) return;

	container.addEventListener('click', (e) => {
		// If clicked the cart icon/button, open WhatsApp
		const cartBtn = e.target.closest('.cart');
		if (cartBtn) {
			e.preventDefault();
			const card = cartBtn.closest('.pro-cont');
			if (!card) return;
			const name = card.dataset.name || card.querySelector('.des h3')?.innerText.trim() || 'Producto';
			const price = card.dataset.price || card.querySelector('.des .price h4')?.innerText.trim() || '';
			const qty = 1;
			const message = `Hola, quiero comprar: ${name} - Precio: ${price} - Cantidad: ${qty}`;
			const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
			window.open(waUrl, '_blank');
			return;
		}

		// Otherwise, if clicked inside a product card and the card has a data-link, navigate there
		const card = e.target.closest('.pro-cont');
		if (card && card.dataset.link) {
			// Avoid navigation when clicking on native links or buttons inside the card
			const nativeLink = e.target.closest('a');
			if (nativeLink && nativeLink.classList.contains('cart')) {
				// already handled above
				return;
			}
			window.location.href = card.dataset.link;
		}
	});
});

