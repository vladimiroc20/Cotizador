-- Tabla Usuarios
CREATE TABLE Usuarios (
    Correo VARCHAR(255) PRIMARY KEY,
    Contraseña VARCHAR(255),
    NombreCompleto VARCHAR(255)
);

-- Tabla Clientes
CREATE TABLE Clientes (
    IDCliente INT PRIMARY KEY,
    NombreCompleto VARCHAR(255),
    TipoDocumento VARCHAR(50),
    NumeroIdentidad VARCHAR(50),
    Celular VARCHAR(20),
    Correo VARCHAR(255)
);

-- Tabla Servicios
CREATE TABLE Servicios (
    IDServicio INT PRIMARY KEY,
    NombreServicio VARCHAR(255),
    Valor DECIMAL(10, 2)
);

-- Tabla Cotizaciones
CREATE TABLE Cotizaciones (
    IDCotizacion INT PRIMARY KEY,
    Fecha DATE,
    CorreoUsuario VARCHAR(255),
    IDCliente INT,
    FOREIGN KEY (CorreoUsuario) REFERENCES Usuarios(Correo),
    FOREIGN KEY (IDCliente) REFERENCES Clientes(IDCliente)
);

-- Tabla CotizacionServicios
CREATE TABLE CotizacionServicios (
    IDCotizacion INT,
    IDServicio INT,
    PRIMARY KEY (IDCotizacion, IDServicio),
    FOREIGN KEY (IDCotizacion) REFERENCES Cotizaciones(IDCotizacion),
    FOREIGN KEY (IDServicio) REFERENCES Servicios(IDServicio)
);
