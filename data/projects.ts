import { Project } from '../types';

// We export this list so we can import it in our components.
export const projects: Project[] = [
  {
    id: "rag-chatbot",
    title: "Chatbot for Scholarly Research (RAG)",
    description: "A system designed to reduce LLM hallucination when answering questions from academic papers. It bridges the gap between generic LLM knowledge and verified academic citations.",
    tags: ["Python", "RAG", "Cohere", "ChromaDB", "LangChain"],
    metrics: {
      "Accuracy": "97%",
      "Hallucination Reduction": "15%",
      "Corpus": "10,000+ Papers"
    },
    links: {
      github: "https://github.com/olamide",
      demo: "#"
    }
  },
  {
    id: "lendsqr-support",
    title: "AI Customer Support System",
    description: "Optimized customer service operations at Lendsqr by implementing a RAG pipeline on historic support tickets to automate responses and triage.",
    tags: ["Gemini Embeddings", "Supabase", "Python"],
    metrics: {
      "Triage Time": "-60%",
      "Data Source": "15k+ Tickets"
    }
  },
  {
    id: "internal-rag",
    title: "Internal Cost-Saving RAG Chatbot",
    description: "Self-hosted deployment of a retrieval system to reduce dependency on expensive external API tokens for internal company queries.",
    tags: ["Azure AI", "Self-Hosted", "Ops"],
    metrics: {
      "Savings": "₦160,000 / 6mo"
    }
  },
  {
    id: "student-records",
    title: "Student Records Management System",
    description: "A robust full-stack application for managing student data, focusing on data integrity and ease of administrative access.",
    tags: ["Django", "Python", "SQLite3", "Full Stack"]
  }
];