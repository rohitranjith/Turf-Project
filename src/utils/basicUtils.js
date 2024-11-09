import { toast } from 'react-toastify';

/**
 * Show messages to user in a snackbar. It is a wrapper function of Toastify. Check out Toastify for full documentation https://fkhadra.github.io/react-toastify/introduction
 * @param {string} message - Message to be displayed
 * @param {string} variant -  default | error | success | warning | info
 * @param {Object} options - Additional options to be added refer https://fkhadra.github.io/react-toastify/introduction
 */

export const alertMsg = (message, variant = 'default', options = {}) => {
    toast(message, {
        type: variant,
        position: "top-right",
        theme: "dark",
        delay: 200,
        ...options
    })
}

export const b64toBlob = (base64Image, name = "blob") => {
    // Split into two parts
    const parts = base64Image.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
        uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType, name: name });
}

export const urltoFile = (url, filename, mimeType) => {
    if (url.startsWith('data:')) {
        var arr = url.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        var file = new File([u8arr], filename, { type: mime || mimeType });
        return Promise.resolve(file);
    }
    return fetch(url)
        .then(res => res.arrayBuffer())
        .then(buf => new File([buf], filename, { type: mimeType }));
}

export const urlToBLOB = async (url) => {
    // console.log("🚀 ~ urlToBLOB ~ url:", url)
    const response = await fetch(url)
    // console.log("🚀 ~ urlToBLOB ~ response:", response)
    const blob = await response.blob()
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    // return reader.result
    // console.log(reader.result)
    return new Promise((res) => {
        reader.onloadend = () => {
            res(reader.result);
        }
    })
}

/**
 * Converts bytes into human readable string
 * @param {Number} size - Size in bytes
 * 
 */
export const humanFileSize = (size) => {
    let i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return ((size / Math.pow(1024, i)) * 1).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

export const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : (Math.sign(num) * Math.abs(num)).toFixed(2)
}
export const getRoleNameFromRoleId = (roleId) => {
    switch (roleId) {
        case 1:
            return 'Super Admin'
        case 2:
            return 'Admin'
        case 3:
            return 'HR'
        case 4:
            return 'QC'
        case 5:
            return 'Editor'
        case 6:
            return 'Client'
        case 7:
            return 'Vendor'
        default:
            return 'unknown'
    }
}

export const getAccountStatusFromId = (statusId) => {
    switch (statusId) {
        case 0:
            return 'Inactive'
        case 1:
            return 'Active'
        case 2:
            return 'Deactivated'
        case 3:
            return 'Deleted'
        default:
            return ''
    }
}

export const getAddressJSON = (place) => {
    let components = place.address_components;
    let str_num = "";
    let address = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        formatted_address: place.formatted_address
    };
    components.forEach(function (component, ckey) {
        component.types.forEach(function (type, tkey) {
            if (type === 'route' || type === 'neighborhood') {
                str_num = str_num + component.long_name;
                str_num += ", ";
                address.address_line_1 = str_num;
            }
            if (type === 'street_number') {
                address.street_number = component.long_name
            }
            if (type === 'street_number' || type === 'sublocality_level_1') {
                address.address_line_2 = component.long_name;
            }
            if (type === 'route' || type === 'sublocality_level_2') {
                address.street = component.long_name;
            }
            // if (type === 'neighborhood') {
            //     address.neighborhood = component.long_name
            // }
            if (type === 'administrative_area_level_2' || type === 'locality') {
                address.city = component.long_name;
            }
            if (type === 'administrative_area_level_1') {
                address.state = component.long_name;
            }
            if (type === 'country') {
                address.country = component.long_name;
            }
            if (type === 'postal_code') {
                address.zipcode = component.long_name;
            }
        });
    })
    return address;
}

export const generateRandId = (length, timestamp = false) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (timestamp) {
        length = length - 13 < 13 ? 13 : length - 13;
    }
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * (charactersLength)));
    }
    if (timestamp) {
        result += String(new Date().getTime());
    }
    return result;
}

