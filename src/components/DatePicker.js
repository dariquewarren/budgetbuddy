import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const initialState = {
    date: undefined,
};
const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        id="datePicker-17"
        label="DatePicker Label"
        placeholder="Select date"
        variant="double"
        value={state.date}
        onChange={date => setState({ date })}
    />
</div>