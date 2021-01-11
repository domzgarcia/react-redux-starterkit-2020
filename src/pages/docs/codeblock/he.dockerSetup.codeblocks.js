module.exports = `
version: "3.2"

services:
  helium-app:
    build:
      context: ./docker-config-app
      labels:
        maintainer: "Product Team <dev@nuworks.ph>"
    
    image: helium:latest
    environment:
        - NODE_ENV=development
    container_name: helium-app
    ports: 
     - "9999:9999"
     - "8888:8888"
     - "3000:3000"
     - "3001:3001"
     - "3002:3002"
    volumes:
       - \$\{LOCAL_PATH\}:/var/www/vhost/app/products/helium
    networks:
       static-ip:
          ipv4_address: \$\{APP_IP\}

    tty: true
    stdin_open: true
    extra_hosts:
      - "heliumdev.com:\$\{APP_IP\}"
      - "host.docker.internal:\$\{APP_IP\}"
    
    depends_on:
      - helium-db

  helium-db:   
    image: 'heliumdb:3.2'
    ports:
      - "27017:27017"

    build:
      context: ./docker-config-mongo-3.2
      labels:
        maintainer: "Product Team <dev@nuworks.ph>"
    container_name: helium-db
    networks:
      static-ip:
        ipv4_address: \$\{DB_IP\}

    tty: true
    stdin_open: true
volumes:
  mongodb_data:
    driver: local

networks:
  static-ip:
    external: 
      name: \$\{EXTERNAL_NETWORK\}

`.trim();