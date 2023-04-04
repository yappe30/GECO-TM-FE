import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
     <Card sx={{ padding: '10px', boxShadow: '0px 0px 10px 5px rgb(31, 31, 34)' }}>
    <div>
   
        <h4>FREQUENTLY ASK QUESTION</h4>
        <br />
        <br />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is timesheet management?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          data table which an employer can use to track the time a particular employee has 
          worked during a certain period. Businesses use timesheets to record time spent 
          on tasks, projects, or clients. There are different methods that have been used 
          to record timesheets, such as paper, spreadsheet software, and online time-tracking 
          software. Paper-based timesheets have now given way to the digital formats.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How to Approve or Reject Timesheet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to Timesheet page and you will see a table. Find the data that you want to approve or reject then click option, then select one in the options and click then submit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What the purpose of timesheet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The purpose of timesheet is to monitoring individual time in every project that the employee have and also to reject or approve employee timesheet if there are some any issues.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Why is a timesheet importan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Timesheets are important for several reasons. They help employers to accurately calculate employee pay and ensure compliance with labor laws. They also provide a record of work done, which can be used for billing clients or analyzing productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What the purpose of timesheet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The purpose of timesheet is to monitoring individual time in every project that the employee have and also to reject or approve employee timesheet if there are some any issues.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>What are some common methods for tracking time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are several methods for tracking time, including manual entry on paper or in a spreadsheet, using specialized software or apps, or clocking in and out using a time clock or biometric scanner.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Card>
    </>
  );
};

export default Faq;