<?php
/**
 * Configuración base de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: configuraciones de MySQL,
 * prefijo de tabla, claves secretas, idioma y ABSPATH.
 * Para obtener más información, visita {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * El archivo wp-config.php se utiliza durante la instalación.
 *
 * @package WordPress
 */

// ** Configuración de MySQL - Necesitas obtener estos datos de tu proveedor de alojamiento web ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'c2730576_antonio');
define('DB_USER', 'c2730576_antonio');
define('DB_PASSWORD', 'SO77lapupo');
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos */
define('DB_CHARSET', 'utf8mb4');

/** El tipo de cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autenticación y salteado.
 *
 * Reemplaza las claves por valores únicos y seguros.
 * Genera tus propias claves en {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 */
define('AUTH_KEY',         'pon_tu_clave_aqui');
define('SECURE_AUTH_KEY',  'pon_tu_clave_aqui');
define('LOGGED_IN_KEY',    'pon_tu_clave_aqui');
define('NONCE_KEY',        'pon_tu_clave_aqui');
define('AUTH_SALT',        'pon_tu_clave_aqui');
define('SECURE_AUTH_SALT', 'pon_tu_clave_aqui');
define('LOGGED_IN_SALT',   'pon_tu_clave_aqui');
define('NONCE_SALT',       'pon_tu_clave_aqui');

/**#@-*/

/**
 * Prefijo de la base de datos para las tablas de WordPress.
 * Puedes tener múltiples instalaciones en una sola base de datos cambiando el prefijo.
 */
$table_prefix  = 'wp_';

/**
 * Idioma de WordPress. 
 * Si deseas instalar WordPress en un idioma distinto, coloca el archivo .mo correspondiente en la carpeta wp-content/languages.
 */
define('WPLANG', '');

/**
 * Modo de depuración de WordPress.
 * Cámbialo a true para activar la visualización de errores durante el desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging. */

/** Configuración del path absoluto para WordPress */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura las variables de WordPress y sus archivos */
require_once(ABSPATH . 'wp-settings.php');
