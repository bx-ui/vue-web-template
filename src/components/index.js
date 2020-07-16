import Vue from 'vue'

const requireContext = require.context(
    './global',
    true,
    /\.vue$/
);

requireContext.keys().forEach(filename => {
    const componentConfig = requireContext(filename);
    console.log(componentConfig)
    Vue.component(
        componentConfig.default.name || componentConfig.name,
        componentConfig.default || componentConfig
    )
})

// export default requireContext;