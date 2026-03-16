const projectDisplayUl = document.getElementById("projectDisplayUl")
const staticBtn = document.getElementById("Static")
const responsiveBtn = document.getElementById("Responsive")
const dynamicBtn = document.getElementById("Dynamic")
const reactBtn = document.getElementById("React")


const staticList = [{
        webId: 1,
        webImgUrl: "https://image.thum.io/get/https://ahelpcode.ccbp.tech/",
        webHeading: "aHelpCode",
        webDescription: "A static project demonstrating clean HTML structure and CSS styling. Includes headings, lists, images, and links. Simple layout focusing on semantic markup and visual presentation. Great for beginners to practice static web pages.",
        webLink: "https://ahelpcode.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 2,
        webImgUrl: "https://image.thum.io/get/https://anantninja.ccbp.tech/",
        webHeading: "Ninja Portfolio",
        webDescription: "A static portfolio website showcasing personal projects and skills. Built entirely with HTML and CSS. Demonstrates proper use of sections, navigation, and responsive typography. Good starter project for portfolio setup.",
        webLink: "https://anantninja.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 3,
        webImgUrl: "https://image.thum.io/get/https://sparksorder.ccbp.tech/",
        webHeading: "Sparks Order Page",
        webDescription: "Static order page template with forms and buttons. Built using HTML and CSS only. Focuses on layout, input fields, and button design. Useful for practicing form markup and static page design.",
        webLink: "https://sparksorder.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 4,
        webImgUrl: "https://image.thum.io/get/https://anantclone1.ccbp.tech/",
        webHeading: "Card Clone",
        webDescription: "Static card component showcasing text and images. Designed with HTML and CSS. Demonstrates layout, alignment, and styling techniques. Perfect for practicing small UI component design.",
        webLink: "https://anantclone1.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 5,
        webImgUrl: "https://image.thum.io/get/https://socialicon1.ccbp.tech/",
        webHeading: "Social Icon",
        webDescription: "A static UI project displaying social media icons with hover effects. Built with HTML and CSS. Demonstrates interactive styling without JavaScript. Good for learning CSS hover and pseudo-class styling.",
        webLink: "https://socialicon1.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 6,
        webImgUrl: "https://image.thum.io/get/https://anantflower1.ccbp.tech/",
        webHeading: "Flower",
        webDescription: "Static page featuring a flower design layout. Built using HTML and CSS only. Focuses on positioning, colors, and visual arrangement. Helps practice static page styling and design aesthetics.",
        webLink: "https://anantflower1.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 7,
        webImgUrl: "https://image.thum.io/get/https://anantleaf1.ccbp.tech/",
        webHeading: "Leaf Design",
        webDescription: "A static design project showing a leaf pattern using HTML and CSS. Demonstrates layout, visual symmetry, and styling. Ideal for practicing decorative designs without JavaScript.",
        webLink: "https://anantleaf1.ccbp.tech/",
        webCode: "#",
        type: "static"
    },
    {
        webId: 8,
        webImgUrl: "https://image.thum.io/get/https://ananttourism1.ccbp.tech/",
        webHeading: "Tourism",
        webDescription: "Static tourism website showcasing destinations and images. Built with HTML and CSS. Focuses on layout, image presentation, and visual hierarchy. Perfect for practicing static web page design for travel content.",
        webLink: "https://ananttourism1.ccbp.tech/",
        webCode: "#",
        type: "static"
    }
]
const responsiveList = [{
        webId: 1,
        webImgUrl: "https://image.thum.io/get/https://anantfood.ccbp.tech/",
        webHeading: "E-Restaurant Food",
        webDescription: "A responsive restaurant website showcasing menu items, offers, and ordering options. Built with HTML, CSS, and JavaScript for interactive UI elements. Fully responsive layout that works on mobile and desktop. Demonstrates forms, modals, and dynamic content updates.",
        webLink: "https://anantfood.ccbp.tech/",
        webCode: "#",
        type: "responsive"
    },
    {
        webId: 2,
        webImgUrl: "https://image.thum.io/get/https://vishalgamer.ccbp.tech/",
        webHeading: "VishalGamer Website",
        webDescription: "A personal gaming website featuring streams, highlights, and gaming news. Interactive UI elements built with HTML, CSS, and JS. Fully responsive design for all screen sizes. Shows ability to integrate multimedia content and dynamic features.",
        webLink: "https://vishalgamer.ccbp.tech/",
        webCode: "#",
        type: "responsive"
    },
    {
        webId: 3,
        webImgUrl: "https://image.thum.io/get/https://bsgtc.ccbp.tech/",
        webHeading: "BSG Training Center",
        webDescription: "A responsive website for BSG Training Center displaying courses, schedules, and registration forms. Built with modern HTML, CSS, and JavaScript for interactive components. Works seamlessly on mobile and desktop devices. Focused on user experience and accessibility.",
        webLink: "https://bsgtc.ccbp.tech/",
        webCode: "#",
        type: "responsive"
    },
    {
        webId: 4,
        webImgUrl: "https://image.thum.io/get/https://sparksfinal.ccbp.tech/",
        webHeading: "Sparks",
        webDescription: "A responsive project website showcasing a portfolio of work, projects, or services. Built using HTML, CSS, and JS for interactive features. Mobile-friendly design with smooth animations and dynamic content updates. Demonstrates best practices in UI/UX design.",
        webLink: "https://sparksfinal.ccbp.tech/",
        webCode: "#",
        type: "responsive"
    }
]
const dynamicList = [{
        webId: 1,
        webImgUrl: "https://image.thum.io/get/https://anant-p.github.io/discount-calculater/",
        webHeading: "Discount Calculator",
        webDescription: "JavaScript discount calculator project",
        webLink: "https://anant-p.github.io/discount-calculater/",
        webCode: "https://github.com/Anant-P/discount-calculater",
        type: "dynamic"
    },
    {
        webId: 2,
        webImgUrl: "https://image.thum.io/get/https://acatlightjs.ccbp.tech/",
        webHeading: "Cat & Light",
        webDescription: "Collection of JavaScript practice projects",
        webLink: "https://acatlightjs.ccbp.tech/",
        webCode: "https://github.com/Anant-P/nxtWaveJsProject",
        type: "dynamic"
    },
    {
        webId: 3,
        webImgUrl: "https://image.thum.io/get/https://anantclone1.ccbp.tech/",
        webHeading: "Anant Clone 1",
        webDescription: "A JavaScript practice project cloning UI elements. Demonstrates DOM manipulation, event handling, and CSS styling. Good for understanding basic JS project structure.",
        webLink: "https://anantclone1.ccbp.tech/",
        webCode: "#",
        type: "dynamic"
    },
    {
        webId: 4,
        webImgUrl: "https://image.thum.io/get/https://socialicon1.ccbp.tech/",
        webHeading: "Social Icon Effects",
        webDescription: "Interactive social media icon animations built with JavaScript and CSS. Demonstrates hover effects, transitions, and responsive UI design.",
        webLink: "https://socialicon1.ccbp.tech/",
        webCode: "#",
        type: "dynamic"
    },
    {
        webId: 5,
        webImgUrl: "https://image.thum.io/get/https://anantproject2.ccbp.tech/",
        webHeading: "Simple Carousel Card",
        webDescription: "JavaScript project implementing a simple carousel card UI. Users can navigate between cards. Useful for practicing array handling, DOM updates, and interactive components.",
        webLink: "https://anantproject2.ccbp.tech/",
        webCode: "#",
        type: "dynamic"
    },
    {
        webId: 6,
        webImgUrl: "https://image.thum.io/get/https://animatedtext1.ccbp.tech/",
        webHeading: "Left Slide Text Animation",
        webDescription: "Dynamic text sliding animation built using JavaScript. Demonstrates timing functions, CSS transforms, and event triggers. Enhances UI experience with interactive animations.",
        webLink: "https://animatedtext1.ccbp.tech/",
        webCode: "#",
        type: "dynamic"
    },
    {
        webId: 7,
        webImgUrl: "https://image.thum.io/get/https://ananthover1.ccbp.tech/",
        webHeading: "Anant Hover Effects",
        webDescription: "JavaScript project with hover effects and interactive animations. Shows how to combine JS with CSS for smooth UI transitions. Great practice for DOM event handling.",
        webLink: "https://ananthover1.ccbp.tech/",
        webCode: "#",
        type: "dynamic"
    }
]
const reactList = [{
        webId: 1,
        webImgUrl: "https://image.thum.io/get/https://historysd.ccbp.tech/",
        webHeading: "Browser History App",
        webDescription: "A React application that displays a list of browser history items. You can delete individual items and clear the entire history. Built using React functional components, state hooks, and event handling. The UI is responsive and interactive.",
        webLink: "https://historysd.ccbp.tech/",
        webCode: "https://github.com/Anant-P/browser-history-react",
        type: "react"
    },
    {
        webId: 2,
        webImgUrl: "https://camo.githubusercontent.com/82602f3d2e97b28ce8372751d055f8053baa1f3004311aa605fc6150032e2498/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f676f6f676c652d7365617263682d73756767657374696f6e732d6f75747075742e676966",
        webHeading: "Google Search Suggestions",
        webDescription: "This React app simulates Google search suggestions based on user input. As the user types, possible results update dynamically. It illustrates controlled components and array filtering in React. Great practice for forms and handlers.",
        webLink: "#",
        webCode: "https://github.com/Anant-P/google-search-react",
        type: "react"
    },
    {
        webId: 3,
        webImgUrl: "https://image.thum.io/get/https://loginlogoutform.ccbp.tech/",
        webHeading: "Login / Logout Toggle",
        webDescription: "A simple React UI that lets users toggle between logged in and logged out states. Demonstrates state management using useState hook. When logged in, it shows a welcome message; when logged out, it shows a login button. Great starter React project.",
        webLink: "https://loginlogoutform.ccbp.tech/",
        webCode: "https://github.com/Anant-P/login-logout-react",
        type: "react"
    },
    {
        webId: 4,
        webImgUrl: "https://image.thum.io/get/https://tossforme.ccbp.tech/ ",
        webHeading: "Random Coin Flip Game",
        webDescription: "React app that simulates a coin flip game. On clicking a button, it randomly shows heads or tails. Good example of handling randomness and conditional rendering in React. Simple UI makes it easy to understand logic flow.",
        webLink: "https://tossforme.ccbp.tech/",
        webCode: "https://github.com/Anant-P/random-coin-flip-react",
        type: "react"
    },
    {
        webId: 5,
        webImgUrl: "https://image.thum.io/get/https://arandomnumgen.ccbp.tech/",
        webHeading: "Random Number Generator",
        webDescription: "This React application generates a random number on each button click. Demonstrates interactive UI and state updates in React. Useful for understanding event handlers and updating the DOM dynamically. Simple yet interactive.",
        webLink: "https://arandomnumgen.ccbp.tech/",
        webCode: "https://github.com/Anant-P/random-num-react",
        type: "react"
    },
    {
        webId: 6,
        webImgUrl: "https://image.thum.io/get/https://reviewsectn.ccbp.tech/",
        webHeading: "Display Reviews Component",
        webDescription: "A React reviews display component that shows user reviews and allows navigation between them. It demonstrates props usage and component composition. A good mini-project focusing on UI and state management concepts.",
        webLink: "https://reviewsectn.ccbp.tech/",
        webCode: "https://github.com/Anant-P/display-reviews-react",
        type: "react"
    },
    {
        webId: 7,
        webImgUrl: "https://image.thum.io/get/https://aemojifeedback.ccbp.tech/",
        webHeading: "Feedback Emoji UI",
        webDescription: "A React project implementing emoji based feedback. Users can select their reaction emoji and view feedback changes instantly. This app is great practice for event handling and dynamic styling. Engaging hands‑on project.",
        webLink: "https://aemojifeedback.ccbp.tech/",
        webCode: "https://github.com/Anant-P/feedback-emoji-react",
        type: "react"
    },
    {
        webId: 8,
        webImgUrl: "https://image.thum.io/get/https://asearchdesti.ccbp.tech/",
        webHeading: "Destination Search Filter",
        webDescription: "A React search filter UI that lets users search travel destinations. Implements controlled inputs and dynamic filtering of lists. Ideal for practicing array operations and conditional rendering. Smooth and responsive.",
        webLink: "https://asearchdesti.ccbp.tech/",
        webCode: "https://github.com/Anant-P/destination-search-react",
        type: "react"
    },
    {
        webId: 9,
        webImgUrl: "https://image.thum.io/get/ https://alitdrkmode.ccbp.tech/",
        webHeading: "Light / Dark Mode Switch",
        webDescription: "This project toggles between light and dark themes using React state. It shows how to manipulate classes and conditional UI updates. Useful for understanding theme toggling and user preferences in React.",
        webLink: " https://alitdrkmode.ccbp.tech/",
        webCode: "https://github.com/Anant-P/lightdarkmode-react",
        type: "react"
    }
]

const createAndDisplayProject = (listObj) => {
    const {
        webImgUrl,
        webHeading,
        webDescription,
        webLink,
        webCode
    } = listObj



    const list = document.createElement("li")
    list.classList.add("project-list")
    projectDisplayUl.appendChild(list)

    const image = document.createElement("img")
    image.src = webImgUrl
    image.classList.add("image-frame")
    list.appendChild(image)

    image.addEventListener("click", () => {
        const imageFrame = document.createElement("iframe")
        imageFrame.src = webLink
        imageFrame.classList.add("image-frame")
        list.replaceChild(imageFrame, image)

        // close button create
        const closeBtn = document.createElement("button")
        closeBtn.textContent = "X"
        closeBtn.classList.add("close-btn")
        list.appendChild(closeBtn)

        closeBtn.onclick = () => {
            list.replaceChild(image, imageFrame)
            closeBtn.remove()
        }
    })

    const hr = document.createElement("hr")
    list.appendChild(hr)

    const heading = document.createElement("h1")
    heading.textContent = webHeading
    heading.classList.add("card-heading")
    list.appendChild(heading)

    const cardParaContainer = document.createElement("div")
    cardParaContainer.classList.add("card-para-container")
    list.appendChild(cardParaContainer)

    const descriptionPragraph = document.createElement("p")
    descriptionPragraph.textContent = webDescription
    descriptionPragraph.classList.add("card-para")
    cardParaContainer.appendChild(descriptionPragraph)

    const cardBtnContainer = document.createElement("div")
    cardBtnContainer.classList.add("card-btn-container")
    list.appendChild(cardBtnContainer)

    const liveLink = document.createElement("a")
    liveLink.href = webLink
    liveLink.classList.add()
    cardBtnContainer.appendChild(liveLink)

    const cardBtn = document.createElement("button")
    cardBtn.textContent = "Open"
    cardBtn.classList.add("card-btn", "card-btn-1")
    liveLink.appendChild(cardBtn)

    const codeLink = document.createElement("a")
    codeLink.href = webCode
    codeLink.classList.add()
    cardBtnContainer.appendChild(codeLink)

    const cardBtn2 = document.createElement("button")
    cardBtn2.textContent = "Code"
    cardBtn2.classList.add("card-btn", "card-btn-2")
    codeLink.appendChild(cardBtn2)





}



function defaultDisplay(staticList) {
    staticBtn.classList.add("project-ul-button-focus")
    staticList.map(eachObj => {
        createAndDisplayProject(eachObj)
    })
}

defaultDisplay(staticList)



let isStaticClick = false
let isResponsiveClick = false
let isDynamicClick = false
let isReactClick = false

staticBtn.addEventListener("click", () => {
    staticBtn.classList.add("project-ul-button-focus")
    responsiveBtn.classList.remove("project-ul-button-focus")
    dynamicBtn.classList.remove("project-ul-button-focus")
    reactBtn.classList.remove("project-ul-button-focus")
    projectDisplayUl.textContent = ""
    if (isStaticClick === false) {
        isStaticClick = true
        if (isStaticClick) {
            staticList.map(eachObj => {
                createAndDisplayProject(eachObj)
            })
        }
        isStaticClick = false
    }
})


responsiveBtn.addEventListener("click", () => {
    staticBtn.classList.remove("project-ul-button-focus")
    responsiveBtn.classList.add("project-ul-button-focus")
    dynamicBtn.classList.remove("project-ul-button-focus")
    reactBtn.classList.remove("project-ul-button-focus")
    projectDisplayUl.textContent = ""
    if (isResponsiveClick === false) {
        isResponsiveClick = true
        if (isResponsiveClick) {
            responsiveList.map(eachObj => {
                createAndDisplayProject(eachObj)
            })
        }
        isResponsiveClick = false
    }
})

dynamicBtn.addEventListener("click", () => {
    staticBtn.classList.remove("project-ul-button-focus")
    responsiveBtn.classList.remove("project-ul-button-focus")
    dynamicBtn.classList.add("project-ul-button-focus")
    reactBtn.classList.remove("project-ul-button-focus")
    projectDisplayUl.textContent = ""
    if (isDynamicClick === false) {
        isDynamicClick = true
        if (isDynamicClick) {
            dynamicList.map(eachObj => {
                createAndDisplayProject(eachObj)
            })
        }
        isDynamicClick = false
    }
})

reactBtn.addEventListener("click", () => {

    staticBtn.classList.remove("project-ul-button-focus")
    responsiveBtn.classList.remove("project-ul-button-focus")
    dynamicBtn.classList.remove("project-ul-button-focus")
    reactBtn.classList.add("project-ul-button-focus")
    projectDisplayUl.textContent = ""
    if (isReactClick === false) {
        isReactClick = true
        if (isReactClick) {
            reactList.map(eachObj => {
                createAndDisplayProject(eachObj)
            })
        }
        isReactClick = false
    }
})
