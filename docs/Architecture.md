# MarketMentor AI – System Architecture

## High-Level Architecture

```text
                           User
                             │
                             ▼
                  Next.js Frontend (React)
                             │
                   REST API (HTTPS)
                             │
                             ▼
              Express.js Backend (TypeScript)
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
 Prompt Engine         RAG Retrieval        Finance Services
        │                    │                    │
        │             FAISS Vector DB            │
        │                    │                   │
        │            Knowledge Base              │
        │       (Markdown / JSON / PDFs)         │
        │                    │                   │
        └────────────────────┼────────────────────┘
                             │
                             ▼
                     Gemini 2.5 Flash API
                             │
                             ▼
                    AI-Generated Response
                             │
                             ▼
                    Markdown Formatted Reply
                             │
                             ▼
                           User
```

## Component Responsibilities

### Frontend (Next.js)

* Responsive chat interface
* Markdown rendering
* Suggested questions
* Loading animations
* Source citations
* Future modules:

  * Quiz Engine
  * Financial Calculators
  * Flashcards
  * Learning Dashboard

---

### Backend (Express.js)

* REST API endpoints
* Prompt construction
* RAG orchestration
* Knowledge retrieval
* Response formatting
* Error handling
* Logging

---

### Knowledge Base

Organized domain-specific learning material covering:

* Indian Stock Market
* Forex
* Futures
* Options
* Technical Analysis
* Fundamental Analysis
* Financial Ratios
* Risk Management
* Trading Psychology
* Brokers
* Taxation
* Financial Glossary

---

### RAG Pipeline

1. Receive user question.
2. Generate embeddings.
3. Search the FAISS vector database.
4. Retrieve the most relevant documents.
5. Build a grounded prompt using retrieved context.
6. Send the prompt to Gemini 2.5 Flash.
7. Return an accurate, contextual response with source references.

---

### AI Layer

* Gemini 2.5 Flash
* Domain-specific prompt templates
* Context-aware responses
* Educational explanations
* Structured markdown output

---

### Future Enhancements

* Quiz Generation
* Flashcards
* Position Size Calculator
* SIP Calculator
* PE/PB Ratio Calculator
* Portfolio Simulator
* Company Financial Analysis
* Watchlist Management
* User Authentication
* Chat History
* Personalized Learning Paths
