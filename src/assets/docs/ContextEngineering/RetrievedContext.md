# Retrieved Context

## Overview

Retrieved Context is the external information fetched from knowledge sources and supplied to a Large Language Model (LLM) during inference. Instead of relying only on the model's internal knowledge, AI agents retrieve relevant documents, database records, APIs, or web content and inject them into the prompt.

Retrieved Context is the foundation of Retrieval-Augmented Generation (RAG) and enables AI systems to provide accurate, up-to-date, and domain-specific responses.

---

## Why Retrieved Context?

Without Retrieved Context:

```text
User Question

↓

LLM

↓

Answer Based Only on Training Data

↓

May Hallucinate
```

The model may generate inaccurate or outdated information.

With Retrieved Context:

```text
User Question

↓

Retriever

↓

Knowledge Base

↓

Relevant Documents

↓

LLM

↓

Grounded Response
```

The model answers using verified external information.

---

## Key Characteristics

- Retrieves external knowledge
- Reduces hallucinations
- Improves factual accuracy
- Supports real-time information
- Enables enterprise search
- Uses semantic similarity
- Works with vector databases
- Forms the core of RAG systems

---

## Retrieved Context Architecture

```text
             User Query
                  │
                  ▼
             Embedding Model
                  │
                  ▼
            Vector Database
                  │
        Similarity Search
                  │
                  ▼
        Retrieved Documents
                  │
                  ▼
             Prompt Builder
                  │
                  ▼
                 LLM
                  │
                  ▼
          Grounded Response
```

---

## Components

### User Query

The question submitted by the user.

Example

```text
What is Retrieval-Augmented Generation?
```

---

### Embedding Model

Converts the query into vector embeddings.

Examples

- OpenAI Embeddings
- Sentence Transformers
- BGE Embeddings

---

### Vector Database

Stores document embeddings.

Examples

- Pinecone
- ChromaDB
- FAISS
- Weaviate
- Milvus

---

### Retriever

Finds the most relevant documents.

Methods

- Vector Search
- Hybrid Search
- Keyword Search

---

### Retrieved Documents

Relevant information returned by the retriever.

---

### Prompt Builder

Combines the user query with retrieved context before sending it to the LLM.

---

## Retrieved Context Workflow

```text
Receive User Query

↓

Generate Embedding

↓

Search Vector Database

↓

Retrieve Relevant Documents

↓

Inject Context into Prompt

↓

LLM Generates Response
```

---

# Step-by-Step Process

## Step 1

User asks a question.

---

## Step 2

The query is converted into embeddings.

---

## Step 3

The retriever searches the vector database.

---

## Step 4

Relevant documents are retrieved.

---

## Step 5

The documents are added to the prompt.

---

## Step 6

The LLM generates a grounded response.

---

# Python Example

```python
documents = [
    "RAG combines retrieval with generation.",
    "Vector databases store embeddings.",
    "LLMs use retrieved context for reasoning."
]

query = "What is RAG?"

retrieved = documents[:2]

print("Retrieved Context:")

for doc in retrieved:
    print("-", doc)
```

### Output

```text
Retrieved Context:

- RAG combines retrieval with generation.

- Vector databases store embeddings.
```

---

# Real-World Examples

## Enterprise Knowledge Assistant

```text
Employee Question

↓

Knowledge Base

↓

Retrieved Policies

↓

LLM

↓

Accurate Answer
```

---

## Customer Support

```text
Customer Query

↓

Product Documentation

↓

Retrieved Articles

↓

Support Response
```

---

## Medical AI

```text
Doctor Question

↓

Medical Research

↓

Retrieved Papers

↓

Diagnosis Support
```

---

## Legal Assistant

```text
Legal Query

↓

Case Law Database

↓

Retrieved Cases

↓

Legal Summary
```

---

# Enterprise Use Cases

- Enterprise Search
- AI Customer Support
- Healthcare Assistants
- Legal Research
- Financial Advisors
- Coding Assistants
- HR Knowledge Systems
- Document Question Answering

---

# Advantages

- Reduces hallucinations
- Uses up-to-date information
- Improves factual accuracy
- Supports private enterprise data
- Enhances explainability

---

# Limitations

- Depends on retrieval quality
- Poor indexing affects results
- Additional retrieval latency
- Increased infrastructure complexity
- Requires maintaining a knowledge base

---

# Best Practices

- Use high-quality embeddings.
- Rank retrieved documents by relevance.
- Filter duplicate or irrelevant content.
- Limit retrieved context to the most useful information.
- Regularly update the knowledge base.
- Monitor retrieval performance.

---

# Retrieved Context in Agentic AI

Agentic AI systems use Retrieved Context to ground reasoning with external knowledge. Before invoking the LLM, the agent retrieves relevant information from vector databases, enterprise documents, APIs, or search systems, injects it into the prompt, and generates responses based on verified data rather than relying solely on the model's internal knowledge.

---

# Retrieved Context vs Conversation Context

| Retrieved Context | Conversation Context |
|-------------------|----------------------|
| Retrieved from external knowledge sources | Retrieved from previous user interactions |
| Usually stored in vector databases | Stored in chat history or memory |
| Provides factual knowledge | Maintains conversational continuity |
| Core component of RAG | Core component of chat applications |
| Dynamically retrieved per query | Continuously updated during conversations |

---

# Summary

Retrieved Context is the external information fetched from knowledge sources and supplied to an LLM during inference. It enables AI systems to generate accurate, grounded, and up-to-date responses by combining user queries with relevant documents, making it a fundamental building block of Retrieval-Augmented Generation (RAG) and modern Agentic AI applications.