document.addEventListener('DOMContentLoaded', () => {
    // وظيفة زر العودة للأعلى (Scroll to Top)
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // أظهر الزر بعد التمرير 300 بكسل
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // تمرير سلس
        });
    });

    // وظيفة قائمة الموبايل (Mobile Menu Toggle)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // إغلاق قائمة الموبايل عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
        }
    });

    // وظيفة معالجة نموذج الاتصال (Contact Form Submission)
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // منع الإرسال الافتراضي للصفحة

        // هنا يمكنك إضافة كود لإرسال البيانات إلى خادم (باستخدام Fetch API أو XMLHttpRequest)
        // أو عرض رسالة نجاح/خطأ بسيطة للمستخدم.

        // مثال بسيط لعرض رسالة في الكونسول وتنبيه للمستخدم:
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('بيانات النموذج المرسلة:', formObject);
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');

        // يمكنك هنا إعادة تعيين حقول النموذج بعد الإرسال
        contactForm.reset();
    });
});
