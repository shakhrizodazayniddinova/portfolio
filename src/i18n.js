import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    uz: {
        translation: {
            heading: {
                about: "Men haqimda",
                skills: "Ko'nikmalar",
                resume: "Rezyume",
                portfolio: "Portfel",
                contact: "Bog'lanish",
            },
            titles: {
                about: "Ishtiyoqli va o‘sishga intiluvchi front-end dasturchiman. React, JavaScript va API bilan ishlash tajribam bor. Next.js, TypeScript va Tailwind CSS yordamida dinamik UI yaratganman. Administrator paneli ishlab chiqishda ishtirok etganman. Yangi texnologiyalarni o‘rganishga doim tayyorman.",
                aboutLittle: "Kompyuterda 3 yildan ortiq tajribam bor. Yangi narsalarni o'rganishni, harakat qilishni va muloqot qilishni yaxshi ko'raman. Qahva, fotografiya, musiqa va san'at mening baxtli joylarimdir.",
                skills: "Men HTML, CSS, JavaScript va React-dan foydalangan holda veb-saytlar yaratish bo'yicha tajribaga ega bo'lgan frontend ishlab chiqishda kuchli poydevorga egaman. Men yuqori sifatli, sezgir dizaynlarni taqdim etishga sodiqman va men veb-ishlab chiqishning eng so'nggi amaliyotlarini o'z ichiga olish uchun doimo rivojlanib boraman.",
                resume: "Men Frontend Developer bo'lish ustida ishlayapman. HTML, CSS, SCSS, Tailwind, Bootstrap, Material UI, JavaScript va React bilan ishlash tajribam bor. Men tez o‘rganuvchi va muammolarni hal qiluvchiman. Men veb-loyihalar orqali tajribamni boyitmoqchiman.",
                portfolio: "Zamonaviy texnologiyalar yordamida yaratilgan interaktiv foydalanuvchi interfeyslari. Loyihalar sezgir dizayn va samarali foydalanuvchi tajribasi uchun ishlab chiqilgan.",
                contact: "Kelajakdagi loyihangiz ustida ishlashga tayyorman. Men bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning.",
            },
            resumeData: {
                education: "Ta'lim",
                contact: "Bog'lanish",
                perInfor: "Shaxsiy ma'lumot",
                location: "Joylashuv",
                skills: "Ko'nikmalar",
                language: "Til",
            },
            contactData: {
                address: "Manzil",
                call: "Telefon",
            },
            job: 'Frontend Dasturchi',
            birthday: "Tug'ilgan sana:",
            city: 'Shahar:',
            degree: 'Daraja:',
            age: 'Yosh:',
            interactive: 'interaktiv',
            static: 'statik',
        }    
    },

    en: {
        translation: {
            heading: {
                skills: "Skills",
                about: "About",
                resume: "Resume",
                portfolio: "Portfolio",
                contact: "Contact",
            },
            titles: {
                about: "I am a passionate front-end developer with a strong interest in React, JavaScript and web development. I have experience working with API. As a frontend developer, I participated in the development of the admin panel. I created a dynamic UI using NextJs, TypeScript and Tailwind added data management functions. I want to continue learning and expanding my knowledge of front-end technologies while contributing to impactful projects.",
                aboutLittle: "I have been learning programming 3 years. I have more than 3 years of computer experience. Likes to learn new things, try and communicate. Coffee, photography, music and art are my happy places.",
                skills: "I have a strong foundation in frontend development, with expertise in building websites using HTML, CSS, JavaScript, and React. I'm committed to delivering high-quality, responsive designs and I'm constantly evolving to incorporate the latest web development practices.",
                resume: "I am working towards becoming a Frontend Developer. I have experience working with HTML, CSS, SCSS, Tailwind, Bootstrap, Material UI, JavaScript, and React. I'm a quick learner and a problem solver. I want to enrich my experience through web projects.",
                portfolio: "Interactive user interfaces created using modern technologies. Projects developed for responsive design and efficient user experience.",
                contact: "I am ready to work on your future project. Use the information below to contact me.",
            },
            resumeData: {
                education: "Education",
                contact: "Contact",
                perInfor: 'Personal Information',
                location: "Location",
                skills: "Skills",
                language: "Language",
            },
            contactData: {
                address: "Address",
                call: "Call Us",
            },
            job: 'Frontend Developer',
            birthday: 'Birthday:',
            city: 'City:',
            degree: 'Degree:',
            age: 'Age:',
            interactive: 'interactive',
            static: 'static',
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "uz",
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n