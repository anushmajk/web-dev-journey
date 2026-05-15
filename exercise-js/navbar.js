 // Select content area
    let content = document.getElementById("content");

    // Select buttons
    let homeBtn = document.getElementById("home");
    let aboutBtn = document.getElementById("about");
    let projectsBtn = document.getElementById("projects");
    let contactBtn = document.getElementById("contact");


    // HOME
    homeBtn.addEventListener("click", function(){
      content.innerHTML = `
        <h1>Home Page</h1>
        <p>Welcome to the home page.</p>
      `;
    });

    // ABOUT
    aboutBtn.addEventListener("click", function(){
      content.innerHTML = `
        <h1>About Page</h1>
        <p>This is the about section.</p>
      `;
    });

    // PROJECTS
    projectsBtn.addEventListener("click", function(){
      content.innerHTML = `
        <h1>Projects Page</h1>
        <p>Here are some projects.</p>
      `;
    });


    // CONTACT
    contactBtn.addEventListener("click", function(){
      content.innerHTML = `
        <h1>Contact Page</h1>
        <p>Email: example@gmail.com</p>
      `;
    });