# Amahle Seteni Portfolio

This is a professional portfolio website showcasing education, projects, achievements, and experiences through a modern, interactive design.

## Deployment Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
1. Extract the portfolio files to your desired location.
2. Open a terminal window and navigate to the extracted folder.
3. Install the dependencies:
   ```
   npm install
   ```

### Running in Development Mode
To run the application in development mode:
```
npm run dev
```

### Building for Production
To build the application for production:
```
npm run build
```

The built files will be in the `dist` folder, which you can then deploy to your hosting platform of choice.

### Deployment Options
You can deploy this portfolio to various platforms:

1. **Vercel**
   - Sign up on [Vercel](https://vercel.com)
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory
   - Follow the prompts

2. **Netlify**
   - Sign up on [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder to Netlify's upload area
   - Or connect your GitHub repository for continuous deployment

3. **GitHub Pages**
   - Create a GitHub repository
   - Push your code to the repository
   - Enable GitHub Pages in the repository settings

## Project Structure
- `client`: Frontend React code
- `server`: Backend Express server
- `shared`: Shared types and schemas
- `attached_assets`: Images and other assets

## Customization
You can customize the portfolio by editing the constants file at `client/src/lib/constants.ts`, which contains all your personal information, skills, education, and projects.

