// data/projects.ts
export type Project = {
    id: string;            // URL slug (must be unique, e.g. "ekg-cvd-transformer")
    title: string;
    summary: string;
    tags: string[];
    coverImage?: string;   // e.g. "/projects/ekg/cover.png" (goes in /public)
    reportUrl?: string;    // e.g. "/projects/ekg/report.pdf" or external link
    codeUrl?: string;      // GitHub URL
    slidesUrl?: string;    // e.g. "/projects/ekg/slides.pdf" to embed/scroll
  };
  
  export const projects: Project[] = [
    {
        id: "optimization_active_learning",
        title: "Optimization-aware Active \nLearning",
        summary: "Designed and developed a novel Duality-Based Active Learning Methodology leveraging duality from a network flow model to prioritize labels with the greatest impact on optimization outcomes",
        tags: ["Python", "Gurobi", "scikit-learn"],
      //   coverImage: "/projects/computer/cover.png",
        reportUrl: "/projects/Optimization/report.pdf",
        codeUrl: "https://github.com/spasquino/Duality-Based-Active-Learning",
        slidesUrl: "/projects/Optimization/slides.pdf"
      },
    {
        id: "student_chatbot",
        title: "Q&A Rag-based ChatBot for students",
        summary: "Developed a Q&A chatbot for “Hands-on Deep Learning (15.773)” using LangChain RAG allowing 24/7 context-aware conversations to support a dynamic learning environment",
        tags: ["LangChain", "Python", "Gradio"],
      //   coverImage: "/projects/computer/cover.png",
        reportUrl: "/projects/HoDL/report.pdf",
        codeUrl: "https://github.com/spasquino/RAG_Chatbot",
        // slidesUrl: "/projects/computer_vision/slides.pdf"
      },
      {
        id: "computer_vision_navigation",
        title: "Building Navigation – Computer Vision Indoor Wayfinding",
        summary: "Developed a computer vision system to assist indoor navigation in MIT’s Stata Center by classifying a user’s location from a smartphone photo and providing optimized route guidance",
        tags: ["PyTorch", "Python"],
      //   coverImage: "/projects/computer/cover.png",
        reportUrl: "/projects/computer_vision/report.pdf",
        codeUrl: "https://github.com/spasquino/computer_vision_navigation_tool",
        slidesUrl: "/projects/computer_vision/slides.pdf"
      },
      {
        id: "decision_transformer",
        title: "Decision Transformers for Reinforcement Learning",
        summary: "Explored the capabilities of Decision Transformers for reinforcement learning, validating results, running ablations, benchmarking against CQL, and testing generalizability",
        tags: ["Python", "PyTorch"],
      //   coverImage: "/projects/computer/cover.png",
        reportUrl: "/projects/sensorimotor/report.pdf",
        // codeUrl: "https://github.com/spasquino/Duality-Based-Active-Learning",
        slidesUrl: "/projects/sensorimotor/slides.pdf"
      },
      {
        id: "m3h",
        title: "Multi-Modal Transformer for Early Cardiovascular Disease Prediction",
        summary: "Conducted research on a a multi-modal, multi-task transformer-based model to predict cardiovascular diseases from EKG signals, clinical notes, demographics, and lab results",
        tags: ["Python", "PyTorch"],
      //   coverImage: "/projects/computer/cover.png",
        // reportUrl: "/projects/Research/report.pdf",
        // codeUrl: "https://github.com/spasquino/Duality-Based-Active-Learning",
        slidesUrl: "/projects/Research/slides.pdf"
      },
      {
        id: "diabetes_risk_prediction",
        title: "Interpretable Diabetes Risk Prediction and Patient Stratification",
        summary: "Developed an interpretable diabetes risk prediction and patient stratification framework using ensembling and weighted clustering, enabling understanding of risk factors and patient profiles",
        tags: ["Julia", "IAI"],
      //   coverImage: "/projects/computer/cover.png",
        reportUrl: "/projects/ML_Diabetes_Prediction/report.pdf",
        codeUrl: "https://github.com/spasquino/interpretable_diabetes_prediction",
        // slidesUrl: "/projects/ML_Diabetes_Prediction/slides.pdf"
      },
    {
      id: "capstone_rodent_activity",
      title: "Capstone - Mitigating Rodent Problem for the City of Boston",
      summary: "Developed a geospatial ML pipeline to identify high-risk, underreported rodent areas in Boston, using pseudo-sampling and uncertainty-aware bias correction methods",
      tags: ["Python", "GeoPandas", "GIS"],
      codeUrl: "https://github.com/spasquino/capstone_CityOfBoston",
      slidesUrl: "/projects/capstone/slides.pdf"
    }
  ];
  
  export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
  }
  