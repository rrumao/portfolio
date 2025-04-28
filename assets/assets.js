import user_img from "./user_img.jpeg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile_img.jpeg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.webp";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import docker from "./docker.webp";
import aws from "./aws.png";
import gcp from "./gcp.png";
import puzzle from "./puzzle.png";
import puzzle_dark from "./puzzle_dark.png";
import amazon_logo from "./amazon-logo.png";
import uw_cs from "./uw-cs.jpeg";
import tops_labs from "./tops_labs.png";
import skunkworks from './skunkworks.png';
import avraamidou from './avraamidou.png';

export const assets = {
  user_img,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  git,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  docker,
  aws,
  gcp,
  puzzle,
  puzzle_dark,
  amazon_logo,
  uw_cs,
  tops_labs,
  skunkworks,
  avraamidou
};

export const workData = [
  {
    title: "Swipebop",
    description: "Outfit Matching System.",
    info: "Developed for Amazon (Shopbop)",
    bgImage: "/swipebop.png",
    link: "https://github.com/rrumao/swipebop"
  },
  {
    title: "Mindgrove",
    description: "AI Journalling Tool.",
    info: "Runner Up @ MadData 2024",
    bgImage: "/mindgrove.jpg",
    link: "https://github.com/rrumao/mindgrove"
  },
  {
    title: "Badger Chat",
    description: "Online Chatroom Messenger.",
    info: "Developed for CS571: Building User Interfaces",
    bgImage: "/badger_chat.png",
    link: "https://github.com/rrumao/badger-chat"
  }
];

export const serviceData = [
  {
    icon: assets.amazon_logo,
    title: "Amazon - Capstone",
    position: "Full-Stack Developer",
    time: "Jan 2025 - Current",
    desc: "Developing a Tinder-like outfit matching application for Amazon (Shopbop).\n Building core functionality including user authentication, swipe-based item selection, and dynamic outfit assembly using React.js, Flask, AWS (Cognito, Lambda and DynamoDB).\n Leading a team of 5, hosting weekly sprints and daily stand-ups, ensuring a dedicated taskforce using the Agile Framework.",
  },
  {
    icon: assets.uw_cs,
    title: "CS - UW-Madison",
    position: "Undergradute Teaching Assistant",
    time: "Sep 2024 - Current",
    desc: "Held office hours and taught complex topics in UI/UX and Web Development, bolstering their confidence and knowledge.\n Assisted students with problems in advanced projects using tools such as React.JS, Node.JS, React Native and Wit.AI.",
  },
  {
    icon: assets.tops_labs,
    title: "TOPS Labs",
    position: "IT Desktop Support",
    time: "Oct 2023 - Current",
    desc: "Oversee the operations and handle requests for a statewide application portal, serving 100+ users per month.\n Optimized and developed the TOPS Labs websites as well as clients’ websites using WordPress and JavaScript.\n Built a laptop check-in and check-out system using PHP to automate the process, making it concise and efficient.",
  },
  {
    icon: assets.skunkworks,
    title: "Informatics Skunkworks",
    position: "Research Scholar",
    time: "Sep 2024 - Feb 2025",
    desc: "Dr. Shamya Karumbaiah.\n Finetuning and testing LLM Models to achieve high ROUGE scores (0.6+) for summarization in English, Spanish and Spanglish using Python.\n Leading discussions with a sub-group focusing on summarization to refine strategies, evaluate model outputs, and enhance performance.",
  },
  {
    icon: assets.avraamidou,
    title: "Avraamidou Research Lab",
    position: "Research Scholar",
    time: "Aug 2024 - Jan 2025",
    desc: "Dr. Styliani Avraamidou.\n Helped develop supply chain models using mixed-integer multi-scale optimization to identify energy infrastructure for a zero-carbon future in Python and Julia.\n Assisted on research focusing on net-zero carbon transportation for heavy-duty vehicles in the Midwest using hydrogen as an alternative source of fuel.",
  },
  {
    icon: assets.edu_icon,
    dark: assets.edu_icon_dark,
    title: "Education",
    position: "Undergraduate at UW-Madison",
    time: "Sep 2021 - May 2025",
    desc: "Bachelor of Science: Computer Science, Data Science.\n Minor: Game Design, Entrepreneurship. \n GPA - 3.92 / 4.00. \n 6x Dean's List (2021 - 2024). \n Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, Big Data Systems, UI/UX Design, Database Management Systems, Machine Organization & Programming, Discrete Mathematics, Linear Algebra. ",
  },
];
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Python, Java, Javascript, R, C++, SQL",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Framework/Libraries",
    description:
      "React.JS & React Native, Next.JS, Flask, JUnit, PyTest, Pandas, Tensorflow, Scikit-Learn",
  },
  {
    icon: assets.puzzle,
    iconDark: assets.puzzle_dark,
    title: "Interests",
    description:
      "AI/ML Technologies, Data Visualization, Web Development, Game Development",
  },
];

export const toolsData = [
  { icon: assets.vscode, link: "https://code.visualstudio.com/" },
  { icon: assets.docker, link: "https://www.docker.com/" },
  { icon: assets.gcp, link: "https://cloud.google.com/" },
  { icon: assets.aws, link: "https://aws.amazon.com/" },
  { icon: assets.git, link: "https://git-scm.com/" },
];
