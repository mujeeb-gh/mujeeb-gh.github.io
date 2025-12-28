import { ResearchPaper } from '../types';

export const research: ResearchPaper[] = [
  {
    id: "nijotech-rag",
    title: "Development of a Chatbot for Scholarly Research using Retrieval-Augmented Generation",
    abstract: "This study presents a RAG architecture designed to query a knowledge base of abstracts from the Association for Computational Linguistics (ACL) anthology. By fine-tuning BAAI/bge-large embeddings and utilizing a vector-based retrieval mechanism, the system demonstrates a 97% retrieval accuracy and a 15% reduction in hallucination compared to baseline LLM responses. The research addresses the critical need for trustworthy AI in academic settings.",
    journal: "Nigerian Journal of Technology (NIJOTECH)",
    status: "Under Review",
    year: "2024"
  }
];