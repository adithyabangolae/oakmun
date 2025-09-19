document.addEventListener('DOMContentLoaded', () => {

    const countdownDate = new Date("September 19, 2025 07:29:00").getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(updateCountdown);
            // Improved live behavior: announce, animate, and celebrate with confetti
            const timerEl = document.getElementById("countdown-timer");
            const announceText = "OAKMUN Is Live!";

            function showLiveAnnouncement() {
                if (timerEl) {
                    // update text and animate using Web Animations API where available
                    timerEl.textContent = announceText;
                    try {
                        // ensure the live text uses the accent color
                        timerEl.style.color = 'var(--accent-color)';
                        timerEl.animate([
                            { transform: 'scale(0.9)', opacity: 0.6 },
                            { transform: 'scale(1.06)', opacity: 1 },
                            { transform: 'scale(1)', opacity: 1 }
                        ], { duration: 1400, easing: 'cubic-bezier(.2,.9,.2,1)' });
                    } catch (e) {
                        // fallback: add a quick inline style pulse
                        timerEl.style.transition = 'transform 0.6s ease, color 0.6s ease';
                        timerEl.style.transform = 'scale(1.03)';
                        timerEl.style.color = 'var(--accent-color)';
                        setTimeout(() => timerEl.style.transform = '', 700);
                    }
                } else {
                    // If no timer element is present, create a temporary banner
                    const banner = document.createElement('div');
                    banner.id = 'live-banner';
                    banner.textContent = announceText;
                    Object.assign(banner.style, {
                        position: 'fixed',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(90deg,var(--accent-color),var(--sec-accent-color))',
                        color: 'var(--bg-color)',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        zIndex: 9999,
                        boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                    });
                    document.body.appendChild(banner);
                    setTimeout(() => banner.remove(), 7000);
                }
            }

            // Simple confetti using DOM elements + CSS keyframes inserted once
            function launchConfetti(duration = 6000, particleCount = 120) {
                // avoid launching multiple times
                if (document.getElementById('confetti-container')) return;

                const styleId = 'confetti-keyframes';
                if (!document.getElementById(styleId)) {
                    const style = document.createElement('style');
                    style.id = styleId;
                    style.innerHTML = `
                        @keyframes confetti-fall {
                            from { top: -12vh; opacity: 1; transform: rotate(0deg); }
                            to { top: 100vh; opacity: 0.95; transform: rotate(600deg); }
                        }
                        @keyframes confetti-spin { from { transform: rotate(0deg); } to { transform: rotate(720deg); } }
                    `;
                    document.head.appendChild(style);
                }

                const container = document.createElement('div');
                container.id = 'confetti-container';
                Object.assign(container.style, {
                    position: 'fixed',
                    pointerEvents: 'none',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                    zIndex: 9998
                });

                const colors = ['#FFD700', '#1e96a5', '#e76f51', '#06d6a0', '#118ab2', '#f4a261'];

                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'confetti-piece';
                    const size = Math.floor(Math.random() * 10) + 7; // 7-16px
                    const left = Math.random() * 100; // percent
                    const delay = Math.random() * 0.8; // seconds
                    const durationSec = (Math.random() * 1.6) + 2.8; // 2.8 - 4.4s
                    const color = colors[Math.floor(Math.random() * colors.length)];

                    Object.assign(particle.style, {
                        position: 'absolute',
                        left: left + '%',
                        // start slightly above the viewport so items fall into view
                        top: '-8vh',
                        width: size + 'px',
                        height: (size * (Math.random() * 0.6 + 0.6)) + 'px',
                        background: color,
                        opacity: 0.95,
                        // start with no translate so the 'top' animation drives the fall
                        transform: `rotate(0deg)`,
                        willChange: 'top, transform, opacity',
                        borderRadius: (Math.random() > 0.5 ? '2px' : '50%'),
                        animation: `confetti-fall ${durationSec}s cubic-bezier(.2,.8,.2,1) ${delay}s forwards, confetti-spin ${durationSec}s linear ${delay}s forwards`
                    });

                    container.appendChild(particle);
                }

                document.body.appendChild(container);

                // Clean up after duration + small buffer
                setTimeout(() => {
                    container.remove();
                    const k = document.getElementById(styleId);
                    if (k) k.remove();
                }, duration + 1200);
            }

            // Trigger announcement and confetti
            showLiveAnnouncement();
            launchConfetti(7000, 140);
        }
    }, 1000);
    const lazyScrollingContainer = document.querySelector('.lazy-scrolling-container');
    const carousel = lazyScrollingContainer.querySelector('.carousel');

    carousel.innerHTML += carousel.innerHTML;

    const scrollSpeed = 1;
    let scrollInterval;

    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            lazyScrollingContainer.scrollLeft += scrollSpeed;
            if (lazyScrollingContainer.scrollLeft >= carousel.scrollWidth / 2) {
                lazyScrollingContainer.scrollLeft = 0;
            }
        }, 16);
    }


    startAutoScroll();



});

const circle1 = document.getElementById('bubble-1');
const circle2 = document.getElementById('bubble-2');
const circle3 = document.getElementById('bubble-3');
const initialTop1 = parseFloat(getComputedStyle(circle1).top);
const initialTop2 = parseFloat(getComputedStyle(circle2).top);
const initialTop3 = parseFloat(getComputedStyle(circle3).top);
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let delay = 0;
function animate() {
    const bobAmount = 10;
    const bobSpeed = 0.040;

    const offsetY1 = Math.sin(angle1) * bobAmount;
    circle1.style.top = `${initialTop1 + offsetY1}px`;
    angle1 += bobSpeed;
    if (delay >= 0.3) {
        const offsetY2 = Math.sin(angle2) * bobAmount;
        circle2.style.top = `${initialTop2 + offsetY2}px`;
        angle2 += bobSpeed;
    }
    if (delay >= 0.6) {
        const offsetY3 = Math.sin(angle3) * bobAmount;
        circle3.style.top = `${initialTop3 + offsetY3}px`;
        angle3 += bobSpeed;
    }
    delay += bobSpeed;
    requestAnimationFrame(animate);
}

animate();

const updatesData = [
    {
        title: "EBs for Commitees have been revealed!",
        caption: "View EB information on our social media or the committee pages.",
        time: "September 10th, 2025",
        image: "im6.png"
    },
    {
        title: "Early bird registrations closes today!",
        caption: "Sign up now to save money before normal registrations open!",
        time: "August 28th, 2025",
        image: "im3.jpeg"
    },
    {
        title: "Conference details out!",
        caption: "View the conference details page to understand schedule, arrangements and more!",
        time: "August 20th, 2025",
        image: "im4.jpeg"
    },
    {
        title: "Early bird registrations are now open!",
        caption: "Sign up now to secure your spot NOW! Don't miss out!",
        time: "August 20th, 2025",
        image: "im3.jpeg"
    },
    {
        title: "HCC Committee Updated!",
        caption: "New Agenda for the HCC committee, pertaining to the 6 day war.",
        time: "August 11th, 2025",
        image: "im5.jpeg"
    },
    {
        title: "Committees released and website up!",
        caption: "New committees have been released and the website is now live.",
        time: "July 31st, 2025",
        image: "im2.jpeg"
    }
];
const heroContainer = document.getElementById("updates-hero");

// Grab only the first update
const firstUpdate = updatesData[0];

if (firstUpdate) {
  const heroCard = document.createElement("div");
  heroCard.className = "update-card";

  heroCard.innerHTML = `
    <img src="${"/update_page/"+firstUpdate.image}" alt="${firstUpdate.title}" 
         style="width: 100%; border-radius: 10px; margin-bottom: 0.75rem; 
         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);"> 
    <h3>${firstUpdate.title}</h3>
    <p>${firstUpdate.caption}</p>
    <span class="time">${firstUpdate.time}</span>
  `;

  heroContainer.appendChild(heroCard);
}
