// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.matrix = "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی۰۱۲۳۴۵۶۷۸۹ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        this.matrixArray = this.matrix.split("");
        
        this.fontSize = 10;
        this.columns = 0;
        this.drops = [];
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.init());
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = this.canvas.width / this.fontSize;
        
        this.drops = [];
        for(let x = 0; x < this.columns; x++) {
            this.drops[x] = 1;
        }
    }
    
    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for(let i = 0; i < this.drops.length; i++) {
            const text = this.matrixArray[Math.floor(Math.random() * this.matrixArray.length)];
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
    }
    
    animate() {
        this.draw();
        setTimeout(() => this.animate(), 35);
    }
}

// Initialize Matrix Rain
document.addEventListener('DOMContentLoaded', function() {
    new MatrixRain();
    
    // Initialize skill bars animation
    initSkillBars();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize typing effect
    initTypingEffect();
});

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.setProperty('--skill-width', width + '%');
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Typing Effect
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Portfolio Modal
function openPortfolioModal(projectId) {
    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body');
    
    const projectData = {
        virasystem: {
            title: 'حسابداری مالی و اداری یکپارچه شهرک‌های صنعتی',
            description: 'یک نرم‌افزار حسابداری مالی و اداری یکپارچه کامل با استفاده از ASP.NET MVC و Entity Framework و SQL Server',
            technologies: ['ASP.NET MVC', 'WinForm', 'Entity Framework', 'Swagger', 'SQL Server'],
            features: [
                'خزانه داری، دریافت و پرداخت و مدیریت چک',
                'فروش و سامانه مودیان',
                'انبارداری و انبارگردانی',
                'کارگزینی و حقوق دستمزد',
                'مدیریت تردد شهرک صنعتی و محاصبه قبوض'
            ],
            link: 'https://www.virasystemco.com'
        },
        personalaccounting: {
            title: 'حسابداری شخصی',
            description: 'حسابداری شخصی آنلاین',
            technologies: ['ASP.NET MVC', 'WinForm', 'Entity Framework', 'SQL Server'],
            features: [
                'حسابداری شخصی یک طرفه و دو طرفه',
                'قرض و بدهی',
                'مدیریت حساب‌های بانکی',
                'گزارش‌گیری و آمار',
                'امکان ثبت تراکنش‌ها به صورت دستی یا خودکار'
            ],
            link: 'https://github.com/hmovaghari/MyAccounting'
        }
    };
    
    const project = projectData[projectId];
    if (project) {
        modalBody.innerHTML = `
            <h2 class="matrix-text" style="font-family: 'Orbitron', monospace; margin-bottom: 1rem;">${project.title}</h2>
            <p style="color: var(--text-gray); margin-bottom: 2rem; line-height: 1.6;">${project.description}</p>
            
            <h3 class="matrix-text" style="margin-bottom: 1rem;">تکنولوژی‌های استفاده شده:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                ${project.technologies.map(tech => `<span style="background: rgba(0,255,0,0.2); color: var(--matrix-green); padding: 0.3rem 0.8rem; border: 1px solid var(--matrix-green); font-size: 0.9rem;">${tech}</span>`).join('')}
            </div>
            
            <h3 class="matrix-text" style="margin-bottom: 1rem;">ویژگی‌های کلیدی:</h3>
            <ul style="color: var(--text-gray); margin-bottom: 2rem; list-style: none;">
                ${project.features.map(feature => `<li style="margin-bottom: 0.5rem; padding-right: 1rem; position: relative;"><span style="position: absolute; right: 0; color: var(--matrix-green);">▶</span>${feature}</li>`).join('')}
            </ul>
            
            <a href="${project.link}" target="_blank" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: transparent; border: 2px solid var(--matrix-green); color: var(--matrix-green); text-decoration: none; transition: all 0.3s ease; font-family: 'Orbitron', monospace;">
                <i class="fas fa-link"></i>
                مشاهده لینک
            </a>
        `;
        
        modal.style.display = 'block';
    }
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolio-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('portfolio-modal');
    if (event.target === modal) {
        closePortfolioModal();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Add glitch effect to profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                profileImg.style.filter = 'brightness(0.9) contrast(1.2) hue-rotate(90deg)';
                setTimeout(() => {
                    profileImg.style.filter = 'brightness(0.9) contrast(1.2)';
                }, 100);
            }
        }, 2000);
    }
});
