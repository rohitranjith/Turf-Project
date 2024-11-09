import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locationStep: {
        square_feet: '',
        title: "",
        description: "",
        latitude: 0,
        longitude: 0,
        street_no: "",
        address_unit_no: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        neighborhood: "",
        place: {}
    },
    distace_list: {
        role: 1,
        distace_type: 1
    },
    current_step: 0,
    selected_categories: [],
    selected_category: null,
    selected_company: null,
    current_coords: {
        lat: 0,
        lng: 0,
        zoom_level: 15
    },
    selected_normal: [],
    selected_bundle: [],
    selected_addon: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateCurrentStep: (state, action) => {
            state.current_step = action.payload + state.current_step
        },
        updatePropertyFootage: (state, action) => {
            state.locationStep.square_feet = action.payload
        },
        updateTitle: (state, action) => {
            console.log(action.payload)
            state.locationStep.title = action.payload
        },
        updateDescription: (state, action) => {
            state.locationStep.description = action.payload
        },
        updateLatLng: (state, action) => {
            state.locationStep.latitude = action.payload.latitude
            state.locationStep.longitude = action.payload.longitude
            state.current_coords.lat = action.payload.latitude
            state.current_coords.lng = action.payload.longitude
        },
        updateAddress: (state, action) => {
            state.locationStep.street_no = action.payload.street_no || ''
            state.locationStep.address_unit_no = action.payload.address_unit_no || ''
            state.locationStep.street = action.payload.street
            state.locationStep.city = action.payload.city
            state.locationStep.state = action.payload.state
            state.locationStep.country = action.payload.country
            state.locationStep.zipcode = action.payload.zipcode
            state.locationStep.neighborhood = action.payload.neighborhood || ''
            state.locationStep.place = action.payload.place
        },
        updateDefaultCategories: (state, action) => {
            if (state.selected_categories.length > 0) return
            state.selected_categories.push(action.payload)
        },
        updateSelectedCategories: (state, action) => {
            const isAvailable = state.selected_categories.findIndex(cat => cat.id === action.payload.id)
            isAvailable !== -1 ? state.selected_categories.splice(isAvailable, 1) : state.selected_categories.push(action.payload)
            state.selected_category = state.selected_categories.length > 0 ? state.selected_categories[0].id : null
            state.selected_company = null
            state.selected_normal = []
            state.selected_addon = []
            state.selected_bundle = []
        },
        updateSelectedCategory: (state, action) => {
            state.selected_category = action.payload
        },
        updateCurrentLatlng: (state, action) => {
            state.current_coords = action.payload
        },
        updateDistanceType: (state, action) => {
            state.distace_list = action.payload
        },
        updateSelectedCompany: (state, action) => {
            state.selected_company = action.payload
        },
        updatePackageSelection: (state, action) => {
            const serive_type = action.payload.service_type
            const isServiceExist = state[serive_type].findIndex(service => service.service_id === action.payload.service_id)
            if (isServiceExist !== -1) {
                if (state[serive_type][isServiceExist].variant_id === action.payload.variant_id) {
                    state[serive_type].splice(isServiceExist, 1)
                } else {
                    state[serive_type][isServiceExist].variant_id = action.payload.variant_id
                }
            } else {
                state[serive_type].push({ service_id: action.payload.service_id, variant_id: action.payload.variant_id })
            }
            if (serive_type === "selected_normal") {
                state.selected_bundle = []
            }
        },
        updateBundlePackageSelection: (state, action) => {
            if (state.selected_bundle[0] === action.payload[0]) {
                state.selected_bundle = []
            } else {
                state.selected_bundle = action.payload
            }
            state.selected_normal = []
        },
        clearUpdatedPkgs: (state, action) => {
            state.selected_normal = []
            state.selected_addon = []
            state.selected_bundle = []
        },
        resetOrder: (state) => {
            return { ...initialState }
        }
    }
});

export const orderActions = orderSlice.actions;

export default orderSlice;