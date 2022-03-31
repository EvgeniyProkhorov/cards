import Slider from '@mui/material/Slider'
import React from 'react'
import Box from "@mui/material/Box";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setFirstValue: (num: number[]) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, setFirstValue
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // const [values, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        // setValue(newValue as number[]);
        setFirstValue(newValue as number[])
    };

    return (
        <>
            <Box sx={{width: 150}}>
                <Slider
                    getAriaLabel={() => 'Just range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
