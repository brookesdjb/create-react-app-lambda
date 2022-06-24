import * as React from 'react';

import Button from '@mui/material/Button';
import { TextField, Stack, FormGroup } from '@mui/material';

export default function Support() {
    return (<div>
        <Stack spacing={2}>
            <h2>Support</h2>

            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />

                <FormGroup>
                    <Stack spacing={2}>

                        <TextField id="outlined-basic" name="name" label="Your Name" variant="outlined" />
                        <TextField id="outlined-basic" type="email" name="email" label="Your Email" variant="outlined" />
                        <TextField id="outlined-basic" name="message" label="Message" variant="outlined" />

                        <Button variant="contained" type="submit">Submit</Button>
                    </Stack>
                </FormGroup>

            </form>

        </Stack>
    </div>)
}