// Load and apply configuration
async function loadConfiguration() {
    try {
        const response = await fetch('../config/site-config.json');

        const config = await response.json();

        applyLayout(config.layout);
        buildNavigation(config.navigation);
        applyColors(config.colors);
        document.title = config.siteName;

    } catch (error) {
        console.error('Failed to load configuration:', error);
    }
}

function applyLayout(layout) {
    const container = document.getElementById('main-container');

    if (layout.type === 'two-column') {
        container.classList.add('layout-two-column');

        if (!document.querySelector('aside')) {
            const sidebar = document.createElement('aside');
            sidebar.innerHTML = '<h3>Sidebar</h3><p>Additional content</p>';

            if (layout.sidebarPosition === 'left') {
                container.insertBefore(sidebar, container.firstChild);
            } else {
                container.appendChild(sidebar);
            }
        }
    }
}

function buildNavigation(navConfig) {
    const nav = document.getElementById('site-nav');

    navConfig.items.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.label;
        nav.appendChild(link);
    });
}

function applyColors(colors) {
    document.body.style.backgroundColor = colors.background;
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadConfiguration);
