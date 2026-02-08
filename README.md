# Aero - AI Website Builder

Aero is an AI-powered website builder that helps you create beautiful websites through natural conversation. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🤖 **AI Chat Interface**: Describe your website needs in natural language
- 📝 **Code Editor**: View and edit HTML, CSS, and JavaScript
- 👁️ **Live Preview**: See your changes in real-time with responsive device views
- 🎨 **Modern UI**: Built with shadcn/ui components
- 📱 **Responsive**: Test your designs on desktop, tablet, and mobile views
- ⚡ **Fast**: Powered by Next.js 15 and React 19

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aero
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/chat/         # API routes for AI chat
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page with 3-pane layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── chat-sidebar.tsx  # AI chat interface
│   ├── editor-pane.tsx   # Code editor
│   └── preview-pane.tsx  # Live preview
└── lib/
    └── utils.ts          # Utility functions
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

## Roadmap

- [ ] Integrate AI model for website generation
- [ ] Add code editing capabilities
- [ ] Implement file system management
- [ ] Add export functionality
- [ ] Support for frameworks (React, Vue, etc.)
- [ ] Template library
- [ ] Deployment integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
