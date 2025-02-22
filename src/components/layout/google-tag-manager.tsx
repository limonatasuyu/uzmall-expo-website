function GoogleTagManagerHead() {
  return (
    <script
      id="gtm-script"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
})(window,document,'script','dataLayer','GTM-585RCWPM');
    `,
      }}
    />
  );
}

function GoogleTagManagerBody() {
  return (
    <noscript>
      {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-585RCWPM"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export { GoogleTagManagerHead, GoogleTagManagerBody };
