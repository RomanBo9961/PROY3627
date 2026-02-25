CREATE TABLE usuarios (id INT PRIMARY KEY, nombre VARCHAR(50), role_id INT, FOREIGN KEY (role_id) REFERENCES roles(id));
