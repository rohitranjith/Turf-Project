import { handleBreakpoints } from '@mui/system';

export const themeConfiguration = (currentTheme) => {
    return {
        unstable_sxConfig: {
            fs: { style: (props) => handleBreakpoints(props, props.fs, (size) => ({ fontSize: props.theme.typography.pxToRem(size) })) },
            fw: { style: (props) => handleBreakpoints(props, props.fw, (weight) => ({ fontWeight: weight })) },
            items: { style: (props) => handleBreakpoints(props, props.items, (items) => ({ alignItems: items })) },
            justify: { style: (props) => handleBreakpoints(props, props.justify, (justify) => ({ justifyContent: justify })) },
            rounded: { style: (props) => handleBreakpoints(props, props.rounded, (rounded) => ({ borderRadius: rounded })) },
            direction: { style: (props) => handleBreakpoints(props, props.direction, (direction) => ({ flexDirection: direction })) },
            alignBoth: { style: (props) => handleBreakpoints(props, props.alignBoth, (alignBoth) => ({ display: "flex", justifyContent: alignBoth, alignItems: alignBoth })) },
            wrap: { style: (props) => handleBreakpoints(props, props.wrap, (wrap) => ({ flexWrap: wrap })) },
            shadow: { style: (props) => handleBreakpoints(props, props.shadow, (shadow) => ({ boxShadow: shadow })) },
            maxLines: {
                style: (props) => handleBreakpoints(props, props.maxLines, (maxLines) => ({
                    display: '-webkit-box',
                    WebkitLineClamp: maxLines,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitBoxOrient: 'vertical'
                }))
            },
        },
        palette: {
            mode: currentTheme ? 'dark' : 'light',
            ...(
                currentTheme ?
                    {
                        // Dark theme color	
                        primary: {
                            light: "#fff",
                            main: "#fff",
                            dark: "#fff",
                            contrastText: "#fff"
                        },
                        background: {
                            card: "#097E52",
                            primary: "#097E52",
                            sidebar: "#097E52",
                            stripped: "#f5f1ff",
                        },
                        text: {
                            title: "#3f51b5",
                            primary: '#f2fcff',
                            secondarydefault: '#00000099'
                        },
                    } :
                    {
                        // Light theme color
                        primary: {
                            light: "#ecf7ff",
                            main: "#097E52",
                            dark: "#192335",
                            contrastText: "#fff"
                        },
                        secondary: {
                            main: "#192335",
                            dark: "#097E52",
                        },
                        background: {
                            card: "#fff",
                            primary: "#097E52",
                            sidebar: "#007f5f",
                            footer: "#0A1A38",
                            light: "#F9F9F6",
                        },
                        text: {
                            title: "#192335",
                            primary: '#6B7385',
                            secondary: '#177c82',
                            secondarydefault: '#6B7385',
                            default: '#fff',
                            custom: '#000'
                        },
                        custom: {
                            border: "#8a9cff",
                        }
                    }
            )

        },
        typography: {
            fontFamily: [
                '"Mulish", sans-serif',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeightRegular: 500,
            body1: {
                fontSize: 14,
            },
            body2: {
                fontSize: 12,
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                    variant: "contained",
                    size: 'small'
                },
                styleOverrides: {
                    root: {
                        textTransform: 'capitalize',
                        borderRadius: '4px',
                        position: "relative",
                        "&.MuiButton-contained:after": {
                            content: "''",
                            position: "absolute",
                            inset: -2,
                            backgroundColor: "transparent",
                            boxShadow: "0 0 0 0px transparent",
                            borderRadius: "5px",
                            transition: ".3s all linear"
                        },

                        '@media(max-width :900px)': {
                            padding: "5px 10px",
                            minHeight: 0,
                            fontSize: 13
                        }
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    size: "small",
                    variant: 'outlined'
                },
                styleOverrides: {
                    root: {
                        ".MuiInputBase-root fieldset": { borderWidth: '1px !important', borderColor: '#dfdfdf' },

                    },
                },
            },
            MuiFormControl: {
                defaultProps: {
                    size: "small"
                },
                styleOverrides: {
                    root: {
                        "label": { fontSize: "14px", fontWeight: 500, color: '#818181' },
                        "option": { fontSize: "14px", fontWeight: 500 },
                        "label[data-shrink='false']": { transform: 'translate(14px, 9px) scale(1) !important', },
                        ".MuiInputBase-root": { fontSize: "14px !important", borderRadius: '5px', padding: 0, fontWeight: 500, },
                        ".MuiInputBase-root textarea": { borderRadius: '5px', padding: '8.5px 14px' },
                        ".MuiInputBase-root fieldset": { borderWidth: '1px !important', },
                        ".MuiInputBase-root input": { fontWeight: '500 !important', color: '#000' },
                        ".MuiFormHelperText-root": { fontWeight: 500 },
                        "&.MuiFormControl-root:hover .MuiInputBase-root fieldset": { borderColor: '#dfdfdf !important' },
                        '@media (max-width: 375px)': {
                            "label[data-shrink='false']": { transform: 'translate(12px, 10px) scale(1) !important' },
                            "label": { fontSize: "12px" },
                        },
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        borderRadius: 5,
                        "label": { fontSize: "14px" },
                        "&:has([data-shrink='true'])": { backgroundColor: 'transparent !important' },
                        ".MuiAutocomplete-popper": { fontSize: 14 },
                    },
                    popper: {
                        "& *": { fontSize: 14 },
                    },
                    listbox: {
                        maxHeight: '300px',
                        border: '1px solid #f3f3f3'
                    }
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        padding: 0,
                        fontSize: 14,
                        fontWeight: 500
                    },
                }
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        fontSize: 14,
                        padding: '6px 10px',
                        borderRadius: '5px',
                        minHeight: 30,
                        '@media(max-width : 600px)': {
                            minHeight: 35
                        }
                    },

                }
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 0
                },
                styleOverrides: {
                    root: {
                        boxSizing: 'border-box',
                        borderRadius: 3,
                        boxShadow: "2px 2px 5px 0px #0000000a"
                    }
                }
            },
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        borderRadius: '10px',
                        padding: 8,
                        boxShadow: 'none',
                        maxWidth: 'calc(100% - 45px)',
                        border: '1px solid #ededed',
                    },
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        '& .MuiTabs-indicator': { zIndex: '-1', height: '100%', borderRadius: '5px' },
                        '& button.Mui-selected': { color: '#fff' },
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: 'capitalize',
                    }
                }
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    root: {
                        '& .MuiTypography-root': {
                            fontSize: '13px',
                        }
                    },
                },

            },
            MuiRadio: {
                styleOverrides: {
                    root: {
                        padding: '5px'
                    }
                }
            },
            MuiTooltip: {
                // defaultProps: {
                //     arrow: true,
                // },
                styleOverrides: {
                    tooltip: {
                        backgroundColor: "#000000cb",
                        maxWidth: 200,
                        padding: '8px',
                    },
                    arrow: {
                        color: "#000000cb",
                    },
                },
            },
        }
    }
}