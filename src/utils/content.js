// Section1
import BG from "../assets/images/section1/bg.png";
import Laoptop from "../assets/images/section1/laptop.png";
import Line from "../assets/images/section1/line.png";
import ShootingStarImage from "../assets/images/section1/main-bg-0-0.png";

// Section2
import Excel from "../assets/images/section2/excel.svg";
import Word from "../assets/images/section2/word.svg";
import GoogleDrive from "../assets/images/section2/google-drive.svg";
import GoogleForms from "../assets/images/section2/google-forms.svg";
import Tutor from "../assets/images/logo.svg";
import Plus from "../components/SvgIcon/Plus.jsx";
import Even from "../components/SvgIcon/Even.jsx";

// Section3
import Phone1Img from "../assets/images/section3/wallet-buy.webp";
import Phone2Img from "../assets/images/section3/wallet-stake.webp";
import Phone5Img from "../assets/images/section3/wallet-transfer.webp";

// Section4
import Sec4Image1 from "../assets/images/section4/Basic.svg";
import Sec4Image2 from "../assets/images/section4/Advance.svg";
import Sec4Image3 from "../assets/images/section4/Premium.svg";

// Footer
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import VK from "../components/SvgIcon/VK.jsx";

//Auth
import AuthBG from "../assets/images/auth/bg.png";

// Navbar
import Logo from "../assets/images/logo.svg";

export const section1Content = {
  Laoptop,
  BG,
  Line,
  ShootingStarImage,
  title: "Твой идеальный инструмент для онлайн занятий",
};

export const section2Content = {
  title:
    "Оптимизируй своё время и эффективно распределяй усилия, сосредоточившись на важных моментах.",
  Excel,
  Word,
  GoogleDrive,
  GoogleForms,
  Tutor,
  Plus,
  Even,
};

export const section3Content = {
  title: "Все под рукой",
  TABS: [
    {
      name: "Календарь",
      image: Phone5Img,
      subtitle:
        "Легко отслеживайте свободные и занятые часы, делайте изменения в расписании и обеспечивать прозрачное взаимодействие со своими учениками",
    },
    {
      name: "База учеников",
      image: Phone1Img,
      subtitle:
        "Возможность осуществлять индивидуальное или групповое взаимодействие с учениками, эффективно управлять учебным процессом.",
    },
    {
      name: "Задачник",
      image: Phone2Img,
      subtitle:
        "Функция создания задач с автопроверкой тестовой части. Что значительно упрощает процесс оценки и обратной связи. ",
    },
  ],
};

export const section4Content = {
  title: "Выбери свою версию",
  subtitle:
    "Разнообразные тарифы для всех потребностей: выберите оптимальный план для ваших задач",
  TABS: [
    {
      title: "Базовый",
      subtitle: "Для тех то",
      image: Sec4Image1,
      price: "399 ₽",
      subtitle: [
        "До 5 учеников",
        "Доступ ко всем инструментам",
        "Хранение файлов до 750 МБ",
      ],
    },
    {
      title: "Продвинутый",
      image: Sec4Image2,
      price: "699 ₽",
      subtitle: [
        "До 5 учеников",
        "Доступ ко всем инструментам",
        "Хранение файлов до 750 МБ",
      ],
    },
    {
      title: "Премиум",
      image: Sec4Image3,
      price: "1199 ₽",
      subtitle: [
        "До 5 учеников",
        "Доступ ко всем инструментам",
        "Хранение файлов до 750 МБ",
      ],
    },
  ],
};

export const footerContent = {
  help: {
    title: "Полезное",
    links: [
      { title: "Для репетиторов" },
      { title: "Для учеников " },
      { title: "Для родителей" },
    ],
  },
  faq: {
    title: "Частые вопросы",
    links: [
      { title: "Как создать тест" },
      { title: "Как пригласить ученика" },
      { title: "Как загружать файлы" },
    ],
  },
  anower: {
    title: "Прочее",
    links: [
      { title: "Контакты" },
      { title: "Политика конфиденциальности" },
      { title: "Пользовательское соглашение" },
    ],
  },
  subscribe: {
    title: "Подписывайся на нас в соц сетях",
    subtitle: "Узновай о последних обновлениях",
  },
  socials: [{ icon: WhatsAppIcon }, { icon: ChatIcon }, { icon: TelegramIcon }],
  copyright: {
    left: "© 2023 TUTOR, Все права защищены.",
  },
};

export const navbarContent = {
  Logo,
};

export const authContent = {
  AuthBG,
};
