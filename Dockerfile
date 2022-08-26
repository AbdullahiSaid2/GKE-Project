FROM node:slim AS build
COPY ./nodeback /src


FROM nginx:alpine
COPY ./front /usr/share/nginx/html
COPY --from=build /src /usr/share/nginx/html