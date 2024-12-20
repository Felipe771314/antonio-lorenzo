<?php
/**
 * Tema Hijo: Funcionalidades Personalizadas
 * Este archivo contiene todas las personalizaciones, optimizaciones y medidas de seguridad.
 */

/** ==================================
 * Carga de estilos y scripts
 * ================================== */

/**
 * Cargar estilos del tema principal y del tema hijo.
 */
function hello_child_enqueue_styles() {
    if (!wp_style_is('hello-elementor-style', 'enqueued')) {
        wp_enqueue_style(
            'hello-elementor-style', 
            get_template_directory_uri() . '/style.css'
        );
    }

    if (!wp_style_is('hello-elementor-child-style', 'enqueued')) {
        wp_enqueue_style(
            'hello-elementor-child-style', 
            get_stylesheet_directory_uri() . '/style.css',
            array('hello-elementor-style'), 
            wp_get_theme()->get('Version')
        );
    }
}
add_action('wp_enqueue_scripts', 'hello_child_enqueue_styles');

/**
 * Cargar estilos adicionales solo en la página principal.
 */
function hello_child_conditional_scripts() {
    if (is_front_page() && !wp_style_is('front-page-style', 'enqueued')) {
        wp_enqueue_style(
            'front-page-style', 
            get_stylesheet_directory_uri() . '/front-page.css'
        );
    }
}
add_action('wp_enqueue_scripts', 'hello_child_conditional_scripts');

/**
 * Eliminar scripts y estilos innecesarios.
 */
function hello_child_remove_scripts() {
    if (wp_style_is('elementor-frontend', 'enqueued')) {
        wp_dequeue_style('elementor-frontend');
    }
    if (wp_script_is('jquery', 'enqueued')) {
        wp_dequeue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'hello_child_remove_scripts', 20);

/** ==================================
 * Seguridad
 * ================================== */

/**
 * Límite de intentos de inicio de sesión con bloqueo temporal.
 */
function enhanced_limit_login_attempts($user, $password) {
    $ip_address = $_SERVER['REMOTE_ADDR'];
    $transient_key = 'login_attempts_' . $ip_address;
    $attempts = get_transient($transient_key);
    $max_attempts = 5;
    $lockout_time = 15 * MINUTE_IN_SECONDS;

    if ($attempts === false) $attempts = 0;

    $attempts++;

    if ($attempts > $max_attempts) {
        set_transient($transient_key, $attempts, $lockout_time);
        wp_die('Demasiados intentos fallidos. Bloqueado por 15 minutos.');
    }

    set_transient($transient_key, $attempts, $lockout_time);
}
add_action('wp_authenticate', 'enhanced_limit_login_attempts', 30, 2);

/**
 * Obligar contraseñas seguras de al menos 12 caracteres.
 */
function enforce_strong_passwords($errors, $update, $user) {
    if (!empty($user['user_pass']) && strlen($user['user_pass']) < 12) {
        $errors->add('weak_password', 'La contraseña debe tener al menos 12 caracteres.');
    }
}
add_action('user_profile_update_errors', 'enforce_strong_passwords', 10, 3);

/**
 * Deshabilitar xmlrpc.php.
 */
add_filter('xmlrpc_enabled', '__return_false');

/** ==================================
 * Optimización de rendimiento
 * ================================== */

/**
 * Limpieza de base de datos.
 */
function clean_database() {
    global $wpdb;

    // Elimina revisiones de publicaciones
    $wpdb->query("DELETE FROM $wpdb->posts WHERE post_type = 'revision'");

    // Limpia transitorios caducados
    $wpdb->query("DELETE FROM $wpdb->options WHERE option_name LIKE '_transient_%'");

    // Elimina metas huérfanas
    $wpdb->query("DELETE pm FROM $wpdb->postmeta pm LEFT JOIN $wpdb->posts wp ON wp.ID = pm.post_id WHERE wp.ID IS NULL");
    $wpdb->query("DELETE um FROM $wpdb->usermeta um LEFT JOIN $wpdb->users u ON u.ID = um.user_id WHERE u.ID IS NULL");
}
add_action('wp_scheduled_cleanup', 'clean_database');

// Programa limpieza diaria
if (!wp_next_scheduled('wp_scheduled_cleanup')) {
    wp_schedule_event(time(), 'daily', 'wp_scheduled_cleanup');
}

/**
 * Añadir async y defer a scripts específicos.
 */
function add_async_defer_attributes($tag, $handle) {
    if ('example-script-handle' === $handle) {
        return str_replace('src', 'async="async" src', $tag);
    }

    if ('another-script-handle' === $handle) {
        return str_replace('src', 'defer="defer" src', $tag);
    }

    return $tag;
}
add_filter('script_loader_tag', 'add_async_defer_attributes', 10, 2);

/** ==================================
 * Integración de librerías externas
 * ================================== */

/**
 * Cargar Slick Carousel desde CDN.
 */
function enqueue_slick_carousel() {
    if (!wp_style_is('slick-css', 'enqueued')) {
        wp_enqueue_style(
            'slick-css',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
        );
    }

    if (!wp_style_is('slick-theme-css', 'enqueued')) {
        wp_enqueue_style(
            'slick-theme-css',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css'
        );
    }

    if (!wp_script_is('slick-js', 'enqueued')) {
        wp_enqueue_script(
            'slick-js',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
            array('jquery'),
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_slick_carousel');

/**
 * Cargar Bootstrap desde CDN.
 */
function enqueue_bootstrap() {
    if (!wp_style_is('bootstrap-css', 'enqueued')) {
        wp_enqueue_style(
            'bootstrap-css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'
        );
    }

    if (!wp_script_is('bootstrap-js', 'enqueued')) {
        wp_enqueue_script(
            'bootstrap-js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js',
            array(),
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap');
