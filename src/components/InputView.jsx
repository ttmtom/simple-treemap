import React, {useCallback, useState} from 'react';
import TextField from '@material-ui/core/TextField';

const InputView = () => {
    const [jsonFieldValue, setJsonFieldValue] = useState('');
    const [jsonFieldError, setJsonFieldError] = useState(false);

    const handleChange = useCallback((event) => {
        setJsonFieldValue(event.target.value);
    }, [setJsonFieldValue]);

    return (
        <div>
            <TextField
                id="outlined-multiline-static"
                label="JSON Data"
                multiline
                rows={20}
                defaultValue="Default Value"
                variant="outlined"
            />
        </div>
    );
};

export default InputView;
