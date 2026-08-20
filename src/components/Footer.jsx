export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">Designed by Developer <span>Agnik</span> | Portfolio</p>
        <button className="btn btn-secondary btn-sm" onClick={scrollToTop} aria-label="Back to top">
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
