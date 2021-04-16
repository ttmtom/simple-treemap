import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {jsonStringChecker} from '../util/stringInputChecker';
import {setGraphData} from '../redux/graphData/graphDataActions';

const InputView = () => {
    const [jsonFieldValue, setJsonFieldValue] = useState('');
    const [jsonFieldHelpText, setJsonFieldHelpText] = useState(' ');
    const [jsonInputObj, setJsonInputObj] = useState();
    const [isValidJson, setIsVaildJson] = useState(true);
    const [maxNumOfRow, setMaxOfRow] = useState(0);
    const [numOfRow, setNumOfRow] = useState(0);
    const [isValidRowNum, setIsValidRowNum] = useState(true);

    const dispatch = useDispatch();

    const handleJsonInput = useCallback((event) => {
        const string = event.target.value;
        if (string === '') {
            setIsVaildJson(true);
            setJsonFieldHelpText(' ');
            setJsonFieldValue(string);

            return;
        }
        const checkingResult = jsonStringChecker(string);
        if (checkingResult.valid) {
            setIsVaildJson(true);
            setJsonFieldHelpText(' ');
            setMaxOfRow(checkingResult.maxNumOfRow);
            setJsonInputObj(checkingResult.result);
        } else {
            setIsVaildJson(false);
            setJsonFieldHelpText(checkingResult.error);
        }
        setJsonFieldValue(string);
    }, [setJsonFieldValue, setIsVaildJson, setJsonFieldHelpText. setJsonInputObj]);

    const handleNumOfRowInput = useCallback((event) => {
        const input = event.target.value;
        setNumOfRow(event.target.value);
        if (input <= 0 || input > maxNumOfRow) {
            setIsValidRowNum(false);
        } else {
            setIsValidRowNum(true);
        }
    }, [setNumOfRow, setIsValidRowNum, maxNumOfRow]);

    const handleSubmitBtnOnClick = useCallback(() => {
        dispatch(setGraphData(jsonInputObj, parseInt(numOfRow, 10)));
    }, [dispatch, jsonInputObj, numOfRow]);

    return (
        <div>
            <div
                style={{
                    padding: '20px 0px 0px',
                }}
            >
                <TextField
                    label="JSON Data"
                    fullWidth
                    multiline
                    rows={20}
                    variant="outlined"
                    error={!isValidJson}
                    value={jsonFieldValue}
                    onChange={handleJsonInput}
                    helperText={jsonFieldHelpText}
                />
            </div>
            <div
                style={{
                    padding: '20px 0px',
                }}
            >
                <TextField
                    disabled={!isValidJson || jsonFieldValue === ''}
                    label="Number of Row"
                    variant="outlined"
                    type="number"
                    value={numOfRow}
                    error={!isValidRowNum}
                    onChange={handleNumOfRowInput}
                />
            </div>
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button
                    disabled={!isValidRowNum || !isValidJson || jsonFieldValue === '' || numOfRow === 0}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmitBtnOnClick}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default InputView;
