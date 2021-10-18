# SportsVue

## Date: 10/18/2021

### By: Luke Foster

[Deployed App](https://sports-vue.vercel.app/) | [GitHub](https://github.com/lfoster1150) | [LinkedIn](https://www.linkedin.com/in/luke-foster-61a31782/)

---

### **_Description_**

A sports-based web app to view and track all your favorite teams and players. The project was created in seven days as part of the General Assembly SEI program to test and showcase skills using a Vue/Flask/PostgreSQL stack. Vuetify components were used be used to clean up UI elements. Vuex was used to manage state, and Vuex-cache was used to temporarily cache API calls. Additionally, the API-FOOTBALL API was used to pull in data for Leagues/Teams/Players/Stats/Standings.

### **_Technologies Used_**

- Vue.js Front-End
  - Vuetify
  - Vuex
  - Vuex-cache
  - Vue-chartjs
- Flask Back-End
  - SQLAlchemy
- PostgreSQL Database

### **_Getting Started_**

The project is deployed on Vercel/Heroku and can be viewed [here](https://sports-vue.vercel.app/).

1. From the Home page you can look through leages, teams, and players without an account. In order to make things easier to view on return visits you can create an account by clicking "Register".
2. Click on a League to see teams. Click on the star under the team logo adds the team to your favorites. Click on a team to see team stats, players, and current form. Click on the star under the player portrait to add them to your favorites.
3. The user icon next to the home icon in the top corner will take you to the user page. From there you can edit your info, remove players and teams, or delete your profile entirely.

The Trello board that was used to plan and this project and track development can be viewed [here](https://trello.com/b/oUYkQ3iR/sportsvue).

---

### **_Screen Shots_**

#### Home Page

![User Page]()

#### Team Details Page

![Stack Page]()

#### Player Details Page

![Search Page]()

### **_Future Updates_**

- [x] Integrate team Statistics from API
- [x] Use vue-chartjs to display team stats stylishly
- [] Integrate player Statistics from API
- [] Use vue-chartjs to display team stats stylishly
- [] add more leagues
- [] add more sports

### **_Credits_**

##### API-FOOTBALL: [API](https://www.api-football.com/documentation-v3)

##### CSS: [Color Pallete](https://color.adobe.com/create/color-wheel) | [Title Font](https://fonts.google.com/share?selection.family=Alfa%20Slab%20One)

##### Vuetify: [Docs](https://vuetifyjs.com/en/)

#### Vue [vue-chartjs](https://github.com/apertureless/vue-chartjs) | [Vuex](https://vuex.vuejs.org/) | [vuex-cache](https://github.com/superwf/vuex-cache)

##### Flask: [Flask Many-to-many](https://stackoverflow.com/questions/25668092/flask-sqlalchemy-many-to-many-insert-data) | [Flask Many-to-many](https://stackoverflow.com/questions/45044926/db-model-vs-db-table-in-flask-sqlalchemy/45047925) | [Flask Auth](https://realpython.com/token-based-authentication-with-flask/)
