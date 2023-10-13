# Create Nginx Image For deploy React App
FROM nginx:1.18-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builderReact /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]