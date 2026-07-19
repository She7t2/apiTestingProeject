# 🚀 Playwright API Testing Framework

<p align="center">
  <strong>A professional, robust API Automation Testing project built using Playwright and TypeScript to ensure backend reliability and performance.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-v1.45%2B-2EAD33?style=for-the-badge&logo=playwright" alt="Playwright">
  <img src="https://img.shields.io/badge/TypeScript-v5.0%2B-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Test--Automation-Passed-success?style=for-the-badge&logo=github" alt="Automation Status">
</p>

---

## 📌 About The Project
This project is an **End-to-End API Test Automation Framework**. Utilizing **Playwright's** powerful asynchronous request engine combined with **TypeScript's** strong typing, this suite validates API endpoints, status codes, payload schemas, and response times to ensure absolute backend integrity before production deployments.

---

## 🛠️ Tech Stack
- **Test Runner & Automation:** [Playwright Tool](https://playwright.dev/)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime Environment:** Node.js

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed on your system.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/She7t2/apiTestingProeject.git](https://github.com/She7t2/apiTestingProeject.git)
   cd apiTestingProeject

###  Install project dependencies:
     ```bash 
        npm install
### Install Playwright browsers/dependencies (if prompted):
     ```bash 
        npx playwright install

## Running Tests

### Execute the full API test suite using the following commands:
    ```bash 
        npx playwright apiTest

  # 📂 Project Structure 
      ```text

    ├── tests/
    │   └── api/             # API automation test scripts (.spec.ts)
    ├── test-data/           # Dynamic payloads, JSON schemas, and static mock data
    ├── playwright.config.ts # Global Playwright configurations (Base URLs, timeouts, headers)
    ├── package.json         # Project dependencies and script shortcuts
    └── README.md            # Project documentation




