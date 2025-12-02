# Security Policy for AISketch-To-Art-AI-Image-Generator-Web-App

The project maintainers take security seriously. We are committed to ensuring the security of our users and their data. This document outlines our security process and how to report vulnerabilities.

## Supported Versions

Security updates are applied only to the latest version available on the `main` branch. We encourage all users to stay on the most recent release.

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

We value the contributions of security researchers and the community in helping us maintain a high standard of security.

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, please report vulnerabilities privately through GitHub's security advisory system.

1.  Navigate to the main page of the repository.
2.  Under the repository name, click on the **Security** tab.
3.  Click **Report a vulnerability** to open the advisory form.
4.  Provide a detailed description of the vulnerability, including:
    *   A clear and concise description of the vulnerability.
    *   Step-by-step instructions to reproduce the issue.
    *   The potential impact of the vulnerability.
    *   Any proof-of-concept code, screenshots, or logs that can help us understand the issue.

We will make every effort to acknowledge your report within 48 hours and will keep you informed of our progress.

## Security Process

Once a vulnerability is reported, our process is as follows:

1.  **Triage:** We will confirm the vulnerability and determine its severity.
2.  **Remediation:** We will develop a patch to address the vulnerability.
3.  **Disclosure:** Once the patch is ready, we will issue a security advisory through GitHub, giving credit to the reporter (if they wish). We will coordinate the public disclosure with the release of the patched version.

## Security Best Practices

This project adheres to the following security best practices:

*   **Dependency Management:** We use automated tools like Dependabot to monitor our dependencies for known vulnerabilities and keep them up-to-date.
*   **Static Code Analysis:** We employ GitHub CodeQL and other static analysis tools to identify potential security issues in our codebase during the CI/CD process.
*   **Input Validation:** All user-provided input is treated as untrusted and is rigorously validated and sanitized on both the client and server sides to prevent common web vulnerabilities such as Cross-Site Scripting (XSS) and injection attacks.
*   **Principle of Least Privilege:** Components and dependencies are granted only the minimum permissions necessary to perform their functions.

We are committed to a transparent and responsive security process. Thank you for helping keep `AISketch-To-Art-AI-Image-Generator-Web-App` and its users safe.