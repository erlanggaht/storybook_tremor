import { ArgTypes } from "@storybook/blocks"
import Navigation from "./navigation"

export default {
title : 'header/navigation',
component : Navigation,
argTypes : {
    between :{
        control : {type:'boolean'}
    },
    shadow : {
        control : {type : 'boolean'}
    }
}
}

export function Default (args) {
    return <Navigation {...args}></Navigation>
}

Default.storyName = 'Navigation'

Default.args = {
title : "MyApp",
between : true,
shadow : false
}