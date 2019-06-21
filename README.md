# Carousel

React image carousel

I have used gulp to process some images from unsplash. It is fully responsive with breakpoints at 400w, 600w, 800w, 1000w, 1200w, 1920w.

I have used functional react components to make this and it is built using parcel.

After you git clone the repo, just run `npm i && npm run dev` and the project is up and running at port:1234.

Note: If you encounter sharp error while npm i, you probably run the latest node version. Gulp-responsive dependecny sharp does not work with the latest node versions. With 10, it does work. `nvm use 10` if you have nvm installed.
