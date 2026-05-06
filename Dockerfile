FROM nginx:alpine

WORKDIR /usr/share/nginx/html/

# Remove default nginx content
RUN rm -rf ./*

# Copy static website files directly (no build step needed)
COPY index.html .
COPY assets/ ./assets/
COPY legal/ ./legal/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
