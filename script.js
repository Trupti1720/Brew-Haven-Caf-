const menuItems = [
    {
        category: "coffee",
        name: "Cappuccino",
        price: 220,
        description: "Bold espresso with silky steamed milk and a refined foam finish.",
        badge: "Signature",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
        alt: "Cappuccino coffee"
    },
    {
        category: "coffee",
        name: "Latte",
        price: 240,
        description: "Smooth espresso layered with velvety milk and elegant latte art.",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80&auto=format&fit=crop",
        alt: "Latte coffee"
    },
    {
        category: "coffee",
        name: "Espresso",
        price: 180,
        description: "A concentrated double shot with dark chocolate notes and crema.",
        badge: "Classic",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80",
        alt: "Espresso coffee"
    },
    {
        category: "coffee",
        name: "Mocha",
        price: 260,
        description: "Espresso blended with dark chocolate and steamed milk for a richer finish.",
        badge: "Velvety",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80",
        alt: "Mocha coffee"
    },
    {
        category: "coffee",
        name: "Cold Brew",
        price: 250,
        description: "Slow-steeped coffee served chilled with a smooth body and low acidity.",
        badge: "Refreshing",
        image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=600&q=80",
        alt: "Cold brew coffee"
    },
    {
        category: "coffee",
        name: "Flat White",
        price: 245,
        description: "Balanced espresso and silky microfoam with a clean, modern profile.",
        badge: "Smooth",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
        alt: "Flat white coffee"
    },
    
    {
        category: "desserts",
        name: "Cheesecake",
        price: 320,
        description: "Creamy baked cheesecake with a polished finish and berry accent.",
        badge: "Chef's pick",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        alt: "Cheesecake dessert"
    },
    {
        category: "desserts",
        name: "Tiramisu",
        price: 340,
        description: "Espresso-soaked layers with mascarpone cream and cocoa dusting.",
        badge: "House favorite",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
        alt: "Tiramisu dessert"
    },
  
    {
        category: "desserts",
        name: "Chocolate Cake",
        price: 330,
        description: "Layered chocolate sponge with a deep cocoa finish and soft ganache texture.",
        badge: "Indulgent",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        alt: "Chocolate cake dessert"
    },
    {
        category: "desserts",
        name: "Brownie",
        price: 240,
        description: "Dense chocolate brownie served with a polished café-style presentation.",
        badge: "Warm favorite",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        alt: "Brownie dessert"
    },
    {
        category: "desserts",
        name: "Macarons",
        price: 290,
        description: "Assorted crisp-shell macarons with delicate fillings and elegant color.",
        badge: "French",
        image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=600&q=80",
        alt: "Macarons dessert"
    },
    {
        category: "desserts",
        name: "Waffles",
        price: 310,
        description: "Golden waffles topped with berries and a premium dessert finish.",
        badge: "Brunch special",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        alt: "Waffles dessert"
    },
    {
        category: "snacks",
        name: "Veg Sandwich",
        price: 260,
        description: "Toasted café sandwich with fresh vegetables, herbs, and melted cheese.",
        badge: "Fresh daily",
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=600&q=80",
        alt: "Veg sandwich"
    },
    {
        category: "snacks",
        name: "Butter Croissant",
        price: 190,
        description: "Flaky laminated pastry with a golden crust and buttery center.",
        badge: "Morning favorite",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        alt: "Butter croissant"
    },
    {
        category: "snacks",
        name: "Mushroom Bruschetta",
        price: 290,
        description: "Crisp artisan toast topped with mushrooms, herbs, and cream cheese.",
        badge: "Savory",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80",
        alt: "Bruschetta snack"
    },
   
    {
        category: "snacks",
        name: "Pasta Alfredo",
        price: 360,
        description: "Creamy alfredo pasta plated as a café comfort dish with a refined finish.",
        badge: "Chef made",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80",
        alt: "Pasta alfredo snack"
    },
    
];

const menuGrid = document.getElementById("menuGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const menuStatus = document.getElementById("menuStatus");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const authToggleButtons = document.querySelectorAll(".auth-tab");
const authNameField = document.getElementById("authNameField");
const authSubmit = document.getElementById("authSubmit");
const authMessage = document.getElementById("authMessage");
const navUser = document.getElementById("navUser");
const logoutButton = document.getElementById("logoutButton");
const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartItemTotal = document.getElementById("cartItemTotal");
const cartClear = document.getElementById("cartClear");
const cartCheckout = document.getElementById("cartCheckout");
const guestForm = document.getElementById("guestForm");
const guestFormMessage = document.getElementById("guestFormMessage");
const detailName = document.getElementById("detailName");
const detailEmail = document.getElementById("detailEmail");
const detailPhone = document.getElementById("detailPhone");
const detailStatus = document.getElementById("detailStatus");
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

const CART_STORAGE_KEY = "brew-haven-cart-v2";
const ACCOUNT_STORAGE_KEY = "brew-haven-account";
const SESSION_STORAGE_KEY = "brew-haven-session";
const PROFILE_STORAGE_KEY = "brew-haven-profile";
let authMode = "login";
let cart = loadCart();

function loadStoredJson(key) {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    } catch {
        return null;
    }
}

function loadCart() {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        const parsed = storedCart ? JSON.parse(storedCart) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getStoredAccount() {
    return loadStoredJson(ACCOUNT_STORAGE_KEY);
}

function getStoredSession() {
    return loadStoredJson(SESSION_STORAGE_KEY);
}

function getStoredProfile() {
    return loadStoredJson(PROFILE_STORAGE_KEY);
}

function setAccountSession(account) {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
        name: account.name,
        email: account.email
    }));
}

function setAuthMode(mode) {
    authMode = mode;
    authToggleButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.mode === mode);
    });
    authNameField.hidden = mode !== "signup";
    authNameField.querySelector("input").required = mode === "signup";
    authSubmit.textContent = mode === "signup" ? "Create Account" : "Login";
    authMessage.textContent = "";
}

function updateNavUser() {
    const session = getStoredSession();
    navUser.textContent = session?.name ? `Hello, ${session.name}` : "";
    logoutButton.hidden = !session;
}

function updateUserDetailsCard() {
    const session = getStoredSession();
    const account = getStoredAccount();
    const profile = getStoredProfile();

    detailName.textContent = session?.name || profile?.name || account?.name || "Guest User";
    detailEmail.textContent = session?.email || profile?.email || account?.email || "Not added";
    detailPhone.textContent = profile?.phone || "Not added";
    detailStatus.textContent = session ? "Logged in" : "Logged out";
}

function hideAuthOverlay() {
    authOverlay.classList.add("hidden");
    authOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function showAuthOverlay() {
    authOverlay.classList.remove("hidden");
    authOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function formatCategory(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function formatPrice(price) {
    return `₹${price}`;
}

function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartSummary() {
    const itemCount = getCartItemCount();
    cartCount.textContent = itemCount;
    cartItemTotal.textContent = String(itemCount);
    cartSubtotal.textContent = formatPrice(getCartSubtotal());
    cartClear.disabled = itemCount === 0;
    cartCheckout.disabled = itemCount === 0;
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = "";
        cartItems.hidden = true;
        cartEmpty.hidden = false;
        updateCartSummary();
        return;
    }

    cartItems.hidden = false;
    cartEmpty.hidden = true;
    cartItems.innerHTML = cart.map((item) => `
        <article class="cart-item">
            <div class="cart-item-media">
                <img src="${item.image}" alt="${item.alt}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-top">
                    <div>
                        <h3>${item.name}</h3>
                        <p class="cart-item-meta">${formatCategory(item.category)}</p>
                    </div>
                    <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-quantity">
                        <button type="button" data-action="decrease" data-name="${item.name}" aria-label="Decrease quantity">−</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-action="increase" data-name="${item.name}" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="cart-remove" type="button" data-action="remove" data-name="${item.name}">Remove</button>
                </div>
            </div>
        </article>
    `).join("");

    updateCartSummary();
}

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("visible");
    cartDrawer.setAttribute("aria-hidden", "false");
    cartOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("visible");
    cartDrawer.setAttribute("aria-hidden", "true");
    cartOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function addToCart(itemName) {
    const item = menuItems.find((entry) => entry.name === itemName);

    if (!item) {
        return;
    }

    const existingItem = cart.find((entry) => entry.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: item.name,
            category: item.category,
            price: item.price,
            image: item.image,
            alt: item.alt,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    openCart();
}

function updateCartItem(itemName, action) {
    const targetItem = cart.find((item) => item.name === itemName);

    if (!targetItem) {
        return;
    }

    if (action === "increase") {
        targetItem.quantity += 1;
    }

    if (action === "decrease") {
        targetItem.quantity -= 1;
    }

    if (action === "remove" || targetItem.quantity <= 0) {
        cart = cart.filter((item) => item.name !== itemName);
    }

    saveCart();
    renderCart();
}

function createMenuCard(item) {
    return `
        <article class="menu-card reveal" data-category="${item.category}">
            <div class="menu-media">
                <img src="${item.image}" alt="${item.alt}">
                <span class="menu-badge">${item.badge}</span>
            </div>
            <div class="menu-copy">
                <div class="menu-top">
                    <h3>${item.name}</h3>
                    <span class="menu-price">${formatPrice(item.price)}</span>
                </div>
                <p>${item.description}</p>
                <div class="menu-actions">
                    <span class="menu-category">${formatCategory(item.category)}</span>
                    <button class="add-button" type="button" data-name="${item.name}">Add to Cart</button>
                </div>
            </div>
        </article>
    `;
}

function renderMenu(items) {
    menuGrid.innerHTML = items.map(createMenuCard).join("");
    attachCartHandlers();
    observeReveals();
}

function updateStatus(filter, count) {
    if (filter === "all") {
        menuStatus.textContent = "Showing all items";
        return;
    }

    menuStatus.textContent = `Showing ${count} ${formatCategory(filter).toLowerCase()} item${count === 1 ? "" : "s"}`;
}

function filterMenu(filter) {
    const filteredItems = filter === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === filter);

    renderMenu(filteredItems);
    updateStatus(filter, filteredItems.length);
}

function attachCartHandlers() {
    document.querySelectorAll(".add-button").forEach((button) => {
        button.addEventListener("click", () => {
            addToCart(button.dataset.name);
            button.textContent = "Added";
            button.disabled = true;

            window.setTimeout(() => {
                button.textContent = "Add to Cart";
                button.disabled = false;
            }, 900);
        });
    });
}

function closeNav() {
    navPanel.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
}

function handleScrollState() {
    navbar.classList.toggle("scrolled", window.scrollY > 32);
    backToTop.classList.toggle("visible", window.scrollY > 520);

    let currentSection = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        const target = link.getAttribute("href").slice(1);
        link.classList.toggle("active", target === currentSection);
    });
}

function observeReveals() {
    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));
}

function initializeStaticReveals() {
    document.querySelectorAll(".intro-card, .about-image-wrap, .about-copy, .gallery-card, .contact-card").forEach((element) => {
        element.classList.add("reveal");
    });

    observeReveals();
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        filterMenu(button.dataset.filter);
    });
});

cartButton.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartItems.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-action]");

    if (!target) {
        return;
    }

    updateCartItem(target.dataset.name, target.dataset.action);
});

cartClear.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
});

cartCheckout.addEventListener("click", () => {
    if (cart.length === 0) {
        return;
    }

    const total = formatPrice(getCartSubtotal());
    window.alert(`Order placed for ${getCartItemCount()} item(s). Subtotal: ${total}`);
    cart = [];
    saveCart();
    renderCart();
    closeCart();
});

guestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(guestForm);
    const guestName = String(formData.get("name") || "").trim();
    const guestEmail = String(formData.get("email") || "").trim().toLowerCase();
    const guestPhone = String(formData.get("phone") || "").trim();
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({
        name: guestName,
        email: guestEmail,
        phone: guestPhone
    }));
    guestFormMessage.textContent = `Thanks, ${guestName || "guest"}! Your details have been saved for this demo.`;
    guestForm.reset();
    updateUserDetailsCard();
});

authToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setAuthMode(button.dataset.mode);
    });
});

authForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(authForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "").trim();
    const account = getStoredAccount();

    if (authMode === "signup") {
        const newAccount = { name, email, password };
        localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(newAccount));
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({
            name,
            email,
            phone: getStoredProfile()?.phone || ""
        }));
        setAccountSession(newAccount);
        updateNavUser();
        updateUserDetailsCard();
        authMessage.textContent = `Account created. Welcome, ${name}!`;
        authForm.reset();
        window.setTimeout(hideAuthOverlay, 500);
        return;
    }

    if (!account) {
        authMessage.textContent = "No account found yet. Please create one first.";
        return;
    }

    if (account.email !== email || account.password !== password) {
        authMessage.textContent = "Incorrect email or password. Please try again.";
        return;
    }

    setAccountSession(account);
    updateNavUser();
    updateUserDetailsCard();
    authMessage.textContent = `Welcome back, ${account.name}!`;
    authForm.reset();
    window.setTimeout(hideAuthOverlay, 500);
});

logoutButton.addEventListener("click", () => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    updateNavUser();
    updateUserDetailsCard();
    setAuthMode("login");
    authForm.reset();
    closeCart();
    showAuthOverlay();
});

navToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNav();
        closeCart();
    }
});

window.addEventListener("scroll", handleScrollState, { passive: true });
window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
        closeNav();
    }
});

renderMenu(menuItems);
updateStatus("all", menuItems.length);
renderCart();
initializeStaticReveals();
handleScrollState();
setAuthMode(getStoredAccount() ? "login" : "signup");
updateNavUser();
updateUserDetailsCard();

if (getStoredSession()) {
    hideAuthOverlay();
} else {
    showAuthOverlay();
}
