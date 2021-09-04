import { HeaderButton } from "react-navigation-header-buttons"
import {Ionicons} from '@expo/vector-icons';
import React from "react";

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton IconComponent={Ionicons} iconSize={23} {...props}/>
    )
}
export default CustomHeaderButton