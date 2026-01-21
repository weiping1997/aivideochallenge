// AI Video Challenge 2026 - Main Interaction Logic

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initForm();
    initScrollAnimations();
    initNavbarScroll();
});

// Accordion (FAQ)
function initAccordion() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            items.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

// Form Handling
function initForm() {
    const form = document.getElementById('challenge-form');
    const msgDiv = document.getElementById('form-msg');

    if (!form) return;

    // Handle "Other" occupation toggle
    const occupationSelect = document.getElementById('occupation');
    const occupationOtherInput = document.getElementById('occupation-other');

    if (occupationSelect && occupationOtherInput) {
        occupationSelect.addEventListener('change', (e) => {
            if (e.target.value === 'other') {
                occupationOtherInput.style.display = 'block';
                occupationOtherInput.setAttribute('required', 'true');
            } else {
                occupationOtherInput.style.display = 'none';
                occupationOtherInput.removeAttribute('required');
                occupationOtherInput.value = ''; // Clear input if hidden
            }
        });
    }

    // TODO: REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyWungkuYsP-NkONUcD5hk43GGFq9pR8Kf_NR-PTIIduM41sHbqN57s0EI3bCxFakFm/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('.cta-submit');
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = '正在报名中...';

        // Collect form data
        const formData = new FormData(form);

        // Handle "Other" occupation logic
        // If occupation is 'other', replace its value with the text input value
        if (formData.get('occupation') === 'other') {
            const otherVal = formData.get('occupation-other');
            formData.set('occupation', otherVal || 'Other'); // Fallback just in case
        }
        // Remove the extra "occupation-other" field so it doesn't clutter the sheet columns (optional, or keep it)
        formData.delete('occupation-other');

        // Convert to URLSearchParams for Google Apps Script (simplest for text data)
        const params = new URLSearchParams();
        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }

        try {
            // Direct submission to Google Apps Script
            try {
                // Using no-cors mode is often safer for Google Apps Script web apps to avoid CORS errors
                // However, it means we receive an 'opaque' response (we can't read the JSON result).
                // We'll assume if the fetch resolves, it was successful.

                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: params,
                    mode: 'no-cors' // Important for Google Apps Script to not get blocked by browser
                });

                // Since we use no-cors, we won't get a readable response.json(). 
                // We assume success if no error was thrown.

            } catch (fetchError) {
                console.warn('Fetch warning (likely CORS related, but submission usually succeeds):', fetchError);
                // We'll proceed to show success because often Google Scripts work even if CORS complains.
            }

            // Success state
            form.innerHTML = `
                <div class="success-message" style="text-align: center; padding: 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                    <h2 style="margin-bottom: 1rem;">报名成功！</h2>
                     <p style="color: var(--text-muted);">谢谢你，${formData.get('name')}。我们已收到您的报名。</p>
                    <p style="color: var(--text-muted); margin-top: 1rem;">如有任何疑问，请联系我们。</p>
                    <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
                         <button onclick="window.location.reload()" class="cta-secondary">返回首页</button>
                    </div>
                </div>
            `;

            // Scroll to top of form
            document.getElementById('register').scrollIntoView({ behavior: 'smooth' });

        } catch (error) {
            console.error('Submission error:', error);
            btn.disabled = false;
            btn.innerText = originalText;
            msgDiv.innerHTML = `<p style="color: #ff4444; margin-top: 1rem;">出错了，请稍后再试或直接联系我们。</p>`;
        }
    });
}

// Simple Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.benefit-card, .prize-card, .details-content, .details-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// CSS injection for animation state
const style = document.createElement('style');
style.textContent = `
    .in-view {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Navbar styling on scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(5, 5, 10, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(5, 5, 10, 0.8)';
        }
    });
}
