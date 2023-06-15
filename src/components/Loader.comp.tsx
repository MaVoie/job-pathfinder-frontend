import React from 'react';
import { Box, LinearProgress } from '@mui/material';

interface Props {
    visible: boolean;
}

export const Loader: React.FC<Props> = (props) => {
    const {visible} = props;

    if (!visible) return null;

    return (
        <>
            <Box sx={{ width: '100%', my: 4 }}>
                <LinearProgress variant="indeterminate"/>
            </Box>
        </>
    );
};
