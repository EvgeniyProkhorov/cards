import React from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../../common/c7-SuperRange/SuperRange";

export const TestComponent = () => {
    return(
        <div>
            <SuperInputText value={'YO'}/>
            <SuperButton>Button</SuperButton>
            <SuperCheckbox>Checkbox</SuperCheckbox>
            <SuperEditableSpan/>
            <SuperSelect options={['yo', 'yo', 'yo']}/>
            <SuperRadio options={['yo', 'yo', 'yo']}/>
            <SuperRange value={100}/>
        </div>
    )
}