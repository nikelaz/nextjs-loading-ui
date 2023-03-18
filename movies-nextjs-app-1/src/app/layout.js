import 'normalize.css/normalize.css';
import '../styles/globals.sass';

export const metadata = {
  title: 'Next.js Loading UI Demo',
  description: 'Loading UI Functionality Demo Page',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main className="container">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
