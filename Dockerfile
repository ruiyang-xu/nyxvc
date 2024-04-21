FROM node:21-alpine3.18 AS frontend-build

COPY . /app

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org \
    && npm run build


# -----
FROM python:3.10.13-slim-bullseye

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN apt update \ 
    && apt install -y nginx 

# COPY llm_backend/requirements.txt /tmp/requirements.txt

# RUN pip install -r /tmp/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# COPY llm_backend /opt/llm_backend

COPY nginx.conf /etc/nginx/conf.d/llm_chat.conf

RUN rm /etc/nginx/sites-enabled/default

COPY entrypoint.sh /opt/entrypoint.sh

COPY --from=frontend-build /app/dist /opt/static

WORKDIR /opt/

RUN chmod +x entrypoint.sh

ENTRYPOINT ["/tini","--","/opt/entrypoint.sh"]

EXPOSE 80

ENV PYTHONPATH=/opt

CMD ["tail","-f","/dev/null"]