import { useEffect } from 'react';

export const InstagramGallery = () => {
  useEffect(() => {
    // Load Elfsight Platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Function to remove Elfsight branding
    const removeElfsightBranding = () => {
      const elements = document.querySelectorAll('a[href*="elfsight.com"], .eapps-link, [class*="elfsight-app"] + a');
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.display = 'none';
          element.remove();
        }
      });
    };

    // Set up observer to watch for dynamically added branding elements
    const observer = new MutationObserver(removeElfsightBranding);
    
    // Start observing after a short delay to ensure widget is loaded
    const timeoutId = setTimeout(() => {
      removeElfsightBranding();
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }, 1500);

    return () => {
      // Cleanup when component unmounts
      observer.disconnect();
      clearTimeout(timeoutId);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Follow Us On Instagram</h2>
        <div 
          className="elfsight-app-8b1cae2c-b01b-4fbc-9286-eaa84fde3096" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};