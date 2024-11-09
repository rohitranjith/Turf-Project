import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack, styled, useTheme } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const PasswordStrength = ({ password, style, sx }) => {
    const [strength, setStrength] = useState(0)
    const [passwordProgressColor, setPasswordProgressColor] = useState("#d3d3d3")
    const [strengthText, setStrengthText] = useState('')
    const theme = useTheme()
    const checkStrength = (password) => {
        let strength = 0;
        let passCount = 0
        if (!password) {
            setStrengthText("")
            return 0
        }
        const num = /\d/.test(password)
        const specialChars = /[_!@#$&*]/.test(password)
        const upperCase = /[A-Z]/.test(password)
        const lowerCase = /[a-z]/.test(password)

        if (num) {
            passCount++
        }
        if (specialChars) {
            passCount++
        }
        if (upperCase) {
            passCount++
        }
        if (lowerCase) {
            passCount++
        }

        if (password.length > 12 && passCount >= 4) {
            strength = 5
            setPasswordProgressColor('green')
            setStrengthText('Very Strong')
        }
        else if (password.length > 8 && passCount >= 4) {
            strength = 4
            setPasswordProgressColor("#14eb6e")
            setStrengthText('Strong')
        }
        else if ((password.length >= 8 && passCount >= 3)) {
            strength = 3
            setPasswordProgressColor("#4285f4")
            setStrengthText('Good')
        }
        else if ((password.length >= 8 && passCount >= 2)) {
            strength = 2
            setPasswordProgressColor('orange')
            setStrengthText('Medium')
        }
        else if (password.length >= 8) {
            strength = 1
            setPasswordProgressColor("#ff3e00")
            setStrengthText('Weak')
        }
        else {
            strength = 1
            setPasswordProgressColor("#ff3e00")
            setStrengthText('Weak')
            console.log("🚀  file: PasswordStrength.js:46  checkStrength ~ strengthStatus:", strength)
        }
        // console.log("🚀  file: SignUp.js:147  format ~ strengthStatus:", strengthStatus && strengthStatus == 1 ? "weak" : strengthStatus == 2 ? "medium" : strengthStatus == 3 ? "good" : strengthStatus == 4 ? "strong" : strengthStatus == 5 ? "very strong" : null)
        return strength
    }

    useEffect(() => {
        setStrength(checkStrength(password))
    }, [password])
    
    return (
        <Box sx={{ textAlign: "end" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: .5, justifyContent: "end", right: 2, ...sx }} style={style}>
                {[1, 2, 3, 4, 5].map(num => {
                    return (
                        <Box key={num} sx={{ height: 3, borderRadius: 10, width: 20, backgroundColor: strength >= num ? passwordProgressColor : "#d3d3d3" }} />
                    )
                })}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "end", mt: .4 }}>
                <Typography sx={{ fontSize: 10, color: passwordProgressColor, textTransform: "uppercase", fontWeight: 600 }}>{strengthText}</Typography>
            </Box>
        </Box>
    )
}

export default PasswordStrength

PasswordStrength.defaultProps = {
    style: {},
    sx: {}
}
