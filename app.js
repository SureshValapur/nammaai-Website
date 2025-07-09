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
        switch(currentPage) {
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
