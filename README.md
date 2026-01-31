# DealFlow

[My Notes](notes.md)

This is an application is a comprehensive calculator built for real estate investors investing in long-term properties. It will take in several input factors such as monthly/yearly rental income, mortgage term, expenses related to the property, interest rates, down payment, and potentially other inputs. The application, based on the inputs, will instantly return a list of investment metrics, such as cash on cash return, total return, monthly/yearly cash flow, and other metrics. It will also return the monthly mortgage payment, assuming a standard amortization table. 

Each "scenario" can be saved and/or shared pubicly. Users can share their scenarios publicly and can be seen as live updates. A third party API will pull either the market mortgage interest rate, 10 year treasury yield, or CPI inflation rate and display it on the application. 

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever found yourself bogged down by constantly running real estate investing scenarios to calculate cash flow and other metrics, or frustrated to write or remember the results of numerous analyses - resulting in endless re-calculation? The DealFlow application will allow you to input the relevant information for things such as cash on cash return, total return, and other measurements to analyze the potential in an investment, or refinance scenario. Users will be able to save these scenarios for on demand reference, or optionally share them publicly with others. This application significantly reduces hassle and saves time when analyzing real estate investment returns. 

### Design

![Design image](project_diagram.png)

Here is a frontend design of the application.

### Key features

- Ability for admin to modify questions
- Display live dashboard
- Scenarios are stored for reference
- Ability to change inputs for each question
- Different pages for login, calculation, and storage of saved scenarios

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - HTML will be used for the basic structure of the project. The structure will include three pages: a login page, a calculation and live updates page, and a page that contains stored scenarios. It will be used for the scenario input questions, and the results as well. 
- **CSS** - CSS will be used to adjust and design good color schemes, whitespaces, clean layout, and simple animations for showing results. 
- **React** - Will help with the login feature, but most importantly allow for clean transition between old and new data for live updates submitted by other users displayed on the UI. 
- **Service** - The web service will handle users saving or loading real estate scenarios so data is accurate between sessions. It will also assist with fetching market rate data by acting as a middle layer to not expose API keys. 
- **DB/Login** - Database will track users across the application, log them in, handle authentication, as well as store real estate scenarios for each respective user.  
- **WebSocket** - When new deals are shared publicly, websockets will be used to push those scenarios to the live dashboard in real time. This will allow data to be published immediately without needing to refresh the page. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [freedealflow.click](https://freedealflow.click).

For this deliverable, I setup an EC2 account and explored AWS. I created an EC2 instance, which is a server hosted by amazon, and accessed it using the IP given to me. Using Route 53, I leased a domain, familiarized myself with the different record types, and ensured I could access my server with the new domain I leased. I then learned what Caddy does and what it's function is, and edited it so I can have a secure connection to my domain. 

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I coded and uploaded 3 HTML pages - the login page, scenarios page, and calculate page. Login allows the user to login, calculate allows user to calculate real estate returns, track interest rates in real time, and see published scenarios from other users. The scenarios page allows user to save real estate scenarios for later reference. 
- [x] **Proper HTML element usage** - I used proper usage for HTML elements. Common ones, aside from header/main/footer include `<label>`, `<div>`, `<br>`, `<input>`, and attributes like for, name, id, and type. 
- [x] **Links** - Hyperlinks are provided on all pages, referencing each page and my GitHub at the bottom of each page. 
- [x] **Text** - There are textual descriptions on each page that are essential for the function of the website.
- [x] **3rd party API placeholder** - Third party API placeholder is towards the bottom of the calculate page, where a live interest rate tracker will be. 
- [x] **Images** - Image placed on the scenarios page, used to replace extra whitespace and add some aesthetic. 
- [x] **Login placeholder** - Login placeholder was properly coded and placed on the login page.
- [x] **DB data placeholder** - DB data represented on scenarios page, where each user will save their scenarios.
- [x] **WebSocket placeholder** - WebSocket is represented on calculate page, where there will be a live tracker for submissions from other users, who will have the option to publish their scenarios for everyone on the platform to see.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I used CSS to style the header, main section, and footer so they're spaced nicely and visually separate. I also used flexbox and padding to make the layoutu clean and easy to read.
- [x] **Navigation elements** - I styled the nav menu using CSS to display links in a row with spacing and hover effects rather than vertical bullet points. The navigation layout changes on smaller screens to stay readable.
- [x] **Responsive to window resizing** - I added media tags so the layout adjusts when the screen size changes. This includes changing menu direction, and adjusting margins/padding.
- [x] **Application elements** - I styled forms, inputs, and buttons so they're easy to use and consistent across pages. This includes spacing, borders, and hover effects.
- [x] **Application text content** - I styled headings, paragraphs, and labels to control spacing and readability. This helps the text look way more organized, and consistent throughout the whole app. 
- [x] **Application images** - I used image sizing and spacing properly so images fit inside the layout properly. That benefit is so that my page doesn't break when my image is displayed.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Installed Vite, and used it to bundle my React app for production. I ran npm build to get dist/ folder, which contains the optimized, bundled version of my project. Similar to the live server extension, vite dev mode also helped me debug and see changes in real time.
- [x] **Components** - Converted original HTML pages into react components. Created separate components in their respecctive directories for the login, calculate, and scenarios webpages. I re-used my existing CSS.
- [x] **Router** - Set up React Router to navigate between my webpages without reloading the site. Set up routes for login, scenarios, and calculate pages, as well as updated my nav links using the `<Link>` component.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - All core app features are now functional. Cash on cash return calculates appropriately using React state. Scenarios can be saved and deleted using localstorage. Future backend support for live submission feed is mocked out as well using SetInterval to simulate real time updates.
- [x] **Hooks** - Used hooks like useState to store and update input values and calculation inputs, used useNavigate to route users appropriately after login/logout, and restrict access to other pages unless logged in. Also used useEffect to run logic when components load, like checking localStorage for existing users that are logged in and redirecting them appropriately. Also used useEffect for live submission feed as well. 

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
