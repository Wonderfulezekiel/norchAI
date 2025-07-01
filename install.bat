@echo off
echo Installing NorchAI Landing Page dependencies...

:: Install dependencies
npm install next react react-dom typescript @types/react @types/react-dom @types/node
npm install tailwindcss postcss autoprefixer clsx tailwind-merge class-variance-authority lucide-react
npm install --save-dev eslint eslint-config-next

:: Initialize Tailwind CSS
npx tailwindcss init -p

echo Installation complete!
echo Run "npm run dev" to start the development server
pause 