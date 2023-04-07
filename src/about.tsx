import Layout from './layout';
import { Container, Grid, Text } from '@mantine/core';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <Container>
        <Grid justify="center">
          <Grid.Col span={4}>
            <Text size="md"> Nothing yet! </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
