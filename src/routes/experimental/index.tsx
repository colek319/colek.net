// This file is for using react-notion-x over the simpler notion renderer I am using. However, I am
// running into tons of issues with dependencies using node modules.

import { Container } from '@mantine/core';
import React, { useEffect } from 'react';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

const NotionApiToken = import.meta.env.VITE_NOTION_API_TOKEN;
const NotionReverseProxyBaseUrl = import.meta.env
  .VITE_NOTION_REVERSE_PROXY_BASE_URL;

const notion = new NotionAPI({
  authToken: NotionApiToken,
  apiBaseUrl: NotionReverseProxyBaseUrl,
});

const About = () => {
  const [recordMap, setRecordMap] = React.useState<ExtendedRecordMap>(
    {} as ExtendedRecordMap
  );

  useEffect(() => {
    console.log(NotionReverseProxyBaseUrl);
    const pageId = '0705e695cc594e0282c2c95474140f57';
    notion
      .getPage(pageId)
      .then(recordMap => setRecordMap(recordMap))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </Container>
  );
};

export default About;
