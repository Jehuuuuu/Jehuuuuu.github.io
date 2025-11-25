import { FaGithub } from "react-icons/fa6";

export const cards = [
  {
    description: "React | Next.js | Django | Django Ninja",
    title: "E- Commerce Web Application for Hufano Handicraft Wooden Decors",
    src: "/hufano-handicraft.png",
    ctaText: "Visit",
    ctaLink: "https://woodcraft-frontend.vercel.app/",
    sourceLink: "https://github.com/Jehuuuuu/woodcraft-frontend",
    sourceLinkText: "Source",
    sourceLinkIcon: <FaGithub size={15} />,
    sourceUi: "https://github.com/Jehuuuuu/woodcraft-backend",
    sourceUiIcon: <FaGithub size={15} />,
    sourceUiText: "Source(UI)",
    content: () => {
      return (
        <p>
          An E-Commerce website tailored for a local handicraft business, featuring a 3D model generator for custom product
          visualization and integrated Payrex payment support for both local and international transactions.
        </p>
      );
    },
  },
  {
    description: "HTML | CSS | Django",
    title: "Feedback and Evaluation System with Sentiment Analysis ",
    src: "/feedback-system.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/Jehuuuuu/Feedback-and-Evaluation-System-Capstone-Project",
    sourceLink: "https://github.com/Jehuuuuu/Feedback-and-Evaluation-System-Capstone-Project",
    sourceLinkText: "Source",
    sourceLinkIcon: <FaGithub size={15} />,
    content: () => {
      return (
        <p>
          A website-based feedback and evaluation system with sentiment analysis, implemented with Hugging Face Library APIs for
          Cavite State University - Bacoor City Campus.</p>
      );
    },
  },
];
