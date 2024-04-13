<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'telefono' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`#-aY)|^Rm#U[5[#hmf66s-b,/+HpG0+wA3MWai:jS0*[cf;WeA=y>9B/cT/g5LE' );
define( 'SECURE_AUTH_KEY',  'qNQAl{#|5V>0<V}5uciEO=_;A(!<5igaz=<)cC 7paj56zOT?ieOVrm1YTg91i?5' );
define( 'LOGGED_IN_KEY',    'ErbTBk(`zsuB@&;Xsv0*AMZ]Hzy`&7C2qm= 9`;e8<2J,z240ZQI@kr/;tcafIJ.' );
define( 'NONCE_KEY',        'Wp_(KOW}7?bIbv-|5rLyOeCe8~3fpK+U0P5vVHU*s;)|g[HgsVXY$PkqHIq`/`xy' );
define( 'AUTH_SALT',        'IVy9;#KG+a)@1(v*!K-P>d.Bw,Z^V-@/&m>tMp&V77{N7Uya9WpV^mIQDMRsT-:2' );
define( 'SECURE_AUTH_SALT', '+g@(wN[caR&.(J#K`}cH_U!5hX8am-}{p%)22Vx>oM.C<R+unXmN6(xUJo&f::KM' );
define( 'LOGGED_IN_SALT',   'oyMdXtCItUNZ@b1qdx$Q?Q_]m$V&vhs<vVIq>Md6NxX^Fv<rhG0[l|Ya5i#RnByu' );
define( 'NONCE_SALT',       ' m-ofLBtqAz+(15N!K$ofA`(c43~W!EP!qA]bHaj[5EPdJ)qq79PhXf U_$E$;BA' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
