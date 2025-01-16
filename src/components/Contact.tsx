import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Contact = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Set initial iframe parameters
    const src = iframe.src;
    const iframeParams = ['isIframeEmbed=1'];
    
    if (window.location.href && window.location.href.indexOf("?") > -1) {
      iframeParams.push(window.location.href.substr(window.location.href.indexOf("?") + 1));
    }
    
    iframe.src = `${src}${src.indexOf("?") > -1 ? "&" : "?"}${iframeParams.join("&")}`;

    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object') return;
      
      const args = e.data.split(":");
      if (!iframe) return;

      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = `${args[1]}px`;
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = `${window.innerHeight}px`;
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
      }

      const isJotForm = e.origin.indexOf("jotform") > -1;
      if (isJotForm && iframe.contentWindow) {
        const urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer)
        };
        iframe.contentWindow.postMessage(JSON.stringify({ type: "urls", value: urls }), "*");
      }
    };

    window.addEventListener("message", handleIFrameMessage);
    return () => window.removeEventListener("message", handleIFrameMessage);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Get Started!</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="jotform-embed">
            <iframe
              ref={iframeRef}
              id="JotFormIFrame-243464146391155"
              title="Contact Form"
              src="https://form.jotform.com/243464146391155"
              style={{
                minWidth: '100%',
                height: '539px',
                border: 'none'
              }}
              scrolling="no"
              allowTransparency
              allow="geolocation; microphone; camera"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};