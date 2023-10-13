# Frontend Webapp Treyee
---

## [:construction: Go to Project Dashboard](https://www.notion.so/treyee/Treyee-World-Wide-Web-0f230fb08f864ccaaaf5cf74174a8fcb?pvs=4)

## :hammer: Stack
- Next.js - React
- NodeJS >= 18.0V
- Docker
- Docker Compose
- Fetch Interceptors
- JWT
- Material @MUI

## Set enviroments .env file

In the project directory create the enviroments to connect to the api, you can see an .env.example with the parameters to use.

```env
PORT=3000
ENV=
```

## :warning: To run the project it is mandatory to have the following programs
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/linux/)
- [Make GNU](https://gnuwin32.sourceforge.net/packages/make.htm)
- [Depends On - API Strapi CMS Project]()
- [Documentation Related - DAC "Treyee"](https://github.com/treyee/documentation-flows)

---

## Run project

In the project directory, you can run the docker image only with the makeFile:

###[Makefile](https://github.com/treyee/webpage/blob/main/Makefile) - Multiple execution commands


### Runs the app in dev mode
``` bash
make run_dev 
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Runs the app in prod mode - Nginx
``` bash
make up_container 
```
Open [http://localhost:80](http://localhost:80) to view it in the browser.


--- 

## Structure Folder
```
├── public
│   └── assets
│       ├── css
│       └── img
│           ├── backgrounds
│           ├── portfolio
│           ├── team
│           └── testimonials
└── src
    ├── app
    │   ├── assets
    │   │   ├── css
    │   │   ├── img
    │   │   │   ├── backgrounds
    │   │   │   ├── portfolio
    │   │   │   ├── team
    │   │   │   └── testimonials
    │   │   ├── js
    │   │   ├── scss
    │   │   └── vendor
    │   │       ├── aos
    │   │       ├── bootstrap
    │   │       │   ├── css
    │   │       │   └── js
    │   │       ├── bootstrap-icons
    │   │       │   └── fonts
    │   │       ├── boxicons
    │   │       │   ├── css
    │   │       │   └── fonts
    │   │       ├── glightbox
    │   │       │   ├── css
    │   │       │   └── js
    │   │       ├── isotope-layout
    │   │       ├── php-email-form
    │   │       ├── purecounter
    │   │       └── swiper
    │   ├── components
    │   │   ├── common
    │   │   └── home
    │   │       ├── aboutus
    │   │       ├── contact
    │   │       ├── index
    │   │       ├── portfolio
    │   │       └── services
    │   ├── config
    │   ├── home
    │   ├── hooks
    │   ├── layouts
    │   │   ├── auth
    │   │   └── home
    │   ├── pages
    │   │   ├── sigin
    │   │   ├── signup
    │   │   └── tems
    │   ├── routes
    │   ├── services
    │   │   └── cms
    │   │       ├── home
    │   │       │   ├── data
    │   │       │   ├── dtos
    │   │       │   ├── impl
    │   │       │   └── interfaces
    │   │       └── product
    │   └── stores
    │       ├── actions
    │       ├── reducers
    │       └── states
    └── templates
        └── Squadfree
            └── forms
```