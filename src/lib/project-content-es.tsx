import type { ReactNode } from "react";

const projectContentEs: Record<string, ReactNode> = {
  "dynamic-programming-coders-api": (
    <>
      <h2>Descripción General</h2>
      <p>
        Una API REST diseñada como plataforma para la práctica de programación
        competitiva, permitiendo a los usuarios gestionar concursos, problemas y
        envíos. Construida con Spring Boot y desplegada en Google Cloud App
        Engine con Cloud SQL (MySQL) como base de datos.
      </p>

      <h2>Arquitectura</h2>
      <p>
        La aplicación sigue una <strong>arquitectura en capas</strong> limpia
        con clara separación de responsabilidades:
      </p>
      <ul>
        <li>
          <strong>Controllers</strong>: 4 controladores REST manejando
          peticiones HTTP para concursos, problemas, usuarios y envíos
        </li>
        <li>
          <strong>Services</strong>: Capa de lógica de negocio implementando
          validación y orquestación
        </li>
        <li>
          <strong>Repositories</strong>: Capa de acceso a datos usando Spring
          Data JPA
        </li>
        <li>
          <strong>DTOs</strong>: Objetos de Transferencia de Datos con
          ModelMapper para conversión entidad-DTO
        </li>
        <li>
          <strong>Models</strong>: 10 modelos de entidad JPA representando el
          dominio
        </li>
      </ul>

      <h2>Stack Tecnológico</h2>
      <ul>
        <li>
          <strong>Java 11</strong> con <strong>Spring Boot</strong>
        </li>
        <li>
          <strong>Maven</strong> para gestión de dependencias
        </li>
        <li>
          <strong>Spring Data JPA</strong> para acceso a base de datos
        </li>
        <li>
          <strong>MySQL</strong> (Google Cloud SQL) para persistencia
        </li>
        <li>
          <strong>ModelMapper</strong> para mapeo de objetos
        </li>
        <li>
          <strong>Lombok</strong> para reducción de código repetitivo
        </li>
        <li>
          <strong>Google Cloud App Engine</strong> para despliegue
        </li>
      </ul>

      <h2>Características Principales</h2>
      <ul>
        <li>
          <strong>Gestión de Concursos</strong>: Crear, leer, actualizar y
          eliminar concursos de programación con metadatos
        </li>
        <li>
          <strong>Banco de Problemas</strong>: Gestionar problemas algorítmicos
          con descripciones, niveles de dificultad y categorías
        </li>
        <li>
          <strong>Perfiles de Usuario</strong>: Registro y gestión de usuarios
          con seguimiento de envíos
        </li>
        <li>
          <strong>Envíos</strong>: Rastrear soluciones de usuarios con
          veredicto, tiempo de ejecución y uso de memoria
        </li>
        <li>
          <strong>Diseño RESTful</strong>: API limpia siguiendo convenciones
          REST con códigos de estado HTTP apropiados
        </li>
      </ul>

      <h2>Lecciones Aprendidas</h2>
      <p>
        Este proyecto fue un ejercicio en diseño de APIs REST limpias con
        correcta separación de responsabilidades. Usar el patrón
        servicio/repositorio con DTOs mantuvo el código mantenible a medida que
        el número de entidades crecía. Desplegar en Google Cloud App Engine
        proporcionó experiencia con plataformas cloud gestionadas y
        configuración de Cloud SQL.
      </p>
    </>
  ),
  "p2p-file-sharing-network": (
    <>
      <h2>Descripción General</h2>
      <p>
        Un sistema descentralizado de intercambio de archivos peer-to-peer donde
        cada nodo ejecuta cinco microservicios para habilitar el descubrimiento,
        transferencia y sincronización de archivos sin depender de un servidor
        central. Construido principalmente en Go con un servicio de gestión de
        archivos en Python.
      </p>

      <h2>Arquitectura</h2>
      <p>
        El sistema sigue una{" "}
        <strong>arquitectura hexagonal (puertos y adaptadores)</strong> para
        todos los servicios en Go. Cada peer en la red ejecuta cinco
        microservicios principales:
      </p>
      <table>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Lenguaje</th>
            <th>Responsabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Client</strong>
            </td>
            <td>Go</td>
            <td>
              Interfaz de usuario para operaciones de búsqueda, carga y descarga
            </td>
          </tr>
          <tr>
            <td>
              <strong>Search</strong>
            </td>
            <td>Go</td>
            <td>
              Descubrimiento de archivos vía sockets TCP con propagación por
              inundación
            </td>
          </tr>
          <tr>
            <td>
              <strong>Download</strong>
            </td>
            <td>Go</td>
            <td>
              Manejo de transferencia de archivos, consumiendo solicitudes de
              RabbitMQ
            </td>
          </tr>
          <tr>
            <td>
              <strong>Fetch</strong>
            </td>
            <td>Go</td>
            <td>
              Sincronización periódica para mantener actualizada la
              disponibilidad de peers y archivos
            </td>
          </tr>
          <tr>
            <td>
              <strong>File Management</strong>
            </td>
            <td>Python</td>
            <td>API REST para almacenamiento y recuperación de archivos</td>
          </tr>
        </tbody>
      </table>
      <p>
        Los servicios en Go usan el <strong>framework Gin</strong> para manejo
        HTTP, aprovechando goroutines para concurrencia y operaciones Mutex para
        prevenir condiciones de carrera durante operaciones de lectura/escritura.
      </p>

      <h2>Características Principales</h2>
      <ul>
        <li>
          <strong>Join</strong>: Los peers se conectan a la red a través de
          peers conocidos, estableciéndose dentro de la topología
        </li>
        <li>
          <strong>Post Files</strong>: Los usuarios registran archivos
          disponibles con su nodo peer, haciéndolos descubribles en toda la red
        </li>
        <li>
          <strong>Fetch</strong>: Mantiene un registro actualizado de peers
          disponibles, formando eventualmente una topología de grafo completo
        </li>
        <li>
          <strong>Search</strong>: Propagación de consultas por inundación a
          través de la red con identificadores únicos (incluyendo IP de origen)
          para prevenir procesamiento duplicado y bucles infinitos
        </li>
        <li>
          <strong>Download</strong>: Transferencia asíncrona de archivos usando
          RabbitMQ para encolar y procesar solicitudes de descarga entre peers
        </li>
      </ul>

      <h2>Detalles Técnicos</h2>
      <ul>
        <li>
          <strong>Cola de Mensajes:</strong> RabbitMQ maneja solicitudes
          asíncronas de descarga entre los servicios Search y Download
        </li>
        <li>
          <strong>Comunicación entre peers:</strong> Sockets TCP para consultas
          de búsqueda con mecanismo de inundación
        </li>
        <li>
          <strong>Sincronización de archivos:</strong> El servicio Fetch
          actualiza periódicamente la disponibilidad de archivos entre peers
        </li>
        <li>
          <strong>Concurrencia:</strong> Goroutines del framework Gin + Mutex
          para seguridad en hilos
        </li>
        <li>
          <strong>Despliegue:</strong> Automatizado vía script de shell en
          instancias Ubuntu EC2 con RabbitMQ basado en Docker
        </li>
      </ul>

      <h2>Lecciones Aprendidas</h2>
      <p>
        Construir este sistema P2P reforzó los desafíos principales de sistemas
        distribuidos: gestionar topología de red sin coordinación central,
        prevenir bucles infinitos en algoritmos de inundación, y manejar
        operaciones concurrentes de archivos de forma segura. La arquitectura
        hexagonal demostró ser valiosa para aislar la lógica de negocio de las
        preocupaciones de transporte y almacenamiento.
      </p>
    </>
  ),
};

export function getProjectContentEs(slug: string): ReactNode | null {
  return projectContentEs[slug] ?? null;
}
