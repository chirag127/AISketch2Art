# 🤖 AI AGENT DIRECTIVES: AISketch-To-Art-AI-Image-Generator-Web-App

<details>
<summary>▶️ **APEX ARCHITECT INSTRUCTION SET (DECEMBER 2025)**</summary>

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs. Check `./src/lib/api/schemas.ts` for known contracts.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, focusing on **Vite 7**, **React 19 Hooks**, and **TailwindCSS v4** best practices.
    *   **Validation:** Use `docfork` to verify *every* external API signature, especially regarding image generation payload structures.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex state management (e.g., using Zustand/Jotai) *before* writing component logic.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This repository is classified as **SCENARIO A: WEB / APP / GUI (Modern Frontend)**.

*   **PRIMARY STACK:** **TypeScript 6.x (Strict)**, **Vite 7** (Build), **React 19** (Core), **TailwindCSS v4** (Styling).
*   **Architecture:** Strict adherence to **Feature-Sliced Design (FSD)**. Components must be logically separated into `shared`, `entities`, `features`, `pages`, and `widgets`.
*   **Lint/Test:** **Biome** (Linter/Formatter - enforced via pre-commit hooks) + **Vitest** (Unit/Component Testing) + **Playwright** (E2E Testing).
*   **State Management:** Standardized on **Zustand** for global state and custom hooks for local state.
*   **Design Principle:** Mobile-first by default; leverage Tailwind's responsive utilities rigorously.

---

## 4. VERIFICATION & EXECUTION MANDATES
*   **Build Command Verification:** Agent must verify successful execution of `npm run build -- --mode production`.
*   **LINTING VERIFICATION:** Agent must self-validate code using `npx @biomejs/biome check --apply` before submitting changes.
*   **TEST COVERAGE:** Maintain minimum **85%** unit test coverage for all logic functions located in `src/features/*`.
*   **API CONTRACT:** Assume the backend API endpoint for generation is `/api/v1/generate`, accepting `{ prompt: string, style: string }` and returning `{ imageUrl: string }`.

</details>

---

# AISketch-To-Art-AI-Image-Generator-Web-App

### Transform Your Digital Scribbles into Masterpieces with Real-Time AI Styling.

This repository hosts a cutting-edge, high-performance web application that leverages generative AI models to instantaneously convert user sketches into detailed, production-ready digital artwork, offering unparalleled creative iteration speed.

---

## 🌟 Project Status & Core Metrics

| Metric | Status/Value |
| :--- | :--- |
| **Primary Language** | TypeScript 6.x |
| **Framework** | React 19 / Vite 7 |
| **Styling** | TailwindCSS v4 |
| **Architectural Pattern** | Feature-Sliced Design (FSD) |
| **Testing Suite** | Vitest / Playwright |

---

## 📐 Architecture Overview (FSD Applied)

text
/src
├── /app                # Entry point, providers (Context/Store)
├── /pages              # Layouts and main routes
├── /widgets            # Feature compositions (e.g., Toolbar, CanvasArea)
│   └── /CanvasToolbar
├── /features           # Business logic, state management, API interaction
│   ├── /sketching      # Canvas input logic
│   └── /imageGeneration# API calls, style configuration
├── /entities           # Core data structures (e.g., StyleConfig, SketchData)
├── /shared
│   ├── /ui             # Reusable, atomic components (Button, Input)
│   └── /lib            # Utilities, constants
└── /types              # Global TypeScript definitions


---

## 🚀 Getting Started (2026 Apex Standard Setup)

This project utilizes `uv` style dependency management via `npm`/`pnpm` for consistency, with **Biome** as the mandatory formatter and linter.

1.  **Clone Repository:**
    bash
    git clone https://github.com/chirag127/AISketch-To-Art-AI-Image-Generator-Web-App.git
    cd AISketch-To-Art-AI-Image-Generator-Web-App
    

2.  **Install Dependencies (Using pnpm recommended for speed):
    bash
    pnpm install
    # or npm install / yarn install
    

3.  **Run Development Server:**
    bash
    npm run dev
    

4.  **Build for Production:**
    bash
    npm run build
    

### Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Start the Vite development server. |
| `build` | `npm run build` | Compile production assets using Vite 7. |
| `lint` | `npx @biomejs/biome check --apply` | Lint and auto-fix all code using Biome. |
| `test:unit` | `npx vitest` | Run all component and utility unit tests. |
| `test:e2e` | `npx playwright test` | Execute end-to-end visual and functional tests. |
| `typecheck` | `tsc --noEmit` | Verify all TypeScript types statically. |

---

## 🏛️ Architectural Principles Enforced

*   **SOLID:** Strictly applied, especially Dependency Inversion in API adapters.
*   **DRY:** Logic reuse prioritized via shared hooks (`useCanvas`, `useGenerationState`).
*   **YAGNI:** Features are only implemented when explicitly required by a high-fidelity user story.
*   **Immutability:** State transitions rely exclusively on immutable updates to prevent React reconciliation errors.

---

## 🛡️ Security & Legal

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**. Commercial use is prohibited without express written consent.

---

<details>
<summary>🛠️ **AGENT DIRECTIVES REFERENCE**</summary>

This section mirrors the directives found in the dedicated `AGENTS.md` file for agent verification upon repository inspection.

*   **Project Stack:** TypeScript 6.x, React 19, Vite 7, TailwindCSS v4.
*   **Architectural Pattern:** Feature-Sliced Design (FSD).
*   **Verification Commands:** `npm run lint`, `npm run test:unit`, `npm run build -- --mode production`.
*   **Core Focus Areas for Agents:** State consistency across canvas manipulation and secure handling of external AI API keys (assumed handled via environment variables secured by the hosting environment).

</details>