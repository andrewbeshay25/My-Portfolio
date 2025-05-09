export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    isNew?: boolean;
    link?: string;
    github?: string;
    screenshots?: string[];
  }
  
  export const projects: Project[] = [
    {
        id: "data-analysis-app",
        title: "Data Analysis & Prediction App",
        description:
          "A Streamlit web app that lets users upload CSV files, explore data visually, train a Ridge regression model, and make predictions using custom input values.",
        tech: ["Machine Learning", "Python", "Streamlit", "scikit-learn", "Pandas", "Altair"],
        isNew: true,
        screenshots: [
            "/assets/PredictionApp1.png",
            "/assets/PredictionApp2.png",
            "/assets/PredictionApp3.png",
          ],
        link: "https://datapredictionapp-group3.streamlit.app/",
        github: "https://github.com/andrewbeshay25/Data-Analysis-and-Prediction-App",
      },
      {
        id: "cost-of-living-dashboard",
        title: "Cost of Living Insights Dashboard",
        description:
          "An interactive dashboard that visualizes how household income and rent trends have evolved across major U.S. cities, revealing emerging affordability challenges.",
        tech: [
          "React", "D3.js", "Tailwind CSS", "Mermaid.js",
          "Python", "Pandas", "NumPy", "PostCSS"
        ],
        isNew: true,
        screenshots: [
          "/assets/cost-of-living1.png",
          "/assets/cost-of-living2.png"
        ],
        github: "https://github.com/andrewbeshay25/cost-of-living-trends"
      },
      {
        id: "commentate",
        title: "Commentate",
        description:
          "A REST API game where users leave comments about each other, with advanced filters and Docker deployment.",
        tech: ["FastAPI", "Docker", "CI/CD", "PostgreSQL", "AWS"],
        screenshots: [
          "/assets/Commentate1.png",
          "/assets/Commentate2.png"
        ],
        link: "https://web.njit.edu/~aab49/Commentate/",
        github: "https://github.com/andrewbeshay25/commentate",
      },
      {
      id: "ios-church-app",
      title: "Church iOS App",
      description:
        "A Firebase-powered iOS app for real-time communication and role-based access within the church community.",
      tech: ["SwiftUI", "Firebase", "MVVM", "Rive", "Notifications"],
      screenshots: [
        "/assets/church-app1.png",
        "/assets/church-app2.png"
      ],
      github: "https://github.com/andrewbeshay25/TheApp",
    },
    {
      id: "ark",
      title: "ARK Platform",
      description:
        "A full-stack platform for managing Coptic Sunday school classes and competitions, built with FastAPI and React.",
      tech: ["React", "FastAPI", "PostgreSQL", "Google OAuth", "JWT"],
      github: "https://github.com/andrewbeshay25/ark",
    },
      
  ];
  