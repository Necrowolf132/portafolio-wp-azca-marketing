<?php
/**
 * UAEL Post - Template.
 *
 * @package UAEL
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $post;

// Ensure visibility.
if ( empty( $post ) ) {
	return;
}

?>

<?php do_action( 'uael_single_post_before_wrap', get_the_ID(), $settings ); ?>

<?php
$is_buttons_enabled = 'yes' === $this->get_instance_value( 'automatically_align_buttons' );
$button_class       = $is_buttons_enabled ? 'enabled' : 'disabled';
?>
<div class="uael-post-wrapper <?php echo wp_kses_post( sanitize_text_field( $this->get_masonry_classes() ) ); ?> <?php echo ( $is_featured ) ? 'uael-post-wrapper-featured' : ''; ?> <?php echo wp_kses_post( sanitize_text_field( $this->get_category_name() ) ); ?>">
	<div class="uael-post__bg-wrap uael-bg-wrap-<?php echo esc_attr( $button_class ); ?>">

		<?php if ( 'yes' === $this->get_instance_value( 'link_complete_box' ) ) { ?>
			<a href="<?php the_permalink(); ?>" target="<?php echo ( 'yes' === $this->get_instance_value( 'link_complete_box_tab' ) ) ? '_blank' : '_self'; ?>" class="uael-post__complete-box-overlay" aria-label="<?php esc_attr_e( 'Link Complete Box', 'uael' ); ?>"></a>
		<?php } ?>
		<?php do_action( 'uael_single_post_before_inner_wrap', get_the_ID(), $settings ); ?>

		<div class="uael-post__inner-wrap uael-inner-wrap-<?php echo esc_attr( $button_class ); ?>">

		<?php $this->render_featured_image(); ?>

			<?php do_action( 'uael_single_post_before_content_wrap', get_the_ID(), $settings ); ?>

			<div class="uael-post__content-wrap uael-content-wrap-<?php echo esc_attr( $button_class ); ?>">

			<?php
			if ( $this->get_instance_value( 'show_title' ) ) {
				$this->render_title();
			}
			if ( $is_featured && $this->get_instance_value( 'show_meta' ) ) {
				$this->render_featured_meta_data();
			} else {

				if ( $this->get_instance_value( 'show_meta' ) ) {
					$this->render_meta_data();
				}
			}
			if ( $is_featured ) {
				$this->render_featured_excerpt();
			} else {

				if ( $this->get_instance_value( 'show_excerpt' ) ) {
					$this->render_excerpt();
				}
			}
			if ( $this->get_instance_value( 'show_cta' ) ) {
				?>
				<div class="uael-cta-auto-align-<?php echo esc_attr( $button_class ); ?>">
					<?php $this->render_read_more(); ?>
					</div>
					<?php
			}
			?>
			</div>
			<?php do_action( 'uael_single_post_after_content_wrap', get_the_ID(), $settings ); ?>

		</div>
		<?php do_action( 'uael_single_post_after_inner_wrap', get_the_ID(), $settings ); ?>


	</div>

</div>
<?php do_action( 'uael_single_post_after_wrap', get_the_ID(), $settings ); ?>
