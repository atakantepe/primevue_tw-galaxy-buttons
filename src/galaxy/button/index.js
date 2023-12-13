export default {
    root: ({ props, context }) => ({
        class: [
            'relative',

            // Alignments
            'items-center justify-center inline-flex text-center align-bottom',

            // Sizes & Spacing
            'text-sm leading-none',
            {
                'px-2.5 py-1.5 min-w-[2rem]': props.size === null && props.label !== null,
                'px-1.5 py-1': props.size === 'small',
                'px-3 py-2': props.size === 'large'
            },
            {
                'h-8 w-8 p-0': props.label == null
            },

            // Shapes
            { 'shadow-lg': props.raised },
            { 'rounded': !props.rounded, 'rounded-full': props.rounded },

            // Text Button
            { 'bg-transparent ring-transparent': props.text && !props.plain },

            // Outlined Button
            { 'bg-transparent': props.outlined && !props.plain },

            // --- Severity Buttons ---

            // Primary Button
            {
                'text-white dark:text-surface-900': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-primary-500 to-primary-400/70 dark:from-primary-400 dark:to-primary-300/80': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-primary-500 dark:ring-primary-400': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain
            },
            // Primary Text Button
            { 'text-primary-500 dark:text-primary-400': props.text && props.severity === null && !props.plain },
            // Primary Outlined Button
            { 'text-primary-500 ring-1 ring-primary-400/80 dark:ring-primary-300/50': props.outlined && props.severity === null && !props.plain },

            // Secondary Button
            {
                'text-white dark:text-surface-900': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-surface-500 to-surface-400/70 dark:from-surface-400 dark:to-surface-300/80': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-surface-500 dark:ring-surface-400': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain
            },
            // Secondary Text Button
            { 'text-surface-500 dark:text-surface-300': props.text && props.severity === 'secondary' && !props.plain },
            // Secondary Outlined Button
            { 'text-surface-400 dark:text-surface-300 ring-1 ring-surface-400/80 dark:ring-surface-300/50': props.outlined && props.severity === 'secondary' && !props.plain },

            // Success Button
            {
                'text-white dark:text-surface-900': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-green-500 to-green-400/70 dark:from-green-400 dark:to-green-300/80': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-green-500 dark:ring-green-400': props.severity === 'success' && !props.text && !props.outlined && !props.plain
            },
            // Success Text Button
            { 'text-green-500 dark:text-green-400': props.text && props.severity === 'success' && !props.plain },
            // Success Outlined Button
            { 'text-green-500 dark:text-green-400 ring-1 ring-green-400/80 dark:ring-green-300/50': props.outlined && props.severity === 'success' && !props.plain },

            // Info Button
            {
                'text-white dark:text-surface-900': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-blue-500 to-blue-400/70 dark:from-blue-400 dark:to-blue-300/80': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-blue-500 dark:ring-blue-400': props.severity === 'info' && !props.text && !props.outlined && !props.plain
            },
            // Info Text Button
            { 'text-blue-500 dark:text-blue-400': props.text && props.severity === 'info' && !props.plain },
            // Info Outlined Button
            { 'text-blue-500 dark:text-blue-400 ring-1 ring-blue-400/80 dark:ring-blue-300/50': props.outlined && props.severity === 'info' && !props.plain },

            // Warning Button
            {
                'text-white dark:text-surface-900': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-orange-500 to-orange-400/70 dark:from-orange-400 dark:to-orange-300/80': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-orange-500 dark:ring-orange-400': props.severity === 'warning' && !props.text && !props.outlined && !props.plain
            },
            // Warning Text Button
            { 'text-orange-500 dark:text-orange-400': props.text && props.severity === 'warning' && !props.plain },
            // Warning Outlined Button
            { 'text-orange-500 dark:text-orange-400 ring-1 ring-orange-400/80 dark:ring-orange-300/50': props.outlined && props.severity === 'warning' && !props.plain },

            // Help Button
            {
                'text-white dark:text-surface-900': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-purple-500 to-purple-400/70 dark:from-purple-400 dark:to-purple-300/80': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-purple-500 dark:ring-purple-400': props.severity === 'help' && !props.text && !props.outlined && !props.plain
            },
            // Help Text Button
            { 'text-purple-500 dark:text-purple-400': props.text && props.severity === 'help' && !props.plain },
            // Help Outlined Button
            { 'text-purple-500 dark:text-purple-400 ring-1 ring-purple-400/80 dark:ring-purple-300/50': props.outlined && props.severity === 'help' && !props.plain },

            // Danger Button
            {
                'text-white dark:text-surface-900': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                'bg-surface-900 dark:bg-surface-0 bg-gradient-to-br from-red-500 to-red-400/70 dark:from-red-400 dark:to-red-300/80': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                'ring-1 ring-red-500 dark:ring-red-400': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
            },
            // Danger Text Button
            { 'text-red-500 dark:text-red-400': props.text && props.severity === 'danger' && !props.plain },
            // Danger Outlined Button
            { 'text-red-500 dark:text-red-400 ring-1 ring-red-400/80 dark:ring-red-300/50': props.outlined && props.severity === 'danger' && !props.plain },

            // --- Severity Button States ---
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-offset-current',
            { 'focus:ring-offset-2': !props.link && !props.plain && !props.outlined && !props.text },

            // Primary
            { 'hover:bg-primary-600 dark:hover:bg-primary-300 hover:ring-primary-400 dark:hover:ring-primary-300': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-primary-500 dark:focus:ring-primary-400': props.severity === null },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-primary-400/30 hover:to-primary-300/20 dark:hover:from-primary-400/30 dark:hover:to-primary-200/20': (props.text || props.outlined) && props.severity === null && !props.plain },

            // Secondary
            { 'hover:bg-surface-600 dark:hover:bg-surface-300 hover:ring-surface-400 dark:hover:ring-surface-300': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-surface-500 dark:focus:ring-surface-400': props.severity === 'secondary' },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-surface-400/30 hover:to-surface-300/20 dark:hover:from-surface-400/30 dark:hover:to-surface-200/20': (props.text || props.outlined) && props.severity === 'secondary' && !props.plain },

            // Success
            { 'hover:bg-green-600 dark:hover:bg-green-300 hover:ring-green-400 dark:hover:ring-green-300': props.severity === 'success' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-green-500 dark:focus:ring-green-400': props.severity === 'success' },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-green-400/30 hover:to-green-300/20 dark:hover:from-green-400/30 dark:hover:to-green-200/20': (props.text || props.outlined) && props.severity === 'success' && !props.plain },

            // Info
            { 'hover:bg-blue-600 dark:hover:bg-blue-300 hover:ring-blue-400 dark:hover:ring-blue-300': props.severity === 'info' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-blue-500 dark:focus:ring-blue-400': props.severity === 'info' },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-blue-400/30 hover:to-blue-300/20 dark:hover:from-blue-400/30 dark:hover:to-blue-200/20': (props.text || props.outlined) && props.severity === 'info' && !props.plain },

            // Warning
            { 'hover:bg-orange-600 dark:hover:bg-orange-300 hover:ring-orange-400 dark:hover:ring-orange-300': props.severity === 'warning' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-orange-500 dark:focus:ring-orange-400': props.severity === 'warning' },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-orange-400/30 hover:to-orange-300/20 dark:hover:from-orange-400/30 dark:hover:to-orange-200/20': (props.text || props.outlined) && props.severity === 'warning' && !props.plain },

            // Help
            { 'hover:bg-purple-600 dark:hover:bg-purple-300 hover:ring-purple-400 dark:hover:ring-purple-300': props.severity === 'help' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-purple-500 dark:focus:ring-purple-400': props.severity === 'help' },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-purple-400/30 hover:to-purple-300/20 dark:hover:from-purple-400/30 dark:hover:to-purple-200/20': (props.text || props.outlined) && props.severity === 'help' && !props.plain },

            // Warning
            { 'hover:bg-red-600 dark:hover:bg-red-300 hover:ring-red-400 dark:hover:ring-red-300': props.severity === 'danger' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-red-500 dark:focus:ring-red-400': props.severity === 'danger' },
            // Text & Outlined Button
            { 'hover:bg-gradient-to-br hover:from-red-400/30 hover:to-red-300/20 dark:hover:from-red-400/30 dark:hover:to-red-200/20': (props.text || props.outlined) && props.severity === 'danger' && !props.plain },

            // Disabled
            { 'opacity-60 pointer-events-none cursor-default': context.disabled },

            // Transitions
            'transition-all duration-400',

            // Misc
            'cursor-default overflow-hidden select-none'
        ]
    }),
    label: ({ props }) => ({
        class: [
            'font-medium',
           
            { 'flex-1': props.label !== null, 'invisible w-0': props.label == null }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'before:text-xs before:leading-none',
            'mx-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2': props.iconPos == 'bottom' && props.label != null
            }
        ]
    }),
    loadingicon: ({ props }) => ({
        class: [
            'h-3 w-3',
            'mx-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2': props.iconPos == 'bottom' && props.label != null
            }
        ]
    }),
    badge: ({ props }) => ({
        class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
    })
};
