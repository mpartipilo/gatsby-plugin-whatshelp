import React from 'react';

exports.onRenderBody = ({setPostBodyComponents}, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    return setPostBodyComponents([
      <script
        key={'gatsby-plugin-whatshelp'}
        dangerouslySetInnerHTML={{
          __html: `
          var proto = document.location.protocol,
          host = "whatshelp.io",
          url = proto + "//static." + host

          window.whatshelpOptions = ${JSON.stringify(pluginOptions)};

          var s = document.createElement("script")
          s.type = "text/javascript"
          s.async = true
          s.src = url + "/widget-send-button/js/init.js"
          s.onload = function() {
            WhWidgetSendButton.init(host, proto, window.whatshelpOptions)
          }
          var x = document.getElementsByTagName("script")[0]
          x.parentNode.insertBefore(s, x)
          `,
        }}
      />,
    ]);
  }

  return null;
};