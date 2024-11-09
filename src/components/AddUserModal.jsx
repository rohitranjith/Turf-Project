import { useEffect, useState } from 'react'
import { Box, Button, ListSubheader, MenuItem, InputAdornment, Grid, CircularProgress, Chip, Typography, TextField as MuiTextField, debounce } from '@mui/material'
import ModalBox from '../components/ModalBox'
import { alertMsg } from '../utils/basicUtils';
import { Formik, Form, Field } from "formik";
import { TextField, Select, CheckboxWithLabel, Autocomplete } from 'formik-mui'
import * as Yup from 'yup';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import useAxiosPrivate from '../hooks/use-axios-private';
import useAuth from '../hooks/use-auth';
import { CheckCircle } from '@mui/icons-material';
import useMemberCompanies from '../hooks/use-member-companies';
import { EXTERNAL_ROLES } from '../constants';

const AddUserModal = ({ open, onClose, defaultRole = "", roleList, title, filters = [] }) => {
    const { user } = useAuth()
    const axios = useAxiosPrivate()
    const getInternalusers = useMemberCompanies()
    const [reportingOfficers, setReportingOfficers] = useState([])
    const [roles, setRoles] = useState({ external: [], internal: [] })
    const [searching, setSearching] = useState(false)
    const [emailResponse, setEmailResponse] = useState({})

    const splitRoles = (rolesLst) => {
        const external = [], internal = []

        rolesLst.forEach(role => {
            if (filters.length > 0) {
                role.is_external_user ? filters.includes(role.role_tag) && external.push(role) : filters.includes(role.role_tag) && internal.push(role)
            } else {
                role.is_external_user ? external.push(role) : internal.push(role)
            }
        })
        setRoles({ external: external, internal: internal })
    }

    const getRoles = async () => {
        try {
            if (roleList) {
                splitRoles(roleList)
                return
            }
            const response = await axios.get(`v2/accounts/roles/`)
            splitRoles(response.data.data.role_list)
        } catch (error) {
            console.error(error)
        }
    }

    const getReportingOfficers = debounce(async () => {
        try {
            if (Object.values(EXTERNAL_ROLES).includes(defaultRole)) {
                return
            }
            if (user.current_company) {
                const { result } = await getInternalusers("", 1, 1)
                setReportingOfficers(result)
            }
        } catch (err) {
            console.error(err)
        }
    }, 300)

    const checkUserAlreadyExist = async (search = "", getusername) => {
        try {
            search !== "" && setSearching("email")
            if (user.current_company) {
                const response = await axios.get('v2/users/members/check_email/', {
                    params: { email: search }
                })
                const { data, message } = response.data

                setEmailResponse({ ...data, message: message })
                getusername(data.code !== "NEW_USER" ? `${data.first_name}${data.last_name ? ` ${data.last_name}` : ""}` : "")
            }
            setSearching(false)
        } catch (err) {
            setSearching(false)
            console.error(err)
        }
    }

    useEffect(() => {
        if(open){
            getRoles()
            getReportingOfficers()
        }
    }, [open])

    return (
        <Box>
            <ModalBox
                open={open}
                bottomSheet
                onClose={(e, reason) => {
                    if (reason) return
                    onClose(false)
                    setEmailResponse({})
                }}
                closeBtn={false}
                sx={{ width: { sm: "80% !important", md: "50% !important", lg: "40% !important", xl: "35% !important" }, borderRadius: 3 }}
                title={`Create / Add user${title ? " (" + title + ")" : ""}`}
            >
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        reporting_officer_id: null,
                        role: defaultRole,
                        login_required: false,
                    }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                                .required('Name is required.'),
                            email: Yup.string()
                                .email('Invalid email address.')
                                .required('Email is required.'),
                            role: Yup.string()
                                .required('Role is required.'),
                        })
                    }
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const response = await axios.post('v2/users/members/create/', {
                                email: values.email,
                                first_name: values.name,
                                last_name: "",
                                role: values.role,
                                login_required: Number(values.login_required),
                                reporting_officer_id: values.reporting_officer_id?.id || 0
                            })
                            setSubmitting(false);
                            alertMsg(response.data.message, 'success')
                            onClose(true);
                        } catch (err) {
                            console.error(err)
                        }
                    }}
                    enableReinitialize={true}
                >
                    {({ values, isSubmitting, resetForm, setFieldTouched, handleChange, touched, errors, setFieldValue }) => (
                        <Form style={{ width: '100%', position: "relative" }}>
                            <Box sx={{ px: { xs: 1.5, sm: 2, md: 3 }, py: { xs: 1, sm: 1.5, md: 3 }, maxHeight: "50vh", overflowY: "auto", overflowX: "hidden" }} className="scroll-bar">
                                <Grid container spacing={{ xs: 2, md: 3 }}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            name="email"
                                            label="Enter Email *"
                                            fullWidth
                                            onBlur={async (e) => {
                                                if (e.target.value.length === 0) {
                                                    setFieldValue("name", "")
                                                    setFieldTouched("name", false)
                                                    setEmailResponse({})
                                                    return
                                                }
                                                await checkUserAlreadyExist(e.target.value, (username) => {
                                                    setFieldValue("name", username)
                                                    setFieldTouched("name", false)
                                                    if (username) {
                                                        setFieldValue("role", "")
                                                        setFieldTouched("role", false)
                                                    }
                                                })
                                            }}
                                            size="small"
                                            InputProps={{
                                                style: { backgroundColor: '#fff' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            searching === "email" ? <CircularProgress sx={{ color: "grey", mr: 1.5 }} size={20} /> :
                                                                <EmailOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                        }
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {(emailResponse?.code === "EXISTING_SYSTEM_MEMBER" || emailResponse?.code === "EXISTING_COMPANY_MEMBER") &&
                                            <Box sx={{ display: "flex", items: "center", gap: .5, mt: .5 }}>
                                                <CheckCircle sx={{ fontSize: 14, color: "success.main" }} />
                                                <Typography sx={{ fs: 12, color: "success.main" }}>{emailResponse?.message}</Typography>
                                            </Box>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={TextField}
                                            name="name"
                                            disabled={Boolean(emailResponse?.first_name)}
                                            label="Enter Name *"
                                            fullWidth
                                            size="small"
                                            InputProps={{
                                                style: { backgroundColor: '#fff' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <AccountCircleOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    {
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                component={TextField}
                                                name="role"
                                                label="Select Role *"
                                                fullWidth
                                                select
                                                size="small"
                                            >
                                                {roles?.internal.length > 0 && <ListSubheader>Internal Users</ListSubheader>}
                                                {roles?.internal.map(role => (<MenuItem disabled={emailResponse?.roles?.some(ele => ele.role_tag == role.role_tag)} key={role.id} value={role.role_tag}>{role.name}</MenuItem>))}
                                                {roles?.external.length > 0 && <ListSubheader>External Users</ListSubheader>}
                                                {roles?.external.map(role => (<MenuItem disabled={emailResponse?.roles?.some(ele => ele.role_tag == role.role_tag)} key={role.id} value={role.role_tag}>{role.name}</MenuItem>))}
                                            </Field>
                                        </Grid>
                                    }
                                    {
                                        roles?.internal.some(ele => ele.role_tag === values.role)
                                        &&
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name="reporting_officer_id"
                                                component={Autocomplete}
                                                onInput={(e, value) => {
                                                    getReportingOfficers(e.target.value)
                                                }}
                                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                                options={reportingOfficers ? reportingOfficers : []}
                                                getOptionLabel={officer => `${officer.first_name}${officer.last_name ? ` ${officer.last_name}` : ""}`}
                                                fullWidth
                                                loading={searching === "report"}
                                                renderInput={(params) => (
                                                    <MuiTextField
                                                        {...params}
                                                        name="reporting_officer_id"
                                                        label="Select Reporting Officer"
                                                        variant="outlined"
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            endAdornment: (
                                                                <>
                                                                    {searching === "report" ? <CircularProgress sx={{ color: "grey" }} size={20} /> : null}
                                                                    {params.InputProps.endAdornment}
                                                                </>
                                                            ),
                                                        }}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                    }
                                    {
                                        emailResponse?.roles && emailResponse?.roles.length > 0 &&
                                        <Grid item xs={12}>
                                            <Box sx={{ display: "flex", items: "center", gap: 1 }}>
                                                <Typography variant="body1" color="initial">Current Roles : </Typography>
                                                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", "& span": { fw: 500, fs: 12, py: .4, px: 1.2 } }}>
                                                    {emailResponse?.roles.map(role => <Chip label={role.name} key={role.id} size="small" color="primary" />)}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    }
                                </Grid>
                            </Box>
                            <Box sx={{ p: { xs: 1, sm: 1.5 }, bgcolor: '#f8f9fb', display: "flex", items: "center", justifyContent: "space-between", gap: 2, borderTop: 1, borderColor: "divider" }}>
                                <Box>
                                    {emailResponse?.code !== "EXISTING_COMPANY_MEMBER" && <Field
                                        component={CheckboxWithLabel}
                                        type="checkbox"
                                        name="login_required"
                                        Label={{ label: 'Login Required' }}
                                    />}
                                </Box>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Button aria-modal variant="text" size="small" color="primary" onClick={() => { resetForm(); onClose(false); setEmailResponse({}) }}>Cancel</Button>
                                    <Button aria-modal color="primary" size="small" type="submit" disabled={isSubmitting} startIcon={isSubmitting && <CircularProgress size="18px" sx={{ color: "text.secondary" }} />}>Add User</Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </ModalBox>
        </Box >
    )
}

export default AddUserModal
