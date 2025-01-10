import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto h-full">
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
          className="bg-white p-8 rounded-xl shadow-lg h-[calc(100vh-300px)]"
        >
          <iframe
            id="JotFormIFrame-243464146391155"
            title="Contact Form"
            src="https://form.jotform.com/243464146391155"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            scrolling="no"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var ifr = document.getElementById("JotFormIFrame-243464146391155");
                if (ifr) {
                  var src = ifr.src;
                  var iframeParams = [];
                  if (window.location.href && window.location.href.indexOf("?") > -1) {
                    iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
                  }
                  if (src && src.indexOf("?") > -1) {
                    iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
                    src = src.substr(0, src.indexOf("?"))
                  }
                  iframeParams.push("isIframeEmbed=1");
                  ifr.src = src + "?" + iframeParams.join('&');
                }
                window.handleIFrameMessage = function(e) {
                  if (typeof e.data === 'object') { return; }
                  var args = e.data.split(":");
                  if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
                  if (!iframe) { return; }
                  switch (args[0]) {
                    case "scrollIntoView":
                      iframe.scrollIntoView();
                      break;
                    case "setHeight":
                      iframe.style.height = args[1] + "px";
                      break;
                    case "collapseErrorPage":
                      if (iframe.clientHeight > window.innerHeight) {
                        iframe.style.height = window.innerHeight + "px";
                      }
                      break;
                    case "reloadPage":
                      window.location.reload();
                      break;
                  }
                  var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
                  if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
                    var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
                    iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
                  }
                };
                window.addEventListener("message", handleIFrameMessage, false);
              `,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};