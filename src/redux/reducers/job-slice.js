import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    "id": 0,
    "assigned_by": {},
    "completed_by": {},
    "process": {
        "id": 1,
        "process_name": "",
        "process_alias_name": "",
        "price_per_image": "0.00",
        "master_folder_path": ""
    },
    "service_tag": {},
    "job_name": "",
    "order_type": 1,
    "media_input_count": 0,
    "media_output_count": 0,
    "description":'',
    "assigned_on": null,
    "job_status": 0,
    "is_parent": true,
    "job_json": null,
    "folder_path": null,
    "service_tag_id": 1,
    "user_id": 0,
    "assigned_to": []
}


const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        updateJob: (state, action) => ({ ...state, ...action.payload }),
        setJobName: (state, action) => {
            state.job_name = action.payload
        },
        setJobDescription: (state, action) => {
            state.description = action.payload
        },
        setJobOrderType: (state, action) => {
            state.order_type = action.payload
        },
        setServiceTag: (state, action) => {
            state.service_tag = action.payload
            state.service_tag_id = action.payload.id
        },
        setMediaOutputCount: (state, action) => {
            state.media_output_count = action.payload
        },
        setComments: (state, action) => {
            if (state.job_json && state.job_json.length > 0) {
                state.job_json[action.payload.index].comment = action.payload.comment
            }
        },
        setJobJson: (state, action) => {
            state.job_json = action.payload
        },
        resetJob: (state) => {
            return { ...initialState }
        }
    }
});

export const jobActions = jobSlice.actions;

export default jobSlice;