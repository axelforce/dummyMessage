# 📩 Playwright Messaging Test Framework

This is a simple Playwright + TypeScript test automation framework that simulates a realistic messaging app interaction.

---

## ✅ Features

- 🧪 Written in TypeScript using Playwright
- 🔄 Page Object Model structure
- 🎭 Mocked API (`page.route`) to simulate message sending
- 📄 Includes a dummy HTML messaging app
- 📊 Allure Reporting + HTML reporting
- 🚀 GitHub Actions CI with:
  - Scheduled test runs (cron)
  - Auto-serve app before tests (`http-server`)
  - GitHub Pages publishing for Allure report

---

## 🚀 Quick Start

```bash
# Install dependencies
npm ci

# Serve the dummy app
npx http-server . -p 3000

# Run tests
npx playwright test

# Generate Allure report
npx allure generate allure-results --clean -o allure-report

# Open Allure report locally
npx allure open allure-report
```

---

## ⚙️ Scripts

```json
"scripts": {
  "serve": "http-server . -p 3000",
  "test": "npx playwright test",
  "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report",
  "allure:report": "npm run allure:generate && npm run allure:open"
}
```

---

## 🤖 Tools Used

- Playwright
- TypeScript
- Allure
- GitHub Actions
- http-server
- ChatGPT (for setup assistance)

---

## 📁 Project Structure

```
.
├── dummy-messaging-app.html      # Test target UI
├── pages/                        # Page Object Models
│   └── MessagingPage.ts
├── tests/
│   └── messaging.spec.ts         # Main test spec
├── fixtures.ts                   # Custom fixture with route mocking
├── playwright.config.ts          # Dynamic CI-friendly config
├── .github/workflows/            # CI definitions
├── package.json / tsconfig.json
```

---

## 📊 GitHub Actions Highlights

- Runs only on `main` branch (push/PR)
- Scheduled nightly run at 01:00 UTC
- Auto-serves HTML with `http-server`
- Deploys Allure report to GitHub Pages

---

## 💡 Notes & Ideas for Scaling

- Add visual regression snapshots
- Add error state mocks (e.g. 500 or delay)
- Use test tagging (`@smoke`, `@regression`, etc.)
- Integrate with TestRail or XRay

---

## 📄 License

MIT