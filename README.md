# gatsby-plugin-whatshelp

Easily add WhatsHelp (whatshelp.io) to your Gatsby site.

## Install

`yarn add gatsby-plugin-whatshelp`

## Usage

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-whatshelp',
    options: {
        facebook: "xxx", // Facebook page ID
        whatsapp: "xxx", // WhatsApp number
        email: "xxx@xxx.com", // Email
        call: "xxx", // Call phone number
        company_logo_url:
            "//storage.whatshelp.io/widget/xx/xxxx/xxxxxx/logo.jpg", // URL of company logo (png, jpg, gif)
        greeting_message:
            "Hello", // Text of greeting message
        call_to_action: "Call to Action", // Call to action
        button_color: "#b02030", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "facebook,whatsapp,call,email", // Order of buttons
        ga: true, // Google Analytics enabled
        branding: false, // Show branding string
        mobile: true, // Mobile version enabled
        desktop: true, // Desktop version enabled
        greeting: true, // Greeting message enabled
        shift_vertical: 0, // Vertical position, px
        shift_horizontal: 0, // Horizontal position, px
        domain: "yourdomain.com", // site domain
        key: "xxx" // pro-widget key
      }
    },
  },
],
```
