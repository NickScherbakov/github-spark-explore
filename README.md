# GitHub Spark — Interactive Capabilities Showcase

<div align="center">

![GitHub Spark](https://img.shields.io/badge/GitHub-Spark-7C3AED?style=for-the-badge&logo=github)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite)

**An interactive showcase demonstrating the unique capabilities of GitHub Spark through hands-on examples and live demonstrations.**

[Live Demo](https://nickscherbakov.github.io/github-spark-explore/) • [GitHub Spark Docs](https://githubnext.com/projects/github-spark)

</div>

---

## 🎯 Overview

This project is an educational and inspiring interactive application that showcases the power of **GitHub Spark** — a platform that enables developers to build sophisticated web applications without complex backend infrastructure. The application demonstrates key Spark APIs through beautiful, responsive UI and real-world examples.

### ✨ Key Features

- **🤖 LLM Integration** — Interactive AI playground powered by Spark's built-in LLM API
- **💾 KV Storage** — Persistent key-value storage demo with real-time data management
- **👤 User Authentication** — GitHub user information display using Spark's authentication API
- **📚 Code Examples** — Copy-paste ready snippets for all major Spark APIs
- **🌍 Internationalization** — Multi-language support (English, Russian, Arabic, Chinese)
- **🎨 Modern UI** — Built with Radix UI, Tailwind CSS, and Framer Motion animations
- **🌓 Theme Support** — Light/Dark mode with sophisticated color schemes

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- GitHub account (for Spark authentication)

### Installation

```bash
# Clone the repository
git clone https://github.com/nickscherbakov/github-spark-explore.git
cd github-spark-explore

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 🏗️ Project Structure

```
github-spark-explore/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components (Radix + shadcn/ui)
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── FeatureGrid.tsx # Feature overview grid
│   │   ├── LLMPlayground.tsx    # AI demo component
│   │   ├── KVStorageDemo.tsx    # Storage demo component
│   │   ├── UserInfoDisplay.tsx  # User profile component
│   │   └── CodeExamples.tsx     # Code snippets library
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and helpers
│   ├── locales/            # i18n translations (en, ru, ar, zh)
│   ├── styles/             # Global styles and theme
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── PRD.md                  # Product Requirements Document
├── spark.meta.json         # Spark configuration
├── runtime.config.json     # Runtime configuration
└── package.json            # Project dependencies
```

---

## 🎨 Design Philosophy

The application follows three core design principles:

1. **Exploratory** — Users discover features through interactive examples that invite experimentation
2. **Educational** — Clear explanations paired with working code help understand Spark's APIs
3. **Inspiring** — Beautiful design demonstrates what's possible with GitHub Spark

### Design System

- **Typography**: Inter font family with carefully calibrated hierarchy
- **Colors**: Custom OKLCH color palette with sophisticated purple/blue tones
- **Animations**: Purposeful motion design using Framer Motion
- **Components**: Radix UI primitives with custom styling
- **Icons**: Phosphor Icons (duotone style)

---

## 🛠️ Technologies Used

### Core Stack
- **React 19** — Latest React with concurrent features
- **TypeScript 5.9** — Type-safe development
- **Vite 6.4** — Lightning-fast build tool
- **@github/spark** — GitHub Spark SDK

### UI & Styling
- **Tailwind CSS 4** — Utility-first CSS framework
- **Radix UI** — Accessible component primitives
- **Framer Motion** — Advanced animation library
- **shadcn/ui** — Re-usable component collection
- **next-themes** — Theme management

### Additional Tools
- **React Hook Form** — Form state management
- **Zod** — Schema validation
- **Sonner** — Toast notifications
- **Recharts** — Data visualization
- **React Query** — Server state management

---

## 📖 Key Components Documentation

### LLM Playground
Interactive AI interface demonstrating Spark's LLM API:
```typescript
import spark from '@github/spark'

const response = await spark.llm({
  model: 'gpt-4',
  messages: [{ role: 'user', content: prompt }]
})
```

### KV Storage Demo
Persistent key-value storage without backend setup:
```typescript
import spark from '@github/spark'

// Save data
await spark.kv.set('notes', notesArray)

// Retrieve data
const notes = await spark.kv.get('notes')

// Delete data
await spark.kv.delete('notes')
```

### User Info Display
Access authenticated user information:
```typescript
import spark from '@github/spark'

const user = await spark.user()
console.log(user.login, user.isOwner, user.avatarUrl)
```

---

## 🌍 Internationalization

The app supports multiple languages through the i18n system:

- **English** (`en`)
- **Russian** (`ru`)
- **Arabic** (`ar`)
- **Chinese** (`zh`)

Language files are located in `src/locales/` and can be easily extended.

---

## 🎯 Use Cases

This showcase demonstrates how to build:

- **AI-powered applications** without managing ML infrastructure
- **Persistent data storage** without database setup
- **User authentication** without OAuth configuration
- **Beautiful, responsive UIs** with modern React patterns

Perfect for:
- Learning GitHub Spark capabilities
- Prototyping AI-powered features
- Building internal tools quickly
- Teaching modern web development

---

## 📝 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Lint code with ESLint
npm run optimize  # Optimize dependencies
npm run kill      # Kill process on port 5000
```

---

## 🤝 Contributing

Contributions are welcome! This is a demonstration project showcasing GitHub Spark capabilities. Feel free to:

- Add new feature demonstrations
- Improve existing examples
- Enhance documentation
- Add more language translations
- Report issues or bugs

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🔗 Resources

- [GitHub Spark Official Site](https://githubnext.com/projects/github-spark)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)

---

## 🙏 Acknowledgments

Built with ❤️ to showcase the amazing capabilities of GitHub Spark.

- Design inspired by modern web best practices
- Components powered by shadcn/ui and Radix UI
- Icons by Phosphor Icons
- Animations by Framer Motion

---

<div align="center">

**[⭐ Star this repo](https://github.com/nickscherbakov/github-spark-explore) if you find it useful!**

Made by [Nick Scherbakov](https://github.com/nickscherbakov)

</div>

