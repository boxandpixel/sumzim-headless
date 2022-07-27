<?php
# Database Configuration
define( 'DB_NAME', 'wp_sumzimdev' );
define( 'DB_USER', 'sumzimdev' );
define( 'DB_PASSWORD', 'EzDq52O8xt6z_8Z8zJk2' );
define( 'DB_HOST', '127.0.0.1:3306' );
define( 'DB_HOST_SLAVE', '127.0.0.1:3306' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         'sFtz8FN9V+%2A,:lFt>ed-Ji0+#:Er1gq)tA-RtWWI%dmUiI4!`_aj2+4[LN.;-+');
define('SECURE_AUTH_KEY',  '[d);u2iL`CU_V(OVH5#WdLvJM+CZ>=7f?^eleX.pClZoxr^Dt_<VEd? qKCOzO*+');
define('LOGGED_IN_KEY',    '$l=,4PbnA>iT+=&d%(U*-V:O|QK:7F!!]S>xdNit|^|.V8Yhg(}-$|skO&`RGlc9');
define('NONCE_KEY',        'O3X=fU8U|+b(#,nPT1Xp*@-+D-cje%,`NxGcd=3_G4wUXWoArQ+h|*%nv}Q%a@R1');
define('AUTH_SALT',        'c^)&$>r65{_/H[+fO[e(ztKY}C$.oLU}blY.Z%&zx^Dx[$AkC*rK#%|`Q+^co]}=');
define('SECURE_AUTH_SALT', 'M[9uy0%p_H MN.+6W6xC;-D4ebH~K@ic-+v;n;I&R+KB H4- 8,;Dlb)xQ_+lXS_');
define('LOGGED_IN_SALT',   ':>w.8[S~X-GzF3%48j/7fBuh!9@Wu@^>TCuniSbgA$VE7.p&kZEi$[DY7(GNM@GI');
define('NONCE_SALT',       'm~=i-Ch%|*1G(5qOQOIL1FtDwv3mlT?w_sW#o6<BVtDIPHh&M$<?vt(Mp2SVCv!z');

# Cors
header('Access-Control-Allow-Origin: http://localhost:3000');
header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // The request is using the POST method
    header("HTTP/1.1 200 OK");
    return;

}

# Localized Language Stuff

define( 'WP_CACHE', TRUE );

define( 'WP_AUTO_UPDATE_CORE', false );

define( 'PWP_NAME', 'sumzimdev' );

define( 'FS_METHOD', 'direct' );

define( 'FS_CHMOD_DIR', 0775 );

define( 'FS_CHMOD_FILE', 0664 );

define( 'PWP_ROOT_DIR', '/nas/wp' );

define( 'WPE_APIKEY', '506d6fa14d64887fa8a3749118bb978d4e5b170f' );

define( 'WPE_CLUSTER_ID', '101007' );

define( 'WPE_CLUSTER_TYPE', 'pod' );

define( 'WPE_ISP', true );

define( 'WPE_BPOD', false );

define( 'WPE_RO_FILESYSTEM', false );

define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );

define( 'WPE_SFTP_PORT', 2222 );

define( 'WPE_LBMASTER_IP', '' );

define( 'WPE_CDN_DISABLE_ALLOWED', false );

define( 'DISALLOW_FILE_MODS', FALSE );

define( 'DISALLOW_FILE_EDIT', FALSE );

define( 'DISABLE_WP_CRON', false );

define( 'WPE_FORCE_SSL_LOGIN', false );

define( 'FORCE_SSL_LOGIN', false );

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define( 'WPE_EXTERNAL_URL', false );

define( 'WP_POST_REVISIONS', FALSE );

define( 'WPE_WHITELABEL', 'wpengine' );

define( 'WP_TURN_OFF_ADMIN_BAR', false );

define( 'WPE_BETA_TESTER', false );

umask(0002);

$wpe_cdn_uris=array ( );

$wpe_no_cdn_uris=array ( );

$wpe_content_regexs=array ( );

$wpe_all_domains=array ( 0 => 'sumzimdev.wpengine.com', 1 => 'sumzimdev.wpenginepowered.com', );

$wpe_varnish_servers=array ( 0 => 'pod-101007', );

$wpe_special_ips=array ( 0 => '104.198.101.169', );

$wpe_ec_servers=array ( );

$wpe_largefs=array ( );

$wpe_netdna_domains=array ( );

$wpe_netdna_domains_secure=array ( );

$wpe_netdna_push_domains=array ( );

$wpe_domain_mappings=array ( );

$memcached_servers=array ( );


# WP Engine ID


# WP Engine Settings
//define('SAGE_CACHE_PATH', '/tmp/sage-cache/' . PWP_NAME);






define( 'WP_DEBUG', false );
@ini_set( 'display_errors', 0 );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );


# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');




//define( 'WP_SITEURL', 'http://sumzimstaging.wpengine.com' );

//define( 'WP_HOME', 'http://sumzimstaging.wpengine.com' );







define( 'WPE_SFTP_ENDPOINT', '' );
define( 'WC_REMOVE_ALL_DATA', true );
