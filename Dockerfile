FROM node:24-alpine AS builder


WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

RUN npm install

COPY . .

RUN npm run build 


FROM nginx:1.27-alpine AS runner

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


