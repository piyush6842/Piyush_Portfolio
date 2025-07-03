# Modern 3D Portfolio Website

A stunning portfolio website built with React, Three.js, and Framer Motion. This project showcases a modern and interactive user interface with 3D elements, smooth animations, and a responsive design.

## Features

- 🎨 Modern and sleek UI design
- 🌐 Interactive 3D elements using Three.js
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive across all devices
- 🎯 Five main sections: Home, About, Projects, Experience, and Contact
- 📧 Working contact form with EmailJS integration
- 🌍 3D Earth model in the contact section
- 💻 3D Computer model in the hero section
- 📊 Vertical timeline for experience section
- 🎴 Tilt effect on project cards

## Technologies Used

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Framer Motion
- TailwindCSS
- React Router DOM
- React Tilt
- React Vertical Timeline Component
- EmailJS

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Install dependencies
```bash
npm install --legacy-peer-deps
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── assets/         # Images, 3D models, and other static files
├── components/     # Reusable components
│   ├── canvas/    # Three.js components
│   └── ...
├── constants/     # Constants and data
├── pages/         # Main pages
├── styles/        # Global styles
└── utils/        # Utility functions
```

## Customization

1. Update the content in `src/constants/index.js` with your personal information
2. Replace the 3D models in the `public` folder with your own
3. Modify the color scheme in `tailwind.config.js`
4. Update the EmailJS configuration in the Contact component

## Deployment

1. Build the project
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting platform

## License

This project is open source and available under the MIT License.

## Credits

- 3D Models from Sketchfab
- Icons from Heroicons
- Design inspiration from various sources

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com)
