import React from 'react'

interface FormElementInputTextProps {
    atts: {
        noFE?: number | { val: number }
        type: {
            autoFocus?: boolean
            disabled?: boolean
            height?: number
            list?: string
            max?: number
            maxLength?: number
            min?: number
            multiple?: boolean
            pattern?: string
            placeholder?: string
            readOnly?: boolean
            required?: boolean
            size?: number
            step?: number | string
            type: string
            value?: string | number
            width?: number,
            autoComplete?: string

        },
        id?: string
        _class?: string
    }
}

const ELEMENTS = (props: FormElementInputTextProps) => <div> {generateElement(props)} </div>

function generateElement(props: FormElementInputTextProps) {
    const {
        type: {
            autoFocus,
            disabled,
            height,
            list,
            max,
            maxLength,
            min,
            multiple,
            pattern,
            placeholder,
            readOnly,
            required,
            size,
            step,
            type,
            value,
            width,
            autoComplete
        },
        id,
        _class: className /* make the _class available as className */
    } = props.atts

    switch (props.atts.type.type) {

        case "text": return <input
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            height={height}
            id={id}
            list={list}
            max={max}
            maxLength={maxLength}
            min={min}
            multiple={multiple}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            size={size}
            step={step}
            type={type}
            value={value}
            width={width}
            autoComplete={autoComplete}
        />
    }
}



export default ELEMENTS