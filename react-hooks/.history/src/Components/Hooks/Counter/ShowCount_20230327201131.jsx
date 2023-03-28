import React from 'react'

export default function ShowCount({title, count}) {
    console.log(`rendering ${title}....`);

    return (
        <p>
            {title} is :{count}
        </p>
  )
}
