import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const usePassword = () => {
    const [ visible, setVisibility] = useState(false)
    const i2 = <FontAwesomeIcon icon={ visible ? faEyeSlash : faEye} className="eye-icn" onClick={() => setVisibility(visibility => !visibility)} />
    const InputType2 = visible ? "text" : "password";
    return [InputType2, i2];
}

export default usePassword