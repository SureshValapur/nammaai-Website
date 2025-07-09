function Navbar({ currentPage }) {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <h3>NammaAI Navigation - Current Page: {currentPage}</h3>
    </nav>
  );
}

function Hero() {
  return <section><h2>Hero Section</h2></section>;
}

function Services() {
  return <section><h2>Our Services</h2></section>;
}

function Features() {
  return <section><h2>Key Features</h2></section>;
}

function Testimonials() {
  return <section><h2>What Clients Say</h2></section>;
}

function CaseStudies() {
  return <section><h2>Case Studies</h2></section>;
}

function ContactForm() {
  return <section><h2>Contact Us</h2></section>;
}

function Footer() {
  return <footer style={{ padding: '10px', background: '#eee' }}><h3>Footer</h3></footer>;
}

function Chatbot() {
  return <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>💬 Chatbot</div>;
}

function WebDevelopmentPage() {
  return <section><h2>Web Development Services</h2></section>;
}

function ChatbotPage() {
  return <section><h2>Chatbot Development</h2></section>;
}

function SocialMediaPage() {
  return <section><h2>Social Media Ads</h2></section>;
}

function SEOPage() {
  return <section><h2>SEO Services</h2></section>;
}

// Main App
function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'web-development':
        return <WebDevelopmentPage />;
      case 'chatbot-development':
        return <ChatbotPage />;
      case 'social-media-ads':
        return <SocialMediaPage />;
      case 'seo-services':
        return <SEOPage />;
      default:
        return (
          <div>
            <Hero />
            <Services />
            <Features />
            <Testimonials />
            <CaseStudies />
            <ContactForm />
          </div>
        );
    }
  };

  return (
    <div data-name="app">
      <Navbar currentPage={currentPage} />
      {renderPage()}
      <Footer />
      <Chatbot />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
