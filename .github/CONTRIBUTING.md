# Contributing to AISketch-To-Art

First and foremost, thank you for considering a contribution to `AISketch-To-Art`. Every submission, from a minor typo fix to a major feature implementation, is invaluable to the project's success. We aim to create a welcoming and productive environment for all contributors.

This document provides a set of guidelines to ensure a smooth and effective contribution process.

## Code of Conduct

All participants in this project are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure you are familiar with its contents. Unacceptable behavior can be reported to the project maintainers.

## How to Contribute

We welcome contributions in various forms, including but not limited to:

-   **Reporting Bugs:** Use the [Bug Report](https://github.com/chirag127/AISketch-To-Art-AI-Image-Generator-Web-App/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D+) template to submit detailed bug reports.
-   **Suggesting Enhancements:** Propose new features or improvements via the [Feature Request](https://github.com/chirag127/AISketch-To-Art-AI-Image-Generator-Web-App/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFEAT%5D+) template.
-   **Writing Code:** Implement new features or fix existing bugs.
-   **Improving Documentation:** Refine the `README.md`, guides, or inline code comments.

### Finding an Issue to Work On

If you're looking for a place to start, check the [Issues tab](https://github.com/chirag127/AISketch-To-Art-AI-Image-Generator-Web-App/issues). We use labels to categorize tasks:

-   `good first issue`: Ideal for newcomers.
-   `help wanted`: Well-defined tasks that the core team needs help with.
-   `bug`: Confirmed bugs that need fixing.

## Development Workflow

Follow these steps to set up your local development environment and submit your changes.

### 1. Set Up Your Environment

1.  **Fork the Repository:** Create a personal fork of the project on GitHub.
2.  **Clone Your Fork:**
    bash
    git clone https://github.com/<YOUR_USERNAME>/AISketch-To-Art-AI-Image-Generator-Web-App.git
    cd AISketch-To-Art-AI-Image-Generator-Web-App
    
3.  **Install Dependencies:** This project uses `npm` for package management.
    bash
    npm install
    
4.  **Run the Development Server:**
    bash
    npm run dev
    

### 2. Make Your Changes

1.  **Create a New Branch:** Always work on a new branch, never directly on `main`. Name your branch according to its purpose (e.g., `feature/new-brush-tool` or `fix/canvas-save-bug`).
    bash
    git checkout -b feature/your-feature-name
    
2.  **Implement Your Code:** Make your changes, adhering to the project's architectural and coding standards.

### 3. Ensure Code Quality

Before committing, run our quality assurance scripts:

-   **Lint & Format:** We use **Biome** for lightning-fast linting and formatting. This is non-negotiable.
    bash
    # Check for issues
    npm run lint

    # Automatically fix issues
    npm run format
    
-   **Run Tests:** All existing and new tests must pass. We use **Vitest** for unit/integration tests and **Playwright** for end-to-end tests.
    bash
    npm run test
    

### 4. Submit a Pull Request

1.  **Commit Your Changes:** We enforce the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This is critical for our automated changelog generation.
    bash
    # Example commit
    git commit -m "feat: Add adjustable brush opacity slider"
    
    *Common prefixes: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.*

2.  **Push to Your Fork:**
    bash
    git push origin feature/your-feature-name
    

3.  **Open a Pull Request:**
    - Navigate to the [original repository](https://github.com/chirag127/AISketch-To-Art-AI-Image-Generator-Web-App) and create a new Pull Request from your forked branch.
    - Fill out the PR template completely. Link to the issue you are resolving (e.g., `Closes #42`).
    - A project maintainer will review your PR, provide feedback, and merge it upon approval.

## Architectural & Coding Standards

-   **Architecture:** The project follows **Feature-Sliced Design (FSD)**. Please familiarize yourself with its principles to ensure new code is placed in the correct slice (`shared`, `entities`, `features`, etc.).
-   **Technology:** We use **TypeScript (Strict Mode)**, **React**, **Vite**, and **TailwindCSS**. All new code must be strictly typed.
-   **State Management:** Prefer modern signal-based state management or React's built-in hooks (`useState`, `useReducer`, `Context`) for simplicity.

Thank you for helping make AISketch-To-Art a world-class application!