import delay from './delay';

// $('.posts__post-title').each(function (index) {
//   var index = $(this).attr('href').lastIndexOf('/');
//   var ID = $(this).attr('href').slice(index+1);
//   console.log('{id:"'+ ID +'",title:"' + $(this).children().text() + '",watchHref:"' + $(this).attr('href') + '",authorId: "jeremy-mcPeak",length: "180:10",category: "JavaScript"}');
// });

const courses = [{
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
}, {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "scott-allen",
    length: "3:10",
    category: "Software Practices"
}, {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "dan-wahlin",
    length: "2:52",
    category: "Software Architecture"
}, {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "dan-wahlin",
    length: "2:30",
    category: "Career"
}, {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
}, {
    id: "build-a-bookmark-manager-with-rails-and-vue",
    title: "Build a Bookmark Manager With Rails and Vue",
    watchHref: "https://code.tutsplus.com/courses/build-a-bookmark-manager-with-rails-and-vue",
    authorId: "jose-mota",
    length: "60:10",
    category: "Ruby on Rails"
}, {
    id: "practical-web-animation",
    title: "Practical Web Animation",
    watchHref: "https://webdesign.tutsplus.com/courses/practical-web-animation",
    authorId: "craig-campbell",
    length: "180:10",
    category: "jQuery"
}, {
    id: "data-design-with-chartjs",
    title: "Data Design With Chart.js",
    watchHref: "https://webdesign.tutsplus.com/courses/data-design-with-chartjs",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "getting-started-with-scrollmagic",
    title: "Getting Started With ScrollMagic",
    watchHref: "https://webdesign.tutsplus.com/courses/getting-started-with-scrollmagic",
    authorId: "craig-campbell",
    length: "180:10",
    category: "jQuery"
}, {
    id: "6-flexbox-projects-for-web-designers",
    title: "6 Flexbox Projects for Web Designers",
    watchHref: "https://webdesign.tutsplus.com/courses/6-flexbox-projects-for-web-designers",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS"
}, {
    id: "essential-js-libraries-for-web-typography",
    title: "Essential JS Libraries for Web Typography",
    watchHref: "https://webdesign.tutsplus.com/courses/essential-js-libraries-for-web-typography",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "3-greensock-projects-practical-animation-with-gsap",
    title: "3 GreenSock Projects: Practical Animation With GSAP",
    watchHref: "https://webdesign.tutsplus.com/courses/3-greensock-projects-practical-animation-with-gsap",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "up-and-running-with-css-transitions",
    title: "Up and Running With CSS Transitions",
    watchHref: "https://webdesign.tutsplus.com/courses/up-and-running-with-css-transitions",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS"
}, {
    id: "up-and-running-with-css-keyframe-animations",
    title: "Up and Running With CSS Keyframe Animations",
    watchHref: "https://webdesign.tutsplus.com/courses/up-and-running-with-css-keyframe-animations",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS"
}, {
    id: "improving-ux-with-jquery",
    title: "Improving UX With jQuery",
    watchHref: "https://webdesign.tutsplus.com/courses/improving-ux-with-jquery",
    authorId: "craig-campbell",
    length: "180:10",
    category: "jQuery"
}, {
    id: "customizing-bootstrap-components",
    title: "Customizing Bootstrap Components",
    watchHref: "https://webdesign.tutsplus.com/courses/customizing-bootstrap-components",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Bootstrap"
}, {
    id: "advanced-animation-with-gsap-plugins",
    title: "Advanced Animation With GSAP Plugins",
    watchHref: "https://webdesign.tutsplus.com/courses/advanced-animation-with-gsap-plugins",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "scroll-events-made-easy",
    title: "Scroll Events Made Easy",
    watchHref: "https://webdesign.tutsplus.com/courses/scroll-events-made-easy",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "greensock-animation-platform-first-steps",
    title: "GreenSock Animation Platform: First Steps",
    watchHref: "https://webdesign.tutsplus.com/courses/greensock-animation-platform-first-steps",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "animating-with-snapsvg",
    title: "Animating With Snap.svg",
    watchHref: "https://webdesign.tutsplus.com/courses/animating-with-snapsvg",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "understanding-the-css-box-model",
    title: "Understanding the CSS Box Model",
    watchHref: "https://webdesign.tutsplus.com/courses/understanding-the-css-box-model",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "using-svg-sprites",
    title: "Using SVG Sprites",
    watchHref: "https://webdesign.tutsplus.com/courses/using-svg-sprites",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "solid-html-form-structure",
    title: "Solid HTML Form Structure",
    watchHref: "https://webdesign.tutsplus.com/courses/solid-html-form-structure",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "aspnet-mvc-for-designers",
    title: "ASP.NET MVC for Designers",
    watchHref: "https://webdesign.tutsplus.com/courses/aspnet-mvc-for-designers",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "semantic-html-how-to-structure-web-pages",
    title: "Semantic HTML: How to Structure Web Pages",
    watchHref: "https://webdesign.tutsplus.com/courses/semantic-html-how-to-structure-web-pages",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "exploring-css-pseudo-elements",
    title: "Exploring CSS Pseudo-Elements",
    watchHref: "https://webdesign.tutsplus.com/courses/exploring-css-pseudo-elements",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "the-css-of-the-future",
    title: "The CSS of the Future",
    watchHref: "https://webdesign.tutsplus.com/courses/the-css-of-the-future",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "media-queries-inside-out",
    title: "Media Queries Inside Out",
    watchHref: "https://webdesign.tutsplus.com/courses/media-queries-inside-out",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "designing-in-the-browser-with-bootstrap",
    title: "Designing in the Browser With Bootstrap",
    watchHref: "https://webdesign.tutsplus.com/courses/designing-in-the-browser-with-bootstrap",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "css-flexbox-essentials",
    title: "CSS: Flexbox Essentials",
    watchHref: "https://webdesign.tutsplus.com/courses/css-flexbox-essentials",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "introduction-to-brackets",
    title: "Introduction to Brackets",
    watchHref: "https://webdesign.tutsplus.com/courses/introduction-to-brackets",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "psd-to-html-the-responsive-portfolio-build",
    title: "PSD to HTML: The Responsive Portfolio Build",
    watchHref: "https://webdesign.tutsplus.com/courses/psd-to-html-the-responsive-portfolio-build",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "designing-a-responsive-portfolio-site",
    title: "Designing a Responsive Portfolio Site",
    watchHref: "https://webdesign.tutsplus.com/courses/designing-a-responsive-portfolio-site",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "edge-animate-fundamentals",
    title: "Edge Animate Fundamentals",
    watchHref: "https://webdesign.tutsplus.com/courses/edge-animate-fundamentals",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Adobe"
}, {
    id: "jquery-for-designers",
    title: "jQuery for Designers",
    watchHref: "https://webdesign.tutsplus.com/courses/jquery-for-designers",
    authorId: "craig-campbell",
    length: "180:10",
    category: "jQuery"
}, {
    id: "animated-banners-with-css",
    title: "Animated Banners with CSS",
    watchHref: "https://webdesign.tutsplus.com/courses/animated-banners-with-css",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS"
}, {
    id: "getting-started-with-kube",
    title: "Getting Started with Kube",
    watchHref: "https://webdesign.tutsplus.com/courses/getting-started-with-kube",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Tools"
}, {
    id: "psd-to-html-flat-design-build",
    title: "PSD to HTML: Flat Design Build",
    watchHref: "https://webdesign.tutsplus.com/courses/psd-to-html-flat-design-build",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "rapid-workflow-with-skeleton",
    title: "Rapid Workflow with Skeleton",
    watchHref: "https://webdesign.tutsplus.com/courses/rapid-workflow-with-skeleton",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS"
}, {
    id: "mastering-minimalist-design",
    title: "Mastering Minimalist Design",
    watchHref: "https://webdesign.tutsplus.com/courses/mastering-minimalist-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "introduction-to-dreamweaver-cc",
    title: "Introduction to Dreamweaver CC",
    watchHref: "https://webdesign.tutsplus.com/courses/introduction-to-dreamweaver-cc",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Adobe"
}, {
    id: "html-tips-and-tricks",
    title: "HTML Tips and Tricks",
    watchHref: "https://webdesign.tutsplus.com/courses/html-tips-and-tricks",
    authorId: "craig-campbell",
    length: "180:10",
    category: "HTML"
}, {
    id: "psd-to-html-corporate-design-build",
    title: "PSD to HTML - Corporate Design Build",
    watchHref: "https://webdesign.tutsplus.com/courses/psd-to-html-corporate-design-build",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "vector-web-graphics-in-photoshop",
    title: "Vector Web Graphics in Photoshop",
    watchHref: "https://webdesign.tutsplus.com/courses/vector-web-graphics-in-photoshop",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Photoshop"
}, {
    id: "html-kickstart-essentials",
    title: "HTML Kickstart Essentials",
    watchHref: "https://code.tutsplus.com/courses/html-kickstart-essentials",
    authorId: "craig-campbell",
    length: "180:10",
    category: "HTML"
}, {
    id: "css3-typography-techniques",
    title: "CSS3 Typography Techniques",
    watchHref: "https://webdesign.tutsplus.com/courses/css3-typography-techniques",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS3"
}, {
    id: "advanced-css3-animations",
    title: "Advanced CSS3 Animations",
    watchHref: "https://webdesign.tutsplus.com/courses/advanced-css3-animations",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS3"
}, {
    id: "mastering-flat-design",
    title: "Mastering Flat Design",
    watchHref: "https://webdesign.tutsplus.com/courses/mastering-flat-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "using-grids-in-web-design",
    title: "Using Grids in Web Design",
    watchHref: "https://webdesign.tutsplus.com/courses/using-grids-in-web-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "mastering-corporate-design",
    title: "Mastering Corporate Design",
    watchHref: "https://webdesign.tutsplus.com/courses/mastering-corporate-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "html5-video-essentials",
    title: "HTML5 Video Essentials",
    watchHref: "https://webdesign.tutsplus.com/courses/html5-video-essentials",
    authorId: "craig-campbell",
    length: "180:10",
    category: "HTML5"
}, {
    id: "seo-for-web-designers",
    title: "SEO for Web Designers",
    watchHref: "https://webdesign.tutsplus.com/courses/seo-for-web-designers",
    authorId: "craig-campbell",
    length: "180:10",
    category: "SEO"
}, {
    id: "parallax-scrolling-for-web-design",
    title: "Parallax Scrolling for Web Design",
    watchHref: "https://webdesign.tutsplus.com/courses/parallax-scrolling-for-web-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "web-application-design",
    title: "Web Application Design",
    watchHref: "https://webdesign.tutsplus.com/courses/web-application-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "responsive-web-design-with-foundation",
    title: "Photoshop CS6 for Web Designers",
    watchHref: "https://webdesign.tutsplus.com/courses/photoshop-cs6-for-web-designers",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS"
}, {
    id: "",
    title: "Responsive Web Design with Foundation",
    watchHref: "https://webdesign.tutsplus.com/courses/responsive-web-design-with-foundation",
    authorId: "craig-campbell",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "css3-animations",
    title: "CSS3 Animations",
    watchHref: "https://webdesign.tutsplus.com/courses/css3-animations",
    authorId: "craig-campbell",
    length: "180:10",
    category: "CSS3"
}, {
    id: "effective-navigation-development",
    title: "Effective Navigation Development",
    watchHref: "https://webdesign.tutsplus.com/courses/effective-navigation-development",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "html-email-design-and-development",
    title: "HTML Email Design and Development",
    watchHref: "https://webdesign.tutsplus.com/courses/html-email-design-and-development",
    authorId: "craig-campbell",
    length: "180:10",
    category: "HTML"
}, {
    id: "effective-navigation-design",
    title: "Effective Navigation Design",
    watchHref: "https://webdesign.tutsplus.com/courses/effective-navigation-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "mastering-retro-web-design",
    title: "Mastering Retro Web Design",
    watchHref: "https://webdesign.tutsplus.com/courses/mastering-retro-web-design",
    authorId: "craig-campbell",
    length: "180:10",
    category: "Web Design"
}, {
    id: "first-look-at-yarn-package-manager",
    title: "First Look at Yarn Package Manager",
    watchHref: "https://code.tutsplus.com/courses/first-look-at-yarn-package-manager",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "authentication-with-laravel",
    title: "Authentication With Laravel",
    watchHref: "https://code.tutsplus.com/courses/authentication-with-laravel",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "PHP"
}, {
    id: "a-first-look-at-the-aurelia-front-end-framework",
    title: "A First Look at the Aurelia Front-End Framework",
    watchHref: "https://code.tutsplus.com/courses/a-first-look-at-the-aurelia-front-end-framework",
    authorId: "jeremy-mcPeak",
    length: "17:10",
    category: "JavaScript"
}, {
    id: "thinking-in-react-functional-components",
    title: "Thinking in React: Functional Components",
    watchHref: "https://code.tutsplus.com/courses/thinking-in-react-functional-components",
    authorId: "jeremy-mcPeak",
    length: "9:10",
    category: "JavaScript"
}, {
    id: "create-a-rest-api-with-lumen",
    title: "Create a REST API With Lumen",
    watchHref: "https://code.tutsplus.com/courses/create-a-rest-api-with-lumen",
    authorId: "jeremy-mcPeak",
    length: "52:10",
    category: "PHP"
}, {
    id: "introduction-to-jquery",
    title: "Introduction to jQuery",
    watchHref: "https://code.tutsplus.com/courses/introduction-to-jquery",
    authorId: "jeremy-mcPeak",
    length: "65:10",
    category: "JavaScript"
}, {
    id: "twig-template-engine-for-php",
    title: "Twig Template Engine for PHP",
    watchHref: "https://code.tutsplus.com/courses/twig-template-engine-for-php",
    authorId: "jeremy-mcPeak",
    length: "13:00",
    category: "PHP"
}, {
    id: "write-a-jquery-plugin",
    title: "Write a jQuery Plugin",
    watchHref: "https://code.tutsplus.com/courses/write-a-jquery-plugin",
    authorId: "jeremy-mcPeak",
    length: "46:10",
    category: "JavaScript"
}, {
    id: "generate-rest-apis-with-loopback",
    title: "Generate REST APIs With LoopBack",
    watchHref: "https://code.tutsplus.com/courses/generate-rest-apis-with-loopback",
    authorId: "jeremy-mcPeak",
    length: "54:10",
    category: "JavaScript"
}, {
    id: "how-to-become-a-web-developer-learn-php",
    title: "How to Become a Web Developer: Learn PHP",
    watchHref: "https://code.tutsplus.com/courses/how-to-become-a-web-developer-learn-php",
    authorId: "jeremy-mcPeak",
    length: "46:10",
    category: "PHP"
}, {
    id: "how-to-become-a-web-developer-jquery-and-bootstrap",
    title: "How to Become a Web Developer: jQuery and Bootstrap",
    watchHref: "https://code.tutsplus.com/courses/how-to-become-a-web-developer-jquery-and-bootstrap",
    authorId: "jeremy-mcPeak",
    length: "65:10",
    category: "JavaScript"
}, {
    id: "create-tag-helpers-in-aspnet-5",
    title: "Create Tag Helpers in ASP.NET 5",
    watchHref: "https://code.tutsplus.com/courses/create-tag-helpers-in-aspnet-5",
    authorId: "jeremy-mcPeak",
    length: "56:10",
    category: ".NET"
}, {
    id: "javascript-for-windows-10-universal-apps",
    title: "JavaScript for Windows 10 Universal Apps",
    watchHref: "https://code.tutsplus.com/courses/javascript-for-windows-10-universal-apps",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: "JavaScript"
}, {
    id: "build-a-cms-with-aspnet-and-git",
    title: "Build a CMS With ASP.NET and Git",
    watchHref: "https://code.tutsplus.com/courses/build-a-cms-with-aspnet-and-git",
    authorId: "jeremy-mcPeak",
    length: "68:10",
    category: ".NET"
}, {
    id: "how-to-become-a-web-developer",
    title: "How to Become a Web Developer",
    watchHref: "https://code.tutsplus.com/courses/how-to-become-a-web-developer",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "HTML"
}, {
    id: "get-started-with-polymer",
    title: "Get Started With Polymer",
    watchHref: "https://code.tutsplus.com/courses/get-started-with-polymer",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "JavaScript"
}, {
    id: "whats-new-in-aspnet-5",
    title: "What's New in ASP.NET 5",
    watchHref: "https://code.tutsplus.com/courses/whats-new-in-aspnet-5",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: ".NET"
}, {
    id: "animate-your-site-with-angularjs",
    title: "Animate Your Site With AngularJS",
    watchHref: "https://code.tutsplus.com/courses/animate-your-site-with-angularjs",
    authorId: "jeremy-mcPeak",
    length: "64:10",
    category: "JavaScript"
}, {
    id: "object-oriented-javascript-with-es6",
    title: "Object-Oriented JavaScript With ES6",
    watchHref: "https://code.tutsplus.com/courses/object-oriented-javascript-with-es6",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "JavaScript"
}, {
    id: "authenticate-nodejs-with-oauth-20",
    title: "Authenticate Node.js With OAuth 2.0",
    watchHref: "https://code.tutsplus.com/courses/authenticate-nodejs-with-oauth-20",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "JavaScript"
}, {
    id: "get-started-with-aspnet-mvc-6",
    title: "Get Started with ASP.NET MVC 6",
    watchHref: "https://code.tutsplus.com/courses/get-started-with-aspnet-mvc-6",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: ".NET"
}, {
    id: "easy-hosting-with-azure-websites",
    title: "Easy Hosting With Azure Websites",
    watchHref: "https://code.tutsplus.com/courses/easy-hosting-with-azure-websites",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "Microsoft"
}, {
    id: "authentication-with-aspnet-identity",
    title: "Authentication With ASP.NET Identity",
    watchHref: "https://code.tutsplus.com/courses/authentication-with-aspnet-identity",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: ".NET"
}, {
    id: "build-a-store-with-a-payment-gateway-in-aspnet",
    title: "Build a Store With a Payment Gateway in ASP.NET",
    watchHref: "https://code.tutsplus.com/courses/build-a-store-with-a-payment-gateway-in-aspnet",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: "Ruby on Rails"
}, {
    id: "securing-an-angularjs-application",
    title: "Securing an AngularJS Application",
    watchHref: "https://code.tutsplus.com/courses/securing-an-angularjs-application",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "JavaScript"
}, {
    id: "improving-c-with-version-6",
    title: "Improving C# With Version 6",
    watchHref: "https://code.tutsplus.com/courses/improving-c-with-version-6",
    authorId: "jeremy-mcPeak",
    length: "42:10",
    category: ".NET"
}, {
    id: "essential-tools-for-javascript-developers",
    title: "Essential Tools for JavaScript Developers",
    watchHref: "https://code.tutsplus.com/courses/essential-tools-for-javascript-developers",
    authorId: "jeremy-mcPeak",
    length: "66:10",
    category: "JavaScript"
}, {
    id: "programming-net-45",
    title: "Programming .NET 4.5",
    watchHref: "https://code.tutsplus.com/courses/programming-net-45",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: ".NET"
}, {
    id: "building-a-cms-with-aspnet-mvc5",
    title: "Building a CMS With ASP.NET MVC5",
    watchHref: "https://code.tutsplus.com/courses/building-a-cms-with-aspnet-mvc5",
    authorId: "jeremy-mcPeak",
    length: "300:10",
    category: ".NET"
}, {
    id: "getting-started-with-typescript",
    title: "Getting Started with TypeScript",
    watchHref: "https://code.tutsplus.com/courses/getting-started-with-typescript",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "JavaScript"
}, {
    id: "getting-started-with-aspnet-mvc5",
    title: "Getting Started with ASP.NET MVC5",
    watchHref: "https://code.tutsplus.com/courses/getting-started-with-aspnet-mvc5",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: ".NET"
}, {
    id: "build-a-cms-with-aspnet-web-pages",
    title: "Build a CMS With ASP.NET Web Pages",
    watchHref: "https://code.tutsplus.com/courses/build-a-cms-with-aspnet-web-pages",
    authorId: "jeremy-mcPeak",
    length: "300:10",
    category: ".NET"
}, {
    id: "testing-in-aspnet-mvc",
    title: "Testing in ASP.NET MVC",
    watchHref: "https://code.tutsplus.com/courses/testing-in-aspnet-mvc",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: ".NET"
}, {
    id: "aspnet-web-pages",
    title: "ASP.NET Web Pages",
    watchHref: "https://code.tutsplus.com/courses/aspnet-web-pages",
    authorId: "jeremy-mcPeak",
    length: "240:10",
    category: ".NET"
}, {
    id: "design-patterns-in-c",
    title: "Design Patterns in C#",
    watchHref: "https://code.tutsplus.com/courses/design-patterns-in-c",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: ".NET"
}, {
    id: "windows-app-from-scratch",
    title: "Windows App From Scratch",
    watchHref: "https://code.tutsplus.com/courses/windows-app-from-scratch",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: "Microsoft"
}, {
    id: "whats-coming-to-javascript",
    title: "What's Coming to JavaScript",
    watchHref: "https://code.tutsplus.com/courses/whats-coming-to-javascript",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: "JavaScript"
}, {
    id: "aspnet-web-pages-web-forms-and-mvc",
    title: "ASP.NET: Web Pages, Web Forms, and MVC",
    watchHref: "https://code.tutsplus.com/courses/aspnet-web-pages-web-forms-and-mvc",
    authorId: "jeremy-mcPeak",
    length: "420:10",
    category: "JavaScript"
}, {
    id: "javascript-design-patterns",
    title: "JavaScript Design Patterns",
    watchHref: "https://code.tutsplus.com/courses/javascript-design-patterns",
    authorId: "jeremy-mcPeak",
    length: "60:10",
    category: "JavaScript"
}, {
    id: "learning-c-201",
    title: "Learning C# 201",
    watchHref: "https://code.tutsplus.com/courses/learning-c-201",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: ".NET"
}, {
    id: "extending-aspnet-mvc",
    title: "Extending ASP.NET MVC",
    watchHref: "https://code.tutsplus.com/courses/extending-aspnet-mvc",
    authorId: "jeremy-mcPeak",
    length: "120:10",
    category: ".NET"
}, {
    id: "aspnet-102-mvc",
    title: "ASP.NET 102: MVC",
    watchHref: "https://code.tutsplus.com/courses/aspnet-102-mvc",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: ".NET"
}, {
    id: "building-ribbit-in-aspnet-mvc",
    title: "Building Ribbit in ASP.NET MVC",
    watchHref: "https://code.tutsplus.com/courses/building-ribbit-in-aspnet-mvc",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: ".NET"
}, {
    id: "windows-8-development-using-html-css-and-javascript",
    title: "Windows 8 Development Using HTML, CSS and JavaScript",
    watchHref: "https://code.tutsplus.com/courses/windows-8-development-using-html-css-and-javascript",
    authorId: "jeremy-mcPeak",
    length: "300:10",
    category: "HTML"
}, {
    id: "easier-javascript-with-typescript",
    title: "Easier JavaScript With TypeScript",
    watchHref: "https://code.tutsplus.com/courses/easier-javascript-with-typescript",
    authorId: "jeremy-mcPeak",
    length: "240:10",
    category: "JavaScript"
}, {
    id: "object-oriented-javascript",
    title: "Object-Oriented JavaScript",
    watchHref: "https://code.tutsplus.com/courses/object-oriented-javascript",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "so-you-want-to-be-a-programmer",
    title: "So You Want To Be A Programmer?",
    watchHref: "https://code.tutsplus.com/courses/so-you-want-to-be-a-programmer",
    authorId: "jeremy-mcPeak",
    length: "182:10",
    category: "Code"
}, {
    id: "programming-windows-in-net",
    title: "Programming Windows in .NET",
    watchHref: "https://code.tutsplus.com/courses/programming-windows-in-net",
    authorId: "jeremy-mcPeak",
    length: "240:10",
    category: ".NET"
}, {
    id: "programming-net",
    title: "Programming .NET",
    watchHref: "https://code.tutsplus.com/courses/programming-net",
    authorId: "jeremy-mcPeak",
    length: "300:10",
    category: ".NET"
}, {
    id: "javascript-fundamentals-2012",
    title: "JavaScript Fundamentals 2012",
    watchHref: "https://code.tutsplus.com/courses/javascript-fundamentals-2012",
    authorId: "jeremy-mcPeak",
    length: "300:10",
    category: "JavaScript"
}, {
    id: "advanced-javascript-fundamentals",
    title: "Advanced JavaScript Fundamentals",
    watchHref: "https://code.tutsplus.com/courses/advanced-javascript-fundamentals",
    authorId: "jeremy-mcPeak",
    length: "180:10",
    category: "JavaScript"
}, {
    id: "30-days-to-learn-c",
    title: "30 Days to Learn C#",
    watchHref: "https://code.tutsplus.com/courses/30-days-to-learn-c",
    authorId: "jeremy-mcPeak",
    length: "420:10",
    category: ".NET"
}];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be atleast ${minCourseTitleLength} characters.`);
                }
                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }
                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.courseId == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;
