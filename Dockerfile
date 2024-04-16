# Utiliser l'image httpd officielle comme image parent
FROM httpd

# Copier le répertoire html du répertoire parent vers le répertoire de l'image /usr/local/apache2/htdocs/
COPY ./Site /usr/local/apache2/htdocs/

# Rendre le port 80 accessible au monde en dehors de ce conteneur
EXPOSE 80

