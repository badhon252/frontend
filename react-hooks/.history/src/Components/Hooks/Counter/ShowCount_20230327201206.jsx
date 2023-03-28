import React from 'react'

function ShowCount({title, count}) {
    console.log(`rendering ${title}....`);

    return (
        <p>
            {title} is : {count}
        </p>
  )
}


export default React.memo(ShowCount);