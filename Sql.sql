create database pruebaNet

CREATE TABLE [dbo].[Students] (
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [FirstName] VARCHAR(255) NOT NULL,
    [LastName] VARCHAR(255) NOT NULL,
    [BirthDate] DATE NULL
);

CREATE TABLE [dbo].[Professors] (
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [FirstName] VARCHAR(255) NOT NULL,
    [LastName] VARCHAR(255) NOT NULL,
    [Email] VARCHAR(255) NOT NULL
);


CREATE TABLE [dbo].[Grades] (
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [StudentId] INT NULL,
    [CourseId] INT NULL,
    [Grade] DECIMAL(3, 2) NULL,
    FOREIGN KEY ([StudentId]) REFERENCES [dbo].[Students]([Id]),
    FOREIGN KEY ([CourseId]) REFERENCES [dbo].[Courses]([Id])
);

CREATE TABLE [dbo].[Courses] (
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [NameCourse] VARCHAR(255) NOT NULL,
    [DescriptionCourse] VARCHAR(255) NOT NULL
);


-- Insertar estudiantes de prueba
INSERT INTO [dbo].[Students] ([FirstName], [LastName], [BirthDate]) VALUES
('Juan', 'González', '1990-05-15'),
('Ana', 'Pérez', '1992-08-22'),
('Carlos', 'Martínez', '1991-04-10'),
('Luisa', 'Hernández', '1993-11-28'),
('María', 'Rodríguez', '1994-07-07');