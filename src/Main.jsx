import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputView from './components/InputView';
import GraphView from './components/GraphView';


const useStyles = makeStyles({
    paperRoot: {
        margin: 10,
        padding: 10,
        background: '#FFFFE8',
    },
});
const Main = () => {
    const classes = useStyles();

    return (
        <div>
           <Grid
                container
                space={3}
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={12} sm={4} >
                    <Paper
                        elevation={0}
                        classes={{root: classes.paperRoot}}
                    >
                        <InputView />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Paper
                        elevation={0}
                        classes={{root: classes.paperRoot}}
                    >
                        <GraphView />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Main;
