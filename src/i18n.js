import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    // uzbek
    uz: {
        translation: {
            name: "Shahrizoda Zayniddinova",
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
                email: "Elektron pochta",
            },
            job: 'Frontend Dasturchi',
            birthday: "Tug'ilgan sana:",
            city: 'Shahar:',
            degree: 'Daraja:',
            age: 'Yosh:',
            website: 'Vebsayt',
            interactive: 'interaktiv',
            static: 'statik',
        }
    },

    // english
    en: {
        translation: {
            name: "Shakhrizoda Zayniddinova",
            heading: {
                skills: "Skills",
                about: "About",
                resume: "Resume",
                portfolio: "Portfolio",
                contact: "Contact",
            },
            titles: {
                about: "I am a passionate front-end developer with a strong interest in React, JavaScript and web development. I have experience working with API. As a frontend developer, I participated in the development of the admin panel. I created a dynamic UI using NextJs, TypeScript and Tailwind added data management functions. I want to continue learning and expanding my knowledge of front-end technologies while contributing to impactful projects.",
                aboutLittle: "I have more than 3 years of computer experience. Likes to learn new things, try and communicate. Coffee, photography, music and art are my happy places.",
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
                email: "Email",
            },
            job: 'Frontend Developer',
            birthday: 'Birthday:',
            city: 'City:',
            degree: 'Degree:',
            age: 'Age:',
            website: 'Website',
            interactive: 'interactive',
            static: 'static',
        }
    },

    // russian
    ru: {
        translation: {
            name: "Шахризода Зайниддинова",
            heading: {
                about: "Обо мне",
                skills: "Навыки",
                resume: "Резюме",
                portfolio: "Портфель",
                contact: "Контакты",
            },
            titles: {
                about: "Я целеустремлённая и стремящаяся к развитию front-end разработчица. У меня есть опыт работы с React, JavaScript и API. Я создавала динамичные пользовательские интерфейсы с использованием Next.js, TypeScript и Tailwind CSS. Принимала участие в разработке административной панели. Всегда готова изучать новые технологии.",
                aboutLittle: "У меня более 3 лет опыта работы с компьютером. Я люблю учиться новому, действовать и общаться. Кофе, фотография, музыка и искусство — это мои счастливые увлечения.",
                skills: "У меня есть прочная база в frontend-разработке с опытом создания веб-сайтов с использованием HTML, CSS, JavaScript и React. Я привержена предоставлению высококачественных, отзывчивых дизайнов и всегда стремлюсь развиваться, чтобы включать последние практики веб-разработки.",
                resume: "Я работаю над тем, чтобы стать Frontend Developer. У меня есть опыт работы с HTML, CSS, SCSS, Tailwind, Bootstrap, Material UI, JavaScript и React. Я быстро учусь и умею решать проблемы. Я стремлюсь обогатить свой опыт через веб-проекты.",
                portfolio: "Интерактивные пользовательские интерфейсы, созданные с использованием современных технологий. Проекты разработаны с учетом отзывчивого дизайна и эффективного пользовательского опыта.",
                contact: "Я готова работать над вашим будущим проектом. Для связи со мной используйте следующие данные.",
            },
            resumeData: {
                education: "Образование",
                contact: "Контакты",
                perInfor: "Личная информация",
                location: "Местоположение",
                skills: "Навыки",
                language: "Язык",
            },
            contactData: {
                address: "Адрес",
                call: "Телефон",
                email: "Электронная почта",
            },
            job: 'Frontend Разработчик',
            birthday: "Дата рождения:",
            city: 'Город:',
            degree: 'Степень:',
            age: 'Возраст:',
            website: 'Вебсайт',
            interactive: 'интерактивный',
            static: 'статический',
        }
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n