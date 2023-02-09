# Project Title
A note app.

## Description
- Responsive Webpage
- Typing animation logo with CSS
- User Registration/Login with Firebase
- Google login with Firebase
- CRUD note data
- Search function
- Pin function
- Save note data on local storage
- Theme Mode(Dark/ Light Mode)




### Dependencies
*Vite, React, TailwindCSS, Firebase



### Deployment
https://lucent-cobbler-d1171f.netlify.app/

### What I learned
-The system was designed to allow user to create the first note and save to local storage then direct to login page if the user has not been logged in. Since the navigation proceed too fast till local storage unable to save the data, setTimeOut was used to delay the navigation.

-Using shared components can be really complicated passing the states around. So use useContext to share the state throughout the app.



### Remarks
The note app was built as a side project for portfolio use. 
At the very beginning of this project, I decided to store the data on local storage instead of using database.
User registration is added after the project is almost completed to practice the useContext and Protected Route usage.
Therefore, users using the same browser will share the note data on this v.1.
The v.2 is ongoing and it will be modified.


