import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = (props) => {

    const Tamplate = <div
        style={{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Righteous',
            ...props.add
        }}
    > {props.children}</div>
    if (props.link) {
        return (
            <Link to={props.linkto}>
                {Tamplate}
            </Link>
        )
    }
    else {
        return Tamplate
    }

}

export const validate =(element) => {
    let error = [true,''];

    if(element.validation.required)
    {
        const valid = element.value.trim() !=='';
        const message = `${!valid ? 'this field is required':''}`
        error = !valid ? [valid,message]:error

    }
    return error
      
}



