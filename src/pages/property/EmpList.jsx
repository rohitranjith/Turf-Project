import { Box, Tabs, Tab, } from '@mui/material'
import { useState } from 'react'
import TabPanel from '../../components/TabPanel';
import JobList from './JobList';

const EmpList = () => {
    const [empTab, setEmpTab] = useState(0);
    const handleUsersTab = (event, newValue) => {
        setEmpTab(newValue);
    };
    return (
        <Box>
            <Box>
                <Box sx={{ borderBottom: 0, '& .MuiTabs-scroller button:not(.Mui-selected)': { backgroundColor: 'background.light' }, '& .MuiTabs-scroller button': { minWidth: 70, minHeight: 34, fontSize: 13 } }}>
                    <Tabs
                        value={empTab}
                        onChange={handleUsersTab}
                        variant="scrollable"
                        scrollButtons="auto">
                        <Tab label={"Photo Editing"} />
                        <Tab label={"Video Editing"} />
                        <Tab label={"Staging"} />
                        <Tab label={"2D & 3D"} />
                        <Tab label={"QC"} />
                    </Tabs>
                </Box>
                <Box sx={{ mt: .5 }}>
                    <TabPanel value={empTab} index={0}>
                        <JobList />
                    </TabPanel>
                    <TabPanel value={empTab} index={1}>
                        <JobList />
                    </TabPanel>
                    <TabPanel value={empTab} index={2}>
                        <JobList />
                    </TabPanel>
                    <TabPanel value={empTab} index={3}>
                        <JobList />
                    </TabPanel>
                    <TabPanel value={empTab} index={4}>
                        <JobList />
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    )
}

export default EmpList