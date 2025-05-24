import React from "react";
import ProjectInfoCard from "./ProjectInfoCard";

const projects = [
  {
    title: "Eigen Portfolio: PCA-Based Quantitative Investment Strategy",
    content: [
      "The Eigen Portfolio project explores the application of Principal Component Analysis (PCA) in portfolio construction and risk diversification. By analyzing historical adjusted closing prices of 30+ Dow Jones Industrial Average (DJIA) constituents, we engineered a systematic strategy to derive portfolio weights from the dominant eigenvectors of the asset return covariance matrix.",

      "🔧 Methodology:\n- Constructed a comprehensive data pipeline for downloading, cleaning, and aligning time-series price data.\n- Applied PCA on the return covariance matrix to identify dominant variance directions.\n- Derived weights from leading eigenvectors to form the Eigen Portfolio.",

      "📊 Comparative Backtesting:\n- Equal Weighted Portfolio: 22.99% return, Sharpe Ratio 2.05.\n- Eigen Portfolio: 99.80% return, Sharpe Ratio 1.71.",

      "💼 Insight: Showcases how PCA and eigen-decomposition can power systematic allocation strategies, improving risk-adjusted returns and enhancing exposure to market factors."
    ],
    github: "https://github.com/your-repo-link"
  }
  // Add more projects here..
];

const ProjectSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 mt-5">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-400">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <ProjectInfoCard key={idx} {...proj} />
        ))}
      </div>
     
    </section>
  );
};

export default ProjectSection;
