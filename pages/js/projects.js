
        const projects = {
            android: [
                {
                    name: "Absence",
                    description: "An application to perform employee attendance by applying geofencing and camera media...",
                    tech: "Flutter, Provider, Google Maps API, Camera, Local Storage, Node.Js, Mongo.db, Figma",
                    image: "../img/absence-preview.png",
                    link: "#"
                },
                {
                    name: "Diatrofi",
                    description: "Diatrophy is a mobile application engaged in the health sector...",
                    tech: "Flutter, Provider, Web View, Figma",
                    image: "../img/diatrofi-preview.png",
                    link: "https://github.com/famuh/diatrofi-healthcare"
                },
                {
                    name: "Movies App",
                    description: "Movies App provides information to users regarding movies that are currently showing, will be showing and top rated movies. Click on an item to view detailed information of the movie. Users can search for movies through the search menu.",
                    tech:"Flutter, Provider & BloC, Clean Architecture, CI/CD, Dependency Injection, Firebase Crashlytics",
                    image: "../img/none-image-preview.png",
                    link: "#"
                },
                {
                    name: "News App",
                    description : "News App provides information on the latest news in Indonesia. Users can read the news by pressing one of the items.",
                    tech: "Flutter, Provider",
                    image: "../img/none-image-preview.png",
                    link: "#"
                },
                
                {
                    name: "Swalokal",
                    description : "Swalokal helps users find out where their desired product is sold by simply entering the image of the product they are looking for.",
                    tech: "Kotlin, XML, FastApi, Python, Flask, TensorFlow, Figma",
                    image: "../img/swalokal-preview.png",
                    link: "#"
                },
                {
                    name: "Story App",
                    description : "Story App is a story sharing app that allows users to post photos and captions. Users can also use the map feature to view people's stories from their location.",
                    tech: "Kotlin, XML, Google Maps API, Camera",
                    image: "../img/none-image-preview.png",
                    link: "#"
                },
                {
                    name: "GitHub User App",
                    description : "GitHub User is an application that allows users to search for GitHub users and view their profiles. Users can enter a username in the search bar. The application will display a list of users that match the search. Users can then select a user to view their profile.",
                    tech: "Flutter, Provider",
                    image: "../img/none-image-preview.png",
                    link: "#"
                },
             
               
                // Add more projects here
            ],
            website: [
                {
                    name: "Covid-19 World Tracker",
                    description: "A website that helps users to find out Covid-19 disease data from abroad...",
                    tech: "HTML, CSS, Javascript, Node.Js",
                    image: "../img/web-covid-preview.png",
                    link: "https://github.com/famuh/Covid-19-World-Tracker"
                },
                {
                    name: "Flash Market",
                    description: "a simple marketplace website design with the name Flash Market. This is an assignment for the Front End Web course.",
                    tech: " HTML, CSS",
                    image: "../img/web-flashmarket-preview.png",
                    link: "#"
                },
                // Add more projects here
            ],
            // backend: [
            //     {
            //         name: "Bookshelf API",
            //         description: "A simple back-end application with a book lending theme created using node.js...",
            //         tech: "Node.Js, Eslint",
            //         image: "../img/backend-bookshelf-preview.png",
            //         link: ""
            //     },
            //     // Add more projects here
            // ],
            graphicDesign: [
                "../img/porto/Brosur FAIS ke 7.jpg",
                "../img/porto/brosur alpha.jpg",
                "../img/porto/networking and security arc.jpg",
                

                "../img/porto/pengabdian.jpg",
                "../img/porto/data science.jpeg",
                "../img/porto/feed ig bitsmikro.jpg",


                "../img/porto/Life After Bangkit.png",
                "../img/porto/IG BITS 1 OKT.jpg",




                // Add more images here
            ],
            videography: [
                "https://www.youtube.com/embed/y3_3LQppNS8",
                // "https://www.youtube.com/embed/JIQGVRRAKv4",
                // Add more video links here
            ]
        };

        // Function to render projects
        function renderProjects(containerId, projectList, isVideo = false) {
            const container = document.getElementById(containerId);
            projectList.forEach(project => {
                let item = document.createElement('div');
                item.classList.add('grid-item');
                if (isVideo) {
                    item.innerHTML = `<iframe width="320" height="240" src="${project}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                } else if (typeof project === 'object') {
                    item.innerHTML = `
                        <div class="portfolio-section-1">
                            <div class="foto-portfolio">
                                <a href="${project.link}">
                                    <img src="${project.image}" class="foto-preview-portfolio" alt="${project.name} preview">
                                </a>
                            </div>
                            <div class="project-info">
                                <h2 class="project-name"><a href="${project.link}">${project.name}</a></h2>
                                <p class="project-description">${project.description}</p>
                            </div>
                            <div class="tech-used">
                                <p>Tech : ${project.tech}</p>
                            </div>
                        </div>
                    `;
                } else {
                    item.innerHTML = `<img src="${project}" alt="" srcset="">`;
                }
                container.appendChild(item);
            });
        }

        // Render all project sections
        renderProjects('androidProjects', projects.android);
        renderProjects('websiteProjects', projects.website);
        // renderProjects('backendProjects', projects.backend);
        renderProjects('graphicDesign', projects.graphicDesign);
        renderProjects('videography', projects.videography, true);
