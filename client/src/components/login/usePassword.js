import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const usePassword = () => {
    const [ visible, setVisibility] = useState(false)
    const i = <FontAwesomeIcon icon={ visible ? faEyeSlash : faEye} className="eye-icn" onClick={() => setVisibility(visibility => !visibility)} />
    const InputType = visible ? "text" : "password";
    return [InputType, i];
}

export default usePassword