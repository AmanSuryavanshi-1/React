# EP2

11) package.json will manage the package and dependencies which will be installed in our project
12) package-lock.json will locks the version and keeps the record of it when the particular dependency is installed in the project
13) package.json & package-lock.json are important files. Even if the node modules get's deleted it can be reinstalled easily by using the data of previous versions from package.json

14) Node Modules are the collection of dependencies.And are very huge in size
15) No need to push Node modules on github as the size of node modules is very huge
16) .git-ignore file is used to ignore the things which a developer don't want to push to Github
17) - 20) index.html

# 21) PARCEL & VITE

# 21.1) PARCEL
- It plays a important role in making a react app faster
- parcel uses other libraries from node modules to work things out
- parcel is a bundler which minifies and optimizes the code
- it creates a Dev Build
- creates a local server
- Automatically refreshing the page or (HMR) hot module replacement
- it uses a File Watching Algorithm which is written in C++
- It gives Faster builds because it uses Caching in .parcel-cache
- It does Image Optimization
- Compresses
- consistent hashing
- Differential Bundling (to support older browsers)
- Helps in Error handling
- tree shaking (remove's unused code)
- There are many feature's like lazy mode for slow loading and HTTPS load (read parcel documentation)
- Webpack / Vite / parcel are the commonly used bundler

# Can be used for BUILDING by using command _npx parcel build index.html_

> If it gives error just remove this ("main": "index.js") line from package json

- It will give you three file

  dist\index.html  
   dist\index.96c45174.css  
   dist\index.2357549c.js

  - these files contains the modified code which is highly compressed and modified.
  - It compresses all the files breaking them into these 3 files only
  - This Production build is highly optimized build which you can push on the Production

  * You do not have to push dist and .parcel-cache to your github as these files gets generated again if it gets deleted it will get downloaded again same happens in case when hosting on a server
  * So you can add dist and .parcel-cache to your .gitignore

# 21.2) VITE

> 1. Role in Making React App Faster:
        -> Both Vite and Parcel play important roles in making React apps faster by optimizing the development/build process. 
        -> However, Vite is specifically designed with a focus on speed during development by leveraging native ES Module support in modern browsers.

> 2. Dev Build Creation:
        -> Both Vite and Parcel create development builds, but Vite's development server is optimized for speed and efficiency during development.

> 3. Local Server:
         -> Both Vite and Parcel create local development servers to serve the application during development.

> 4. Hot Module Replacement (HMR):
        -> Both Vite and Parcel support HMR, allowing for real-time updates to the application without full page reloads during development.

> 5. Build Speed:
        -> Vite aims to provide faster builds, especially during development, by leveraging caching and optimized file watching mechanisms.

> 6. Differential Bundling and Tree Shaking:
        -> Both Vite and Parcel support tree shaking to remove unused code, but Vite may have more advanced optimizations such as differential bundling for better support in older browsers.
        
> 7. Error Handling:
        -> Both Vite and Parcel provide error handling features to help developers identify and resolve issues during development.

# 21.3) Parcel vs vite

>Feature              Vite                       Parcel
Development Speed     Fast	                     Slower
Browser Support	      Limited(modern browsers)	 Wider
Customization         Less	                     More
Maturity	            Newer	                     Mature
Ease of Use           Simple	                 Zero-configuration
Production BuildSize Smaller                    Larger(bundles all dependencies)


> Parcel weakness:-

      -> Slower development server: Can be slower than Vite, especially for larger projects.
      -> Bundling overhead: Bundles all dependencies by default, which can lead to larger production builds.

>Parcel Strengths:-
      -> Broad browser support, customization, zero-configuration, maturity
      
> Vite Weakness:-

      -> Limited browser support: Primarily targets modern browsers that support ES modules. Transpilation for older browsers is required.
      -> Less customization: Offers fewer configuration options compared to Parcel.
      -> Newer tool: Has a smaller community and ecosystem compared to Parcel.

> Vite Strengths:-
      -> Key Strengths	Speed, performance, simplicity, modern focus


# HOW TO INITIATE A Vite APP
> Initiating a front-end app using vite:-
  1)   npm create vite@latest .
  2) √ Select a framework: » React
  3) √ Select a variant: » JavaScript
  4)   npm install
  5)   npm run dev


   # EP3
    -> *npx parcel index.html* will create a development build for us and host it on localHost
    -> NPX means u r executing a NPM package. In this case npm package is parcel and giving source file as index.html
    -> to make it easier we will write a script so we don't have to write ours *npx parcel index.html* to initiate our project again and again.
    -> And that script will be created in package.json in script tag

    ```JSON
    "scripts": {
    "start": "parcel index.html", //dev mode
    "build": "parcel build index.html", // build mode
    }
    ```
    -> now we can just write parcel index.html
    -> exactly same as npm run start (it is also calling npx parcel index.html behind the scenes)
    -> in that case we can just write npm start or npm run start both will start the project.
   
# HOW TO INITIATE A PARCEL APP

[https://dev.to/coderific/using-parcel-to-create-a-react-app-3cp0#:~:text=Using%20Parcel%20to%20create%20a%20React%20app%201,file%20...%207%20Step%207%29%20Check%20everything%20works](https://)

a) npm init -y
    <!-- Choose following before installing node modules
         package name: (leave as it is)
         version: (leave as it is)
         description: (leave as it is)
         entry point: (leave as it is)
         test command: jest
         git repository: (https://github.com/AmanSuryavanshi-1/Food_Clone.git)
         keywords: React, AmanSuryavanshi
         author: Aman Suryavanshi (AS)
         license:(ISC)                                                       -->

b) npm i -D parcel-bundler

c) npm i react react-dom

d) <!--^ Open the package.json file, and in the "scripts" section add the following "start" script. -->

   ```JSON
      "scripts": {
      "start": "parcel index.html", //dev mode
      "build": "parcel build index.html", // build mode
      }
      ```
e) Create the initial index.html

```javascript
<div id="root"></div>
<script src="./index.js"></script>
```

f) Create the index.js file

```javascript
import React from "react";
import { render } from "react-dom";

render(<p>Hello, world!</p>, document.getElementById("root"));
```

g) Check everything works (npm start)

h) create .gitignore and add following commands:-
      1] /node_modules
      2] /dist
      3] .cache/ OR .parcel-cache
        

