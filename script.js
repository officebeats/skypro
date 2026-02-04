// Sky Pro Redesign - Interactive JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileToggle.classList.toggle("active");
    });
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      faqItems.forEach((other) => other.classList.remove("active"));

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".product-card, .testimonial-card, .gallery-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // Add visible class styles
  const style = document.createElement("style");
  style.textContent = `
        .animate-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
  document.head.appendChild(style);

  // Video play button
  const playButton = document.getElementById("playDemo");
  if (playButton) {
    playButton.addEventListener("click", () => {
      // Open a modal or redirect to demo video
      window.open("https://www.youtube.com/watch?v=demo", "_blank");
    });
  }

  // Quote form handling - Integrated with FormSubmit.co
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const formData = new FormData(quoteForm);
      const data = Object.fromEntries(formData);

      // Explicitly set the subject line
      data["_subject"] = `Sky Pro Lead: ${data.first_name} ${data.last_name}`;

      // Show engineering state
      submitBtn.disabled = true;
      submitBtn.textContent = "Engineering your quote...";

      try {
        const response = await fetch(
          "https://formsubmit.co/ajax/ernesto+skypro@getroute.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          },
        );

        if (response.ok) {
          // Success state
          quoteForm.innerHTML = `
                    <div class="form-success animate-fadeIn" style="text-align: center; padding: 2rem 0;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
                        <h3 style="color: white; margin-bottom: 1rem;">Inquiry Received!</h3>
                        <p style="color: rgba(255,255,255,0.8);">Thank you, ${data.first_name}. Your project details have been sent to the engineering team. We will reach out to you via ${data.email} shortly.</p>
                        <button onclick="location.reload()" class="btn btn-white" style="margin-top: 2rem; color: var(--color-primary);">Send Another</button>
                    </div>
                `;
        } else {
          const result = await response.json();
          console.error("FormSubmit Error:", result);
          submitBtn.textContent = "Server Error. Try again.";
          submitBtn.disabled = false;
        }
      } catch (error) {
        console.error("Network Error:", error);

        // Handle the common file:// protocol restriction
        if (window.location.protocol === "file:") {
          alert(
            "Security Restriction: Browsers block form submissions when opening HTML files directly (file://). Please run this via a local server (like Live Server) or upload it to a host.",
          );
          submitBtn.textContent = "Local File Error";
        } else {
          submitBtn.textContent = "Network Error. Check connection.";
        }
        submitBtn.disabled = false;
      }
    });
  }

  // Update copyright year
  const copyrightYear = document.querySelector(".footer-bottom p");
  if (copyrightYear) {
    copyrightYear.innerHTML = `© ${new Date().getFullYear()} Sky Pro® Automated Window & Facade Cleaning Technology. All rights reserved.`;
  }

  // Add stagger animation to products
  document
    .querySelectorAll(".products-grid .product-card")
    .forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });

  // Add stagger animation to testimonials
  document
    .querySelectorAll(".testimonials-grid .testimonial-card")
    .forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
    });

  // Counter animation for stats
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target + (element.dataset.suffix || "");
        clearInterval(timer);
      } else {
        element.textContent =
          Math.floor(start) + (element.dataset.suffix || "");
      }
    }, 16);
  };

  // Observe stat values for animation
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const value = entry.target.textContent;
          const numericValue = parseInt(value.replace(/\D/g, ""));
          const suffix = value.replace(/\d/g, "");

          entry.target.dataset.suffix = suffix;
          entry.target.textContent = "0" + suffix;
          animateCounter(entry.target, numericValue);

          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(".stat-value").forEach((stat) => {
    statObserver.observe(stat);
  });

  console.log("Sky Pro Redesign initialized successfully!");
});
