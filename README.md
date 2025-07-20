# 🧪 Playwright Messaging Test Framework

## ✅ Features

- Playwright + TypeScript
- Page Object Model
- Mocked API via `page.route`
- GitHub Actions CI
- Allure Reporting

## ▶️ How to Run

```bash
npm install
npx playwright install
npx http-server . -p 3000
npx playwright test
```

## 📊 Allure Report

```bash
npx playwright test
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## 🤖 Tools Used

- Playwright
- TypeScript
- Allure Reporter
- ChatGPT (to assist with boilerplate)

## 💡 Decisions

- Mocking via `page.route` to avoid backend
- POM for better structure