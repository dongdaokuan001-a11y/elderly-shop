// ============================================
// 银龄国际用品店 - JavaScript功能（京东风格）
// ====================================

// 全局变量 - 从products.js加载
let cart = [];
let currentFilter = 'all';

// 从products.js获取数据
const products = window.productsData ? window.productsData.products : [];
const categories = window.productsData ? window.productsData.categories : [];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    renderCategories();
    renderAllProducts();
    initSlider();
    initSearch();
    initCountdown();
}

function renderCategories() {
    // 京东风格已静态渲染分类，无需JS动态生成
}

// 渲染所有分类的商品
function renderAllProducts() {
    renderProductGrid('healthGrid', products.filter(p => p.category === 'health'));
    renderProductGrid('dailyGrid', products.filter(p => p.category === 'daily'));
    renderProductGrid('mobilityGrid', products.filter(p => p.category === 'mobility'));
    renderProductGrid('comfortGrid', products.filter(p => p.category === 'comfort'));
    
    // 渲染秒杀商品（取前6个）
    const seckillProducts = products.slice(0, 6);
    renderSeckillGrid(seckillProducts);
}

// 渲染商品网格
function renderProductGrid(containerId, productList) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    let html = '';
    
    if (productList.length === 0) {
        html = '<div class="no-products">暂无商品</div>';
    } else {
        productList.forEach(product => {
            html += `
                <div class="product-card" onclick="showProductDetail(${product.id})">
                    <div class="product-image">${product.icon}</div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">
                            <span class="unit">¥</span>${product.price}
                        </div>
                        <div class="product-meta">
                            <span>已售${formatSales(product.sales)}</span>
                            <div class="product-tags">
                                ${product.tags.slice(0, 1).map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    grid.innerHTML = html;
}

// 渲染秒杀网格
function renderSeckillGrid(productList) {
    const grid = document.getElementById('seckillGrid');
    if (!grid) return;
    
    let html = '';
    
    productList.forEach(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        html += `
            <div class="seckill-card" onclick="showProductDetail(${product.id})">
                <div class="seckill-image">${product.icon}</div>
                <h4 class="seckill-title">${product.title}</h4>
                <div class="seckill-price">
                    ¥${product.price}
                    <span>¥${product.originalPrice}</span>
                </div>
                <span class="seckill-tag">${discount}折</span>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// 初始化轮播图
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.getElementById('sliderDots');
    let currentSlide = 0;
    
    // 创建导航点
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(index);
        dots.appendChild(dot);
    });
    
    window.goToSlide = function(index) {
        slides[currentSlide].classList.remove('active');
        dots.children[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots.children[currentSlide].classList.add('active');
    };
    
    // 自动轮播
    setInterval(() => {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }, 4000);
}

// 初始化搜索
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
}

// 搜索商品
function searchProducts() {
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!keyword) {
        renderAllProducts();
        return;
    }
    
    const results = products.filter(p => 
        p.title.toLowerCase().includes(keyword) || 
        p.description.toLowerCase().includes(keyword) ||
        p.tags.some(t => t.toLowerCase().includes(keyword))
    );
    
    // 显示搜索结果
    const sections = ['healthGrid', 'dailyGrid', 'mobilityGrid', 'comfortGrid'];
    sections.forEach(id => {
        document.getElementById(id).innerHTML = '';
    });
    
    if (results.length > 0) {
        renderProductGrid('healthGrid', results.slice(0, 10));
        document.getElementById('health').style.display = results.length > 0 ? 'block' : 'none';
    } else {
        document.getElementById('health').innerHTML = '<div style="padding: 40px; text-align: center;">未找到相关商品</div>';
    }
}

// 快捷搜索
function quickSearch(keyword) {
    document.getElementById('searchInput').value = keyword;
    searchProducts();
}

// 筛选商品
function filterProducts(category) {
    currentFilter = category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    if (category === 'all') {
        renderAllProducts();
    } else {
        const filtered = products.filter(p => p.category === category);
        
        // 隐藏所有分类区块
        ['health', 'daily', 'mobility', 'comfort'].forEach(cat => {
            const el = document.getElementById(cat + 'Grid');
            if (el) el.parentElement.style.display = 'none';
        });
        
        // 显示筛选的分类
        const grid = document.getElementById(category + 'Grid');
        if (grid) {
            grid.parentElement.style.display = 'block';
            renderProductGrid(category + 'Grid', filtered);
        }
    }
}

// 初始化倒计时
function initCountdown() {
    let hours = 2, minutes = 30, seconds = 45;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                }
            }
        }
        
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');
        
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
        if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// 显示商品详情
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 400px 1fr; gap: 40px;">
            <div style="background: #f8f8f8; border-radius: 8px; padding: 60px; text-align: center; font-size: 150px;">
                ${product.icon}
            </div>
            <div>
                <h2 style="font-size: 24px; margin-bottom: 20px; line-height: 1.4;">${product.title}</h2>
                <div style="background: #fff5f5; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                    <span style="font-size: 32px; font-weight: bold; color: #e31937;">¥${product.price}</span>
                    <span style="color: #999; text-decoration: line-through; margin-left: 15px;">¥${product.originalPrice}</span>
                </div>
                <p style="color: #666; margin-bottom: 20px; line-height: 1.8;">${product.description}</p>
                <div style="margin-bottom: 20px;">
                    <span style="background: #e31937; color: #fff; padding: 3px 8px; font-size: 12px;">${product.categoryName}</span>
                    <span style="color: #999; margin-left: 15px;">已售${formatSales(product.sales)}</span>
                </div>
                <div style="margin-bottom: 30px;">
                    <span style="color: #666;">标签：</span>
                    ${product.tags.map(t => `<span style="display: inline-block; background: #f4f4f4; padding: 3px 10px; border-radius: 3px; margin: 2px;">${t}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 15px;">
                    <button onclick="addToCart(${product.id})" style="flex: 1; padding: 15px 30px; background: #e31937; color: #fff; border: none; border-radius: 4px; font-size: 18px; cursor: pointer;">加入购物车</button>
                    <button onclick="toggleCart(); addToCart(${product.id})" style="flex: 1; padding: 15px 30px; background: #ff6b00; color: #fff; border: none; border-radius: 4px; font-size: 18px; cursor: pointer;">立即购买</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

// 关闭弹窗
function closeModal() {
    document.getElementById('productModal').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

// 加入购物车
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            icon: product.icon,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast('已加入购物车');
}

// 从购物车移除
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// 更新购物车数量
function updateCartQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

// 更新购物车UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalPrice = document.getElementById('totalPrice');
    
    // 更新数量
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    
    // 更新列表
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #999;">购物车空空如也~</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">¥${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        <button onclick="removeFromCart(${item.id})" style="margin-left: 15px; color: #999; border: none; background: none; cursor: pointer;">删除</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // 更新总价
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.textContent = '¥' + total.toFixed(2);
}

// 切换购物车
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
}

// 去结算
function checkout() {
    if (cart.length === 0) {
        showToast('购物车是空的');
        return;
    }
    alert('结算功能开发中...\n\n商品数量: ' + cart.reduce((sum, item) => sum + item.quantity, 0) + '\n总金额: ¥' + cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
}

// 格式化销量
function formatSales(num) {
    if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + '000+';
    }
    return num;
}

// 显示提示
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.8); color: #fff; padding: 15px 30px; border-radius: 4px; z-index: 9999; animation: fadeIn 0.3s ease;';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 提交联系表单
function submitContact(event) {
    event.preventDefault();
    alert('感谢您的留言！我们会尽快与您联系。');
    event.target.reset();
}

// 加载更多商品
function loadMoreProducts() {
    alert('加载更多商品功能开发中...');
}
