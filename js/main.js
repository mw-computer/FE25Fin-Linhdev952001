// Đợi cho DOM load xong
window.onload = function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');

    function openMobileMenu() {
        mobileMenuOverlay.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-x-full');
        }, 10);
    }

    function closeMobileMenuHandler() {
        mobileMenu.classList.add('-translate-x-full');
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMobileMenuHandler);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenuHandler();
            }
        });
    }

    // Lấy tất cả các menu items và titles
    const menuItems = document.querySelectorAll('.menu-item');
    const menuTitles = document.querySelectorAll('.menu-title');
    const headerMenuItems = document.querySelectorAll('.header-menu-item');

    // Thêm sự kiện hover cho mỗi menu item
    menuItems.forEach((item, index) => {
        const link = item.querySelector('a');
        const title = menuTitles[index];

        // Khi hover vào
        item.addEventListener('mouseenter', () => {
            if(link) link.style.color = '#CD002D';
            if(title) title.style.color = '#CD002D';
        });

        // Khi rời chuột
        item.addEventListener('mouseleave', () => {
            if(link) link.style.color = '';
            if(title) title.style.color = '';
        });
    });

    // Thêm sự kiện hover cho các titles
    menuTitles.forEach((title) => {
        title.addEventListener('mouseenter', () => {
            title.style.color = '#CD002D';
        });

        title.addEventListener('mouseleave', () => {
            title.style.color = '';
        });
    });

    // Thêm sự kiện hover cho header menu items
    headerMenuItems.forEach((item) => {
        const icon = item.querySelector('i');
        const text = item.querySelector('p');

        item.addEventListener('mouseenter', () => {
            if(icon) icon.style.color = '#CD002D';
            if(text) text.style.color = '#CD002D';
        });

        item.addEventListener('mouseleave', () => {
            if(icon) icon.style.color = '';
            if(text) text.style.color = '';
        });
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768) { // md breakpoint
                closeMobileMenuHandler();
            }
        }, 250);
    });
};

// Xử lý hover effect cho menu items và content containers
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const menuTitles = document.querySelectorAll('.menu-title');
    const contentContainers = document.querySelectorAll('.content_container');

    // Hover effect cho menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const menuId = this.getAttribute('data-menu');
            const title = document.querySelector(`.menu-title[data-title="${menuId}"]`);
            const container = document.querySelector(`.content_container:nth-child(${menuId})`);
            
            if (title) title.style.color = '#CD002D';
            if (container) container.style.backgroundColor = '#fff';
        });

        item.addEventListener('mouseleave', function() {
            const menuId = this.getAttribute('data-menu');
            const title = document.querySelector(`.menu-title[data-title="${menuId}"]`);
            const container = document.querySelector(`.content_container:nth-child(${menuId})`);
            
            if (title) title.style.color = '';
            if (container) container.style.backgroundColor = '';
        });
    });

    // Hover effect cho menu titles
    menuTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            const titleId = this.getAttribute('data-title');
            const container = document.querySelector(`.content_container:nth-child(${titleId})`);
            
            this.style.color = '#CD002D';
            if (container) container.style.backgroundColor = '#fff';
        });

        title.addEventListener('mouseleave', function() {
            const titleId = this.getAttribute('data-title');
            const container = document.querySelector(`.content_container:nth-child(${titleId})`);
            
            this.style.color = '';
            if (container) container.style.backgroundColor = '';
        });
    });

    // Hover effect cho content containers
    contentContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#fff';
        });

        container.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});
