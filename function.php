<?php
function always_show_admin_bar($show) {
    if (current_user_can('administrator')) {
        return true;
    }
    return $show;
}
add_filter('show_admin_bar', 'always_show_admin_bar');