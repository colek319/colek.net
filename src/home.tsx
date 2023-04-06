import { Container, Grid, Text } from '@mantine/core';
import React from 'react';
import Layout from './layout';
import { UserInfoIcons } from './coleInfo';
import meIcon from './koester.cole.jpg';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Grid justify="center">
          <Grid.Col span={4}>
            <UserInfoIcons
              avatar={meIcon}
              name="Cole Koester"
              title="Software Engineer"
              phone="(443) 736-6751"
              email="me@colek.net"
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <Text size="md">
              Hello, I&apos;m Cole Koester. I am a software engineer with a
              passion for building cool things with cool people.
            </Text>
            <br />
            <Text size="md">
              Currently, I work for Lyft on the Application Runtime, Networking
              team. My daily responsibilities include maintaining our in-house
              networking control plane. I also develop internal tools to
              alleviate toil related to networking configurations.
            </Text>
            <br />
            <Text size="md">
              Some of my recent work includes: rewriting our load balancing
              policy to more efficiently distribute traffic, migrating
              networking configuration data out of static files and into more
              dynamic datastores, writing endpoints and UI around the
              aforementioned networking config data, and, generally, improving
              reliability and availability of networking data.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
