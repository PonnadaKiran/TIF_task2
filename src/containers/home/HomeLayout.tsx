import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionDetailsForm from "./RequisitionDetailsForm"; // Updated component name
import PreviewCard from "./PreviewCard"; // Updated component name
import { useContext } from 'react';
import { MyContext } from "@src/pages/_app"; // Updated import name

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const { pageState } = useContext(MyContext); // Updated variable name

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs isLazy index={pageState}> {/* Updated state variable name */
          }
          <TabList>
            <CustomTab>Requisition Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionDetailsForm /> {/* Updated component name */
                }
              </TabPanel>
              <TabPanel>
                <JobDetailsForm /> {/* Updated component name */
                }
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm /> {/* Updated component name */
                }
              </TabPanel>
            </TabPanels>
            <PreviewCard /> {/* Updated component name */
            }
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
