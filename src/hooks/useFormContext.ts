import React, { useEffect, useState } from "react";

export function useFormContext(getDict, depend) {
    const [state, setState] = useState(null)
    useEffect(() => {
        setState({ getDict, depend })
    }, [])
    useEffect(() => {
        if (state) console.log(state)
    }, [state])

}

/*
Formik
    Form
        Field {name: dir1, getDict: func(),}
        Field {name: dir2, getDict: func(), dependsOn: 1}
        Field {name: dir3, getDict: func(), dependsOn: 2}
        Field { name: title }
        Field {name: stories }
    Form
Formik
*/

/*
[getDict, emptyLabel] = props
use
Select
    input
    label > name || loadLabel

*/